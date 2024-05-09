"use client"

import { cn } from "@/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ComponentProps, ReactNode } from "react"

export function Nav({ children }: { children: ReactNode }) {
    return (
        <nav className="bg-primary text-primary-foreground flex justify-center px-4">
            {children}
        </nav>
    )
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
    const pathname = usePathname()
    return (
        <Link
            {...props}
            className={cn(
                "p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground",
                pathname === props.href && "bg-background text-foreground"
            )}
        />
    )
}

// These components can be used to create a navigation menu with links (NavLink) wrapped in a navigation container (Nav).
// The NavLink component handles styling for active and hover states based on the current pathname.
// These components provide a flexible and reusable way to create navigation menus in React applications, particularly in the context of Next.js for client-side navigation.