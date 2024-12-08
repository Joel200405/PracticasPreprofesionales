import React from "react";

const PlanList: React.FC = () => {
  const mockPlans = [
    { id: 1, name: "Plan 1", status: "Pendiente" },
    { id: 2, name: "Plan 2", status: "Aprobado" },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Planes Inscritos</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Nombre</th>
            <th className="border border-gray-300 p-2">Estado</th>
          </tr>
        </thead>
        <tbody>
          {mockPlans.map((plan) => (
            <tr key={plan.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-2 text-center">{plan.id}</td>
              <td className="border border-gray-300 p-2">{plan.name}</td>
              <td className="border border-gray-300 p-2">{plan.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlanList;
