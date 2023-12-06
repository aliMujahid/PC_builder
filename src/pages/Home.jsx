import { useContext, useEffect } from "react";
import BuilderTable from "../components/BuilderTable";
import { BuildContext } from "../context/BuildContext";

export default function Home() {
  const { build, dispatch } = useContext(BuildContext);

  useEffect(() => {
    window.localStorage.setItem(
      "PC_BUILD_SPECIFICATION",
      JSON.stringify(build)
    );
  }, [build]);
  return <BuilderTable />;
}
