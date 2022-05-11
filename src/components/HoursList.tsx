import { Stack, Button, LoadingOverlay } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import React, { useEffect, useState } from "react";
import { GoX } from "react-icons/go";
import { server } from "../constants";
import {
	useAppointmentDispatch,
	useAppointmentStore,
} from "../context/AppointmentProvider";
import { ActionKind } from "../reducers/AppointmentReducer";
import { Appointment } from "../types";
import { isUnavailable } from "../utils/appointments";
import { officeHours } from "../utils/hour";

type Props = {
	displayUserForm: () => void;
};

const HoursList: React.FC<Props> = ({ displayUserForm }) => {
	/**
	 * Dispatcher for the appointments reducer actions
	 */
	const dispatch = useAppointmentDispatch();
	/**
	 * Date set for the appointment
	 */
	const { appointmentDate } = useAppointmentStore();
	const [loading, isLoading] = useState(false);
	const [hoursUnavailable, setHoursUnavailable] = useState<Appointment[]>([]);
	/**
	 * Fetches the hours scheduled for the date selected previously.
	 * Mutates the state responsible for the loading display and the hours availables.
	 * If some error occurs, display a notification message with error information
	 */
	const fetchHours = async () => {
		const query = new URLSearchParams({ date: appointmentDate });
		if (appointmentDate === "") return;
		try {
			const response = await fetch(`${server}/api/appointments?${query}`);
			const result: Appointment[] | null = await response.json();
			if (response.ok) {
				setHoursUnavailable(result!);
				isLoading(false);
			} else {
				console.error("error", result);
				showNotification({
					message: "Something unexpected happened, please try again later",
					icon: <GoX />,
					color: "red",
					title:
						"An error has occurred while fetching the appointments for this date",
				});
			}
		} catch (e) {
			showNotification({
				message: e.message,
				icon: <GoX />,
				color: "red",
				title:
					"An error has occurred while fetching the appointments for this date",
			});
		}
	};

	useEffect(() => {
		isLoading(true);
		fetchHours();

		return () => {};
	}, []);

	return (
		<div style={{ position: "relative", height: "100%", width: "100%" }}>
			<LoadingOverlay visible={loading}></LoadingOverlay>
			<Stack>
				{officeHours.map((hour, index) => {
					return (
						<Button
							disabled={isUnavailable(hour, hoursUnavailable)}
							key={index}
							onClick={() => {
								dispatch({ payload: hour, type: ActionKind.SET_HOUR });
								displayUserForm();
							}}
						>
							{hour}
						</Button>
					);
				})}
			</Stack>
		</div>
	);
};

export default HoursList;
