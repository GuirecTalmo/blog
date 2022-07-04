export default function Layout({ children, home }) {
  const name = "[Guirec]";
  return (
    <div className="container mx-auto columns-1 py-8 mt-6 shadow w-4/5 p-8">
      {children}
    </div>
  );
}
