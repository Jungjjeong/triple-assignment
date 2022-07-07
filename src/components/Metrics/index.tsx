import { useEffect, useState } from 'react'

import useCountUp from '../../hooks/useCountUp'
import useFadeIn from '../../hooks/useFadeIn'

import MetricItem from './MetricItem'
import MetricsContainer from './Metrics.style'

const Metrics = () => {
  const { ref, style } = useFadeIn(0.7, 0.1)
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

export default Metrics
