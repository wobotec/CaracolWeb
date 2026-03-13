export function Modal({
    open,
    title,
    children,
    onClose,
    footer
  }) {
    if (!open) return null
  
    return (
      <div className="fixed 
                      inset-0 
                      z-50 
                      flex 
                      items-center 
                      justify-center">
        
        <div
          className="absolute 
                    inset-0 
                    bg-black/50"
          onClick={onClose}
        />
  
        <div className="
          relative 
          z-10 
          w-full 
          max-w-md
          bg-surface 
          dark:bg-darkSurface
          text-textPrimary 
          dark:text-darkText
          rounded-lg shadow-lg
        ">
          
          {title && (
            <div className="px-4 
                            py-3 
                            border-b 
                            border-border 
                            flex 
                            justify-between 
                            items-center">
              <h2 className="font-medium">{title}</h2>
              <button
                onClick={onClose}
                className="text-textSecondary 
                            hover:text-textPrimary"
              >
                ✕_x
              </button>
            </div>
          )}
  
          <div className="p-4">
            {children}
          </div>
  
          {footer && (
            <div className="px-4 
                            py-3 
                            border-t 
                            border-border">
              {footer}
            </div>
          )}
        </div>
      </div>
    )
  }
  