import React, {
	createContext,
	PropsWithChildren,
	useContext,
	useReducer,
} from "react";
import {
	AppointmentReducer,
	initialStore,
} from "../reducers/AppointmentReducer";
import { AppointmentAction, AppointmentStore } from "../types";

export const AppointmentContext = createContext<
	[AppointmentStore, React.Dispatch<AppointmentAction>]
>([initialStore, () => null]);
type Props = {};

const AppointmentProvider: React.FC<PropsWithChildren<Props>> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(AppointmentReducer, initialStore);

	return (
		<AppointmentContext.Provider value={[state, dispatch]}>
			{children}
		</AppointmentContext.Provider>
	);
};

export const useAppointmentStore = () =>
	useContext(AppointmentContext)[0] as AppointmentStore;
export const useAppointmentDispatch = () =>
	useContext(AppointmentContext)[1] as React.Dispatch<AppointmentAction>;

export default AppointmentProvider;
