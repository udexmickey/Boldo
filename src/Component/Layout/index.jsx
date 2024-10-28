import React from "react";
import Footer from "./Footer/footers";
import Header from "./Menu/menu";
import "../../style/layout.scss";

export default function Layout(props) {
  return (
    <div className="layout-wrap">
      <div className="layout">
        <header>
          <Header />
        </header>

        <main className="content-wrap">
          <div className="content">{props.children}</div>
        </main>

        <footer className="footer-wrap">
          <Footer />
        </footer>
      </div>
    </div>
  );
}
