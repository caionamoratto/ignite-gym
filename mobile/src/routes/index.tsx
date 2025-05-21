import { AuthRoutes } from "./auth.routes"

import { useAuth } from "@hooks/useAuth"

export function Routes(){
    
    const { user } = useAuth();
    console.log("USUÁRIO =>", user);
    
    return(
        <AuthRoutes/>
    )
}