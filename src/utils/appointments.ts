import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Appointment } from "../types";

export const isUnavailable = (
	hour: string,
	appointments: Appointment[]
): boolean => {
	if (appointments.length < 1) {
		return false;
	} else {
		return appointments.some(
			(e) => new Date(e.datetime).toLocaleTimeString("en-us") === hour
		);
	}
};

export const parseAppointmentDateTime = (date: string, time: string) => {
	dayjs.extend(customParseFormat);
	const parsedDateTime = dayjs(`${date} ${time}`, "YYYY-MM-DD hh:mm:ss A");
	return parsedDateTime;
};
