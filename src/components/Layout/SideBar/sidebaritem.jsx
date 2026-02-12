export function SidebarItem({
    icon,
    active = false,
    badge
  }) {
    return (
      <div className="relative">
        <button
          className={`
            w-12 h-12 flex items-center justify-center rounded-xl
            transition
            ${active
              ? "bg-white text-primary"
              : "text-white hover:bg-white/20"
            }
          `}
        >
          {icon}
        </button>
  
        {badge && (
          <span className="
            absolute -top-1 -right-1
            bg-red-600 text-white
            text-xs w-5 h-5 rounded-full
            flex items-center justify-center
          ">
            {badge}
          </span>
        )}
      </div>
    )
  }
  