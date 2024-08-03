import { useForm } from "react-hook-form";

const useAuthForm = (onSubmit) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors
  }
};

export default useAuthForm;
