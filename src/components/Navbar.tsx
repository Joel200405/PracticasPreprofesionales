import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-green-600 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-green-200">
            Inicio
          </NavLink>
        </div>
        {/* Enlaces */}
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/plan-inscription"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition duration-300 ${
                  isActive ? "bg-green-700" : "hover:bg-green-500"
                }`
              }
            >
              Inscripción Plan
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/convalidation"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition duration-300 ${
                  isActive ? "bg-green-700" : "hover:bg-green-500"
                }`
              }
            >
              Convalidación
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/final-report"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition duration-300 ${
                  isActive ? "bg-green-700" : "hover:bg-green-500"
                }`
              }
            >
              Informe Final
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/report-review"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition duration-300 ${
                  isActive ? "bg-green-700" : "hover:bg-green-500"
                }`
              }
            >
              Revisión de Informes
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;