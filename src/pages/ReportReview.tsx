import React from "react";
import Navbar from "../components/Navbar";
import ReportReviewForm from "../components/ReportReviewForm";
import ReportsInReviewList from "../components/ReportsInReviewList";

const ReportReview: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Barra de navegación */}
      <Navbar />
      {/* Encabezado */}
      <header className="bg-green-600 text-white py-8 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center">Revisión de Informes</h1>
        </div>
      </header>
      {/* Contenido principal */}
      <main className="container mx-auto py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Formulario */}
        <div className="animate-fade-in">
          <ReportReviewForm />
        </div>
        {/* Lista */}
        <div className="animate-slide-up">
          <ReportsInReviewList />
        </div>
      </main>
    </div>
  );
};

export default ReportReview;