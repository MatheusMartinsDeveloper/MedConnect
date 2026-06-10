import { create } from "zustand";

type RegisterStore = {
    nameLastname: string;
    email: string;
    password: string;
    telephone: string;
    role: "PATIENT" | "DOCTOR";

    saveUserData: (data: Partial<RegisterStore>) => void;
}

export const useRegisterStore = create<RegisterStore>((set) => ({
    nameLastname: "",
    email: "",
    password: "",
    telephone: "",
    role: "PATIENT",

    saveUserData: (data) =>
        set((state) => ({
            ...state,
            ...data
        }))
}));