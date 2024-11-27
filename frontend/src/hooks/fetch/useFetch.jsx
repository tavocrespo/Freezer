const useFetch = () => {
  const fetchData = async (url, options) => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      //   setDataResponse(data);
      return data;
    } catch (error) {
      console.log("Error al registrarse " + error.message);
    }
  };

  return {
    fetchData,
  };
};

export default useFetch;
