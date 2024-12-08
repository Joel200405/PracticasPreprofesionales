import React, { useState } from "react";

interface FormData {
  name: string;
  description: string;
  document: File | null;
}

const PlanForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
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
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg space-y-4">
      <h2 className="text-xl font-bold text-gray-700">Registro de Plan</h2>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre del Plan:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
        ></textarea>
      </div>
      <div>
        <label htmlFor="document" className="block text-sm font-medium text-gray-700">Documento:</label>
        <input
          type="file"
          id="document"
          name="document"
          onChange={handleFileChange}
          required
          className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
      >
        Enviar
      </button>
    </form>
  );
};

export default PlanForm;