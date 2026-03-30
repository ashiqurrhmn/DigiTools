import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
import Tools from "./components/Tools";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Status from "./components/Status";
import Steps from "./components/Steps";
import Cart from "./components/Cart";
import ToolsHeadingTabs from "./components/ToolsHeadingTabs";
import { ToastContainer} from "react-toastify";

const getTool = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const toolPromise = getTool();
  const [activeTab, setActiveTab] = useState("Products");
  const [carts, setCarts] = useState([]);

  return (
    <>
      <Navbar />
      <Banner />
      <Status />
      <ToolsHeadingTabs activeTab={activeTab} setActiveTab={setActiveTab} />

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
        {activeTab === "Products" && (
          <Tools toolPromise={toolPromise} carts={carts} setCarts={setCarts} />
        )}
      </Suspense>
      {activeTab === "Carts" && <Cart carts={carts} setCarts={setCarts} />}

      <Steps />
      <Pricing />
      <Footer />
      <Footer2 />
      <ToastContainer />
    </>
  );
}

export default App;
