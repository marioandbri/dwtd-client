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

/**
 * Component responsible for mounting the HoursList and UserDataForm components
 * @param {Props} props
 * @returns {JSX.Element} A modal containing those components
 */
const AppointmentModal: React.FC<PropsWithChildren<Props>> = ({
	opened,
	closeModal,
}) => {
	/**
	 * Dispatcher for appointments reducer
	 */
	const dispatch = useAppointmentDispatch();
	const [isUserFormVisible, setIsUserFormVisible] = useState(false);
	/**
	 * Display the HoursList Component to set the hour for the appointment
	 */
	const displayHours = () => setIsUserFormVisible(false);
	/**
	 * Display the UserDataForm Component to handle the inputs for the user's data
	 */
	const displayUserForm = () => setIsUserFormVisible(true);

	/**
	 * Closes the modal and resets the appointments state
	 */
	const resetAndCloseModal = () => {
		closeModal();
		setIsUserFormVisible(false);
		dispatch({ payload: null, type: ActionKind.REINITIALIZE });
	};
	/**
	 *  Handles when the HoursList Component is visible
	 */
	const isHoursVisible = opened && !isUserFormVisible;

	return (
		<>
			<Modal
				transition={"slide-down"}
				opened={isHoursVisible}
				onClose={resetAndCloseModal}
				title={"What is the expected time desired to dance with the Death"}
			>
				<HoursList displayUserForm={displayUserForm} />
			</Modal>

			<Modal
				transition={"slide-down"}
				opened={isUserFormVisible}
				onClose={resetAndCloseModal}
				title={"Give your name and email to complete the appointment"}
			>
				<UserDataForm displayHours={displayHours} />
			</Modal>
			<ConfirmDialog closeModal={resetAndCloseModal} />
		</>
	);
};

export default AppointmentModal;
