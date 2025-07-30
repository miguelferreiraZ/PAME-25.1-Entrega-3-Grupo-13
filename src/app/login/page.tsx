'use client';

import { useRouter } from 'next/navigation' // <- useRouter vem de next/router no pages/

export default function Login() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/"); // vai para a home
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow-md w-80">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <input type="text" placeholder="Email" className="w-full mb-3 p-2 border rounded" required />
        <input type="password" placeholder="Senha" className="w-full mb-3 p-2 border rounded" required />
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded">
          Entrar
        </button>
      </form>
    </div>
  );
}

