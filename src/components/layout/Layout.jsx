import Footer from "../Footer/Footer"
import Header from "../header/Header"
import Navbar from "../navbar/Navbar"
import NavbarBottom from "../navbar/NavbarBottom"



const Layout = ({children}) => {
    
  return (
    <div className="flex flex-col min-h-screen">
        <Header/>
        <Navbar/>
        <NavbarBottom/>
        <div className="flex-grow">
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout