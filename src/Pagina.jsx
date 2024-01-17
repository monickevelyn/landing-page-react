import "./App.css";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

const Pagina = () => {
  return (
    <>
      <body className="body">
        <Header />
        <Main />
        <Footer />
      </body>
    </>
  );
};
export default Pagina;