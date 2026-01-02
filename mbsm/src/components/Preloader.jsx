"use client";
import { useEffect, useState } from "react";

const Preloader = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 500);
  }, []);
  return (
    <>
      {active ? (
        <div className='preloader'>
          <img src='/assets/images/preloader-logo.png' alt='MBSM Trust Logo' />
          <p>MBSM Trust</p>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Preloader;
