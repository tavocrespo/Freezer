import { useEffect } from "react";
import useFetch from "../hooks/fetch/useFetch";
import { API_URL } from "../constants/api";
import useToast from "../hooks/toast/useToast";

function ActivosPage() {

  const { exitoToast } = useToast();
  useEffect(() => {
    
  }, []);
  return (
    <>
      <h1>Pagina activos</h1>
      <button onClick={() => exitoToast("hola")}>Presioname</button>
      
    </>
  );
}
export default ActivosPage;
