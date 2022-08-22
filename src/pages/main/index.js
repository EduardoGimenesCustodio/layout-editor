import React from "react";
import Header from "../../components/Header";
import MenuComponents from "../../components/MenuComponents";

import "./styles.css";

const Main = () => (
	<div className="main">
		<Header />
		<div className="mainContent">
			<div className="editingArea"></div>
			<div className="menuArea">
				<MenuComponents />
			</div>
		</div>
	</div>
);

export default Main;
