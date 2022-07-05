import LogoSection from './Logo.style'

interface Props {
  text: string
}

const defaultProps = {
  text: '',
}

const Logo = ({ text }: Props) => {
  return <LogoSection>{text}</LogoSection>
}

Logo.defaultProps = defaultProps

export default Logo
