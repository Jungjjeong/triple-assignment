import { useCallback, useEffect, useRef, useState } from 'react'

import getEaseOutExpo from '../utils/getEaseOutExpo'

const useCountUp = (start: number, end: number, duration: number) => {
  const [count, setCount] = useState(start)
  const requestRef = useRef<number>(0)
  const currentTimeRef = useRef<number>(0)

  const stepTime = useCallback(
    (time: number) => {
      if (!currentTimeRef.current) {
        currentTimeRef.current = time
      }

      const progress = time - currentTimeRef.current
      const nextCount = Math.floor(
        (end - start) * getEaseOutExpo(progress / duration, 1),
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
