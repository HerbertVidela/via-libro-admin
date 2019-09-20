import React from 'react'
import Head from 'next/head'
import { Container } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import Nav from '../../components/nav'
import Participants from '../../components/Participants';
import axios from 'axios';
import { useRouter } from 'next/router'

axios.defaults.baseURL = 'https://vialibro-api.herokuapp.com';

const Home = () => {
	const router = useRouter();
  const { uuid } = router.query

	return (
		<Container>
			<CssBaseline />
			<Head>
				<title>LibroBot Admin - Participantes </title>
			</Head>
				<Nav />
				<Participants uuid={uuid} />
				<style jsx>{`
				body {
					margin: 0;
				}
			`}</style>
		</Container>
	);
};

export default Home
