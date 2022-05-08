import { ActionKind, AppointmentAction, AppointmentStore } from "../types.d";

export const initialStore: AppointmentStore = {
	appointmentDate: "",
	appointmentHour: "",
	userData: {
		name: "",
		email: "",
	},
};

export const AppointmentReducer = (
	state: AppointmentStore,
	action: AppointmentAction
): AppointmentStore => {
	switch (action.type) {
		case ActionKind.SET_DATE:
			return {
				...state,
				appointmentDate: action.payload,
			};
		case ActionKind.SET_HOUR:
			return {
				...state,
				appointmentHour: action.payload,
			};
		case ActionKind.SET_USERDATA:
			return {
				...state,
				userData: action.payload,
			};
		default:
			return state;
	}
};
