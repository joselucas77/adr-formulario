"use client";
import { useAppContext } from "@/contexts/context";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  date: Date;
  church: string;
  previousChurch: string;
  pastor: string;
  previousPosition: string;
  newFunction: string;
  talents: string;
  youAre: string;
  accepted: string;
};

const EcclesiasticalData = () => {
  const { handleNextStep, handlebeforeStep } = useAppContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    handleNextStep("finished");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="flex justify-center mb-4 text-lg px-3 font-medium leading-none text-gray-900 dark:text-white">
        Dados Eclesiásticos
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 shadow-inner px-3 py-5 max-h-[23rem] overflow-auto">
        <div>
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Data de Batismo nas Águas
          </label>
          <input
            type="date"
            id="date"
            className="border text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-gray-50 border-gray-300 focus:ring-blue-600 focus:border-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:bg-gray-700"
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
            id="church"
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-600 focus:border-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:bg-gray-700"
            placeholder="Igreja de Deus"
          />
        </div>
        <div className="grid gap-4 mb-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="previousChurch"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Igreja Anterior
            </label>
            <input
              type="text"
              id="previousChurch"
              className="border text-sm rounded-lg block w-full p-2.5 bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-600 focus:border-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:bg-gray-700"
              placeholder="Igreja de Deus"
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
              id="pastor"
              className="border text-sm rounded-lg block w-full p-2.5 bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-600 focus:border-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:bg-gray-700"
              placeholder="João Pedro"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="previousPosition"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Cargos Exercidos (igreja anterior)
          </label>
          <input
            type="text"
            id="previousPosition"
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-600 focus:border-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:bg-gray-700"
            placeholder="Diácono, ..."
          />
        </div>
        <div>
          <label
            htmlFor="newFunction"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Deseja exercer alguma função na Igreja? Qual?
          </label>
          <input
            type="text"
            id="newFunction"
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-600 focus:border-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:bg-gray-700"
            placeholder="Levita"
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
            id="talents"
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-600 focus:border-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:bg-gray-700"
            placeholder="profeta, evangelista, ..."
          />
        </div>
        <div>
          <label
            htmlFor="youAre"
            className={`block mb-2 text-sm font-medium ${
              errors.youAre?.type === "required"
                ? "text-red-700 dark:text-red-500"
                : "text-gray-900 dark:text-white"
            }`}>
            Em qual das opções você se enquadra em nossa igreja?{" "}
            <abbr title="Campo obrigatório">
              <span className="inline-flex items-center justify-center w-4 h-4 me-2 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full dark:bg-gray-700 dark:text-blue-400">
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
                </svg>
              </span>
            </abbr>
          </label>
          <select
            id="youAre"
            className={`border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 ${
              errors.youAre?.type === "validate"
                ? "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            }`}
            {...register("youAre", {
              validate: (value) => {
                return value !== "0";
              },
            })}>
            <option value="0">Selecione</option>
            <option value="Member">Membro</option>
            <option value="Congregant">Congregante</option>
            <option value="Frequenter">Frequentador</option>
          </select>
          {errors.youAre?.type === "validate" && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oops!</span> Selecione uma opção!
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="accepted"
            className={`block mb-2 text-sm font-medium ${
              errors.accepted?.type === "required"
                ? "text-red-700 dark:text-red-500"
                : "text-gray-900 dark:text-white"
            }`}>
            De qual forma você foi aceito em nossa igreja?{" "}
            <abbr title="Campo obrigatório">
              <span className="inline-flex items-center justify-center w-4 h-4 me-2 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full dark:bg-gray-700 dark:text-blue-400">
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
                </svg>
              </span>
            </abbr>
          </label>
          <select
            id="accepted"
            className={`border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 ${
              errors.accepted?.type === "validate"
                ? "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            }`}
            {...register("accepted", {
              validate: (value) => {
                return value !== "0";
              },
            })}>
            <option value="0">Selecione</option>
            <option value="Baptism">Batismo</option>
            <option value="Accession">Adesão</option>
            <option value="Transfer">Transferência de Igreja</option>
            <option value="Acclaim">Aclamação</option>
          </select>
          {errors.accepted?.type === "validate" && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oops!</span> Selecione uma opção!
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-between px-3 py-5 gap-5">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => handlebeforeStep("personal")}>
          Voltar
        </button>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Seguir
        </button>
      </div>
    </form>
  );
};

export default EcclesiasticalData;
