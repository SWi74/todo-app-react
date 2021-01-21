import React from 'react';

import { StyledCount } from "./styled"

const TodosCount = (props) => {
	return (
		<StyledCount className="total">Total items: <span className="output">{props.count}</span></StyledCount>
	)
}

export default TodosCount;