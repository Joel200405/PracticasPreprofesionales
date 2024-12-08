import React from "react";

interface ReportInReview {
  id: number;
  title: string;
  studentName: string;
  submissionDate: string;
  status: string;
}

const ReportsInReviewList: React.FC = () => {
  const mockReports: ReportInReview[] = [
    { id: 1, title: "Informe Avance 1", studentName: "Juan Pérez", submissionDate: "2024-12-01", status: "En Revisión" },
    { id: 2, title: "Informe Final 2", studentName: "María Gómez", submissionDate: "2024-12-02", status: "Aprobado" },
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Informes en Revisión</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 p-3 text-left">ID</th>
            <th className="border border-gray-300 p-3 text-left">Título</th>
            <th className="border border-gray-300 p-3 text-left">Estudiante</th>
            <th className="border border-gray-300 p-3 text-left">Fecha de Entrega</th>
            <th className="border border-gray-300 p-3 text-left">Estado</th>
          </tr>
        </thead>
        <tbody>
          {mockReports.map((report) => (
            <tr key={report.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-3">{report.id}</td>
              <td className="border border-gray-300 p-3">{report.title}</td>
              <td className="border border-gray-300 p-3">{report.studentName}</td>
              <td className="border border-gray-300 p-3">{report.submissionDate}</td>
              <td className="border border-gray-300 p-3">{report.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsInReviewList;