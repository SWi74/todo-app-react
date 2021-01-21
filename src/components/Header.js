import React from 'react';
import { StyledHeader } from "./styled"


const Header = (props) => ( 
	<StyledHeader>
		<h1>{props.appName}</h1>
	</StyledHeader>
)

export default Header;