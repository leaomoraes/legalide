import { memo } from 'react'

import { Form, InputGroup } from 'react-bootstrap'

import BtnBase from 'components/BtnBase'

import { SubscribeContainer } from './SubscribeContainer'

interface ISubscribeProps {
  children?: React.ReactNode
}

const Subscribe: React.FC<ISubscribeProps> = () => {
  return (
    <SubscribeContainer className="py-4 me-auto ms-auto mt-5 px-3">
      <h3>Subscribe For Latest Newsletter</h3>

      <InputGroup>
        <Form.Control
          placeholder="Your email"
          aria-label="Your email"
          aria-describedby="submit"
        />
        <BtnBase>Subscribe</BtnBase>
      </InputGroup>
    </SubscribeContainer>
  )
}

export default memo(Subscribe)
