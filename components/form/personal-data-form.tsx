"use client";
// import { useState } from "react";
import { useAppContext } from "@/contexts/context";

const PersonalForm = () => {
  const { handleNextStep } = useAppContext();
  // const [name, setName] = useState("");
  // const [sex, setSex] = useState("");
  // const [age, setAge] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState(0);
  // const [cpf, setCpf] = useState("");
  // const [adress, setAdress] = useState("");
  // const [number, setNumber] = useState(0);
  // const [neighborhood, setNeighborhood] = useState("");
  // const [city, setCity] = useState("");
  return (
    <form>
      <h3 className="mb-4 text-lg px-3 font-medium leading-none text-gray-900 dark:text-white">
        Dados Pessoais
      </h3>
      <div className="grid gap-4 mb-4 sm:grid-cols-2 shadow-inner px-3 py-5 max-h-[38rem] overflow-auto">
        <div>
          <label
            htmlFor="fullName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Nome Completo
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="João Da Silva Cunha"
            required
          />
        </div>
        <div className="grid gap-4 mb-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="sex"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Sexo
            </label>
            <select
              id="sex"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Selecione</option>
              <option value="he">Masculino</option>
              <option value="she">Feminino</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="date"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Data de Nascimento
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com"
            required
          />
        </div>
        <div className="grid gap-4 mb-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Contato
            </label>
            <input
              type="tel"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="98877-6655"
              pattern="[0-9]{5}-[0-9]{4}"
              required
            />
          </div>
          <div>
            <label
              htmlFor="cpf"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              CPF (opcional)
            </label>
            <input
              type="text"
              id="cpf"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="000.000.000-00"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{2}"
              required
            />
          </div>
        </div>
        <div className=" grid gap-4 mb-4 sm:flex sm:flex-row">
          <div className="sm:basis-[200%]">
            <label
              htmlFor="adress"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Endereço (Rua, Av.)
            </label>
            <input
              type="text"
              name="adress"
              id="adress"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Rua Cinegrafista Pinheiro"
              required
            />
          </div>
          <div>
            <label
              htmlFor="houseNumber"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Nº
            </label>
            <input
              type="text"
              name="houseNumber"
              id="houseNumber"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="176"
              required
            />
          </div>
        </div>
        <div className="grid gap-4 mb-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="neighborhood"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Bairro
            </label>
            <input
              type="text"
              id="neighborhood"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Aeroporto"
              required
            />
          </div>
          <div>
            <label
              htmlFor="city"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Cidade
            </label>
            <input
              type="text"
              id="city"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Aracaju"
              required
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end px-3">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => handleNextStep("church")}>
          Seguir
        </button>
      </div>
    </form>
  );
};

export default PersonalForm;
