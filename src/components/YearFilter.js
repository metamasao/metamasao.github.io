export function getYear(bookData) {
  const bookSet = new Set();
  bookData.map(data => {
    let bookYear = data.datetime.slice(0, 4);
    bookSet.add(bookYear);
  })
  return [...bookSet, "all"]
}

export default function YearDropDown({ data, filterByYear }) {
  const yearArray = getYear(data);

  return (
    <select name="year" id="year-select" onChange={filterByYear} value="">
      <option value="">Year filter</option>
      {yearArray.map((year, i) => (
        <option value={year} key={i}>{year}</option>
      ))}
    </select>
  )
}