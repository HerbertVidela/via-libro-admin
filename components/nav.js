import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Wrapper = styled.div`
	flex-grow: 1;
`;

const Title = styled.div`
	flex-grow: 1;

	a {
		color: white;
		text-decoration: none;
		padding: 20px 0;
	}
`;

const Nav = () => {
  return (
    <Wrapper>
      <AppBar position="static">
        <Toolbar>
					<Title>
						<Typography>
							<Link href="/">
								<a>
									Via Libro
								</a>
							</Link>
						</Typography>
					</Title>
        </Toolbar>
      </AppBar>
    </Wrapper>
  );
}

export default Nav;
