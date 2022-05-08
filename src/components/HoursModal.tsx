import { Button, Modal, Title } from "@mantine/core";
import React, { Dispatch, SetStateAction, useState } from "react";
import FormModal from "./FormModal";
import HoursList from "./HoursList";

type Props = {};

const HoursDisplay: React.FC<Props> = ({}) => {
	return (
		<>
			<Title mb={"sm"} sx={{ fontWeight: 300 }} order={5}>
				Please select the desired hour for the appointment:
			</Title>
			<HoursList />
		</>
	);
};

export default HoursDisplay;
