import Sidebar from "./Sidebar";
import Footer from "./Footer";
import CursorTrail from "./CursorTrail";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <CursorTrail />
      <Sidebar />
      <main className="lg:ml-[220px] px-6 sm:px-10 max-w-content">
        {children}
        <Footer />
      </main>
    </div>
  );
}
