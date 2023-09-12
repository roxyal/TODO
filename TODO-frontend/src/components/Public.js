import { Link } from 'react-router-dom'
/*
    Public - When you access the page, this is the first thing you will be seeining
*/
const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">DASH-Tech!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Singapore</p>
                <address className="public__addr">
                    Location:<br />
                    Tuas Drive<br />
                    postalcode: 123456<br />
                    <p>Tel: <a href="tel:+65">+65-95123892</a></p>
                </address>
                <br />
                <p>Owner: Kelvin & Yong Sheng</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public