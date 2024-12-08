import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Encabezado */}
        <header className="bg-gray-700 text-white py-3 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-6">
                {/* Botones del encabezado */}
                <div className="flex space-x-6">
                {["Direccionamiento Estratégico", "Gestión para Organizaciones Educativas", "Responsabilidad Social", "Sostenibilidad Ambiental"].map(
                    (option, index) => (
                    <span
                        key={index}
                        className="px-4 py-2 rounded-md hover:bg-gray-500 cursor-pointer transition duration-300"
                    >
                        {option}
                    </span>
                    )
                )}
                </div>
                {/* Icono de usuario */}
                <div className="rounded-full bg-gray-500 w-10 h-10 flex items-center justify-center">
                <span className="text-white">👤</span>
                </div>
            </div>
        </header>


      {/* Opciones principales */}
        <main className="flex-grow flex items-center justify-center bg-gray-200">
            <div className="container grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                "Prácticas preprofesionales",
                "Admisión",
                "Convalidaciones",
                "Nivelaciones de estudiantes",
                "Extensión cultural",
                "Servicios educativos",
                "Internacionalización",
                "Investigación",
                "Diseño curricular",
                "Matrícula",
                "Proyección social",
                "Seguimiento al estudiante",
                "Tutoria",
                "Grados y títulos",
                "Gestión de egresados",
                "Bienestar organizacional",
                ].map((option, index) => (
                <button
                    key={index}
                    onClick={() =>
                    option === "Prácticas preprofesionales"
                        ? navigate("/plan-inscription")
                        : undefined
                    }
                    className={`${
                    option === "Prácticas preprofesionales"
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-white text-gray-700 hover:bg-gray-300"
                    } py-4 px-2 text-center rounded-lg shadow-md transition duration-300`}
                >
                    {option}
                </button>
                ))}
            </div>
        </main>

      {/* Pie de página */}
        <footer className="bg-green-600 py-4">
            <div className="container mx-auto flex flex-wrap justify-around">
                {[
                "Seguridad y salud en el trabajo",
                "Gestión del talento humano",
                "Información y comunicación",
                "Bienestar organizacional",
                "Consejería académica",
                ].map((footerOption, index) => (
                <span
                    key={index}
                    className="px-4 py-2 hover:bg-green-800 rounded-md cursor-pointer transition duration-300 text-white"
                >
                    {footerOption}
                </span>
                ))}
            </div>
            <div className="text-center text-white mt-4 text-sm">
                El mapeo de procesos sigue estándares de ISO 9001 y 21001, ICACIT y SINEACE
            </div>
        </footer>
    </div>
  );
};

export default Home;