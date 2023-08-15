import { useEffect, useState } from "react";

export default function useWindowResize() {
  const [isResizing, setIsResizing] = useState(false)

  const RESIZE_START_DELAY = 500
  const RESIZE_END_DELAY = 600

  const handleResizeStart = () => {
    setIsResizing(true)
  }

  const handleResizeEnd = () => {
    setIsResizing(false)
  }

  useEffect( () => {
    let resizeStartTimeout, resizeEndTimeoutId;

    const resizeHandler = () => {
      clearTimeout(resizeStartTimeout)
      clearTimeout(resizeEndTimeoutId)
      
      resizeStartTimeout = setTimeout(handleResizeStart, RESIZE_START_DELAY);
      resizeEndTimeoutId = setTimeout(handleResizeEnd, RESIZE_END_DELAY);
    }
    
    window.addEventListener('resize', resizeHandler)

    return () => {
      clearTimeout(resizeStartTimeout)
      clearTimeout(resizeEndTimeoutId)

      window.removeEventListener('resize', resizeHandler)
    }

  }, [])

  return [isResizing]
}