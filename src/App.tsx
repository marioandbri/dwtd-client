import "./App.css";
import Layout from "./components/Layout";
import MyCalendar from "./components/Calendar";
import { ChangeEvent, useState } from "react";
import { UserData } from "./types";
import AppointmentModal from "./components/AppointmentModal";
import ConfirmDialog from "./components/ConfirnDialog";
import {
	useAppointmentDispatch,
	useAppointmentStore,
} from "./context/AppointmentProvider";
import { ActionKind } from "./reducers/AppointmentReducer";
import dayjs from "dayjs";

function App() {
	dayjs.locale("en-us");
	const [opened, setOpened] = useState(false);
	const closeModal = () => {
		setOpened(false);
	};

	const handleInput = (
		e: ChangeEvent<HTMLInputElement> & { target: { name: keyof UserData } }
	) => {};

	return (
		<Layout>
			<AppointmentModal opened={opened} closeModal={closeModal} />
			<ConfirmDialog />
			<MyCalendar setOpened={setOpened} />
		</Layout>
	);
}

export default App;
