import { useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

import { TagDetail } from "./Tag";
import { getTags } from "./Tag";
import book_records_metadata from "../book_records_metadata";

export default function ReadingRecordsList() {
  const [readingRecords, setReadingRecords] = useState(book_records_metadata);
  const tags = getTags(readingRecords);

  const filterByTag = (event) => {
    if (event.target.name === "all") return setReadingRecords(book_records_metadata);
    setReadingRecords(readingRecords.filter(record => record.tags.includes(event.target.name)));
  }

  console.log(readingRecords)
  return (
    <>
    <TagDetail tags={tags} filterByTag={filterByTag}/>
    <Table responsive bordered hover size="sm">
      <thead>
        <tr>
          <th></th>
          <th>Author</th>
          <th>Title</th>
          <th>Publisher</th>
          <th>ISBN</th>
          <th>Tags</th>
          <th>Summary</th>
          <th>Datetime</th>
          <th>Note</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {readingRecords.map((record, i) => (
          <tr key={i}>
            <td>{i}</td>
            <td>{record.author}</td>
            <td>{record.title}</td>
            <td>{record.publisher}</td>
            <td>{record.isbn}</td>
            <td>{record.tags}</td>
            <td>{record.summary}</td>
            <td>{record.datetime}</td>
            <td>{record.further_note}</td>
            <td><Link to={`/reading_records/${record.isbn}`}>書誌情報</Link></td>
          </tr>
        ))}
      </tbody>
    </Table>
    </>
  )
}