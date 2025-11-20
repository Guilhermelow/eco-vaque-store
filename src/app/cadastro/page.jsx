"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="flex flex-1 justify-between items-center px-10 py-14">
        {/* IMAGEM DO LADO ESQUERDO */}
        <div className="w-1/2 flex justify-center">
          <Image
            src="login.svg" // coloque sua imagem na pasta /public
            width={500}
            height={500}
            alt="Imagem criar conta"
            className="rounded-lg object-contain"
          />
        </div>

        {/* FORMULÁRIO À DIREITA */}
        <div className="w-1/2 max-w-md">
          <h1 className="text-3xl font-semibold mb-3">Crie sua conta</h1>
          <p className="text-sm mb-8 text-gray-500">
            Insira seus dados abaixo
          </p>

          <form className="space-y-4">
            <Input placeholder="Nome" />
            <Input placeholder="E-mail ou número de telefone" />
            <Input type="password" placeholder="Senha" />

            <Button className="w-full mt-3">Criar uma conta</Button>

            {/* Botão Google */}
            <Button variant="outline" className="w-full flex gap-2">
              <Image
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                width={20}
                height={20}
                alt="Google"
              />
              Fazer login no Google
            </Button>
          </form>

          <p className="text-sm text-center mt-6">
            Já tem conta?{" "}
            <a href="/login" className="text-blue-600 underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}