import React from 'react'
import { cn } from '@/lib/utility'

export const Container = ({className, children}: {className?: string, children:React.ReactNode}) => {
  return (
    <div className={cn('max-w-7xl mx-auto min-h-screen ', className)}>
        {children}
    </div>
  )
}
