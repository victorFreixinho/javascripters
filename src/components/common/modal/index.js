import React from "react";
import {
	Button,
	Modal as ModalWrapper,
	ModalHeader,
	ModalBody,
	ModalFooter,
} from "reactstrap";

const Modal = ({
	isOpen,
	onClose,
	onAccept,
	children,
	title,
	btnColor = "primary",
}) => (
	<ModalWrapper
		isOpen={isOpen}
		toggle={onClose}
		className="modal-body"
		centered={true}
	>
		<ModalHeader toggle={onClose}>{title}</ModalHeader>
		<ModalBody>{children}</ModalBody>
		<ModalFooter>
			<Button color={btnColor} onClick={onAccept}>
				Confirmar
			</Button>
			<Button color="#fff" onClick={onClose}>
				Cancelar
			</Button>
		</ModalFooter>
	</ModalWrapper>
);

export default Modal;
