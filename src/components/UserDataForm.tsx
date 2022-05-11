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

/**
 * Component responsible for rendering the form and inputs to collect the user data, and the state for the input validation
 * @param props
 * @returns A form with inputs for user's name and email
 */
const UserDataForm: React.FC<Props> = ({ displayHours }) => {
	const dispatch = useAppointmentDispatch();
	const { name, email } = useAppointmentStore().userData;

	/**
	 * Object with the inputs values and state setters, error status, error messages, and validation Rules
	 */
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

	/**
	 * Updates the user's data
	 */
	const updateUserData = () => {
		dispatch({
			payload: { name: form.values.name, email: form.values.email },
			type: ActionKind.SET_USERDATA,
		});
	};

	/**
	 * Sets the user's data and renders the confirm dialog
	 */
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
