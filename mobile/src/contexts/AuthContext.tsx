import type { UserDTO } from "@dtos/UserDTO";
import { SignIn } from "@screens/SignIn";
import { api } from "@services/api";
import { createContext, useState, type ReactNode } from "react"

export type AuthContextDataProps = {
    user: UserDTO;
    signIn: (email: string, password: string) => Promise<void>;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({children}: AuthContextProviderProps){

    const [user, setUser] = useState<UserDTO>({} as UserDTO);

    async function signIn(email: string, password: string){
        try {
            const { data } = await api.post("/sessions", {email, password});
        
            if(data.user){
                setUser(data.user);
            }
            
        } catch (error) {
            // biome-ignore lint/complexity/noUselessCatch: <explanation>
            throw error;
        }
    }

    return(
        <AuthContext.Provider value={{ user, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}