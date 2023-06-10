import React from "react"

interface ICustomLayoutProps {
    viewName?: string
    profileName?: string
}

export const BaseLayout: React.FC<ICustomLayoutProps> = ({ children, viewName, profileName }: any) => {
    return (
        <></>
    )
}