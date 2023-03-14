import { useState } from "react";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  const handleReset = () => {
    setUsername('');
    setPassword('');
  };

  return (
    <div className="wrapper d-flex justify-content-center mt-5">
    <form onSubmit={handleSubmit}>
      <div className="p-1">
        <label className="p-2" htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange} />
      </div>
      <div className="p-2">
        <label className="p-2" htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button className="p-2 m-3" type="submit">Log in</button>
      <button className="p-2" type="button" onClick={handleReset}>Reset</button>
    </form>
    </div>
  );
};