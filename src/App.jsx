import { ContactList } from "./components/ContactList/ContactList";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { ConctactForm } from "./components/ContactForm/ContactForm";
import css from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


import { Loader } from "./components/Loader/Loader";
import { getLoading } from "./redux/selector";
import { fetchContacts } from "./redux/Numbers/operationNumber";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const isLoading = useSelector(getLoading);
  return (
    <div className={css.app}>
      <h1 className={css.title}>Phonebook</h1>
      <ConctactForm />
      <SearchBar />
      <ContactList />
      {isLoading && <Loader />}
    </div>
  );
};
