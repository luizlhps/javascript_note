
import axios from "axios";
import { useEffect, useState } from "react";
import UserService from "../services/users";
import { User } from "../types/User";
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null)
    const [pageReload, setPageReload] = useState<boolean>(false)

   
    const getUserProfile = async () => {
        try {
          const resp = await axios.get('http://localhost:3001/users/profile', {
            headers: { 'x-access-token': localStorage.getItem('token') }
          })
          setUser(resp.data)
          console.log(resp.data)
        } catch (error) {
          console.log(error)
        }
      }
    
      useEffect(() => {
        getUserProfile()
      }, [])

    
    const logout = async () => {
        UserService.logout()
        setUser(null)
    }


    return (
        <AuthContext.Provider value={{ user, logout, setPageReload, getUserProfile }}>

            {children}

        </AuthContext.Provider>
    );
}