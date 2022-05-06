import { Center } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import React, { Dispatch, SetStateAction, useState } from "react";

type Props = {
	selectedDateString: string;
	setSelectedDateString: (arg0: string) => void;
};

const MyCalendar: React.FC<Props> = ({
	selectedDateString,
	setSelectedDateString,
}) => {
	const [value, setValue] = useState(new Date());

	return (
		<Center>
			<Calendar
				value={value}
				onChange={(date: Date) => {
					setSelectedDateString(date.toISOString().replace(/T.+Z$/, ""));
					setValue(date);
				}}
				fullWidth
				size="xl"
				styles={(theme) => ({
					day: { borderRadius: 4, height: 70, fontSize: theme.fontSizes.lg },
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
						height: 70,
					},
				})}
			/>
		</Center>
	);
};

export default MyCalendar;
