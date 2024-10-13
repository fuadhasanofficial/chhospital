import { useState } from "react";

const useDatails = () => {
  const [details, setDetails] = useState();
  return [details, setDetails];
};

export default useDatails;
