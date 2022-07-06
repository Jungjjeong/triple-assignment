import styled from '@emotion/styled'

interface Props {
  image: string
}

const ItemContainer = styled.div`
  background-size: 54px 54px;
  background-position: left top;
  background-repeat: no-repeat;
  background-image: url(${(props: Props) => props.image});
  color: rgba(58, 58, 58, 0.8);
  height: 54px;
  padding: 5px 0px 5px 62px;
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
  margin-right: 39px;
`

export default ItemContainer
