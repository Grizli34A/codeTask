import AuthForm from "components/AuthForm/AuthForm";
import { authorization } from "services/services";
const AuthPage = () => {
  return (
    <AuthForm mutationFn={authorization} buttonText="Войти" title="Вход" />
  );
};

export default AuthPage;
