import { ThemeProvider } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.css";
import Layout from "./Component/Layout";
import AboutPage from "./Pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider
          breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
          minBreakpoint="xxs"
        >
          <Layout>
            <Routes>
              <Route exact path="/" element={<AboutPage />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
