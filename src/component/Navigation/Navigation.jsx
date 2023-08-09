// import React from 'react'


// import styles from "./Navigation.module.css";

// const Navigation = () => {
//   return (
//     <nav className={`${styles.navigation} container`}>
//       <div className="logo">
//         <img src="/images/logo.png" alt="do some coding logo" />
//       </div>

//       <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//     </nav>
//   );
// };

// export default Navigation;


import styles from "../Navigation/Navigation.module.css";
console.log(styles);


// className={`${styles.navigation} container`}
const Navigation = () => {
  return (
   
     // 09:33:47:174 {navigation:'_navigation_1nb38_1'}
          <nav className = {`${styles.navigation} container`} >
          <div className="logo">
               <img src="/src/assets/images/logo.png" alt="do some coding logo"></img>
          </div>

              <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
             </ul>
              
          </nav>
  )
}

export default Navigation;