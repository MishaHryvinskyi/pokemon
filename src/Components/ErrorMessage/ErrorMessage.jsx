import { ErrorTitle } from "./ErrorMessage.styled";

const ErrorMessage = ({ error }) => {
    return <ErrorTitle>{error.message}</ErrorTitle>
}

export default ErrorMessage;