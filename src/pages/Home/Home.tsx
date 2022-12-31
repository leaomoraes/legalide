import { memo, useEffect } from 'react'

import Footer from 'components/Footer'
import Header from 'components/Header'
import Main from 'components/Main'

import useTitle from 'hooks/useTitle'

const Home: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Legalide')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default memo(Home)
