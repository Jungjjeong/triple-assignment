import appleBadge from '../../assets/badge-apple4x.png'
import playStoreBadge from '../../assets/play-store2x.png'

import AwardsContainer from './Awards.style'
import AwardItem from './AwardItem'

const Awards = () => {
  return (
    <AwardsContainer>
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

export default Awards
