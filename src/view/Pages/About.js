import React, { useEffect, useState, useContext } from "react";
import { LoadingContext } from "react-router-loading";

import loadData from "../../Config/LoadingBar"
import Education from "../component/education";
export default function About() {
  const [state, setState] = useState();
  const loadingContext = useContext(LoadingContext);

  const loading = async () => {
    //loading some data
    const data = await loadData();
    setState(data);

    //call method to indicate that loading is done
    loadingContext.done();
  };

  useEffect(() => {
    loading();
  }, []);
  return (
    <div className="App">
      <Education />
    </div>
  );
}

