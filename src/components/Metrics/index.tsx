import MetricItem from './MetricItem'
import MetricsContainer from './Metrics.style'

const Metrics = () => {
  return (
    <MetricsContainer>
      <MetricItem countText={700} unitText="만 명" planeText="의 여행자" />
      <MetricItem countText={100} unitText="만 개" planeText="의 여행 리뷰" />
      <MetricItem countText={470} unitText="만 개" planeText="의 여행 일정" />
    </MetricsContainer>
  )
}

export default Metrics
