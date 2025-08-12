


import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'
import { userService } from '@/lib/services/user/user.service'
import { toast } from 'sonner'
import { AxiosError } from 'axios'
import { ILogOutPromise } from '@/lib/services/user/user.service'
import { catchError } from '@/lib/api/error'
import { PAGE_ROUTES } from '@/lib/config/pages-url.config'

export default function ExitButton () {

    const {replace} = useRouter()

    const {
        mutateAsync
    } = useMutation<
        ILogOutPromise,
        AxiosError
    >({
        mutationFn: () => userService.logout(),
        onSuccess: () => {
            replace(PAGE_ROUTES.AUTH)
        },
        onError: (error) => {
            catchError(error, "Error: useMutation Logout Button")
        }
    })

    const handleLogoutButton = async () => {
        toast.promise(mutateAsync(), {
            loading: "Logging out...",
            success: (res) => res.message,
            error: (error) => error.message
        })
    }
    
    return (
        <div className="absolute bottom-4 right-4">
            <LogOut
                onClick={handleLogoutButton}
                className='cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110'
                size={29}
            />
        </div>
    )
}