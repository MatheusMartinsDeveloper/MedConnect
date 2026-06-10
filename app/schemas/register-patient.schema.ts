import * as z from "zod";

export const RegisterPatientSchema = z.object({
    profilePicture: z.file(),
    gender: z.enum(["Masculino", "Feminino"]),
    dateBirth: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, "Data inválida"),
    bloodType: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
});