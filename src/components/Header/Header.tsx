import { memo } from 'react'

import { Container } from 'react-bootstrap'
import { FaBars, FaSearch } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

import Banner from 'components/Banner'

import { HeaderSt, MenuLogo } from './HeaderSt'

const Header: React.FC = () => {
  return (
    <HeaderSt>
      <Container>
        <div className="d-flex justify-content-between align-items-center pt-2">
          <div>
            <MenuLogo to="/">
              <h2>Legalide</h2>
            </MenuLogo>
          </div>
          <div className="d-flex d-md-none">
            <div>
              <FaSearch />
            </div>
            <div className="mx-2">
              <IoCartOutline />
            </div>
            <div>
              <FaBars />
            </div>
          </div>
          <div className="d-none d-md-flex">
            <div>
              <ul className="d-flex align-items-center justify-content-center">
                <li className="me-3">
                  <Link to="/">Practice Areas</Link>
                </li>
                <li className="me-3">
                  <Link to="/">Practice Advice</Link>
                </li>
                <li className="me-3">
                  <Link to="/">Who we are</Link>
                </li>
                <li className="me-3">
                  <Link to="/">Contact</Link>
                </li>
                <li>
                  <Link to="/">
                    <FaBars />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center d-md-none py-5">
          <ul className="d-flex flex-column justify-content-between">
            <li className="mb-3">
              <Link to="/">Home</Link>
            </li>
            <li className="mb-3">
              <Link to="/">Product</Link>
            </li>
            <li className="mb-3">
              <Link to="/">Pricing</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
      </Container>
      <Banner />
    </HeaderSt>
  )
}

export default memo(Header)
