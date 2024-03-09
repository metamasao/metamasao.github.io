import { useState, useEffect } from "react";

export const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<any>(null)
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/metamasao/metamasao.github.io/main/memo_blog/${url}`)
      .then(response => response.text())
      .then(setData)
      .then(() => setIsLoading(false))
      .catch(setError)
  }, [url])

  return {
    data,
    error,
    isLoading
  }
}