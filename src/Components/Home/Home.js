import React from "react";
import HomeNav from "./HomeNav";
import Invoices from "./Invoices";
import data from "./../../Data/db.json";
import NewInvoice from "./NewInvoice";
import { GlobalContext } from "./../../Context/GlobalMode";

const Home = () => {
  const [invoices, setInvoices] = React.useState(null);
  const [filter, setFilter] = React.useState("");
  const [newInvoice, setNewInvoice] = React.useState(false);

  const [dados, setDados] = React.useState(data);

  const global = React.useContext(GlobalContext);

  React.useEffect(() => {
    const dadosStorage = window.localStorage.getItem("invoices");

    try {
      if (JSON.parse(dadosStorage) && Array.isArray(JSON.parse(dadosStorage))) {
        setInvoices(JSON.parse(dadosStorage));
      } else {
        window.localStorage.setItem("invoices", JSON.stringify(data));
        setInvoices(data);
      }
    } catch (err) {
      window.localStorage.setItem("invoices", JSON.stringify(data));
      setInvoices(data);
    }

    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
  }, []);

  React.useEffect(() => {
    if (global.mode) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [global.mode]);

  return (
    <>
      <HomeNav
        filter={filter}
        setFilter={setFilter}
        invoicesLength={invoices ? invoices.length : 0}
        setNewInvoice={setNewInvoice}
        dadosLength={dados.length}
        mode={global.mode}
      />
      {invoices && (
        <Invoices
          data={invoices}
          filter={filter}
          dados={dados}
          setDados={setDados}
          mode={global.mode}
        />
      )}
      {newInvoice && <NewInvoice setNewInvoice={setNewInvoice} />}
    </>
  );
};

export default Home;
