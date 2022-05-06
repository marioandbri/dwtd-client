import { Button, Modal, Title } from "@mantine/core";
import React, { Dispatch, SetStateAction, useState } from "react";
import FormModal from "./FormModal";
import HoursList from "./HoursList";

type Props = {
	opened: boolean;
	closeModal: () => void;
	selectHour: (arg0: string) => void;
};

const HoursModal: React.FC<Props> = ({ opened, closeModal, selectHour }) => {
	return (
		<>
			<Modal
				opened={opened}
				onClose={closeModal}
				title="Hours available for scheduling"
			>
				<Title order={3}>
					Please select the desired hour for the appointment:
				</Title>
				<HoursList selectHour={selectHour} />
			</Modal>
		</>
	);
};

export default HoursModal;
