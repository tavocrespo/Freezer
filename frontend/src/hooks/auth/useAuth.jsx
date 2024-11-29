import React from 'react'
import { API_URL } from '../../constants/api'
import { useEffect } from 'react'

const useAuth = () => {
    const {fetchRequest,data} = useFetch();
    const {successToast,errorToast}=useToast();
    const {logUser} = useUserStore();

    const { changeReload } = UseReloadStore();

    useEffect(()=>{
        if (data.success) {
            successToast(data.message);
            changeReload();
            if(data.auth_token){
                logUser(data.auth_token);
            } else {
                console.log("no token found");
            }
        } else {
            errorToast(data.message);
        }

    },[data]);
    
  return (
    <div>

    </div>
  )
}

export default useAuth