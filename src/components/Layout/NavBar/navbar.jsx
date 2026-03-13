export function Navbar({
    title,
    actions
  }) {
    return (
      <header className="
        h-16 
        w-full
        bg-surface 
        dark:bg-darkSurface
        border-b 
        border-border
        px-6
        flex 
        items-center 
        justify-between
      ">
        {/* Left */}
        <h1 className="text-lg 
                       font-medium 
                       text-textPrimary 
                       dark:text-darkText">
          {title}
        </h1>
  
        {/* Right */}
        <div className="flex 
                        items-center 
                        gap-3">
          {actions}
        </div>
      </header>
    )
  }
  