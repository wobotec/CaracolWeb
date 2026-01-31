export function Button({ children, variant = 'primary' }){
    const base = "px-4 py-2 rounded-md bg-primary text-white hover:bg-primaryDark transition";

    const variants = {
        primary: "bg-primary text-white hover:bg-primaryDark",
        secondary: "bg-secondary text-white",
        outline: "border border-primary text-primary" 
    }
    return(
        <button className={`${base} ${variants[variant]}`}> {children} </button>
    )
}