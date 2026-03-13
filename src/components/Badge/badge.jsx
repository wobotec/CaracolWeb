export function Badge({
    children,
    variant = "primary",
    size = "md"
}){
    const base = "inline-flex items-center font-medium rounded-full";

    const variants = {
        primary: "bg-primary text-white",
        secondary: "bg-secondary text-white",
        success: "bg-green-600 text-white",
        danger: "bg-red-600 text-white",
        outline: "border border-primary text-primary",
    };
    const sizes = {
        sm: "px-2 py-0.5 text-xs",
        md: "px-3 py-1 text-sm",
        lg: "px-4 py-1.5 text-base",
    };
    return (
        <span className={`${base} ${variants[variant]} ${sizes[size]}`}>
            {children}
        </span>
    );
}