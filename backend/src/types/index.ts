import {z} from "zod";


export const SignUpSchema = z.object({
    username : z.string().min(3),
    password : z.string().min(4),
    name: z.string().min(3),

})

export const SignInSchema = z.object({
    username : z.string().min(3),
    password : z.string().min(4),

});


export const ZapCreateSchema = z.object({
    availableTriggerId: z.string(),
    triggerMetadata: z.any().optional(),
    actions: z.array(z.object({
        availableActionId: z.string(),
        actionMetadata: z.any().optional(),
    }))
});