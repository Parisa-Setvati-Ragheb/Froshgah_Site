import Header from "../Component/Pages/Header/Header";
import Footer from "../Component/Pages/Footer/Footer"
const Layout = ({children}) => {
    return (
        <>
        <Header/>
        {children}
        <Footer/>

        </>
      );
}
 
export default Layout;