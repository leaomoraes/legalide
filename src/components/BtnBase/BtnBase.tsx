import { memo } from 'react'

import { StyledBtn } from './StyledBtn'

interface IBtnBaseProps {
  children?: React.ReactNode
}

const BtnBase: React.FC<IBtnBaseProps> = ({ children }) => {
  return (
    <StyledBtn type="button" className="btn">
      {children}
    </StyledBtn>
  )
}

export default memo(BtnBase)
