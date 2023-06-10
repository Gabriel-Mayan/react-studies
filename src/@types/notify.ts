import { ToastPosition, TypeOptions } from "react-toastify";

type TOptions = Exclude<TypeOptions, 'default'>;

export interface IToast {
    type: TOptions;
    message: string;
    duration?: number;
    position?: ToastPosition;
};
