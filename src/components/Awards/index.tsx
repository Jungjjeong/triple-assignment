import { appleBadge, playStoreBadge } from '../../assets'
import useFadeIn from '../../hooks/useFadeIn'

import AwardsContainer from './Awards.style'
import AwardItem from './AwardItem'

interface Props {
  fadeInDuration: number
  fadeInDelay: number
}

const defaultProps = {
  fadeInDuration: 0.7,
  fadeInDelay: 0.2,
}

const Awards = ({ fadeInDuration, fadeInDelay }: Props) => {
  const { ref, style } = useFadeIn(fadeInDuration, fadeInDelay)

  return (
    <AwardsContainer
      ref={ref}
      style={style}
      className="statistic-section__AwardsContainer"
    >
      <AwardItem
        organizationText="2018 구글 플레이스토어"
        awardText="올해의 앱 최우수상 수상"
        awardImage={playStoreBadge}
      />
      <AwardItem
        organizationText="2018 애플 앱스토어"
        awardText="오늘의 여행앱 선정"
        awardImage={appleBadge}
      />
    </AwardsContainer>
  )
}

Awards.defaultProps = defaultProps

export default Awards
