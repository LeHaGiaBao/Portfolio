import React from 'react'

import {Cards, Container, Footer, Header, Main} from '@components'

const Home: React.FC = () => {
	return (
		<Container>
			<Header />
			<Main />
			<Cards />
			<Footer />
		</Container>
	)
}

export default Home
