import useFadeIn from '../../hooks/useFadeIn'

import LogoSection from './Logo.style'

interface Props {
  text: string
}

const defaultProps = {
  text: '',
}

const Logo = ({ text }: Props) => {
  const { ref, style } = useFadeIn(0.7, 0)

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
