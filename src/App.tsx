import styled from '@emotion/styled'

import { TripleSection } from './components'

const HeaderText = styled.h1`
  width: fit-content;
  margin: 50px auto;
  font-size: 3rem;
`

const App = () => {
  return (
    <div>
      <header>
        <HeaderText>Triple Frontend Practice</HeaderText>
      </header>
      <section>
        <TripleSection />
      </section>
    </div>
  )
}

export default App
