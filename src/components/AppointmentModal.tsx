import { Modal, Transition } from "@mantine/core";
import React, { PropsWithChildren, useState } from "react";
import ConfirmDialog from "./ConfirnDialog";
import HoursList from "./HoursList";
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
	const resetModal = () => {
		closeModal();
		setIsUserFormVisible(false);
	};
	const isHoursVisible = opened && !isUserFormVisible;

	return (
		<>
			{/* <Modal opened={opened} onClose={resetModal} title={title}> */}

			<Modal
				transition={"slide-down"}
				opened={isHoursVisible}
				onClose={resetModal}
				title={"What is the expected time desired to dance with the Death"}
			>
				<HoursList displayUserForm={displayUserForm} />
			</Modal>

			<Modal
				transition={"slide-down"}
				opened={isUserFormVisible}
				onClose={resetModal}
				title={"Give your name and email to complete the appointment"}
			>
				<UserDataForm displayHours={displayHours} />
			</Modal>
			{/* </Modal> */}
		</>
	);
};

export default AppointmentModal;
