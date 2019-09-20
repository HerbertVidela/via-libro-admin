import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Router from 'next/router'
import styled from 'styled-components';
import format from 'date-fns/format';
import Swal from 'sweetalert2';
import uuidv4 from 'uuid/v4';

import Link from 'next/link';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

const Title = styled.div`
	padding: 16px 16px 0 16px;
	font-size: 20px;
`;

const Form = styled.div`
	padding: 0 16px 16px 16px;
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	padding-top: 16px;
`;

const Divider = styled.div`
	width: ${({ width }) => width}px;
`;

const Dates = styled.div`
	display: flex;
	padding-top: 16px;
`;

const formatDate = date => JSON.stringify(new Date(date));

const handleChange = (setStateCallback, formattingFun = null) => event => {
	const formattedValue = formattingFun ? formattingFun(event.target.value) : event.target.value;

	setStateCallback(formattedValue);
};

const submitForm = fields => () => {
	const key = uuidv4();
	const areFieldsFill = Object.keys(fields).every(key => fields[key]);

	if (!areFieldsFill) {
		Swal.fire(
			'Formulario incompleto',
			'Por favor completa todos los formularios',
			'error'
		);

		return;
	}

	axios.post('/events', { key, ...fields }).then(() => {
		Swal.fire(
			'Evento creado!',
			'Tu evento ha sido creado satisfactoriamente.',
			'success'
		).then(() => Router.push('/activities'));
	}).catch(() => {
		Swal.fire(
			'Algo salio mal',
			'Por favor contacta a un administrador',
			'error'
		);
	});
};

const Volunteers = () => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');

	const fields = { name, description, startDate, endDate };

	return (
		<div>
			<Title>Crear actividad</Title>
			<Form>
				<TextField
					id="standard-name"
					label="Nombre"
					value={name}
					onChange={handleChange(setName)}
					margin="normal"
					fullWidth
				/>
				<TextField
					id="standard-description"
					label="Descripcion"
					value={description}
					onChange={handleChange(setDescription)}
					margin="normal"
					fullWidth
				/>
				<Dates>
					<TextField
						id="datetime-start-date"
						label="Fecha de inicio"
						type="datetime-local"
						onChange={handleChange(setStartDate, formatDate)}
						InputLabelProps={{
							shrink: true,
						}}
					/>
					<Divider width={24} />
					<TextField
						id="datetime-end-date"
						label="Fecha de fin"
						type="datetime-local"
						onChange={handleChange(setEndDate, formatDate)}
						InputLabelProps={{
							shrink: true,
						}}
					/>
				</Dates>
				<ButtonWrapper>
					<Button variant="contained" color="primary" onClick={submitForm(fields)}>
						Guardar
					</Button>
				</ButtonWrapper>
			</Form>
		</div>
	)
}

export default Volunteers;
