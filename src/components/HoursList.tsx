import { Stack, Button } from "@mantine/core";
import React from "react";
import { useAppointmentDispatch } from "../context/AppointmentProvider";
import { ActionKind } from "../types.d";
import { officeHours } from "../utils/hour";

type Props = {
	displayUserForm: () => void;
};

const HoursList: React.FC<Props> = ({ displayUserForm }) => {
	const dispatch = useAppointmentDispatch();
	return (
		<Stack>
			{officeHours.map((e, index) => (
				<Button
					key={index}
					onClick={() => {
						dispatch({ payload: e, type: ActionKind.SET_HOUR });
						displayUserForm();
					}}
				>
					{e}
				</Button>
			))}
		</Stack>
	);
};

export default HoursList;
