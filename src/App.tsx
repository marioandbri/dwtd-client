import "./App.css";
import Layout from "./components/Layout";
import MyCalendar from "./components/Calendar";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import HoursModal from "./components/HoursModal";
import FormModal from "./components/FormModal";
import { UserData } from "./type";

function App() {
	const [selectedDateString, setSelectedDateString] = useState("");
	const [opened, setOpened] = useState(false);
	const [selectedHour, setSelectedHour] = useState("");
	const [showUserForm, setShowUserForm] = useState(false);
	const [userData, setUserData]: [
		UserData,
		Dispatch<SetStateAction<UserData>>
	] = useState({
		name: "",
		email: "",
	});

	const selectDate = (date: string) => {
		setSelectedDateString(date);
		setOpened(true);
	};
	const closeModal = () => {
		setOpened(false);
		setSelectedDateString("");
	};
	const selectHour = (hour: string) => {
		setShowUserForm(true);
		setSelectedHour(hour);
	};
	const handleInput = (
		e: ChangeEvent<HTMLInputElement> & { target: { name: keyof UserData } }
	) => {
		setUserData((oldData) => {
			let newData = { ...oldData };
			newData[e.target.name] = e.target.value;
			return newData;
		});
	};

	return (
		<Layout>
			<HoursModal
				opened={opened}
				closeModal={closeModal}
				selectHour={selectHour}
			/>
			<FormModal
				opened={showUserForm}
				setOpened={setShowUserForm}
				handleInput={handleInput}
			/>
			<MyCalendar
				selectedDateString={selectedDateString}
				setSelectedDateString={selectDate}
			/>
		</Layout>
	);
}

export default App;
