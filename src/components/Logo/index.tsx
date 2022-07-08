import useFadeIn from '../../hooks/useFadeIn'

import LogoSection from './Logo.style'

interface FadeInProps {
  duration: number
  delay: number
}

interface Props {
  text: string
  fadeInAnimation: FadeInProps
}

const defaultProps = {
  text: '2021년 12월 기준',
  fadeInAnimation: { duration: 0.7, delay: 0 },
}

const Logo = ({ text, fadeInAnimation }: Props) => {
  const { ref, style } = useFadeIn(
    fadeInAnimation.duration,
    fadeInAnimation.delay,
  )

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
