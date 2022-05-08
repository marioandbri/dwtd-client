import { Center } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import React, { useState } from "react";
import { useAppointmentDispatch } from "../context/AppointmentProvider";
import { ActionKind } from "../reducers/AppointmentReducer";

type Props = {
	setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

const MyCalendar: React.FC<Props> = ({ setOpened }) => {
	const [value, setValue] = useState(new Date());
	const dispatch = useAppointmentDispatch();

	return (
		<Center>
			<Calendar
				sx={{ width: "85%" }}
				value={value}
				onChange={(date: Date) => {
					dispatch({
						payload: date.toISOString().replace(/T.+Z$/, ""),
						type: ActionKind.SET_DATE,
					});
					setOpened(true);
					setValue(date);
				}}
				fullWidth
				size="xl"
				styles={(theme) => ({
					day: { borderRadius: 4, height: 60, fontSize: theme.fontSizes.lg },
					weekday: { fontSize: theme.fontSizes.lg },
					weekdayCell: {
						fontSize: theme.fontSizes.xl,
						backgroundColor:
							theme.colorScheme === "dark"
								? theme.colors.dark[5]
								: theme.colors.gray[0],
						border: `1px solid ${
							theme.colorScheme === "dark"
								? theme.colors.dark[4]
								: theme.colors.gray[2]
						}`,
						height: 50,
					},
				})}
			/>
		</Center>
	);
};

export default MyCalendar;
