"use client"


import { ReactNode } from "react"



export const LinkButton = ({children , onClick} : {children:ReactNode,onClick: () => void}) =>{

    return (
    <div className="px-4 py-2 flex justify-center  rounded cursor-pointer hover:bg-slate-100 font-light text-sm" onClick={onClick}>
        {children}
    </div>
    )
}