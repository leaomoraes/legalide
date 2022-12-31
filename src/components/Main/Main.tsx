import { memo } from 'react'

import { Col, Row } from 'react-bootstrap'
import { BsTelephone } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'
import { HiOutlineDocumentCheck } from 'react-icons/hi2'
import { MdGroups, MdSpeed } from 'react-icons/md'
import { RiAuctionLine } from 'react-icons/ri'
import { SlLocationPin } from 'react-icons/sl'
import { VscLaw } from 'react-icons/vsc'

import cover1 from 'assets/cover1.png'
import cover2 from 'assets/cover2.png'
import cover3 from 'assets/cover3.png'
import cover4 from 'assets/cover4.png'

import ContactCard from 'components/ContactCard'
import IconCard from 'components/IconCard'
import OurClients from 'components/OurClients'
import PicCard from 'components/PicCard'
import SectionMain from 'components/SectionMain'

const Main: React.FC = () => {
  return (
    <main>
      <SectionMain
        title="Our Practice Areas"
        subtitle="Problems trying to resolve
          the conflict between the
          two major realms of Classical
          physics: Newtonian mechanics "
      >
        <Row className="row-cols-1 row-cols-md-3">
          <Col>
            <IconCard icon={VscLaw} description="Family Law" />
          </Col>
          <Col className="my-2 my-md-0">
            <IconCard icon={RiAuctionLine} description="Business Law" />
          </Col>
          <Col>
            <IconCard
              icon={HiOutlineDocumentCheck}
              description="Trust & Estates"
            />
          </Col>
        </Row>
      </SectionMain>
      <SectionMain
        title="Practice Advice"
        subtitle="Problems trying to resolve
          the conflict between the
          two major realms of Classical
          physics: Newtonian mechanics "
      >
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
          <Col className="d-flex">
            <PicCard
              title="Frauds or Mislead"
              description="Newton thought that light was made up of particles, but then it was discovered"
              imgUrl={cover1}
            />
          </Col>
          <Col className="d-flex">
            <PicCard
              title="Bailes & Warrants"
              description="“Quantum mechanics” is the description of the behaviour of matter"
              imgUrl={cover2}
            />
          </Col>
          <Col className="d-flex">
            <PicCard
              title="Federal Drug Crimes"
              description="They describe a universe consisting of bodies moving"
              imgUrl={cover3}
            />
          </Col>
          <Col className="d-flex">
            <PicCard
              title="Traffic Related Crimes"
              description="They finally obtained a consistent description of the behaviour "
              imgUrl={cover4}
            />
          </Col>
        </Row>
      </SectionMain>
      <SectionMain
        title="Who we are"
        subtitle="Problems trying to resolve
          the conflict between the
          two major realms of Classical
          physics: Newtonian mechanics "
      >
        <Row className="row-cols-1 row-cols-md-2">
          <Col md={7}>
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/qJ6a-SCEA-o"
                title="Better Call Saul unforgettable moments"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </Col>
          <Col md={5}>
            <SectionMain
              title="Most trusted in our field"
              align="start"
              subtitle="Problems trying to resolve
            the conflict between the
            two major realms of Classical
            physics: Newtonian mechanics "
            >
              <div className="d-flex">
                <div className="me-3">
                  <MdGroups size="2rem" color="#D0A144" />
                </div>
                <div>
                  <p>
                    The quick fox jumps over the lazy dog. Things on a very
                    small scale ...
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="me-3">
                  <MdSpeed size="2rem" color="#D0A144" />
                </div>
                <div>
                  <p>
                    The quick fox jumps over the lazy dog. Things on a very
                    small scale ...
                  </p>
                </div>
              </div>
            </SectionMain>
          </Col>
        </Row>
      </SectionMain>
      <OurClients />
      <SectionMain
        title="Get In Touch"
        subtitle="Problems trying to resolve
          the conflict between the
          two major realms of Classical
          physics: Newtonian mechanics "
      >
        <Row className="row-cols-1 row-cols-md-3 py-3 g-0 align-items-center justify-content-center">
          <Col className="py-4">
            <ContactCard
              emails={['georgia.young@example.com', 'georgia.young@ple.com']}
              icon={BsTelephone}
            />
          </Col>
          <Col>
            <ContactCard
              emails={['georgia.young@example.com', 'georgia.young@ple.com']}
              icon={SlLocationPin}
            />
          </Col>
          <Col className="py-4">
            <ContactCard
              emails={['georgia.young@example.com', 'georgia.young@ple.com']}
              icon={FiSend}
            />
          </Col>
        </Row>
      </SectionMain>
    </main>
  )
}
export default memo(Main)
