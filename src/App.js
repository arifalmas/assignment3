import Search from "./components/Search";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";

import Blog from "./pages/blog";

import { Provider } from "react-redux";
import Store from "./redux/store";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        {/* <!-- navigation --> */}
        <Navbar />

        {/* <!-- search --> */}
        <Search />

        <Blog />

        {/* <!-- footer --> */}
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
