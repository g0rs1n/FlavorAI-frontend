

interface IMyRecipePageLayoutProps {
    children: React.ReactNode
}

export default function MyRecipePageLayout (
    props : Readonly<IMyRecipePageLayoutProps>
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