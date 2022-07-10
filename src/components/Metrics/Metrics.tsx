import { useFadeIn } from '../../hooks'

import MetricItem from './MetricItem'
import MetricsContainer from './Metrics.style'

interface FadeInProps {
  duration: number
  delay: number
}

interface Props {
  fadeInAnimation: FadeInProps
}

const defaultProps = {
  fadeInAnimation: { duration: 0.7, delay: 0.1 },
}

const Metrics = ({ fadeInAnimation }: Props) => {
  const { ref, style } = useFadeIn(
    fadeInAnimation.duration,
    fadeInAnimation.delay,
  )

  return (
    <MetricsContainer
      ref={ref}
      style={style}
      className="statistic-section__MetricsContainer"
    >
      <MetricItem
        countUpAnimation={{ startAt: 0, endAt: 700, duration: 2000 }}
        unitText="만 명"
        planeText="의 여행자"
      />
      <MetricItem
        countUpAnimation={{ startAt: 0, endAt: 100, duration: 2000 }}
        unitText="만 개"
        planeText="의 여행 리뷰"
      />
      <MetricItem
        countUpAnimation={{ startAt: 0, endAt: 470, duration: 2000 }}
        unitText="만 개"
        planeText="의 여행 일정"
      />
    </MetricsContainer>
  )
}

Metrics.defaultProps = defaultProps

export default Metrics
