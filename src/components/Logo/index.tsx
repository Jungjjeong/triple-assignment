import useFadeIn from '../../hooks/useFadeIn'

import LogoSection from './Logo.style'

interface Props {
  text: string
  fadeInDuration: number
  fadeInDelay: number
}

const defaultProps = {
  text: '2021년 12월 기준',
  fadeInDuration: 0.7,
  fadeInDelay: 0,
}

const Logo = ({ text, fadeInDuration, fadeInDelay }: Props) => {
  const { ref, style } = useFadeIn(fadeInDuration, fadeInDelay)

  return (
    <LogoSection
      ref={ref}
      style={style}
      className="statistic-section__ContentLogo"
    >
      {text}
    </LogoSection>
  )
}

Logo.defaultProps = defaultProps

export default Logo
