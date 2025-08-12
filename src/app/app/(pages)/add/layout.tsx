

interface IAddRecipePageLayoutProps {
    children: React.ReactNode
}

export default function AddRecipePageLayout (
    props : Readonly<IAddRecipePageLayoutProps>
) {

    const {
        children
    } = props

    return (
        <>
            {children}
        </>
    )
}