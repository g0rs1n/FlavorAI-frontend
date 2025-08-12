"use client"

import { useQuery } from "@tanstack/react-query"
import Header from "@/components/app/Header/Header"
import { userService } from "@/lib/services/user/user.service"
import { IUserData } from "@/lib/types/types"
import Loader from "@/components/ui/Loader/Loader"
import GlobalError from "../error"
import ExitButton from "@/components/ui/ExitButton/ExitButton"

interface IAuthLayoutProps {
    children: React.ReactNode
}

export default function AppLayout (
    props : Readonly<IAuthLayoutProps>
) {

    const {
        children
    } = props

    const {
        data,
        isLoading,
        error
    } = useQuery<IUserData>({
        queryKey: ['userData'],
        queryFn: () => userService.getUser()
    })

    if (isLoading) {
        return <Loader/>
    }

    if (error || !data) {
        return <GlobalError error={error}/>
    }

    return (
        <>
            <div
                className="flex flex-col h-full relative"
            >
                <Header
                    userData={data}
                />
                {children}
                <ExitButton/>
            </div>
        </>
    )

} 