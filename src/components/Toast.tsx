import { useCallback, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import './Toast.css'
import { CheckIcon } from './icons'
import { ToastContext } from '../hooks/useToast'

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState('')
  const [visible, setVisible] = useState(false)
  const timerRef = useRef<number | undefined>(undefined)

  const showToast = useCallback((msg: string, duration = 2500) => {
    setMessage(msg)
    setVisible(true)
    window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => setVisible(false), duration)
  }, [])

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <div className={`toast${visible ? ' show' : ''}`} role="status" aria-live="polite">
        <CheckIcon width={16} height={16} />
        <span>{message}</span>
      </div>
    </ToastContext.Provider>
  )
}