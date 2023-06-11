import { useState, useEffect } from "react";

export default function useFetch(uri, jsonFormat=true) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => (
    fetch(uri)
      .then(res => jsonFormat ? res.json() : res.text())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError)
  ), [uri]);

  return { data, error, loading };
}