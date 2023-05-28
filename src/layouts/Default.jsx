import Header from '../parts/Header'
import Footer from '../parts/Footer'

const DefaultLayout = ({ children }) => {
    return (
        <>
        <header><Header /></header>
        <main>
            {children}
        </main>
        <footer><Footer /></footer>
        </>
    )

}
export default DefaultLayout
