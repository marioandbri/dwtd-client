import { Stack, Button, LoadingOverlay } from "@mantine/core";
import React, { useEffect, useState } from "react";
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
	const dispatch = useAppointmentDispatch();
	const { appointmentDate } = useAppointmentStore();
	const [loading, isLoading] = useState(false);
	const [hoursUnavailable, setHoursUnavailable] = useState<Appointment[]>([]);

	const fetchHours = async () => {
		const query = new URLSearchParams({ date: appointmentDate });
		if (appointmentDate === "") return;
		const response = await fetch(`${server}/api/appointments?${query}`);
		const result: Appointment[] | null = await response.json();
		if (response.ok) {
			setHoursUnavailable(result!);
			isLoading(false);
		} else {
			console.error("error", result);
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
