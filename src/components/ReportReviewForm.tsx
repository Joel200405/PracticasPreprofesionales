import React, { useState } from "react";

interface ReviewFormData {
  reportId: string;
  reviewerName: string;
  observations: string;
  status: "Aprobado" | "Rechazado";
}

const ReportReviewForm: React.FC = () => {
  const [formData, setFormData] = useState<ReviewFormData>({
    reportId: "",
    reviewerName: "",
    observations: "",
    status: "Aprobado",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Revisión enviada: " + JSON.stringify(formData));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Enviar Revisión</h2>
      <div>
        <label htmlFor="reportId" className="block text-sm font-medium text-gray-700">ID del Informe:</label>
        <input
          type="text"
          id="reportId"
          name="reportId"
          value={formData.reportId}
          onChange={handleChange}
          required
          className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
        />
      </div>
      <div>
        <label htmlFor="reviewerName" className="block text-sm font-medium text-gray-700">Nombre del Revisor:</label>
        <input
          type="text"
          id="reviewerName"
          name="reviewerName"
          value={formData.reviewerName}
          onChange={handleChange}
          required
          className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
        />
      </div>
      <div>
        <label htmlFor="observations" className="block text-sm font-medium text-gray-700">Observaciones:</label>
        <textarea
          id="observations"
          name="observations"
          value={formData.observations}
          onChange={handleChange}
          required
          className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
        ></textarea>
      </div>
      <div>
        <label htmlFor="status" className="block text-sm font-medium text-gray-700">Estado:</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
        >
          <option value="Aprobado">Aprobado</option>
          <option value="Rechazado">Rechazado</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition duration-300"
      >
        Enviar Revisión
      </button>
    </form>
  );
};

export default ReportReviewForm;