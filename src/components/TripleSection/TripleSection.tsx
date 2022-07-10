import Awards from '../Awards'
import Logo from '../Logo'
import Metrics from '../Metrics'

import S from './TripleSection.style'

const TripleSection = () => {
  return (
    <S.section className="section__SectionContainer">
      <S.sectionContainer className="section__TripleSection">
        <Logo />
        <Metrics />
        <Awards />
      </S.sectionContainer>
    </S.section>
  )
}

export default TripleSection
