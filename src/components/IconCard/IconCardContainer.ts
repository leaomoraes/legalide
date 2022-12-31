import styled from 'styled-components'

interface IIconCardContainerProps {
  bgColor: string
  txtColor: string
}

export const IconCardContainer = styled.div<IIconCardContainerProps>`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ txtColor }) => txtColor};
  border-radius: 5px;
`
