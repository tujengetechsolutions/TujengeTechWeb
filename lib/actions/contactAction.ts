'use server'

import { contactSchema, contactInfer} from "../validation/Contact";

export async function ContactAction(data: contactInfer){

    const parsed = contactSchema.safeParse(data)

    if(!parsed.success){
    return {
      success: false,
      error: "Invalid data. Please check your inputs.",
    };
    }

   return { success: true, data: parsed.data}
}