import * as z from "zod";

export const RegisterSchema = z.object({
    nameLastname: z.string().min(1, "O campo não pode estar vazio!"),
    email: z.email("Este email não é válido!").min(1, "O campo não pode estar vazio!"),
    password: z
            .string()
            .max(16, "O limite de caracteres é 16 caracteres!")
            .min(8, "A senha precisa ter no mínimo 8 caracteres!")
            .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/, "A senha deve conter número, letra maiscula e minuscula e caracterer especial!"),
    telephone: z
        .string()
        .min(11, "Telefone Inválido")
});