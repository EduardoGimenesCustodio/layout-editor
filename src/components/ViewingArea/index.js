import React from "react";
import { useDrop } from "react-dnd/dist/hooks/useDrop";

import "./styles.css";

const ViewingArea = () => {
	const accept = "InputText";

	const [collectedProps, drop] = useDrop(() => ({
		accept,
	}));

	return <div ref={drop} className="viewingArea"></div>;
};

export default ViewingArea;
