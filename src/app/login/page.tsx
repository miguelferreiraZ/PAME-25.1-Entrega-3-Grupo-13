'use client';

import { useRouter } from 'next/navigation'
import LogoLink from '../components/LogoLink'

export default function Login() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/"); // vai para a home
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-yellow-300 to-pink-500">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <LogoLink 
          imageSrc="/id-visual4.png" 
          alt="CherryZ Logo - Voltar para Home"
          className="mb-4"
        />
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <input type="text" placeholder="Email" className="w-full mb-3 p-2 border rounded" required />
        <input type="password" placeholder="Senha" className="w-full mb-6 p-2 border rounded" required />
        <button type="submit" className="w-full bg-yellow-300 hover:bg-yellow-600 text-white font-semibold py-2 rounded">
          Entrar
        </button>
        <img src="/id-visual5.png" alt="ID Visual 2" className="w-20 mx-auto mt-7" />
      </form>
    </div>
  );
}

