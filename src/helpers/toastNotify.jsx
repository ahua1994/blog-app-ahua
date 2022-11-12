import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const toastNotify = (msg, type) => {
    switch (type.toLowerCase()) {
        case "error":
            toast.error(msg);
            break;
        case "success":
            toast.success(msg);
            break;
        case "warn":
            toast.warn(msg);
            break;
        default:
            return null;
    }
};
