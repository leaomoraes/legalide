import { memo } from 'react'

import { PicCardContainer } from './PicCardContainer'

interface IPicCardProps {
  title: string
  description: string
  imgUrl: string
  children?: React.ReactNode
}

const PicCard: React.FC<IPicCardProps> = ({ title, description, imgUrl }) => {
  return (
    <PicCardContainer className="d-flex flex-column justify-content-between">
      <div className="py-4 mx-3">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
      <div>
        <img src={imgUrl} className="card-img-top" alt="..." />
      </div>
    </PicCardContainer>
  )
}

export default memo(PicCard)
