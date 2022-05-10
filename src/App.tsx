import "./App.css";
import Layout from "./components/Layout";
import MyCalendar from "./components/Calendar";
import { useState } from "react";
import AppointmentModal from "./components/AppointmentModal";
import ConfirmDialog from "./components/ConfirmDialog";
import dayjs from "dayjs";
import { NotificationsProvider } from "@mantine/notifications";

function App() {
	dayjs.locale("en-us");
	const [opened, setOpened] = useState(false);
	const closeModal = () => {
		setOpened(false);
	};

	return (
		<Layout>
			<NotificationsProvider>
				<AppointmentModal opened={opened} closeModal={closeModal} />
				<MyCalendar setOpened={setOpened} />
			</NotificationsProvider>
		</Layout>
	);
}

export default App;
