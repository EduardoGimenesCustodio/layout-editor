import React from "react";
import { DndProvider } from "react-dnd";
import Header from "../../components/Header";
import MenuComponents from "../../components/MenuComponents";
import { HTML5Backend } from "react-dnd-html5-backend";

import "./styles.css";

const Main = () => {
	return (
		<div className="main">
			<Header />
			<div className="mainContent">
				<DndProvider backend={HTML5Backend}>
					<div className="editingArea"></div>
					<div className="menuArea">
						<MenuComponents />
					</div>
				</DndProvider>
			</div>
		</div>
	);
};

export default Main;
