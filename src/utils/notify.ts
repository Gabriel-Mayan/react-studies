import { IToast } from "../@types/notify";
import { toast, ToastOptions } from "react-toastify";

export const showToast = ({ type, message, duration = 2000, position = toast.POSITION.TOP_RIGHT }: IToast) => {
    toast[type](message, {
        position,
        autoClose: duration,
        closeOnClick: true
    } as ToastOptions);
};
