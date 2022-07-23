import React from "react";
import Button from "./components/button/Button";
import { Footer } from "./components/footer/Footer";
import Header from "./components/Header/Header";
import Jokes from "./components/jokes/Jokes";
import Nav from "./components/nav/Nav";
import useAxiosPost from "./request";

export default function App() {
  return (
    <>
      <Nav />
      <Header />
      {/* {console.log(
        useAxiosPost(" https://api.chucknorris.io/jokes/search?query=all")
      )} */}
      <div className="section">
      <Button content="DAD JOKES" />
      <div className="jokes-container">
        <Jokes/>
      </div>
      </div>
      <Footer />
    </>
  );
}
