import { Puff } from "react-loader-spinner";
import css from "./Loader.module.css";
export const Loader = () => {
  return (
    <div className={css.modal}>
      <Puff
        visible={true}
        height="300"
        width="300"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass="puff-wrapper"
        colors={["red", "green", "blue", "yellow", "orange", "purple"]}
      />
    </div>
  );
};
