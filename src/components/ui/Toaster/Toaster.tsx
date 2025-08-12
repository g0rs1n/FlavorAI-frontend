
import { Toaster } from "sonner";

export default function ToasterS () {
    return (
        <Toaster
            toastOptions={{
            style: {
                background: '#F4F5E9',
                border: '1px solid #92947b',
                color: '#343a40',
            }
        }}
    />
    )
}