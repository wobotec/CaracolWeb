export function Card({ children }){
    return (
        <div className="
        bg-surface dark:bg-darkSurface
        text-textPrimary dark:text-darkText
        rounded-lg shadow-sm border border-border">
            {children}
        </div>
    )
}