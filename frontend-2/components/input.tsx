"use client"

export const Input = ({ label, placeholder, onChange, type = "text" }: {
    label: string,
    placeholder: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    type?: "text" | "password"
}) => {

    return (
        <div>
            <div className="text-sm pb-1 pt-2">
                <label>*{label}</label>
            </div>
            <input type={type} placeholder={placeholder} onChange={onChange} 
            className="border border-gray-400  px-4 py-2 rounded w-full" />
        </div>
    )

}