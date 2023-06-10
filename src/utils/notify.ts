import { toast, ToastOptions, ToastPosition, TypeOptions } from "react-toastify";

export const showToast = (type: TypeOptions, message: string, duration = 2000, position: ToastPosition = toast.POSITION.TOP_RIGHT) => {
    toast[type](message, {
        position,
        autoClose: duration,
        closeOnClick: true
    } as ToastOptions);
};
