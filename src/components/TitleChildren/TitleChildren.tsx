import { memo } from 'react'

interface ITitleChildrenProps {
  children?: React.ReactNode
  title: string
}

const TitleChildren: React.FC<ITitleChildrenProps> = ({ title, children }) => {
  return (
    <>
      <div>
        <h5>{title}</h5>
      </div>
      {children}
    </>
  )
}

export default memo(TitleChildren)
