import { Button, Group, Input, Stack } from "@mantine/core";
import React, { ChangeEvent, useState } from "react";
import { useAppointmentDispatch } from "../context/AppointmentProvider";
import { ActionKind } from "../reducers/AppointmentReducer";
import { UserData } from "../types";

type Props = {
	displayHours: () => void;
};

const UserDataForm: React.FC<Props> = ({ displayHours }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const dispatch = useAppointmentDispatch();

	const setAppointmentData = () => {
		dispatch({ payload: { name, email }, type: ActionKind.SET_USERDATA });
		dispatch({ payload: true, type: ActionKind.SET_CONFIRM_DIALOG });
	};

	return (
		<>
			<Stack>
				<Input
					value={name}
					type="text"
					placeholder="Your name"
					icon={<>🧑</>}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setName(e.target.value)
					}
				/>
				<Input
					value={email}
					type="email"
					placeholder="Your email"
					icon={<>📧</>}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setEmail(e.target.value)
					}
				/>
				<Group position="center" spacing="lg">
					<Button color={"yellow"} onClick={displayHours}>
						Change hour
					</Button>
					<Button onClick={setAppointmentData}>Set Appointment</Button>
				</Group>
			</Stack>
		</>
	);
};

export default UserDataForm;
