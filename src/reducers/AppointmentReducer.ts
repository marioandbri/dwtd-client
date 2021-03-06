import { AppointmentAction, AppointmentStore, UserData } from "../types";

export enum ActionKind {
	SET_DATE,
	SET_HOUR,
	SET_USERDATA,
	SET_CONFIRM_DIALOG,
	REINITIALIZE,
}
export const initialStore: AppointmentStore = {
	appointmentDate: "",
	appointmentHour: "",
	userData: {
		name: "",
		email: "",
	},
	confirmDialog: false,
};

export const AppointmentReducer = (
	state: AppointmentStore,
	action: AppointmentAction
): AppointmentStore => {
	switch (action.type) {
		case ActionKind.SET_DATE:
			return {
				...state,
				appointmentDate: action.payload as string,
			};
		case ActionKind.SET_HOUR:
			return {
				...state,
				appointmentHour: action.payload as string,
			};
		case ActionKind.SET_USERDATA:
			return {
				...state,
				userData: action.payload as UserData,
			};
		case ActionKind.SET_CONFIRM_DIALOG:
			return {
				...state,
				confirmDialog: action.payload as boolean,
			};
		case ActionKind.REINITIALIZE:
			return initialStore;
		default:
			return state;
	}
};
