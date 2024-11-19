export default function UserMenu({ onLogOut, user }) {
  return (
    <div>
      <p>Welcome, {user.name} 😊</p>
      <button type="button" onClick={onLogOut}>
        Log Out
      </button>
    </div>
  );
}
