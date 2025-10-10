// src/components/InputField.jsx
import React from "react";

const InputField = ({ icon: Icon, name, type, value, onChange, placeholder }) => {
  return (
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-yellow-700 pointer-events-none" />
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
        className="w-full p-3 pl-10 border border-gray-300 rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-yellow-600 
        transition duration-150 bg-white shadow-sm text-gray-800"
        required
      />
    </div>
  );
};

export default React.memo(InputField);
