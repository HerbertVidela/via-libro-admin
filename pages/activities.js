import React from 'react'
import Head from 'next/head'
import { Container } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import Nav from '../components/nav'
import Activities from '../components/Activities';
import axios from 'axios';

axios.defaults.baseURL = 'https://vialibro-api.herokuapp.com';

const Home = () => (
	<Container>
		<CssBaseline />
		<Head>
			<title>LibroBot Admin - Actividades</title>
		</Head>
		<Nav />
		<Activities />
		<style jsx>{`
			body {
				margin: 0;
			}
		`}</style>
	</Container>
)

export default Home
