import { createContext, useState, useEffect } from "react";
import { API } from "../api/api-service";
import { useDispatch } from "react-redux";

export const AppContext = createContext();

export function AppContextProvider(props) {
  const [mugs, setMugs] = useState([]);
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const data = await API.getMugs().catch((err) => console.log(err));
      const cartsList = await API.getCarts().catch((err) => console.log(err));
      setMugs(data);
      setCarts(cartsList);
      setLoading(false);
      dispatch({
        type: "INIT",
        payload: {
          cart: cartsList,
          mugs: data,
        },
      });
    }

    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        mugs,
        setMugs,
        carts,
        setCarts,
        loading,
        setLoading,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
