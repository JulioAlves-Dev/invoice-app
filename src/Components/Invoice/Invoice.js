import React from "react";
import { useParams } from "react-router";
import DeleteInvoice from "./DeleteInvoice";
import Info from "./Info";
import Status from "./Status";
import UpdateInvoice from "./UpdateInvoice";
import { GlobalContext } from "./../../Context/GlobalMode";

const Invoice = () => {
  const params = useParams();
  const [edit, setEdit] = React.useState(false);
  const [del, setDel] = React.useState(false);
  const [item, setItem] = React.useState(null);
  const global = React.useContext(GlobalContext);

  React.useEffect(() => {
    const invoices = JSON.parse(window.localStorage.getItem("invoices"));

    if (invoices) {
      setItem(invoices.filter(({ id }) => id === params.id)[0]);
    }

    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
  }, [params.id]);

  React.useEffect(() => {
    if (global.mode) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [global.mode]);

  return (
    <>
      {item && (
        <Status
          status={item.status}
          setEdit={setEdit}
          setDel={setDel}
          id={item.id}
          setItem={setItem}
          mode={global.mode}
        />
      )}
      {item && <Info item={item} mode={global.mode} />}
      {item && edit && (
        <UpdateInvoice invoice={item} closeModal={setEdit} setItem={setItem} />
      )}
      {item && del && (
        <DeleteInvoice id={item.id} setDel={setDel} mode={global.mode} />
      )}
    </>
  );
};

export default Invoice;
