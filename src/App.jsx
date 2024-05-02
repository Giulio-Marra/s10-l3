import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HomePage from "./components/HomePage";
import MyProfile from "./components/MyProfile";
import DetailsFilm from "./components/DetailsFilm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// class App extends Component {
//   state = {
//     currentPage: "home",
//   };

//   togglePage = () => {
//     this.setState({
//       currentPage: this.state.currentPage === "home" ? "profile" : "home",
//     });
//   };

//   render() {
//     return (
//       <>
//         {this.state.currentPage === "profile" ? (
//           <MyProfile togglePage={this.togglePage} />
//         ) : (
//           <HomePage togglePage={this.togglePage} />
//         )}
//       </>
//     );
//   }
// }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/film/details/:dynamicId" element={<DetailsFilm />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
