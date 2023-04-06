import { Fragment } from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";

const App = () => {
  const authenticated = useSelector(state => state.auth.isAuthenticated);
  
  return (
    <Fragment>
      <Header />
      {!authenticated && <Auth />}
      {authenticated && <UserProfile/> }
      <Counter />
    </Fragment>
  );
}

export default App;
