import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastNotification = () => <ToastContainer />;

export const notifySuccess = (msg) => toast.success(msg);
export const notifyError = (msg) => toast.error(msg);
export const notifyWarn = (msg) => toast.warn(msg);
export const notifyInfo = (msg) => toast.info(msg);
