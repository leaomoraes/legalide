import { memo } from 'react'

import { IconType } from 'react-icons/lib'

import { IconCardContainer } from './IconCardContainer'

interface IIconCardProps {
  icon: IconType
  description: string
  bgColor?: string
  txtColor?: string
}

const IconCard: React.FC<IIconCardProps> = ({
  icon,
  description,
  bgColor = '#fff',
  txtColor = '#295C7A',
}) => {
  const Icon = icon

  return (
    <IconCardContainer
      className="m-3 m-md-1 py-3"
      bgColor={bgColor}
      txtColor={txtColor}
    >
      <Icon size="42" className="my-2" />
      <h6 className="my-3">{description}</h6>
    </IconCardContainer>
  )
}

export default memo(IconCard)
