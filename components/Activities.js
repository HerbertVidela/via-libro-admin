import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import format from 'date-fns/format';
import Link from 'next/link';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

const formatDateTime = date => format(new Date(date), 'dd/MM/yyyy hh:mm aaaa');

const TitleWrapper = styled.div`
	padding: 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.div`
	font-size: 20px;
`;

const TableWrapper = styled.div`
	padding: 16px;
`;

const getVolunteers = async (setActivities, setLoading) => {
	const response = await axios.get('/events');
	const activities = response.data;

	setActivities(activities);
	setLoading(false);
}

const Volunteers = () => {
	const [activities, setActivities] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		getVolunteers(setActivities, setLoading);
	}, []);

	if (isLoading)
		return <div>Cargando....</div>;

	return (
		<div>
			<TitleWrapper>
				<Title>Actividades</Title>
				<Link href="/createActivity">
					<Button variant="contained" color="primary">
						Crear Actividad
					</Button>
				</Link>
			</TitleWrapper>
			<TableWrapper>
				<Paper>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Nombre</TableCell>
								<TableCell>Descripcion</TableCell>
								<TableCell>Fecha de inicio</TableCell>
								<TableCell>Fecha de fin</TableCell>
								<TableCell>Participantes</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{activities.map(activity => (
								<TableRow key={activity.key}>
									<TableCell component="th" scope="row">
										{activity.name}
									</TableCell>
									<TableCell>{activity.description}</TableCell>
									<TableCell>{formatDateTime(activity.start)}</TableCell>
									<TableCell>{formatDateTime(activity.end)}</TableCell>
									<TableCell>
										<Link href={`/activityParticipants/${activity.key}`}>
											<IconButton>
												<PeopleOutlineIcon />
											</IconButton>
										</Link>
									</TableCell>
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
