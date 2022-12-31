import styled from 'styled-components'

import bgsm from 'assets/headerbgsm.png'

export const BannerBg = styled.div`
  h1 {
    font-weight: bold;
  }

  @media (max-width: 767px) {
    background-image: url(${bgsm});
    background-repeat: no-repeat;
    background-size: cover;
  }
`
export const BtnRoundOutline = styled.button`
  color: #fff;
  border-color: #fff;
  border-radius: 20px;
  font-size: 14px;
`
export const BtnRoundFill = styled.button`
  color: #fff;
  background-color: #d0a144;
  border-radius: 20px;
  font-size: 14px;
`
