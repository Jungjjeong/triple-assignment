import { appleBadge, playStoreBadge } from '../../assets'
import useFadeIn from '../../hooks/useFadeIn'

import AwardsContainer from './Awards.style'
import AwardItem from './AwardItem'

interface FadeInProps {
  duration: number
  delay: number
}

interface Props {
  fadeInAnimation: FadeInProps
}

const defaultProps = {
  fadeInAnimation: { duration: 700, delay: 200 },
}

const Awards = ({ fadeInAnimation }: Props) => {
  const { ref, style } = useFadeIn(
    fadeInAnimation.duration,
    fadeInAnimation.delay,
  )

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
