import { CircleCheckBig } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Password requirements validation
  const requirements = {
    minLength: password.length >= 8,
    hasNumber: /\d/.test(password),
    hasUppercase: /[A-Z]/.test(password),
    noSpaces: !/\s/.test(password),
  };

  
  // Check if all requirements are met
  const allRequirementsMet = Object.values(requirements).every(Boolean);
  const passwordsMatch = password === confirmPassword && password !== '';

  // Handle form submission (optional, for demonstration)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (allRequirementsMet && passwordsMatch) {
      console.log('Form submitted successfully');
    }
  };

  return (
    <div className={`flex flex-col mt-12 md:mt-20 rounded-xl border-gray-300 md:border-1  p-2 md:p-10 md:shadow-lg bg-white max-w-md mx-auto sm:min-w-md `}>
      <div className="flex-col flex text-left">
        <h2 className="text-lg font-bold">Conta</h2>
        <h3>Faça login ou crie uma conta para continuar</h3>
      </div>

      {/* Seleção login/registro */}
      <div className="relative flex mt-5  outline-2 outline-orange-400 rounded-xl">
        <div
          className={`absolute top-0 scale-101 bottom-0 w-1/2 bg-orange-400 rounded-xl  transition-transform duration-300 ease-in-out ${
            isRegister ? "translate-x-full" : "translate-x-0"
          }`}
        ></div>
        <button
          className={`relative z-10 w-1/2 py-2 rounded-xl font-bold cursor-pointer text-center duration-300 ${
            !isRegister ? "text-white" : "text-gray-700"
          }`}
          onClick={() => setIsRegister(false)}
        >
          Login
        </button>
        <button
          className={`relative z-10 w-1/2 select-none py-2 rounded-xl font-bold cursor-pointer text-center ${
            isRegister ? "text-white" : "text-gray-700"
          }`}
          onClick={() => setIsRegister(true)}
        >
          Cadastre-se
        </button>
      </div>

      {/* Registro */}
      {isRegister ? (
        <form className={`flex flex-col mt-5 registrotela `} onSubmit={handleSubmit}>
         
        <h2 className="text-center font-bold">Crie sua conta</h2>
        <label htmlFor="nome" className="text-md font-bold">
          Nome
        </label>
        <input
          type="text"
          className="border border-gray-300 rounded-lg p-2 mt-1 placeholder:text-gray-400"
          placeholder="João da Silva"
        />
        <label htmlFor="cel" className="text-md font-bold mt-5">
          Celular
        </label>
        <input
          type="text"
          className="border border-gray-300 rounded-lg p-2 mt-1 placeholder:text-gray-400"
          placeholder="(99) 99999-9999"
        />
        <label htmlFor="email" className="text-md font-bold mt-5">
          E-mail
        </label>
        <input
          type="email"
          className="border border-gray-300 rounded-lg p-2 mt-1 placeholder:text-gray-400"
          placeholder="seuemail@gmail.com"
        />
        <label htmlFor="password" className="text-md font-bold mt-5">
          Senha
        </label>
        <div className="relative mt-2 group">
          <input
            type={showPassword ? 'text' : 'password'}
            className="border border-gray-300 rounded-lg p-2 placeholder:text-gray-400 w-full"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
          />
          <button
            type="button"
            tabIndex={-1}
            className="absolute right-2 top-1/2 select-none -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => setShowPassword(!showPassword)}
            onMouseDown={(e) => e.preventDefault()}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                <line x1="2" x2="22" y1="2" y2="22" />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`bg-gray-100 border border-gray-300 text-gray-600 rounded-lg text-sm transition-all duration-200 ease-in-out ${
            isPasswordFocused
              ? 'opacity-100 max-h-50'
              : 'opacity-0 pointer-events-none max-h-0'
          }`}
        >
          <div className="p-2">
            <h3 className="font-bold">A senha deve conter pelo menos:</h3>
            <div className="flex items-center gap-1">
              <div className="min-w-fit">
                <CircleCheckBig
                  size={13}
                  className={requirements.minLength ? 'text-green-700' : 'text-gray-400'}
                />
              </div>
              8 caracteres
            </div>
            <div className="flex items-center gap-1">
              <div className="min-w-fit">
                <CircleCheckBig
                  size={13}
                  className={requirements.hasNumber ? 'text-green-700' : 'text-gray-400'}
                />
              </div>
              Um número (0-9)
            </div>
            <div className="flex items-center gap-1">
              <div className="min-w-fit">
                <CircleCheckBig
                  size={13}
                  className={requirements.hasUppercase ? 'text-green-700' : 'text-gray-400'}
                />
              </div>
              Uma letra maiúscula (A-Z)
            </div>
            <div className="flex items-start gap-1">
              <div className="min-w-fit mt-1">
                <CircleCheckBig
                  size={13}
                  className={requirements.noSpaces ? 'text-green-700' : 'text-gray-400'}
                />
              </div>
              Sem espaços
            </div>
          </div>
        </div>
        <label htmlFor="confirmPassword" className="text-md font-bold mt-5">
          Confirmar Senha
        </label>
        <div className="relative mt-2">
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            className="border border-gray-300 rounded-lg p-2 placeholder:text-gray-400 w-full"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="button"
            tabIndex={-1}
            className="absolute right-2 top-1/2 select-none -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            onMouseDown={(e) => e.preventDefault()}
          >
            {showConfirmPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                <line x1="2" x2="22" y1="2" y2="22" />
              </svg>
            )}
          </button>
        </div>
        {!passwordsMatch && confirmPassword !== '' && (
          <p className="text-red-500 text-sm mt-2">As senhas não coincidem.</p>
        )}
        <button
          type="submit"
          className={`bg-orange-400 text-white transition-all duration-150 cursor-pointer p-3 px-10 rounded-full mt-5 w-fit mx-auto font-bold ${
            !(allRequirementsMet && passwordsMatch)
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-orange-500'
          }`}
          disabled={!(allRequirementsMet && passwordsMatch)}
        >
          Registrar
        </button>
       
      </form>
      ) : (
        // Login
        <div className={`flex flex-col mt-5 logintela`}>
          <h2 className="text-center font-bold">Acesse sua conta</h2>
          <label htmlFor="email" className="text-md font-bold">
            E-mail
          </label>
          <input
            type="email"
            className="border border-gray-300 rounded-lg p-2 mt-2 placeholder:text-gray-400"
            placeholder="seuemail@gmail.com"
          />
          <label htmlFor="password" className="text-md font-bold mt-5">
            Senha
          </label>
          <div className="relative mt-2">
            <input
              type={showPassword ? "text" : "password"}
              className="border border-gray-300 rounded-lg p-2  placeholder:text-gray-400 w-full"
              placeholder="••••••••"
            />
            <button
              type="button"
              tabIndex={-1}
              className="absolute right-2 top-1/2 -translate-y-1/2 select-none text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                  <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                  <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                  <line x1="2" x2="22" y1="2" y2="22" />
                </svg>
              )}
            </button>
          </div>

          <span className="text-right">
            <button className="inline-block text-sm underline font-semibold cursor-pointer select-none">
              Esqueceu sua senha?
            </button>
          </span>
          <button className="bg-orange-400 hover:bg-orange-500 text-white transition-all duration-150 cursor-pointer p-3 px-10 rounded-full mt-5 w-fit mx-auto font-bold ">
            Entrar
          </button>
        </div>
      )}

      <div className="relative flex items-center justify-center mt-10 mb-3">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="px-3 uppercase">ou continue com</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <div className="flex justify-center gap-8 mt-2 [&>svg]:cursor-pointer [&>svg]:hover:bg-gray-200 [&>svg]:rounded-full [&>svg]:p-1 [&>svg]:transition-all [&>svg]:duration-300 [&>svg]:fill-gray-500 [&>svg]:hover:fill-gray-700">
        {/* Google icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 48 48"
        >
          <path
            fill="#fbc02d"
            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20 s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
          ></path>
          <path
            fill="#e53935"
            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039 l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
          ></path>
          <path
            fill="#4caf50"
            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
          ></path>
          <path
            fill="#1565c0"
            d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
          ></path>
        </svg>
        {/* Facebook icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 48 48"
        >
          <linearGradient
            id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
            x1="9.993"
            x2="40.615"
            y1="9.993"
            y2="40.615"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#2aa4f4"></stop>
            <stop offset="1" stop-color="#007ad9"></stop>
          </linearGradient>
          <path
            fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
            d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
          ></path>
          <path
            fill="#fff"
            d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
