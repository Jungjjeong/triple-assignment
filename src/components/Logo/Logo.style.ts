import styled from '@emotion/styled'

import { tripleLogo } from '../../assets'

const LogoSection = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  background-image: url(${tripleLogo});
  background-repeat: no-repeat;
  background-size: 400px 338px;
  padding-top: 280px;
  text-align: center;
  color: rgba(58, 58, 58, 0.7);
  font-size: 15px;
`

export default LogoSection
