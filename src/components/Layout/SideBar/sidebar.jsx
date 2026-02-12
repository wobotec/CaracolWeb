export function Sidebar({ children }){
    return (
        <aside className="
        w-20 
        h-screen
        bg-primary 
        dark:bg-primaryDark
        flex
        flex-col
        items-center
        py-6
        gap-6    
        ">
            {children}
        </aside>
    )
}
