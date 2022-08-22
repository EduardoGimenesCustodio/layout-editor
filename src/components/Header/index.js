import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const Header = () => {
	return (
		<header>
			<Link to="/">Layout Editor</Link>
		</header>
	);
};

export default Header;
