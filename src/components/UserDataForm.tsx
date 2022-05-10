import { Button, Group, Input, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import React from "react";
import {
	useAppointmentDispatch,
	useAppointmentStore,
} from "../context/AppointmentProvider";
import { ActionKind } from "../reducers/AppointmentReducer";

type Props = {
	displayHours: () => void;
};

const UserDataForm: React.FC<Props> = ({ displayHours }) => {
	const dispatch = useAppointmentDispatch();
	const { name, email } = useAppointmentStore().userData;

	const form = useForm({
		initialValues: {
			name: name || "",
			email: email || "",
		},
		validationRules: {
			name: (value) => /[A-z\s]{2,}/.test(value),
			email: (value) => /^\S+@\S+$/.test(value),
		},
		errorMessages: {
			email: "That doesn't look like a real email",
			name: "Are you sure that's your actual name?",
		},
	});

	const updateUserData = () => {
		dispatch({
			payload: { name: form.values.name, email: form.values.email },
			type: ActionKind.SET_USERDATA,
		});
	};

	const setAppointmentData = () => {
		dispatch({
			payload: { name: form.values.name, email: form.values.email },
			type: ActionKind.SET_USERDATA,
		});
		dispatch({ payload: true, type: ActionKind.SET_CONFIRM_DIALOG });
	};

	return (
		<>
			<form onSubmit={form.onSubmit(() => setAppointmentData())}>
				<Stack>
					<TextInput
						{...form.getInputProps("name")}
						label="Name"
						placeholder="Joe..."
						icon={<>🧑</>}
						onBlur={updateUserData}
					/>
					<TextInput
						{...form.getInputProps("email")}
						label="E-mail"
						placeholder="Joe@domain.com"
						icon={<>📧</>}
						onBlur={updateUserData}
					/>
					<Group position="center" spacing="lg">
						<Button color={"yellow"} onClick={displayHours}>
							Change hour
						</Button>
						<Button type="submit">Set Appointment</Button>
					</Group>
				</Stack>
			</form>
		</>
	);
};

export default UserDataForm;
