import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Appointment } from "../types";
/**
 * Handles the validation for hour selection against the list of appointments
 * @param hour
 * @param appointments
 * @returns Result of validation
 */
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

/**
 * Formats the date and time into a valid datetime string
 * @param date
 * @param time
 * @returns formatted valid datetime string
 */
export const formatAppointmentDateTime = (date: string, time: string) => {
	dayjs.extend(customParseFormat);
	const formatDateTime = dayjs(`${date} ${time}`, "YYYY-MM-DD hh:mm:ss A");
	return formatDateTime;
};
