"use client";
import { useAppContext } from "@/contexts/context";

const EcclesiasticalData = () => {
  const { handleNextStep, handlebeforeStep } = useAppContext();
  return (
    <form action="#">
      <h3 className="flex justify-center mb-4 text-lg px-3 font-medium leading-none text-gray-900 dark:text-white">
        Dados Eclesiásticos
      </h3>
      <div className="grid gap-4 mb-4 sm:grid-cols-2 shadow-inner px-3 py-5 max-h-[28rem] overflow-auto">
        <div>
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Data de Batismo nas Águas
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="church"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Igreja (Batismo)
          </label>
          <input
            type="text"
            name="church"
            id="church"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Igreja de Deus"
            required
          />
        </div>
        <div className="grid gap-4 mb-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="previous-church"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Igreja Anterior
            </label>
            <input
              type="text"
              name="previous-church"
              id="previous-church"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Igreja de Deus"
              required
            />
          </div>
          <div>
            <label
              htmlFor="pastor"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Pastor
            </label>
            <input
              type="text"
              name="pastor"
              id="pastor"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="João Pedro"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="previous-position"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Cargos Exercidos (igreja anterior)
          </label>
          <input
            type="text"
            name="previous-position"
            id="previous-position"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Diácono, ..."
            required
          />
        </div>
        <div>
          <label
            htmlFor="new-function"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Deseja exercer alguma função na Igreja? Qual?
          </label>
          <input
            type="text"
            name="new-function"
            id="new-function"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Levita"
            required
          />
        </div>
        <div>
          <label
            htmlFor="talents"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Talentos/Ministérios que possui
          </label>
          <input
            type="text"
            name="talents"
            id="talents"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="profeta, evangelista, ..."
            required
          />
        </div>
        <div>
          <label
            htmlFor="you-are"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Você é:
          </label>
          <select
            id="you-are"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Selecione</option>
            <option value="Member">Membro</option>
            <option value="Congregant">Congregante</option>
            <option value="Frequenter">Frequentador</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="accepted"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Foi aceito por:
          </label>
          <select
            id="accepted"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Selecione</option>
            <option value="Baptism">Batismo</option>
            <option value="Accession">Adesão</option>
            <option value="Transfer">Transferência de Igreja</option>
            <option value="Acclaim">Aclamação</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between px-3 gap-5">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => handlebeforeStep("personal")}>
          Voltar
        </button>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => handleNextStep("finished")}>
          Seguir
        </button>
      </div>
    </form>
  );
};

export default EcclesiasticalData;
