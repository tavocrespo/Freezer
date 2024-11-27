import React, { useState } from "react";

const useFetch = () => {
  const [dataResponse, setDataResponse] = useState(null);

  const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    setDataResponse(data);
  };

  return {
    fetchData,
    dataResponse,
  };
};

export default useFetch;
