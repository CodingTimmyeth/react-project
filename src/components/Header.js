import PropTypes from "prop-types"
import styled from "styled-components"
import Button from "./Button"

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className="header">
            <Title>{title}</Title>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

const Title = styled.h1`
    color: black;
`

export default Header