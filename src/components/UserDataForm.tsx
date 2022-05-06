import { Input, Stack } from "@mantine/core";
import React, { ChangeEvent } from "react";
import { UserData } from "../type";

type Props = {
	handleInput: (
		e: ChangeEvent<HTMLInputElement> & { target: { name: keyof UserData } }
	) => void;
};

const UserDataForm: React.FC<Props> = ({ handleInput }) => {
	return (
		<>
			<Stack>
				<Input
					name="name"
					type={"text"}
					placeholder="Your name"
					onChange={handleInput}
				/>
				<Input
					name="email"
					type={"email"}
					placeholder="Your email"
					onChange={handleInput}
				/>
			</Stack>
		</>
	);
};

export default UserDataForm;
