import { useEffect, useState } from 'react'

import { useCountUp, useFadeIn } from '../../hooks'

import MetricItem from './MetricItem'
import MetricsContainer from './Metrics.style'

interface Props {
  fadeInDuration: number
  fadeInDelay: number
}

const defaultProps = {
  fadeInDuration: 0.7,
  fadeInDelay: 0.1,
}

const Metrics = ({ fadeInDuration, fadeInDelay }: Props) => {
  const { ref, style } = useFadeIn(fadeInDuration, fadeInDelay)
  const [user, setUser] = useState(0)
  const [review, setReview] = useState(0)
  const [calendar, setCalendar] = useState(0)

  const userCount = useCountUp(0, 700, 2000)
  const reviewCount = useCountUp(0, 100, 2000)
  const calendarCount = useCountUp(0, 470, 2000)

  useEffect(() => {
    setUser(userCount)
  }, [userCount])

  useEffect(() => {
    setReview(reviewCount)
  }, [reviewCount])

  useEffect(() => {
    setCalendar(calendarCount)
  }, [calendarCount])

  return (
    <MetricsContainer
      ref={ref}
      style={style}
      className="statistic-section__MetricsContainer"
    >
      <MetricItem countText={user} unitText="만 명" planeText="의 여행자" />
      <MetricItem
        countText={review}
        unitText="만 개"
        planeText="의 여행 리뷰"
      />
      <MetricItem
        countText={calendar}
        unitText="만 개"
        planeText="의 여행 일정"
      />
    </MetricsContainer>
  )
}

Metrics.defaultProps = defaultProps

export default Metrics
