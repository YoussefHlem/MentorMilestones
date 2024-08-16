// @ts-nocheck

"use client";
import { Authentication } from "@/models/auth";
import { useState } from "react";

export default function CRUD() {
  const [userType, setUserType] = useState<"admin" | "customer">("admin");
  const [actionType, setActionType] = useState<"login" | "register" | "update" | "delete">("login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    name: "",
  });

  const handleUserTypeChange = (type: "admin" | "customer") => {
    setUserType(type);
    setActionType("login");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { email, password, password_confirmation, name } = formData;
    // Admin
    const admin = new Authentication("admin").getUserInstance();
    admin?.login(email, password);

    // Customer
    const customer = new Authentication("customer").getUserInstance();
    customer?.login(email, password);
    customer?.register(email, password, password_confirmation, name);
    customer?.edit(email, password, password_confirmation, name);
    customer?.delete(email, password);
  };

  return (
    <section className="h-[100vh] flex flex-1 justify-center items-center">
      <div className="flex-1 max-w-md p-4 bg-gray-100 rounded-lg shadow-md">
        {/* Form for Email, Password, and Conditional Fields */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {(actionType === "register" || actionType === "update") && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Confirm Password:</label>
                <input
                  type="password"
                  name="password_confirmation"
                  value={formData.password_confirmation}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </>
          )}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>

        {/* First Group of Buttons (Admin or Customer) */}
        <div className="mt-6 space-y-2">
          <div className="flex space-x-2">
            <button
              type="button"
              className={`flex-1 py-2 px-4 font-semibold rounded-md shadow ${
                userType === "admin" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => handleUserTypeChange("admin")}
            >
              Admin
            </button>
            <button
              type="button"
              className={`flex-1 py-2 px-4 font-semibold rounded-md shadow ${
                userType === "customer" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => handleUserTypeChange("customer")}
            >
              Customer
            </button>
          </div>
        </div>

        {/* Second Group of Buttons (Login, Register, Update, Delete) */}
        <div className="mt-4 space-y-2">
          <div className="flex space-x-2">
            <button
              type="button"
              className={`flex-1 py-2 px-4 font-semibold rounded-md shadow ${
                actionType === "login" ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActionType("login")}
            >
              Login
            </button>
            {userType === "customer" && (
              <>
                <button
                  type="button"
                  className={`flex-1 py-2 px-4 font-semibold rounded-md shadow ${
                    actionType === "register"
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setActionType("register")}
                >
                  Register
                </button>
                <button
                  type="button"
                  className={`flex-1 py-2 px-4 font-semibold rounded-md shadow ${
                    actionType === "update"
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setActionType("update")}
                >
                  Update
                </button>
                <button
                  type="button"
                  className={`flex-1 py-2 px-4 font-semibold rounded-md shadow ${
                    actionType === "delete"
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setActionType("delete")}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
