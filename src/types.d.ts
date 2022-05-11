import { CSSProperties } from "@mantine/styles/lib/tss/types/css-object";
import { ActionKind } from "./reducers/AppointmentReducer";
import React from "react";

/**
 * User data object
 */
export type UserData = {
	/**
	 * Name of the user
	 */
	name: string;
	/**
	 * E-mail of the user
	 */
	email: string;
};

/**
 * Appointment data model
 */
export type Appointment = {
	/**
	 * Date and start time for the appointment
	 */
	datetime: Date;
	/**
	 * Name of the user scheduled for the appointment
	 */
	name: string;
	/**
	 * Contact e-mail of ther user scheduled for the appointment
	 */
	email: string;
};

/**
 * Store of application state for the appointments
 */
export interface AppointmentStore {
	/**
	 * String representing the date selected
	 */
	appointmentDate: string;
	/**
	 * String representing the hour selected for the appointment
	 */
	appointmentHour: string;
	/**
	 * Object containing the data of the user
	 */
	userData: UserData;
	/**
	 * Boolean indicating if shows the confirm dialog with the appointment data
	 */
	confirmDialog: boolean;
}

/**
 * Interface for the object needed to dispatch actions with the reducer
 */
export interface AppointmentAction {
	/**
	 * Type of action to dispatch
	 */
	type: ActionKind;
	/**
	 * Data payload to update the store
	 */
	payload?: string | boolean | UserData;
}
