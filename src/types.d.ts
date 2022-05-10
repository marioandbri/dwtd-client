import { CSSProperties } from "@mantine/styles/lib/tss/types/css-object";
import React from "react";

export type UserData = {
	name: string;
	email: string;
};

export type Appointment = {
	datetime: Date;
	name: string;
	email: string;
};

export interface AppointmentStore {
	appointmentDate: string;
	appointmentHour: string;
	userData: UserData;
	confirmDialog: boolean;
}

export interface AppointmentAction {
	type: ActionKind;
	payload: Partial<typeof initialStore>;
}
