import { useContext } from "react";
import { When } from "react-if";
import { AuthContext } from "../../Context/Auth";


const Auth = ({ capability, children }) => {
  const {loggedIn, can} = useContext(AuthContext)
  
  return(
    <When condition={loggedIn && can(capability)}>
      {children}
    </When>
  )
};

export default Auth;
