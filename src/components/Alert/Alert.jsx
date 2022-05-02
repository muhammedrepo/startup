import { useAppContext } from "../../context/appContext";

const Alert = () => {
  const { alertType, alertText } = useAppContext();
  return (
    <p className={`alert-${alertType} text-center p-3 mb-8`}>{alertText}</p>
  );
};

export default Alert;
