import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { MobileFooter } from "./components/MobileFooter";
import { Secoes } from "./components/Secoes";
import { Loading } from "./components/Loading"; // Importa o componente de loading
import axios from "axios";

async function main() {
  const accessUrl = async () => {
    try {
      await axios.get("https://alexsantos-fullstack.vercel.app/");
    } catch (error) {
      console.error(error.message);
      setInterval(accessUrl, 5000);
    }
  };

  setInterval(accessUrl, 900000);

  await new Promise(() => {});
}

main();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <>
          <Navbar />
          <Secoes />
          <MobileFooter />
        </>
      )}
    </>
  );
};

export default App;
