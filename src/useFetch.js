import { useState, useEffect } from "react";

const useFetch = (path) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(path).then((res) => res.json()).then((data) => setData(data)) //error coming from here
  }, [path]);

  return [data];
};

export default useFetch;