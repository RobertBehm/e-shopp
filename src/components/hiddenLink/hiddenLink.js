import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/slice/authSlice";

export const ShowOnlyWhenLoggedin = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return children;
  }
  return null;
};

export const ShowOnlyWhenLoggedOut = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return children;
  }
  return null;
};
