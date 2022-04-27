import { createContext } from "react";
import { useReducer } from "react";
import AuthReducer from "./AuthReducer";

//initial state
const INITIAL_STATE = {
    user : {
      _id: "6264e5dcdf58107819cd5c64",
      username : "john",
      email : "john@gmail.com",
      password: "$2b$10$BB8z0guyS26BOmfajnDJ3epiPt62PUA7Ax/ytIDy5o0E1rtrHyNp6",
      profilePicture:"",
      coverPicture:"",
      followers: [],
      followings :[1,2,3]
      
    },
    isFetching : false,
    error : false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider  =({ children }) =>{
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider
          value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
          }}
        >
          {children}
        </AuthContext.Provider>
      );

}