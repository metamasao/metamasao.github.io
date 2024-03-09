import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

import { Input } from "../../atoms/Input/Index";
import { Button } from "../../atoms/Button/Index";
import { useBlog } from "../../contexts/BlogProvider";

import "./search-form.scss";

export interface SearchFormProps {
  searchFormClassName?: "search-form" | "search-form-block"
}

export const SearchForm = ({searchFormClassName="search-form"}: SearchFormProps) => {
  const ref = useRef<HTMLInputElement | null>(null)

  const {filteredBlogByTitle} = useBlog()
  if (!filteredBlogByTitle) return <></>

  const enterBlogByTitle = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    filteredBlogByTitle(ref.current)
  }

  return (
    <span className={searchFormClassName}>
      <Input 
        inputClassName='input-primary' 
        onKeyDown={enterBlogByTitle}
        ref={ref}/>
      <Button 
        icon={<BsSearch size={"18px"}/>} 
        content='Search' 
        onClick={() => filteredBlogByTitle(ref.current)}        
        />
    </span>
  )
}