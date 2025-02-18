import { z } from "zod"

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1,"Minimum of 8 characters required").max(256),
});

export const registerSchema = z.object({
    name: z.string().min(3,"Minimum 3 characters required"),
    email: z.string().email(),
    password: z.string().min(8, "Minimum of 8 characters required").max(256),
});