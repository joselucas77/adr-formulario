"use client";
import { useAppContext } from "@/contexts/context";
import { useForm, SubmitHandler } from "react-hook-form";
import validator from "validator";

type Inputs = {
  fullName: string;
  sex: string;
  age: Date;
  email: string;
  phone: number;
  cpf: string;
  adress: string;
  houseNumber: string;
  neighborhood: string;
  city: string;
};

const PersonalForm = () => {
  const { handleNextStep } = useAppContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    handleNextStep("church");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="mb-4 text-lg px-3 font-medium leading-none text-gray-900 dark:text-white">
        Dados Pessoais
      </h3>
      <div className="grid gap-5 sm:grid-cols-2 shadow-inner px-3 py-5 max-h-[28rem] overflow-auto">
        <div>
          <label
            htmlFor="fullName"
            className={`block mb-2 text-sm font-medium ${
              errors.fullName?.type === "required"
                ? "text-red-700 dark:text-red-500"
                : "text-gray-900 dark:text-white"
            }`}>
            Nome Completo{" "}
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
          <input
            type="text"
            id="fullName"
            className={`border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 ${
              errors.fullName?.type === "required"
                ? "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-600 focus:border-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            }`}
            placeholder="João Da Silva Cunha"
            {...register("fullName", { required: true })}
          />
          {errors.fullName?.type === "required" && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oops!</span> Preencha este campo!
            </p>
          )}
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="sex"
              className={`block mb-2 text-sm font-medium ${
                errors.sex?.type === "validate"
                  ? "text-red-700 dark:text-red-500"
                  : "text-gray-900 dark:text-white"
              }`}>
              Sexo{" "}
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
              id="sex"
              className={`border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 ${
                errors.sex?.type === "validate"
                  ? "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                  : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              }`}
              {...register("sex", {
                validate: (value) => {
                  return value !== "0";
                },
              })}>
              <option value="0">Selecione</option>
              <option value="he">Masculino</option>
              <option value="she">Feminino</option>
            </select>
            {errors.sex?.type === "validate" && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Oops!</span> Selecione uma opção!
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="age"
              className={`block mb-2 text-sm font-medium ${
                errors.age?.type === "required"
                  ? "text-red-700 dark:text-red-500"
                  : "text-gray-900 dark:text-white"
              }`}>
              Data de Nascimento{" "}
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
            <input
              type="date"
              id="age"
              className={`border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 ${
                errors.age?.type === "required"
                  ? "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                  : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-600 focus:border-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              }`}
              {...register("age", { required: true })}
            />
            {errors.age?.type === "required" && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Oops!</span> Preencha este campo!
              </p>
            )}
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Email{" "}
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
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com"
            {...register("email", {
              required: true,
              validate: (value) => validator.isEmail(value),
            })}
          />
          {errors.email?.type === "required" && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oops!</span> Preencha este campo!
            </p>
          )}
          {errors.email?.type === "validate" && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
              <span className="font-medium">Oops!</span> E-mail inválido!
            </p>
          )}
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="phone"
              className={`block mb-2 text-sm font-medium ${
                errors.phone?.type === "required"
                  ? "text-red-700 dark:text-red-500"
                  : "text-gray-900 dark:text-white"
              }`}>
              Contato{" "}
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
            <input
              type="tel"
              id="phone"
              className={`border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 ${
                errors.phone?.type === "required"
                  ? "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                  : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-600 focus:border-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              }`}
              placeholder="98877-6655"
              pattern="[0-9]{5}-[0-9]{4}"
              {...register("phone", { required: true })}
            />
            {errors.phone?.type === "required" && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Oops!</span> Preencha este campo!
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="cpf"
              className={`block mb-2 text-sm font-medium ${
                errors.cpf?.type === "minLength"
                  ? "text-red-700 dark:text-red-500"
                  : "text-gray-900 dark:text-white"
              }`}>
              CPF
            </label>
            <input
              type="text"
              id="cpf"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="000.000.000-00"
              pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"
              {...register("cpf", { minLength: 14 })}
            />
            {errors.cpf?.type === "minLength" && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Oops!</span> Este campo não segue
                o formato exigido!
              </p>
            )}
          </div>
        </div>
        <div className=" grid gap-5 sm:flex sm:flex-row">
          <div className="sm:basis-[200%]">
            <label
              htmlFor="adress"
              className={`block mb-2 text-sm font-medium ${
                errors.adress?.type === "required"
                  ? "text-red-700 dark:text-red-500"
                  : "text-gray-900 dark:text-white"
              }`}>
              Endereço (Rua, Av.){" "}
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
            <input
              type="text"
              id="adress"
              className={`border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 ${
                errors.adress?.type === "required"
                  ? "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                  : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-600 focus:border-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              }`}
              placeholder="Aeroporto"
              {...register("adress", { required: true })}
            />
            {errors.adress?.type === "required" && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Oops!</span> Preencha este campo!
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="houseNumber"
              className={`block mb-2 text-sm font-medium ${
                errors.houseNumber?.type === "required"
                  ? "text-red-700 dark:text-red-500"
                  : "text-gray-900 dark:text-white"
              }`}>
              Nº{" "}
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
            <input
              type="text"
              id="houseNumber"
              className={`border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 ${
                errors.houseNumber?.type === "required"
                  ? "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                  : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-600 focus:border-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              }`}
              placeholder="176"
              {...register("houseNumber", { required: true })}
            />
            {errors.houseNumber?.type === "required" && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Oops!</span> Preencha este campo!
              </p>
            )}
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="neighborhood"
              className={`block mb-2 text-sm font-medium ${
                errors.neighborhood?.type === "required"
                  ? "text-red-700 dark:text-red-500"
                  : "text-gray-900 dark:text-white"
              }`}>
              Bairro{" "}
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
            <input
              type="text"
              id="neighborhood"
              className={`border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 ${
                errors.neighborhood?.type === "required"
                  ? "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                  : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-600 focus:border-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              }`}
              placeholder="Aeroporto"
              {...register("neighborhood", { required: true })}
            />
            {errors.neighborhood?.type === "required" && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Oops!</span> Preencha este campo!
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="city"
              className={`block mb-2 text-sm font-medium ${
                errors.city?.type === "required"
                  ? "text-red-700 dark:text-red-500"
                  : "text-gray-900 dark:text-white"
              }`}>
              Cidade{" "}
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
            <input
              type="text"
              id="city"
              className={`border text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 ${
                errors.city?.type === "required"
                  ? "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
                  : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-600 focus:border-blue-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              }`}
              placeholder="Aracaju"
              {...register("city", { required: true })}
            />
            {errors.city?.type === "required" && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Oops!</span> Preencha este campo!
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-end px-3">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Seguir
        </button>
        {/* onClick={() => handleNextStep("church")} */}
      </div>
    </form>
  );
};

export default PersonalForm;
