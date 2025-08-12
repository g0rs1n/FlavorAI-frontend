

interface IRecipesPageLayoutProps {
    children: React.ReactNode
}

export default function RecipesPageLayout (
    props : Readonly<IRecipesPageLayoutProps>
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