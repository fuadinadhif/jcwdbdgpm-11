import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <main>
      <h1>Login Page</h1>

      <form
        onSubmit={async (event) => {
          event.preventDefault();

          const response = await axios.post(
            "http://localhost:8000/api/authentication/login",
            { email, password },
          );

          localStorage.setItem("accessToken", response.data.accessToken);

          setEmail("");
          setPassword("");

          navigate("/");
        }}
      >
        <input
          type="text"
          placeholder="email@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="******"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </main>
  );
}
