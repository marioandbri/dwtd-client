import { Modal } from "@mantine/core";
import React, { PropsWithChildren, useState } from "react";
import { useAppointmentDispatch } from "../context/AppointmentProvider";
import { ActionKind } from "../reducers/AppointmentReducer";
import ConfirmDialog from "./ConfirmDialog";
import HoursList from "./HoursList";
import UserDataForm from "./UserDataForm";

type Props = {
	opened: boolean;
	closeModal: () => void;
};

const AppointmentModal: React.FC<PropsWithChildren<Props>> = ({
	opened,
	closeModal,
}) => {
	const dispatch = useAppointmentDispatch();
	const [isUserFormVisible, setIsUserFormVisible] = useState(false);
	const displayHours = () => setIsUserFormVisible(false);
	const displayUserForm = () => setIsUserFormVisible(true);

	const resetModal = () => {
		closeModal();
		setIsUserFormVisible(false);
		dispatch({ payload: null, type: ActionKind.REINITIALIZE });
	};

	const isHoursVisible = opened && !isUserFormVisible;

	return (
		<>
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
			<ConfirmDialog closeModal={resetModal} />
		</>
	);
};

export default AppointmentModal;
