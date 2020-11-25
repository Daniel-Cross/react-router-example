import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import WrongRoute from "./components/WrongRoute";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("Hello!");

  const handleChange = (e) => {
    setValue(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Login
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              value={value}
            />
          )}
        />
        <Route exact path="/register" component={Register} />
        <Route component={WrongRoute} />
      </Switch>
    </div>
  );
}

export default App;
