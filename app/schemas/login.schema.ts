import * as z from "zod";

export const User = z.object({
    email: z.email("Email Inválido!"),
    password: z
        .string()
        .max(16, "O limite de caracteres é 16 caracteres!")
        .min(8, "A senha precisa ter no mínimo 8 caracteres!")
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/, "A senha deve conter número, letra maiscula e minuscula e caracterer especial!")
});