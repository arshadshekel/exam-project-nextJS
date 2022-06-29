import Main from "./MainContent";
import Footer from "./FooterContent";
import Header from "./HeaderContent";


export default function Layout({ children }) {
  return (
    
        <div className="flex flex-col justify-between h-screen">
          <div>
     <Header />
            <Main>{children}</Main>
          </div>
          <Footer />
        </div>
     
  );
}
