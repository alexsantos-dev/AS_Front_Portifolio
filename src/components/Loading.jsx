import { useState, useEffect } from "react";
import { LoadingScreen } from "./Loading.styles";

export function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <LoadingScreen>
      <div>
        <h1>Minha Logo</h1>
        <p>Carregando...</p>
      </div>
    </LoadingScreen>
  ) : null;
}
