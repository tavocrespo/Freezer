import toast from "react-hot-toast";

const useToast = () => {
  const exitoToast = (message) => toast.success(message);
  const errorToast = (message) => toast.error(message);
  return {
    exitoToast,
    errorToast,
  };
};

export default useToast;
