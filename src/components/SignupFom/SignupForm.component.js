import useLocalStorage from '../../hooks/useLocalStorage';

export const SignupForm = () => {
  const [email, setEmail] = useLocalStorage('emailInput');
  const [password, setPassword] = useLocalStorage('passwordInput');

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'email':
        setEmail(event.target.value);
        break;

      case 'password':
        setPassword(event.target.value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Email</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>

      <label>
        <span>Password</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Register</button>
    </form>
  );
};
