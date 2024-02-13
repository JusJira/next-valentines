import { zfd } from "zod-form-data";
import { z } from "zod";

export const formSchema = zfd.formData({
    sender: z.string().optional(),
    recipient: z.string().min(1),
    message: z.string().optional(),
});