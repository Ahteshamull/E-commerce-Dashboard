import React, { useState } from "react";

const AddCategory = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0], // Only take the first file uploaded
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // For testing
    // Handle form submission logic, e.g., sending data to API
  };

  return (
    <div className="mx-auto w-full  rounded-xl bg-white p-8 shadow-2xl">
      <h2 className="mb-6 text-center text-3xl font-semibold text-gray-800">
        Add New Category
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Category Name */}
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Category Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-2 block w-full rounded-lg border border-gray-300 px-5 py-3 shadow-sm transition duration-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Enter category name"
          />
        </div>

        {/* Category Description */}
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Category Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-2 block w-full rounded-lg border border-gray-300 px-5 py-3 shadow-sm transition duration-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Enter category description"
          />
        </div>

        {/* Category Image */}
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Category Image
          </label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="mt-2 block w-full rounded-lg border border-gray-300 px-5 py-3 shadow-sm transition duration-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="rounded-lg bg-indigo-600 px-6 py-3 text-white shadow-md transition duration-300 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500 focus:outline-none"
          >
            Add Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
