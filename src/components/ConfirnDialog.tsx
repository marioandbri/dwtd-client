import { Button, Group, List, Modal, Stack } from "@mantine/core";
import dayjs from "dayjs";
import React from "react";
import {
	useAppointmentDispatch,
	useAppointmentStore,
} from "../context/AppointmentProvider";
import { ActionKind } from "../reducers/AppointmentReducer";
import UserDataForm from "./UserDataForm";
import customParseFormat from "dayjs/plugin/customParseFormat";

type Props = {};

const ConfirmDialog = (props: Props) => {
	const {
		appointmentDate,
		appointmentHour,
		userData,
		confirmDialog,
	} = useAppointmentStore();

	const dispatch = useAppointmentDispatch();
	const closeConfirmDialog = () => {
		dispatch({ payload: false, type: ActionKind.SET_CONFIRM_DIALOG });
	};

	const createAppointment = async () => {
		dayjs.extend(customParseFormat);
		const appointmentData = {
			datetime: dayjs(
				`${appointmentDate} ${appointmentHour}`,
				"YYYY-MM-DD hh:mm:ss A"
			),
			name: userData.name,
			email: userData.email,
		};
		console.log(appointmentData);
		const result = await fetch(`http://localhost:4000/api/appointments`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(appointmentData),
		});
		return result;
	};
	const handleCreation = async () => {
		const result = await createAppointment();
		const response = await result.json();
		if (result.ok) {
			console.log(response);
		} else {
			console.log(response);
		}
	};

	return (
		<>
			<Modal
				title="Is the appointment data correct?"
				opened={confirmDialog}
				onClose={closeConfirmDialog}
			>
				<Stack>
					<List spacing="sm" center size="sm">
						<List.Item icon={<>🧑</>}>{userData.name}</List.Item>
						<List.Item icon={<>📧</>}>{userData.email}</List.Item>
						<List.Item icon={<>📅</>}>{appointmentDate}</List.Item>
						<List.Item icon={<>⌚</>}>{appointmentHour}</List.Item>
					</List>
					<Group position="center" spacing="lg">
						<Button color="yellow" onClick={closeConfirmDialog}>
							Change Data
						</Button>
						<Button color="green" onClick={async () => await handleCreation()}>
							Confirm Appointment
						</Button>
					</Group>
				</Stack>
			</Modal>
		</>
	);
};

export default ConfirmDialog;
