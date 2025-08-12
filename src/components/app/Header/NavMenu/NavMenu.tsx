
import Link from "next/link";

import { PAGE_ROUTES } from "@/lib/config/pages-url.config";

interface INavItem {
    href: string;
    title: string;
}

const navItems: INavItem[] = [
    {href: PAGE_ROUTES.APP.ALL_RECIPES, title: "All Recipes"},
    {href: PAGE_ROUTES.APP.MY_RECIPES, title: "My Recipes"},
    {href: PAGE_ROUTES.APP.ADD_RECIPES, title: "Add Recipes"},
]

export default function NavMenu () {
    return (
        <>
            <nav
                className=""
            >
                <ul
                    className="flex gap-x-3"
                >
                    {
                        navItems.map(({href, title}) => {
                            return (
                                <MenuItem
                                    key={title}
                                    href={href}
                                    title={title}
                                />
                            )
                        })
                    }
                </ul>
            </nav>
        </>
    )
}

interface IMenuItemProps extends INavItem {}  

function MenuItem (props: IMenuItemProps) {

    const {
        href,
        title
    } = props

    return (
        <>
            <Link href={href}>
                <li
                    className="relative text-xl font-semibold group"
                >
                    {title}
                    <div
                        className="absolute bottom-0 left-0 h-[2px] w-0 bg-text
                        transition-all duration-300 group-hover:w-full"
                    />
                </li>
            </Link> 
        </>
    )
}