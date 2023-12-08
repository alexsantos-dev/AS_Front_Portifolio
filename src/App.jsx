import { Navbar } from "./components/Navbar";
import { MobileFooter } from "./components/MobileFooter";
import { Secoes } from "./components/Secoes";
import { SpeedInsights } from "@vercel/speed-insights/next";

function App() {
  return (
    <>
      <Navbar />
      <Secoes />
      <MobileFooter />
      <SpeedInsights />
    </>
  );
}

export default App;
