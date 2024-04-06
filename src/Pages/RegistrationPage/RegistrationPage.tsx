import { registration } from "services/services";
import AuthForm from "components/AuthForm/AuthForm";
const RegistrationPage = () => {
  return (
    <AuthForm
      mutationFn={registration}
      buttonText="Зарегистрироваться"
      title="Регистрация"
    />
  );
};
export default RegistrationPage;
