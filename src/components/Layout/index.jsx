import NavBar from "../navBar"
import Footer from "../footer"
import { Outlet as Page } from "react-router-dom"

function Layout() {
    return (
        <main className=" h-screen flex flex-col justify-between">
            <NavBar />
            <Page />
            <Footer />
        </main>
    )
}

export default Layout