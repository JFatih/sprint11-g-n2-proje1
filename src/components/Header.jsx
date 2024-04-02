import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Header() {
  const { isUserLoggedIn } = useAuth();
  return (
    <div>
      <div className="loginFormHeaderDiv">
        <div>
          <h1>FRIENDS DATABASE</h1>
        </div>
        <div className="loginFormHeaderButtonDiv">
          {isUserLoggedIn ? (
            <>
              {" "}
              <Link to="/friends">
                <button>FRIENDS LIST</button>
              </Link>
              <Link to="/friends/add">
                <button>ADD FRIEND</button>
              </Link>
              <Link to="/login">
                <button>LOGOUT</button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <button>LOGIN</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
