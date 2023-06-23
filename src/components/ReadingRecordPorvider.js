import { useContext, createContext, useState } from "react";

import readingRecordsData from "../book_records.json";

const ReadingRecordsContext = createContext()
export const useReadingRecords = () => useContext(ReadingRecordsContext);

export default function ReadingRecordProvider({ children }) {
  const [readingRecords, setReadingRecords] = useState(readingRecordsData);

  const filterByTag = (event) => {
    setReadingRecords(readingRecordsData)
    if (event.target.name === "all") return ;
    return setReadingRecords(readingRecords.filter(record => record.tags.includes(event.target.name)));
  }

  const filterByYear = (event) => {
    setReadingRecords(readingRecordsData)
    if (event.target.value === "all") return ;
    return setReadingRecords(readingRecords.filter(record => record.datetime.startsWith(event.target.value))); 
  }

  return (
    <ReadingRecordsContext.Provider value={{ readingRecords, filterByTag, filterByYear }}>
      {children}
    </ReadingRecordsContext.Provider>
  )
}