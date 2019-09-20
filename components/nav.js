import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Wrapper = styled.div`
	flex-grow: 1;
`;

const Title = styled.div`
	flex-grow: 1;
`;

const Nav = () => {
  return (
    <Wrapper>
      <AppBar position="static">
        <Toolbar>
					<Title>
						<Typography variant="h6">
							Via Libro
						</Typography>
					</Title>
          {/* <Button color="inherit">Voluntarios</Button> */}
        </Toolbar>
      </AppBar>
    </Wrapper>
  );
}

export default Nav;
