export function IconButton({
    icon, variant = "primary",
    size = "md",
    ariaLabel = "icon button",
    disable = false
}){
    const base = "inline-flex items-center justify-center rounded-md transition focus:outline-nome focus:ring-2";

    const variants = {
        primary: "bg-primary text-white hover:bg-primaryDark focus:ring-primary",
        secondary: "bg-secondary text-white",
        ghost: "bg-transparent text-textPrimary hover:bg-gray-100 dark:hover:bg-gray-800",
        danger: "bg-red-600 text-white hover:bg-red-700",
    };
    const sizes={
        sm: "w-8 h-8 text-sm",
        md: "w-10 h-10 text-base",
        lg: "w-12 h-12 text-lg",
    };
    return (
        <button 
        aria-label={ariaLabel}
        disable={disable}
        className={`
            ${base}
            ${variants[varianta]}
            ${sizes[size]}
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
            `}
            >
        {icon} 
    </button>
    );
}
