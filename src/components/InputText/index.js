import React from "react";
import { useDrag } from "react-dnd/dist/hooks";

import "./styles.css";

const InputText = () => {
	const type = "InputText";
	const id = "inputText";

	const [collected, drag] = useDrag(() => ({
		type,
		item: { id },
	}));

	const { isDragging } = collected;
	const readonly = isDragging ? false : true;

	return (
		<div ref={drag} className="inputText">
			<input type="text" readOnly={{ readonly }} />
		</div>
	);
};

export default InputText;
