import ItemContainer from './AwardItem.style'

interface Props {
  organizationText: string
  awardText: string
  awardImage: string
}

const defaultProps = {
  organizationText: '',
  awardText: '',
  awardImage: '',
}

const AwardItem = ({ organizationText, awardText, awardImage }: Props) => {
  return (
    <ItemContainer image={awardImage}>
      {organizationText}
      <br />
      {awardText}
    </ItemContainer>
  )
}

AwardItem.defaultProps = defaultProps

export default AwardItem
