import { Modal, Transition } from "@mantine/core";
import React, { PropsWithChildren, useState } from "react";
import HoursList from "./HoursList";
import HoursDisplay from "./HoursModal";
import UserDataForm from "./UserDataForm";

type Props = {
	opened: boolean;
	closeModal: () => void;
};

const AppointmentModal: React.FC<PropsWithChildren<Props>> = ({
	opened,
	closeModal,
	children,
}) => {
	const [isUserFormVisible, setIsUserFormVisible] = useState(false);
	const displayHours = () => setIsUserFormVisible(false);
	const displayUserForm = () => setIsUserFormVisible(true);
	const title = isUserFormVisible
		? "What is the expected time desired to dance with the Death"
		: "Give your name and email to complete the appointment";
	const resetModal = () => {
		closeModal();
		setIsUserFormVisible(false);
	};

	return (
		<>
			<Modal opened={opened} onClose={resetModal} title={title}>
				{!isUserFormVisible && <HoursList displayUserForm={displayUserForm} />}
				{isUserFormVisible && <UserDataForm displayHours={displayHours} />}
			</Modal>
		</>
	);
};

export default AppointmentModal;
