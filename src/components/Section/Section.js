export default function Section({ children, title }) {
  return (
    <div>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}
