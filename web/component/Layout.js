import React,{useContext} from "react";
import { ModalContext } from "../config/context/ModalProvider";
import LoadPage from "../container/loadPage";

export default function Layout({ children }) {
  const { dataMember } = useContext(ModalContext);
  return <>{dataMember != undefined ? { children } : <LoadPage />}</>;
}
