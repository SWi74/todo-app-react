import styled, { css } from "styled-components"

const Plate = css`
    box-shadow: ${props => props.theme.effects.bump};
    border-radius: 10px;
    padding: 32px;
`

export const StyledPage = styled.div`
    display: grid;
    grid-template-columns: auto minmax(100px, 800px) auto;
    padding: 32px;
    background: ${props => props.theme.colors.dark};
    min-height: 100vh;
    gap: 32px;
`

export const StyledMain = styled.main`
    grid-column: 2/-2;
    display: grid;
    gap: 32px;
    margin: 0 0 auto 0;
`

export const StyledHeader = styled.header`
    ${Plate};
    color: ${props => props.theme.colors.accent};
    text-align: center;
`

export const ToDoPanel = styled.div`
    ${Plate};
    display: flex;
    flex-direction: column;
    gap: 32px;
`

export const StyledAddToDo = styled.div`
	display: grid;
	grid-template-columns: 1fr 40px 40px;
	align-items: center;
	input {
		background: ${props => props.theme.colors.dark};
		color: ${props => props.theme.colors.light};
		padding: 16px;
		font: inherit;
		border: 1px solid ${props => props.theme.colors.dark};
		border-radius: 5px;
		grid-column: 1/-2;
		grid-row: 1/2;
		box-shadow: ${props => props.theme.effects.inset};
	}
	input:focus {
		box-shadow: ${props => props.theme.effects.focused};
		border: 1px solid ${props => props.theme.colors.accent};
	}
	button {
		background: ${props => props.theme.colors.accent};
		border: 0;
		border-radius: 40px;
		grid-column: -3/-1;
		grid-row: 1/2;
		height: 80px;
		font: inherit;
		font-weight: bold;
		color: ${props => props.theme.colors.dark};
        cursor: pointer;
	}
`

export const StyledToDoList = styled.div`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const StyledItem = styled.li`
    box-shadow: ${props => props.theme.effects.bump};
    display: flex;
    gap: 6px;
    align-items: center;
    border-radius: 5px;
    label {
        display: flex;
        gap: 10px;
        margin: 0 auto 0 0;
        padding: 16px;
        align-items: flex-start;
    }
    svg {
        fill: ${props => props.theme.colors.accent};
        flex-shrink: 0;
    }
`

export const StyledCount = styled.div`
    color: ${props => props.theme.colors.grey};
    padding: 16px;
    text-align: center;
`