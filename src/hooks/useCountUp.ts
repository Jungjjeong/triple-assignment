import { useEffect, useState } from 'react'

const useCountUp = (start: number, end: number, duration: number) => {
  const [count, setCount] = useState(start)
  const stepTime = 1000 / 30
  const totalStepTime = Math.round(duration / stepTime)

  useEffect(() => {
    let currentNumber = start

    const countInterval = setInterval(() => {
      currentNumber += 1
      const progress = currentNumber / totalStepTime
      setCount(Math.round(end * progress))

      if (progress === 1) {
        clearInterval(countInterval)
      }
    }, stepTime)
  }, [start, end, stepTime, totalStepTime])

  return count
}

export default useCountUp
