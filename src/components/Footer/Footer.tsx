import { memo } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import { BsTelephone } from 'react-icons/bs'
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { Link } from 'react-router-dom'

import TitleChildren from 'components/TitleChildren'

import { FooterBg } from './FooterBg'

const Footer: React.FC = () => {
  return (
    <>
      <Container className="text-light py-3">
        <div className="d-flex justify-content-between">
          <div>
            <h3>Request free consultantion</h3>
            <p>the quick fox jumps over the lazy dog</p>
          </div>
          <div>
            <button type="button" className="btn btn-light ">
              Contact Us
            </button>
          </div>
        </div>
      </Container>
      <FooterBg className="text-light py-3">
        <Container>
          <Row className="row-cols-1 row-cols-md-5">
            <Col>
              <TitleChildren title="Company Info">
                <div>
                  <Link to="/">
                    <p>About Us</p>
                  </Link>
                  <Link to="/">
                    <p>Carrier</p>
                  </Link>
                  <Link to="/">
                    <p>We are hiring</p>
                  </Link>
                  <Link to="/">
                    <p>Blog</p>
                  </Link>
                </div>
              </TitleChildren>
            </Col>
            <Col>
              <TitleChildren title="Legal">
                <div>
                  <Link to="/">
                    <p>About Us</p>
                  </Link>
                  <Link to="/">
                    <p>Carrier</p>
                  </Link>
                  <Link to="/">
                    <p>We are hiring</p>
                  </Link>
                  <Link to="/">
                    <p>Blog</p>
                  </Link>
                </div>
              </TitleChildren>
            </Col>
            <Col>
              <TitleChildren title="Features">
                <div>
                  <Link to="/">
                    <p>Business Marketing</p>
                  </Link>
                  <Link to="/">
                    <p>User Analytic</p>
                  </Link>
                  <Link to="/">
                    <p>Live Chat</p>
                  </Link>
                  <Link to="/">
                    <p>Unlimited Support</p>
                  </Link>
                </div>
              </TitleChildren>
            </Col>
            <Col>
              <TitleChildren title="Resources">
                <div>
                  <Link to="/">
                    <p>IOS & Android</p>
                  </Link>
                  <Link to="/">
                    <p>Watch a Demo</p>
                  </Link>
                  <Link to="/">
                    <p>Customers</p>
                  </Link>
                  <Link to="/">
                    <p>API</p>
                  </Link>
                </div>
              </TitleChildren>
            </Col>
            <Col>
              <TitleChildren title="Get in touch">
                <div className="d-flex align-items-center">
                  <div className="me-2">
                    <BsTelephone size="28" color="#8EC2F2" />
                  </div>
                  <div>
                    <h6>(480) 555-0103</h6>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="me-2">
                    <HiOutlineLocationMarker size="28" color="#8EC2F2" />
                  </div>
                  <div>
                    <h6>4517 Washington Ave. Manchester, Kentucky 39495</h6>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="me-2">
                    <FiSend size="28" color="#8EC2F2" />
                  </div>
                  <div>
                    <h6>debra.holt@example.com</h6>
                  </div>
                </div>
              </TitleChildren>
            </Col>
          </Row>
        </Container>
      </FooterBg>
      <Container>
        <div className="d-flex text-light justify-content-between">
          <div>
            <p>Made With Love By Figmaland All Right Reserved </p>
          </div>
          <div>
            <Link to="/" className="me-2">
              <FaFacebookSquare />
            </Link>
            <Link to="/" className="me-2">
              <FaInstagram />
            </Link>
            <Link to="/" className="me-2">
              <FaTwitter />
            </Link>
            <Link to="/" className="me-2">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </Container>
    </>
  )
}

export default memo(Footer)
