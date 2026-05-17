import Image from "next/image";
import LoginForm from "./components/auth/LoginForm";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 w-full h-screen bg-linear-to-br from-slate-900 via-slate-950 to-slate-900">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center w-10 h-10 bg-linear-to-br from-blue-400 to-cyan-400 rounded-xl">
            <Image
              className="brightness-0 invert"
              src={"/assets/medconnect_logo.png"}
              alt="MedConnect Logo"
              width={250}
              height={250}
            />
          </div>
          <h1 className="text-white text-2xl font-poppins font-semibold">MedConnect</h1>
        </div>
        <p className="text-gray-600 text-base font-inter">Sua saúde, conectada ao melhor cuidado</p>
      </div>
      <LoginForm />
    </div>
  );
}