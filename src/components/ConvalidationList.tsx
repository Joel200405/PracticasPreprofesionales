import React from "react";

const ConvalidationList: React.FC = () => {
  const mockConvalidations = [
    { id: 1, studentName: "Juan Pérez", status: "Aprobado" },
    { id: 2, studentName: "María Gómez", status: "Pendiente" },
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Solicitudes de Convalidación</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-3 text-left">ID</th>
            <th className="border border-gray-300 p-3 text-left">Estudiante</th>
            <th className="border border-gray-300 p-3 text-left">Estado</th>
          </tr>
        </thead>
        <tbody>
          {mockConvalidations.map((convalidation) => (
            <tr key={convalidation.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-3">{convalidation.id}</td>
              <td className="border border-gray-300 p-3">{convalidation.studentName}</td>
              <td className="border border-gray-300 p-3">{convalidation.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConvalidationList;
