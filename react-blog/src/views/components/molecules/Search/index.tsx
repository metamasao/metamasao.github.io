import "./index.scss"

export interface SearchProps {
  filterByTitleOrSummary: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Search = (props: SearchProps) => {
  const {filterByTitleOrSummary} = props

  return (
    <div className="search__wrapper">
      <input 
        className="search__input" 
        type="text" 
        placeholder="search..."
        onChange={(event) => filterByTitleOrSummary(event)}
      />
    </div>
  )
}