import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

import { useReadingRecords } from "./ReadingRecordPorvider";
import YearDropDown from "./YearFilter";
import { TagDetail } from "./Tag";
import { getTags } from "./Tag";

export default function ReadingRecordsList() {
  const { readingRecords, filterByTag, filterByYear } = useReadingRecords();
  const tags = getTags(readingRecords);

  return (
    <>
    <TagDetail tags={tags} filterByTag={filterByTag}/>
    <Table responsive bordered hover striped size="sm">
      <thead>
        <tr>
          <th></th>
          <th>Author</th>
          <th>Title</th>
          <th>Publisher</th>
          <th>Publish</th>
          <th>ISBN</th>
          <th>Info</th>
          <th>Tags</th>
          <th>Summary</th>
          <th>Read <span><YearDropDown data={readingRecords} filterByYear={filterByYear}/></span></th>
          <th>Note</th>
        </tr>
      </thead>
      <tbody>
        {readingRecords.map((record, i) => (
          <tr key={i}>
            <td>{i}</td>
            <td>{record.author}</td>
            <td>{record.title}</td>
            <td>{record.publisher}</td>
            <td>{record.publish_date}</td>
            <td>{record.isbn}</td>
            <td><Link to={`/reading_records/${record.isbn}`}>書誌情報</Link></td>
            <td>{record.tags}</td>
            <td>{record.summary}</td>
            <td>{record.datetime.slice(0, 10)}</td>
            <td>{record.further_note}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </>
  )
}