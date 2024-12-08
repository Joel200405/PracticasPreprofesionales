import React, { useState } from "react";

interface FormData {
  studentName: string;
  reportTitle: string;
  deliveryDate: string;
  document: File | null;
}

const FinalReportForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    studentName: "",
    reportTitle: "",
    deliveryDate: "",
    document: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, document: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Formulario enviado: " + JSON.stringify(formData));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Subir Informe Final</h2>
      <div>
        <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">Nombre del Estudiante:</label>
        <input
          type="text"
          id="studentName"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          required
          className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
        />
      </div>
      <div>
        <label htmlFor="reportTitle" className="block text-sm font-medium text-gray-700">Título del Informe:</label>
        <input
          type="text"
          id="reportTitle"
          name="reportTitle"
          value={formData.reportTitle}
          onChange={handleChange}
          required
          className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
        />
      </div>
      <div>
        <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700">Fecha de Entrega:</label>
        <input
          type="date"
          id="deliveryDate"
          name="deliveryDate"
          value={formData.deliveryDate}
          onChange={handleChange}
          required
          className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
        />
      </div>
      <div>
        <label htmlFor="document" className="block text-sm font-medium text-gray-700">Documento:</label>
        <input
          type="file"
          id="document"
          name="document"
          onChange={handleFileChange}
          required
          className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition duration-300"
      >
        Enviar
      </button>
    </form>
  );
};

export default FinalReportForm;