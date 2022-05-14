import React from "react";
import Response from "./Response";

const ResponseList = ({ responses }) => {
  return (
    <>
      {responses.map((item) => (
        <Response key={item.id} response={item.response} prompt={item.prompt} />
      ))}
    </>
  );
};

export default ResponseList;
