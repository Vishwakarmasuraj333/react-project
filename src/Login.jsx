function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />

        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;