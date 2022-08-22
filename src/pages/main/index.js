import React from "react";
import { DndProvider } from "react-dnd";
import Header from "../../components/Header";
import MenuComponents from "../../components/MenuComponents";
import ViewingArea from "../../components/ViewingArea";
import { HTML5Backend } from "react-dnd-html5-backend";

import "./styles.css";

const Main = () => {
	return (
		<div className="main">
			<Header />
			<div className="mainContent">
				<DndProvider backend={HTML5Backend}>
					<ViewingArea />
					<div className="menuArea">
						<MenuComponents />
					</div>
				</DndProvider>
			</div>
		</div>
	);
};

export default Main;
