import { Link, useLocation } from "react-router-dom";

export const CustomCollapseLink = ({ to, children, icon: Icon, className = '' }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to}
      className={`flex items-center gap-2 py-3 px-4 rounded-lg transition-colors duration-200 ${
        isActive
          ? 'bg-blue-600 text-white font-semibold'
          : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
      } ${className}`}
    >
      {Icon && <Icon className="text-lg" />}
      {children}
    </Link>
  );
};