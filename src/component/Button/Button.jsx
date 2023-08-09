// import { MdMessage } from "react-icons/md";
import styles from "../Button/Button.module.css";


// const Button = ({ isOutline, icon, text, ...rest }) => {
//   return (
//     <button
//       {...rest}
//       className={isOutline ? styles.outline_btn : styles.primary_btn}
//     >
//       {icon}
//       {text}
//     </button>
//   );
// };

const Button = (props) => {
  return (
      <button className={styles.primary}>           
          {props.icon}
          {props.text}
      
      </button>      
  );
};

export default Button;