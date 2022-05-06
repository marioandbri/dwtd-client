import { Modal, Group, Button } from "@mantine/core";
import React, { ChangeEvent, useState } from "react";
import { UserData } from "../type";
import UserDataForm from "./UserDataForm";

type Props = {
	opened: boolean;
	setOpened: (arg0: boolean) => void;
	handleInput: (
		e: ChangeEvent<HTMLInputElement> & { target: { name: keyof UserData } }
	) => void;
};

const FormModal: React.FC<Props> = ({ opened, setOpened, handleInput }) => {
	return (
		<>
			<Modal
				opened={opened}
				onClose={() => setOpened(false)}
				title="Please, complete the contact form to schedule the appointment at the hour selected"
			>
				<UserDataForm handleInput={handleInput} />
			</Modal>
		</>
	);
};

export default FormModal;
