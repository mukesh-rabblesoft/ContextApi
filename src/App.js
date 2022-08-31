import { Fragment, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AllRoutes from "./AllRoutes/AllRoutes";
import MyContext from "./ContextApi/MyContaxt";
import axios from "axios";

function App() {
  const [getData, setGetData] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  useState(() => {
    axios
      .get(url)
      .then((responese) => {
       //console.log("response",responese.data);
        setGetData(responese.data);
        
      })
      .catch((Error) => {
        console.log(Error);
      });
  });

//console.log("hellow getData",getData);

  return (
    <Fragment>
      <MyContext.Provider value={getData}>
        <AllRoutes />
      </MyContext.Provider>
    </Fragment>
  );
}

export default App;
