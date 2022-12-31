import { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import woman from 'assets/woman.png'

import { BannerBg, BtnRoundFill, BtnRoundOutline } from './BannerBg'

const Banner: React.FC = () => {
  return (
    <BannerBg>
      <Container>
        <Row className="row-cols-1 row-cols-md-2 pt-5 m-auto align-items-center justify-content-md-center bannercontainer">
          <Col>
            <div className="text-center text-md-start">
              <h1 className="mb-4">LEGAL PRO SERVICES</h1>
              <p className="mb-4">
                We know how large objects will act, but things on a small scale
                just do not act that way.
              </p>
              <div className="d-flex flex-column flex-md-row justify-content-center align-items-center mb-5 pb-5">
                <BtnRoundFill
                  type="button"
                  className="btn btn-rounded-fill mx-auto mx-md-2 mb-3"
                >
                  Get Quote Now
                </BtnRoundFill>
                <BtnRoundOutline
                  type="button"
                  className="btn mx-auto mx-md-2 mb-3"
                >
                  Learn More
                </BtnRoundOutline>
              </div>
            </div>
          </Col>
          <Col>
            <img className="img-fluid" src={woman} alt="woman" />
          </Col>
        </Row>
      </Container>
    </BannerBg>
  )
}

export default memo(Banner)
