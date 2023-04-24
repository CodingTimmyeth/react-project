import { BrowserRouter as Router, Link } from 'react-router-dom'

const Footer = () => {
    return (
        <Router basename="/about">
            <footer>
                <p>Copyright &copy; 2021</p>
                <Link to='/about'>About</Link>
            </footer>
        </Router>
    )
}

export default Footer