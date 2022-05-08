import "./App.css";
import Layout from "./components/Layout";
import MyCalendar from "./components/Calendar";
import { ChangeEvent, useState } from "react";
import HoursDisplay from "./components/HoursModal";
import FormModal from "./components/FormModal";
import { UserData } from "./types";
import AppointmentModal from "./components/AppointmentModal";

function App() {
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

			<MyCalendar setOpened={setOpened} />
		</Layout>
	);
}

export default App;
