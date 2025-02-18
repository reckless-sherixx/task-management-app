import { toast } from "sonner"
import { useMutation } from '@tanstack/react-query';

import { InferRequestType,InferResponseType } from 'hono';

import { client } from '@/lib/rpc'

type ResponseType = InferResponseType<typeof client.api.auth.register["$post"]>;
type RequestType = InferRequestType<typeof client.api.auth.register["$post"]>;

export const useRegister = () =>{
    const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
    >({
        mutationFn: async ({json}) => {
            const response = await client.api.auth.register["$post"]({json});

            if(!response.ok){
                throw new Error("Failed to register");
            }

            return await response.json();
        },
        onSuccess:()=>{
            toast.success("Registered successfully")
        },
        onError: () => {
            toast.error("Registration Failed")
        }
    });
    return mutation;
}