export interface IBlog {
  title: string
  summary: string
  filename: string
  datetime: string
  tags: string
}

export interface ITags {
  blogs: IBlog[]

  list(): string[]
}

export interface IConvertBuilder {    
  mdCreator: IMetadataCreator
  converter: IConverter

  createMetadata(): IBlog  
  convert(): string
}

export interface IMetadataCreator {
  content: string

  createMetadata(): IBlog
}

export interface IJSONConverter {
  jsoner: JSON

  toJSON(): JSON
}

export interface IConverter {
  content: string

  convertHeading(blockText: string): string
  convertList(blockText: string): string
  convertQuote(blockText: string): string
  convertCode(blockText: string): string
}
