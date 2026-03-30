import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
import Tools from "./components/Tools";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Status from "./components/Status";
import Steps from "./components/Steps";

const getTool = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const toolPromise = getTool();

  return (
    <>
      <Navbar />
      <Banner />
      <Status />

      <Suspense
        fallback={
          <div>
            <span className="loading loading-spinner text-primary"></span>
            <span className="loading loading-spinner text-secondary"></span>
            <span className="loading loading-spinner text-accent"></span>
            <span className="loading loading-spinner text-neutral"></span>
          </div>
        }
      >
        <Tools toolPromise={toolPromise} />
      </Suspense>

      <Steps />
      <Pricing />
      <Footer />
      <Footer2 />
    </>
  );
}

export default App;
