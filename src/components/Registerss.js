import React, { useState, useEffect } from "react";
const Registerss = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [password, setPwd] = useState("");
  const [passwordConf, setPwdConf] = useState("");
  const [email, setEmail] = useState("");
  const [UserPosition, setUserPosition] = useState("");
  const [PasswordIsValid, setPassIsValid] = useState(true);

  const handle = () => {
    if (PasswordIsValid) {
      localStorage.setItem("Name", name);
      localStorage.setItem("Age", age);
      localStorage.setItem("Password", password);
      localStorage.setItem("Email", email);
      localStorage.setItem("User Position", UserPosition);
    }
  };

  const PasswordConfHandler = (e) => {
    setPwdConf(e.target.value);
  };

  useEffect(() => {
    if (password.length > 0 && passwordConf.length > 0) {
      if (password === passwordConf) {
        setPassIsValid(true);
      } else {
        setPassIsValid(false);
      }
    }
  }, [password, passwordConf]);
  const PasswordHandler = (e) => {
    setPwd(e.target.value);
  };
  return (
    <>
      <div>
        <form>
          <h3> SignUp </h3>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
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
              onChange={PasswordHandler}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password Confirmation"
              value={passwordConf}
              onChange={PasswordConfHandler}
            />
          </div>
          {!PasswordIsValid && <p>Password not same!</p>}
          <div>
            Choose a user Position
            <select
              id="UserPosition"
              name="UserPosition"
              onChange={(e) => setUserPosition(e.target.value)}
            >
              <option value="SoftwareDeveloper">Software Developer</option>
              <option value="CEO">CEO</option>
            </select>
          </div>
          <div>
            <button onClick={handle}>SignUp</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Registerss;
