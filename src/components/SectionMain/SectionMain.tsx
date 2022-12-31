import { memo } from 'react'

import { Container } from 'react-bootstrap'

interface ISectionMainProps {
  title: string
  align?: string
  subtitle: string
  children?: React.ReactNode
}

const SectionMain: React.FC<ISectionMainProps> = ({
  title,
  subtitle,
  align = 'center',
  children,
}) => {
  return (
    <Container className={`text-${align} text-white pt-5`}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {children}
    </Container>
  )
}

export default memo(SectionMain)
