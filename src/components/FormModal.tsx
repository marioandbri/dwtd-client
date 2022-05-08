import { Modal, Group, Button } from "@mantine/core";
import React, { ChangeEvent, useState } from "react";
import { UserData } from "../types";
import UserDataForm from "./UserDataForm";

type Props = {};

const FormModal: React.FC<Props> = ({}) => {
	return (
		<>
			<UserDataForm />
		</>
	);
};

export default FormModal;
