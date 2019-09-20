import React from 'react'
import styled from 'styled-components';
import Link from 'next/link'
import Head from 'next/head'
import axios from 'axios';
import { Container } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import PeopleIcon from '@material-ui/icons/People';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

import Nav from '../components/nav'

axios.defaults.baseURL = 'https://vialibro-api.herokuapp.com';

const StyledButton = styled(Button)`
	&&& {
		padding: 24px;
		font-size: 16px;
		display: block;
		margin-right: 16px;

		&:last-child {
			margin-right: 0;
		}
	}
`;

const Body = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ButtonsWrapper = styled.div`
	display: flex;
	margin-top: -106px;
`;

const Home = () => (
  <Container>
		<CssBaseline />
    <Head>
      <title>LibroBot Admin</title>
    </Head>
    <Nav />
	
		<Body>
			<ButtonsWrapper>
				<Link href="/volunteers">
					<StyledButton variant="outlined">
						<PeopleIcon style={{ fontSize: 128 }} />
						<div>Voluntarios</div>
					</StyledButton>
				</Link>
				<Link href="/activities">
					<StyledButton variant="outlined">
						<LibraryBooksIcon style={{ fontSize: 128 }} />
						<div>Actividades</div>
					</StyledButton>
				</Link>
			</ButtonsWrapper>
		</Body>

    <style jsx>{`
			body {
				margin: 0;
			}
    `}</style>
  </Container>
)

export default Home
