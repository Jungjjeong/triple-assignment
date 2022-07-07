import ItemContainer from './MetricItem.style'

interface Props {
  countText: number
  unitText: string
  planeText: string
}

const MetricItem = ({ countText, unitText, planeText }: Props) => {
  return (
    <ItemContainer className="statistic-section__MetricItem">
      <strong>
        <span>{countText}</span>
        {unitText}
      </strong>
      {planeText}
    </ItemContainer>
  )
}

export default MetricItem
