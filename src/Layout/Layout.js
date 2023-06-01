import Header from "../Component/Pages/Header/Header";

import FooterPage from "../Component/Pages/Footer/FooterPage";
const Layout = ({children}) => {
    return (
        <>
        <Header/>
        {children}
        <FooterPage/>

        </>
      );
}
 
export default Layout;