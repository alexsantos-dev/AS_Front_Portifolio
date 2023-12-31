import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { MobileFooter } from "./components/MobileFooter";
import { Secoes } from "./components/Secoes";
import { Loading } from "./components/Loading";

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
        <body>
          <Navbar />
          <Secoes />
          <MobileFooter />
        </body>
      )}
    </>
  );
};

export default App;
