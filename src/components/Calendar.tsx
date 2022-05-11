import { Center } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import React, { useState } from "react";
import { useAppointmentDispatch } from "../context/AppointmentProvider";
import { ActionKind } from "../reducers/AppointmentReducer";

type Props = {
	setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};
/**
 * Component responsible for rendering the Calendar component, and handles the selection of the desired appointment date
 * @param props
 * @returns Calendar component
 */
const MyCalendar: React.FC<Props> = ({ setOpened }) => {
	const [value, setValue] = useState(new Date());
	/**
	 * Dispatcher for the appointments reducer actions
	 */
	const dispatch = useAppointmentDispatch();

	return (
		<Center>
			<Calendar
				sx={{ width: "85%" }}
				value={value}
				excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
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
