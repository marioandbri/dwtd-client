import { Button, Input, Stack } from "@mantine/core";
import React, { ChangeEvent, useState } from "react";
import { UserData } from "../types";

type Props = {
	displayHours: () => void;
};

const UserDataForm: React.FC<Props> = ({ displayHours }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

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
				<Button>Set Appointment</Button>
			</Stack>
		</>
	);
};

export default UserDataForm;
