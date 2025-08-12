
import { IUserData } from "@/lib/types/types"
import Image from "next/image"

interface ILogoLayoutProps {
    userData: IUserData
}

export default function LogoLayout (props: ILogoLayoutProps) {

    const {
        userData
    } = props

    return (
        <>
            <div
                className=""
            >
                <div
                    className="shadow-md rounded-full"
                >
                    <Image
                        src={userData.avatarPath}
                        className="rounded-full"
                        alt="user_icon"
                        width={55}
                        height={55}
                    />
                </div>
            </div>
        </>
    )
}