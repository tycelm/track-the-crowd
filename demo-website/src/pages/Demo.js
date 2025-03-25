import React, { useEffect, useState } from "react";

const Demo = () => {
  useEffect(() => {
    document.title = "Demo";
  }, []);
  return <h1>Heres an example of the project</h1>;
};

export default Demo;
