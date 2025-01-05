import { IBlog, ITags, IConvertBuilder, IMetadataCreator, IConverter } from "./Interfaces";

export class BlogFactory {
  static blogs: IBlog[] = [];

  static listBlogs = (): IBlog[] => {
    return BlogFactory.blogs;
  }
}

export class Tags implements ITags {
  blogs: IBlog[];

  constructor(blogs: IBlog[]) {
    this.blogs = blogs
  }

  list(): string[] {    
    let tags: string[] = []
    
    this.blogs.forEach(blog => {
      if (typeof blog.tags === "string") {
        tags = tags.concat(blog.tags.split(","))
      }      
    })

    return [...new Set(tags)]
  }
}

export class BlogDirector {
  builder: IConvertBuilder

  constructor(builder: IConvertBuilder) {
    this.builder = builder;
  }

  getMetadata(): IBlog {
    return this.builder.createMetadata()
  }

  getHTMLContent(): string {
    return this.builder.convert()
  }
}

export class ConvertBuilder implements IConvertBuilder {  
  mdCreator: IMetadataCreator
  converter: IConverter

  constructor(content: string) {    
    let metadataText = "";
    let body = "";

    const contentSplit = content.split("---")    
    if (contentSplit.length === 3) {      
      metadataText = contentSplit[1]
      body = contentSplit[2]

      this.mdCreator = new MetadataCreator(metadataText)
      this.converter = new Converter(body)
      return;
    }

    body = `Invalid Content: Missing at least one of following contents<br>
    1. Metadata<br>
    2. Body`
    this.mdCreator = new MetadataCreator(metadataText)
    this.converter = new Converter(body)
  }

  createMetadata(): IBlog {
    return this.mdCreator.createMetadata()
  }

  convert(): string {
    const contentSplit = this.converter.content.split("\n\n");    

    const converted = contentSplit.map((block) => {
      let convertedBlock = block

      // heading
      if (convertedBlock.includes("#")) {
        convertedBlock = this.converter.convertHeading(convertedBlock)
      }

      // list
      if (convertedBlock.includes("- ")) {
        convertedBlock = this.converter.convertList(convertedBlock)
      }

      // quote
      if (convertedBlock.includes("> ")) {
        convertedBlock = this.converter.convertQuote(convertedBlock)
      }

      // code
      if (convertedBlock.includes("```")) {
        convertedBlock = this.converter.convertCode(convertedBlock)
      }

      return convertedBlock
    })    

    return converted.join("\n\n")
  }
}

export class MetadataCreator implements IMetadataCreator {
  content: string

  constructor(content: string) {
    this.content = content
  }

  createMetadata(): IBlog {
    let metadataSplit = this.content.split("\n")
    const blogMetadata: IBlog = {
      title: "",
      summary: "",
      filename: "",
      datetime: "",
      tags: ""
    }
    
    for (const data of metadataSplit) {      
      const keyValue = data.split(": ")
      const value = keyValue[1]
      const key = keyValue[0].toLowerCase()
      
      if (
        key === "title" || 
        key === "summary" || 
        key === "filename" || 
        key === "datetime" ||
        key === "tags"
      ) {
        blogMetadata[key] = value  
      }      
    }    
    return blogMetadata
  }
}

export class Converter implements IConverter {
  content: string

  constructor(content: string) {
    this.content = content
  }

  convertHeading(blockText: string): string {        
    const regExp = /#.*/g;
    const headings = blockText.match(regExp)
    if (!headings) {
      return ""
    }

    const newHeadings = headings.map((heading, i) => {
      let newHeading = "";
      const prefix = /#{1,4}\s/g;      

      newHeading = heading.replace(prefix, `<h${i + 1}>`) + `</h${i + 1}>\n`      
      return newHeading
    })        
    return newHeadings.join("\n")
  }

  convertList(blockText: string): string {    
    let mdList = blockText.split("\n")    

    const countSpace = (text: string): number => {      
      let count = 0;      
      for (const c of text.split("")) {
        if (c === "-") {
          break 
        }

        if (c === " ") {
          count++
        }
      }
      return count
    }

    for (let i = 0; i < mdList.length; i++) {
      if (i > 0 && i < (mdList.length - 1)) {
        const current = mdList[i]
        const before = mdList[i - 1]
        const after = mdList[i + 1]        

        if (countSpace(before) < countSpace(current)) {
          mdList[i] = "<ul>\n" + mdList[i] 
        }

        if (countSpace(after) < countSpace(current)) {          
          const q = (countSpace(current) - countSpace(after)) / 2          
          mdList[i] = mdList[i] + "</li>\n" + "</ul>\n".repeat(q)
        }        
      }      
    }

    const newList = mdList.map(text => {
      let _text = text.replace("- ", "<li>")
      if (!_text.includes("</li>")) {
        _text = _text + "</li>\n"
      }
      return _text
    })    
    return "<ul>\n  " + newList.join("\n") + "</ul>\n\n"
  }

  convertQuote(blockText: string): string {    
    const newQuote = blockText.replace(/>\s/g, "<blockquote>\n") + "\n</blockquote>\n"    
    return newQuote
  }

  convertCode(blockText: string): string {
    // TODO: style depending on programming languages
    let newCode = blockText.replace("```", "<code>");
    newCode = newCode.replace("```", "</code>")    
    return newCode
  }
}

export class ConverterV2 implements IConverter {
  content: string

  constructor(content: string) {
    this.content = content
  }

  convertHeading(blockText: string): string {
    return ""
  }

  convertList(blockText: string): string {
    return ""
  }

  convertQuote(blockText: string): string {
    return ""
  }

  convertCode(blockText: string): string {
    return ""
  }
}

