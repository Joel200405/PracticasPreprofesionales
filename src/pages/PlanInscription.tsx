import React from "react";
import Navbar from "../components/Navbar";
import PlanForm from "../components/PlanForm";
import PlanList from "../components/PlanList";

const PlanInscription: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Barra de navegación */}
      <Navbar />
      {/* Encabezado */}
      <header className="bg-green-600 text-white py-8 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center">Inscripción de Plan de Prácticas</h1>
        </div>
      </header>
      {/* Contenido principal */}
      <main className="container mx-auto py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Formulario */}
        <div>
          <PlanForm />
        </div>
        {/* Lista */}
        <div>
          <PlanList />
        </div>
      </main>
    </div>
  );
};

export default PlanInscription;