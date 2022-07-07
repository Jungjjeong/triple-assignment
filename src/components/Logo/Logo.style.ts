import styled from '@emotion/styled'

import { tripleLogo } from '../../assets'

const LogoSection = styled.div`
  position: absolute;
  top: 150px;
  box-sizing: border-box;
  width: 400px;
  height: 338px;
  padding-top: 280px;
  color: rgba(58, 58, 58, 0.7);
  font-size: 15px;
  font-family: sans-serif;
  text-align: center;
  background-image: url(${tripleLogo});
  background-repeat: no-repeat;
  background-size: 400px 338px;
`

export default LogoSection
