import { ToastPosition, TypeOptions } from "react-toastify";

type TType = Exclude<TypeOptions, 'default'>;

export interface IToast {
    type: TType;
    message: string;
    duration?: number;
    position?: ToastPosition;
};
