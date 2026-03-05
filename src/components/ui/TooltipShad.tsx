import * as React from "react"
import { cn } from "@/lib/utils"

export interface TooltipProps {
  content: React.ReactNode
  children: React.ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
  delayDuration?: number
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ content, children, side = 'top', delayDuration = 0 }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [position, setPosition] = React.useState({ top: 0, left: 0 })
    const triggerRef = React.useRef<HTMLDivElement>(null)
    const tooltipRef = React.useRef<HTMLDivElement>(null)
    const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)

    const updatePosition = React.useCallback(() => {
      if (!triggerRef.current || !tooltipRef.current) return

      const triggerRect = triggerRef.current.getBoundingClientRect()
      const tooltipRect = tooltipRef.current.getBoundingClientRect()
      let top = 0
      let left = 0
      const gap = 8

      switch (side) {
        case 'top':
          top = triggerRect.top - tooltipRect.height - gap
          left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2
          break
        case 'bottom':
          top = triggerRect.bottom + gap
          left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2
          break
        case 'left':
          top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2
          left = triggerRect.left - tooltipRect.width - gap
          break
        case 'right':
          top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2
          left = triggerRect.right + gap
          break
      }

      setPosition({ top, left })
    }, [side])

    const handleMouseEnter = () => {
      timeoutRef.current = window.setTimeout(() => {
        setIsOpen(true)
        setTimeout(updatePosition, 0)
      }, delayDuration)
    }

    const handleMouseLeave = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      setIsOpen(false)
    }

    React.useEffect(() => {
      if (isOpen) {
        updatePosition()
        window.addEventListener('scroll', updatePosition)
        window.addEventListener('resize', updatePosition)
        return () => {
          window.removeEventListener('scroll', updatePosition)
          window.removeEventListener('resize', updatePosition)
        }
      }
    }, [isOpen, updatePosition])

    return (
      <div
        ref={ref}
        className="relative inline-flex"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={triggerRef}>
          {children}
        </div>
        
        {isOpen && (
          <div
            ref={tooltipRef}
            className={cn(
              "absolute z-50 px-3 py-1.5 text-sm font-medium text-white bg-gray-900 rounded-md whitespace-nowrap shadow-lg animate-in fade-in-0 zoom-in-95 duration-200",
              "pointer-events-none"
            )}
            style={{
              top: `${position.top}px`,
              left: `${position.left}px`,
            }}
          >
            {content}
            <div
              className={cn(
                "absolute w-1.5 h-1.5 bg-gray-900 rotate-45",
                side === 'top' && 'bottom-[-3px] left-1/2 -translate-x-1/2',
                side === 'bottom' && 'top-[-3px] left-1/2 -translate-x-1/2',
                side === 'left' && 'right-[-3px] top-1/2 -translate-y-1/2',
                side === 'right' && 'left-[-3px] top-1/2 -translate-y-1/2'
              )}
            />
          </div>
        )}
      </div>
    )
  }
)

Tooltip.displayName = 'Tooltip'

export { Tooltip }
