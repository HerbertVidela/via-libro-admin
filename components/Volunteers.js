import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Title = styled.div`
	padding: 16px;
	font-size: 20px;
`;

const TableWrapper = styled.div`
	padding: 16px;
`;

const getVolunteers = async (setVolunteers, setLoading) => {
	const response = await axios.get('/volunteers');
	const volunteers = response.data;

	setVolunteers(volunteers);
	setLoading(false);
}

const Volunteers = () => {
	const [volunteers, setVolunteers] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		getVolunteers(setVolunteers, setLoading);
	}, []);

	if (isLoading)
		return <div>Cargando....</div>;

	return (
		<div>
			<Title>Voluntarios</Title>
			<TableWrapper>
				<Paper>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Nombre</TableCell>
								<TableCell>Correo</TableCell>
								<TableCell>Ocupacion</TableCell>
								<TableCell>Telefono</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{volunteers.map(volunteer => (
								<TableRow key={volunteer.psId}>
									<TableCell component="th" scope="row">
										{volunteer.name}
									</TableCell>
									<TableCell>{volunteer.email}</TableCell>
									<TableCell>{volunteer.occupation}</TableCell>
									<TableCell>{volunteer.phone}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</Paper>
			</TableWrapper>
		</div>
	)
}

export default Volunteers;
