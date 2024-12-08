import React from "react";

const ApprovedReportsList: React.FC = () => {
  const mockReports = [
    { id: 1, studentName: "Juan Pérez", reportTitle: "Informe Final 1", status: "Aprobado" },
    { id: 2, studentName: "María Gómez", reportTitle: "Informe Final 2", status: "Pendiente" },
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Informes Finales Aprobados</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-3 text-left">ID</th>
            <th className="border border-gray-300 p-3 text-left">Estudiante</th>
            <th className="border border-gray-300 p-3 text-left">Título del Informe</th>
            <th className="border border-gray-300 p-3 text-left">Estado</th>
          </tr>
        </thead>
        <tbody>
          {mockReports.map((report) => (
            <tr key={report.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-3">{report.id}</td>
              <td className="border border-gray-300 p-3">{report.studentName}</td>
              <td className="border border-gray-300 p-3">{report.reportTitle}</td>
              <td className="border border-gray-300 p-3">{report.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApprovedReportsList;