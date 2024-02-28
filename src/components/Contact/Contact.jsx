

import css from "./Contact.module.css";

import { useDispatch } from "react-redux";
import { fetchDeleteContact } from "../../redux/Numbers/operationNumber";

export const Contact = ({ dataContact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const deleteContact = () => dispatch(fetchDeleteContact(id));

  return (
    <>
      <li className={css.liststyle}>
        <div className={css.information}>
          <div className={css.name}>
            <p>{name}</p>
          </div>
          <div className={css.name}>
            <p>{number}</p>
          </div>
        </div>
        <button className={css.btn} onClick={deleteContact}>
          Delete
        </button>
      </li>
    </>
  );
};
