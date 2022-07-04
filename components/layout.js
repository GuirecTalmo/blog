export default function Layout({ children, home }) {
  const name = "[Guirec]";
  return (
    <div className="w-full px-8 min-h-screen flex justify-center flex-wrap bg-[#f8efe4]">
      {children}
    </div>
  );
}
