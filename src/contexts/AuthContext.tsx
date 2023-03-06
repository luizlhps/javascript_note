import { createContext } from "react"
import { User } from "../types/User"

export type authContextProps = {
    user:User | null;
    logout: () => void;
    setPageReload?: React.Dispatch<React.SetStateAction<boolean>>
    getUserProfile: () => Promise<void>;
}

export const AuthContext = createContext<authContextProps>(null!);

