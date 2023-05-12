import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Link to="/home">
      <button className="btn">Ir para home</button>
    </Link>
  );
}
