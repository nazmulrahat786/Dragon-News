import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import Latasnews from "../Components/Latasnews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/Home Layout/LeftAside";
import RightAside from "../Components/Home Layout/RightAside";


const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 my-3 mx-auto">
            <Latasnews></Latasnews>
        </section>
        <nav className="w-11/12 my-3 mx-auto">
           <Navbar></Navbar>
        </nav>
      </header>
     
      <main className="w-11/12 gap-5 my-3 mx-auto *: grid grid-cols-12">
       <aside className="col-span-3 sticky top-0 h-fit">
        <LeftAside></LeftAside>
       </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
     <aside className="col-span-3 sticky top-0 h-fit">
      <RightAside></RightAside>
     </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
