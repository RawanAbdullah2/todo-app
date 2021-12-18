import React, { useState } from "react";
import { Link } from "react-router-dom";


const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");

  return (
    <div>
      <h1>Log in</h1>
      <form>
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>
       <Link to={`/ToDo/${email}`}><button>LogIn</button></Link> 
      </form>
    </div>
  );
};

export default LogIn;
