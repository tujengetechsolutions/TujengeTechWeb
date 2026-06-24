import {z} from "zod";

export const contactSchema = z.object({
    name:z.string().min(2, 'Name should be atleast 2 characters')
           .max(50, 'name must be at most 50 characters')
         .regex(/^[a-zA-Z\s'-]+$/, "Name can only contain letters"),
    email: z.email().regex(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, 'Invalid email format!'),
    phone: z.string({ error: "Please enter a phone number" }).min(12, 'Phone Number is too short'),
    company: z.string().min(4, 'company name must be at least 4 characters').optional().or(z.literal('')),
    inquiry: z.string().min(1, 'PLease select a service!'),
    message: z.string().min(20, 'Message must be at least 20 characters long'),
    "h-captcha-response": z.string().optional(),

})

export type contactInfer = z.output<typeof contactSchema>