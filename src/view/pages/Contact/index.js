import React, { useEffect, useState, useContext } from "react";
import { LoadingContext } from "react-router-loading";

import loadData from "../../../Config/LoadingBar"
import ComingSoon from "../../component/comingSoon"
import './contact.scss'
export default function Contact() {
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
    <div className="content_body">
      <ComingSoon />
    </div>
  );
}

