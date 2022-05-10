import { Button, Group, List, Modal, Stack } from "@mantine/core";
import { showNotification, updateNotification } from "@mantine/notifications";
import React, { useState } from "react";
import { GoCheck as CheckIcon, GoX as XIcon } from "react-icons/go";
import { server } from "../constants";
import {
	useAppointmentDispatch,
	useAppointmentStore,
} from "../context/AppointmentProvider";
import { ActionKind } from "../reducers/AppointmentReducer";
import { parseAppointmentDateTime } from "../utils/appointments";

type Props = {
	closeModal: () => void;
};

const ConfirmDialog: React.FC<Props> = ({ closeModal }) => {
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

	const [loading, setLoading] = useState(false);

	const createAppointment = async () => {
		const appointmentData = {
			datetime: parseAppointmentDateTime(appointmentDate, appointmentHour),
			name: userData.name,
			email: userData.email,
		};

		const result = await fetch(`${server}/api/appointments`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(appointmentData),
		});

		return result;
	};

	const handleCreation = async () => {
		setLoading(true);
		showNotification({
			id: "creating-appointment",
			disallowClose: loading,
			autoClose: false,
			title: "Sending data to schedule the appointment",
			message: "Please wait until the scheduling is completed",
			loading: true,
		});
		const response = await createAppointment();
		const result: { message: string } = await response.json();
		setLoading(false);
		if (response.ok) {
			updateNotification({
				id: "creating-appointment",
				disallowClose: loading,
				autoClose: 5000,
				title: "Scheduling successfully",
				message: result.message,
				icon: <CheckIcon />,
				color: "teal",
				loading: loading,
			});
			dispatch({ payload: null, type: ActionKind.REINITIALIZE });
			closeModal();
		} else {
			updateNotification({
				id: "creating-appointment",
				disallowClose: loading,
				autoClose: 5000,
				title: "Something went wrong",
				message: result.message,
				icon: <XIcon />,
				color: "red",
				loading: loading,
			});
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
						<Button
							disabled={loading}
							color="yellow"
							onClick={closeConfirmDialog}
						>
							Change Data
						</Button>
						<Button
							disabled={loading}
							color="green"
							onClick={async () => await handleCreation()}
						>
							Confirm Appointment
						</Button>
					</Group>
				</Stack>
			</Modal>
		</>
	);
};

export default ConfirmDialog;
