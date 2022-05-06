import { Stack, Button } from "@mantine/core";
import React from "react";
import { officeHours } from "../utils/hour";

type Props = {
	selectHour: (arg0: string) => void;
};

const HoursList: React.FC<Props> = ({ selectHour }) => {
	return (
		<Stack>
			{officeHours.map((e, index) => (
				<Button key={index} onClick={() => selectHour(e)}>
					{e}
				</Button>
			))}
		</Stack>
	);
};

export default HoursList;
