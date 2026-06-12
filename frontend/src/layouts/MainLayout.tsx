import { Link, Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();

  const isActive = (path: string) =>
    location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">
            Care Management Dashboard
          </h1>

          <nav className="flex gap-4 mt-4">
            <Link
              to="/users"
              className={`px-4 py-2 rounded-lg ${
                isActive("/users")
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              Users
            </Link>

            <Link
              to="/care-forms"
              className={`px-4 py-2 rounded-lg ${
                isActive("/care-forms")
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              Care Forms
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;