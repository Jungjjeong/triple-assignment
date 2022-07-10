import { useRef, useEffect } from 'react'

const useFadeIn = (duration: number, delay: number) => {
  const currentDom = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!currentDom.current) {
      return
    }

    const { current } = currentDom

    current.style.transition = `all ${duration}ms ease-out ${delay}ms`
    current.style.opacity = '1'
    current.style.transform = 'translateY(0)'
  }, [delay, duration])

  return {
    ref: currentDom,
    style: { opacity: 0, transform: 'translateY(10px)' },
  }
}

export default useFadeIn
