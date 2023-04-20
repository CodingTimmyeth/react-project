import PropTypes from "prop-types"
import styled from "styled-components"
import Button from "./Button"

const Header = ({ title, onClick }) => {
    return (
        <header className="header">
            <Title>{title}</Title>
            <Button color="green" text="Add" onClick={onClick} />
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