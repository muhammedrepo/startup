import { useAppContext } from "../context/appContext";

const Alert = () => {
  const { alertType, alertText } = useAppContext();
  return (
    <p className={`alert-${alertType} mb-8 p-3 text-center`}>{alertText}</p>
  );
};

export default Alert;
