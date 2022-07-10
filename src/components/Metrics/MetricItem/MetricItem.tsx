import { useEffect, useState } from 'react'

import { useCountUp } from '../../../hooks'

import ItemContainer from './MetricItem.style'

interface CountUpProps {
  startAt: number
  endAt: number
  duration: number
}

interface Props {
  countUpAnimation: CountUpProps
  unitText: string
  planeText: string
}

const defaultProp = {
  countUpAnimation: { startAt: 0, endAt: 700, duration: 2000 },
  unitText: '',
  planeText: '',
}

const MetricItem = ({ countUpAnimation, unitText, planeText }: Props) => {
  const [count, setCount] = useState(0)
  const metricCount = useCountUp(
    countUpAnimation.startAt,
    countUpAnimation.endAt,
    countUpAnimation.duration,
  )

  useEffect(() => {
    setCount(metricCount)
  }, [metricCount])

  return (
    <ItemContainer className="statistic-section__MetricItem">
      <strong>
        <span>{count}</span>
        {unitText}
      </strong>
      {planeText}
    </ItemContainer>
  )
}

MetricItem.defaultProp = defaultProp

export default MetricItem
