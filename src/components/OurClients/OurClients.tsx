import { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import client1 from 'assets/client1.png'
import client2 from 'assets/client2.png'
import client3 from 'assets/client3.png'
import client4 from 'assets/client4.png'
import client5 from 'assets/client5.png'
import client6 from 'assets/client6.png'

import Subscribe from '../Subscribe'

const OurClients: React.FC = () => {
  return (
    <Container className="text-white justify-content-center align-items-center py-5">
      <Row className="d-flex flex-column flex-md-row row-cols-1 row-cols-md-6 text-center justify-content-between align-items-between align-items-md-center py-5">
        <Col>
          <img src={client1} alt="client1" className="img-fluid" />
        </Col>
        <Col>
          <img src={client2} alt="client2" className="img-fluid" />
        </Col>
        <Col>
          <img src={client3} alt="client3" className="img-fluid" />
        </Col>
        <Col>
          <img src={client4} alt="client4" className="img-fluid" />
        </Col>
        <Col>
          <div>
            <img src={client5} alt="client5" className="img-fluid" />
          </div>
        </Col>
        <Col>
          <div>
            <img src={client6} alt="client6" className="img-fluid" />
          </div>
        </Col>
      </Row>
      <div>
        <Subscribe />
      </div>
    </Container>
  )
}

export default memo(OurClients)
