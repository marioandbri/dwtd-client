export type UserData = {
	name: string;
	email: string;
};

export interface AppointmentStore {
	appointmentDate: string;
	appointmentHour: string;
	userData: UserData;
}
export enum ActionKind {
	SET_DATE,
	SET_HOUR,
	SET_USERDATA,
}

export interface AppointmentAction {
	type: ActionKind;
	payload: Partial<typeof initialStore>;
}
