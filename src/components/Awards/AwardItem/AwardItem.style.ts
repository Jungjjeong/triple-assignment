import styled from '@emotion/styled'

interface Props {
  image: string
}

const ItemContainer = styled.div`
  height: 54px;
  margin-right: 39px;
  padding: 5px 0px 5px 62px;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
  font-size: 14px;
  font-family: sans-serif;
  line-height: 22px;
  background-image: url(${(props: Props) => props.image});
  background-repeat: no-repeat;
  background-position: left top;
  background-size: 54px 54px;
`

export default ItemContainer
