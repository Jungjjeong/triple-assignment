/* eslint-disable no-console */
import { useCallback, useEffect, useRef, useState } from 'react'

import onEaseOutExpo from '../utils/onEaseOutExpo'

const useCountUp = (start: number, end: number, duration: number) => {
  const [count, setCount] = useState(start)
  const requestRef = useRef<number>(0)
  const currentTimeRef = useRef<number>(0)

  const stepTime = useCallback(
    (time: number) => {
      const progress = time - currentTimeRef.current
      const nextCount = Math.floor(
        (end - start) * onEaseOutExpo(progress / duration, 1),
      )

      setCount(nextCount)

      if (progress < duration) {
        requestRef.current = requestAnimationFrame(stepTime)
      }
    },
    [duration, end, start],
  )

  useEffect(() => {
    requestRef.current = requestAnimationFrame(stepTime)
    return () => cancelAnimationFrame(requestRef.current)
  }, [stepTime])

  return count
}

export default useCountUp
