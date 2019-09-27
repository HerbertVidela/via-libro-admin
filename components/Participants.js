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

const getVolunteers = async (setParticipants, setLoading, uuid) => {
	try {
		if (uuid) {
			const response = await axios.get(`/events/${uuid}/registrations`);
			const volunteers = response.data.map(({ volunteer }) => volunteer);

			setParticipants(volunteers);
			setLoading(false);
		}
	} catch (e) {
		console.log(e);
	}
}

const Participants = ({ uuid, ...props }) => {
	const [participants, setParticipants] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		getVolunteers(setParticipants, setLoading, uuid);
	}, [uuid]);

	if (isLoading)
		return <div>Cargando....</div>;

	console.log(participants)

	return (
		<div>
			<Title>Participantes</Title>
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
							{participants.length ? participants.map(volunteer => (
								<TableRow key={volunteer.psId}>
									<TableCell component="th" scope="row">
										{volunteer.name}
									</TableCell>
									<TableCell>{volunteer.email}</TableCell>
									<TableCell>{volunteer.occupation}</TableCell>
									<TableCell>{volunteer.phone}</TableCell>
								</TableRow>
							)) : (
								<TableRow>
									<TableCell colSpan={4} align="center" size="medium">
										<b>No hay ningun participantes registrados</b>
									</TableCell>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</Paper>
			</TableWrapper>
		</div>
	)
}

export default Participants;
