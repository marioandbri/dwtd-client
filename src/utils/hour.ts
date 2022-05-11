/**
 * Converts number to hour-like formatted string
 * @param hour
 * @returns time string formatted (hh:mm:ss PM|AM)
 */
const convertToHour = (hour: number) => {
	if (hour < 12) {
		return `${hour}:00:00 AM`;
	} else {
		return `${hour == 12 ? 12 : hour - 12}:00:00 PM`;
	}
};

/**
 * Array of office formatted hours strings
 */
export const officeHours = Array(9)
	.fill(9)
	.map((e, index) => convertToHour(e + index));
