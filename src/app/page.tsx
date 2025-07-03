"use client"
import { TYPES_SECUNDARY_CARD } from "./utils/typesSecundaryCards";
import { TYPES_TITTLE } from "./utils/typesTitles";
import { TYPES_CARD } from "./utils/typesCard";
import { TYPES_BUTTON } from "./utils/typesButton";
import Header from "./components/Navigation/Header";
import TittleUI from "./components/UI/Titles";
import ButtonUI from "./components/Forms/Button";
import Image from "next/image";
import Card from "./components/Data display/Card";
import SecondaryCard from "./components/Data display/SecundaryCard";
import Footer from "./components/Navigation/Footer";
export default function Home() {
  return (
  <>
  <Header custom="bg-[#222222]" />
      <section className="p-primary w-full h-screen flex flex-wrap bg-[#222222]">
        <div className="w-3/5">
          <TittleUI
            variant={TYPES_TITTLE.PRINCIPAL}
            content="Learn react to the next level"
            custom="px-16 mt-16 2xl:text-9xl text-8xl font-bold"
          />
          <p className="ml-16 mt-8 text-xl text-gray-300 max-w-[70%] 2xl:text-5xl " >Ready to level up your React skills? Let's build something awesome together.</p>
          <ButtonUI content={"start"} navLink="dashboard/shop" variant={TYPES_BUTTON.CUSTOM} custom="ml-14 mt-14 px-20 py-3 rounded-full border border-[2.5px] p-primary-blue font-medium text-cyan-400 font-xl hover:bg-cyan-400/10 transition-colors" />
        </div>
        <div className="w-2/5">
           <Image src="https://icon.icepanel.io/Technology/svg/React.svg" width={700} height={700} alt="React brand" sizes="none" className="h-[75%] w-full" />
        </div>
      </section>
      <div className="bg-gradient-to-b from-[#222222] to-black flex justify-center py-8">
        <TittleUI content={"titles.titleOne"} variant={TYPES_TITTLE.ABOUT} custom="text-white font-bold text-5xl " />
      </div>
      <section className="bg-black flex justify-around py-12" >
        <Card
          content="Components"
          variant={TYPES_CARD.BLUE}
          linkCard={"links.linkCard"}
          contentAll={"in React is a reusable, self-contained piece of UI. It can be as small as a button or as large as an entire page. Components can be functional or class-based, but most modern React apps use functional components for simplicity and better performance."}
        />
        <Card
          content="Hooks"
          variant={TYPES_CARD.PURPPLE}
          linkCard={"links.linkCard"}
          contentAll={"Hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8 and allow you to manage state, side effects, and context without writing class components. Common hooks include useState, useEffect, and useContext."}
        />
        <Card
          content="Props"
          variant={TYPES_CARD.ORANGE}
          linkCard={"links.linkCard"}
          contentAll={"Props (short for properties) are how you pass data from one component to another in React. They are read-only and allow you to customize components by passing values like strings, numbers, or even other components. Props help make components reusable and dynamic."}
        />
      </section>
      <div className="bg-black flex justify-center py-8">
        <TittleUI content={"titles.titleTwo"} variant={TYPES_TITTLE.ABOUT} custom="text-white font-bold text-5xl " />
      </div>
      <section className="bg-black flex justify-center py-8">
        <SecondaryCard
          source="https://elpythonista.com/wp-content/uploads/2020/10/Clean_Code-portada-1024x576.jpg"
          variant={TYPES_SECUNDARY_CARD.LEFT}
          title="Clean code"
          description={"Clean code is simple, readable, and easy to maintain. It uses meaningful names, small and focused functions, and follows the single responsibility principle to ensure each piece of code does one thing well. Clean code avoids unnecessary comments by making the code itself self-explanatory, reduces duplication, handles errors clearly, and maintains consistent formatting. It prioritizes clarity over cleverness, making it easier for others (and your future self) to understand, test, and improve the code over time. Clean code is not just about aesthetics; it's about creating software that is robust, scalable, and easy to work with in the long run."}
          linkSecundaryCard={"About this"}
        />
      </section>
      <section className="bg-black flex justify-center py-8">
        <SecondaryCard
          source="https://i.pinimg.com/736x/30/f0/89/30f08901a1d1409041039957a44aaffd.jpg"
          variant={TYPES_SECUNDARY_CARD.RIGHT}
          title="Solid principles"
          description={"SOLID is an acronym for five design principles that help developers create maintainable and scalable software. These principles are: Single Responsibility Principle (SRP), Open/Closed Principle (OCP), Liskov Substitution Principle (LSP), Interface Segregation Principle (ISP), and Dependency Inversion Principle (DIP). Following SOLID principles leads to better code organization, easier testing, and improved flexibility in software design."}
          linkSecundaryCard={"About this"}
        />
      </section>
      <Footer />
    </>
  );
}
