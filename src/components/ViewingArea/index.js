import React from "react";
import { useDrop } from "react-dnd/dist/hooks/useDrop";

import "./styles.css";

const ViewingArea = () => {
	const accept = "InputText";
	const item = null;

	const [collectedProps, drop] = useDrop(() => ({
		accept,
	}));

	return (
		<div ref={drop} className="viewingArea">
			{item}
		</div>
	);
};

export default ViewingArea;
