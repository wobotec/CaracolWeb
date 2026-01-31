export function Input({
    label,
    type = "text",
    placeholder,
    error,
    disable = false,
}){
    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label className="text-sm font-medium text-textPrimary dark:text-darkText">
                    {label}
                </label>
            )}
            <input
            type ={type}
            placeholder={placeholder}
            disabled={disable}
             className={`
                px-3
                py-3
                rounded-md
                border
                text-sm
                bg-white
                dark:text-darkText
                dark:bg-darkSurface
                text-textPrimary
                dark:text-darkText
                placeholder:text-textSecondary
                focus:outline-none
                focus:ring-2 
                focus:ring-primary
                ${error ? "border-red-500 focus:ring-red-500" : "border-border"}
                ${disabled ? "opacity-50 cursor-not-allowed" : ""}
                `}
             />
             {error && (
                <span className="text-xs text-red-600">
                    {error}
                </span>
             )}
        </div>
    )
}
