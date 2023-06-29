import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <TailSpin
        height="80"
        width="80"
        color="#00abe4"
        ariaLabel="tail-spin-loading"
        radius=""
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </>
  );
};

export default Loader;
