import { z } from "zod";

export const AuthCredentailsValidator = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." }),
});

export type TAuthCredentialsValidor = z.infer<typeof AuthCredentailsValidator>;
