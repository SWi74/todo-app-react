import React from 'react';

import { StyledCount } from "./styled"

const TodosCount = (props) => {
	return (
		<StyledCount className="total">total items: <span className="output">{props.count}</span></StyledCount>
	)
}

export default TodosCount;