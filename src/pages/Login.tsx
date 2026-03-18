import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className="login-container">
      <h2>Login</h2>
      <p>Willkommen bei der Bank of Rapperswil.</p>
      <br />
      <Link to="/dashboard">
        <button type="button">Zum Dashboard</button>
      </Link>
    </section>
  );
};

export default Login;