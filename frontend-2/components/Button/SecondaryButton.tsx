
import { ReactNode } from "react";


export const SecondaryButton = ({children, onClick,size="small"} : {
    children: ReactNode,
    onClick: ()=> void,
    size?:"big"| "small"
}) => {
    return (
        <button className={`${size === "small" ? "text-sm" : "text-xl"}
        ${size === "small" ? "px-6 pt-1": "px-8 py-4"} border border-black text-black rounded-full hover:shadow-lg`} 
        onClick={onClick}>
            {children}
        </button>
    );
}