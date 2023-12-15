import { useState, useEffect } from "react";
import { LoadingScreen } from "./Loading.styles";
import LoadingLogo from "../assets/logo-loading.webp";
export function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <LoadingScreen>
      <div></div>
      <img loading="lazy" src={LoadingLogo} alt="Logo Alex Santos" />
    </LoadingScreen>
  ) : null;
}
