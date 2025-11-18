import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Twitter, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#063b72] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Exclusivo */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Exclusivo</h3>
          <p className="text-sm">Inscrever-se</p>
          <p className="text-sm mb-4">Ganhe 10% de desconto</p>

          <div className="flex gap-2 items-center w-60">
            <Input
              placeholder="Digite seu e-mail"
              className="bg-white text-black"
            />
            <Button variant="secondary" className="text-black">
              &gt;
            </Button>
          </div>
        </div>

        {/* Suporte */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Suporte</h3>
          <p className="text-sm text-gray-200">vaqueStore@gmail.com</p>
          <p className="text-sm text-gray-200 mt-1">+8888888-9999</p>
        </div>

        {/* Conta */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Conta</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#">Minha conta</a></li>
            <li><a href="#">Login / Registro</a></li>
            <li><a href="#">Carrinho</a></li>
            <li><a href="#">Lista de desejos</a></li>
            <li><a href="#">Comprar</a></li>
          </ul>
        </div>

        {/* Links Rápidos */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Link Rápido</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><a href="#">Política de Privacidade</a></li>
            <li><a href="#">Termos de Uso</a></li>
            <li><a href="#">Perguntas frequentes</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Download App</h3>

          <div className="flex flex-col space-y-2 mb-4">
            <img src="/googleplay.png" alt="Google Play" className="w-32" />
            <img src="/appstore.png" alt="App Store" className="w-32" />
          </div>

          <div className="flex items-center space-x-4 text-xl">
            <Globe className="cursor-pointer hover:opacity-75" />
            <Facebook className="cursor-pointer hover:opacity-75" />
            <Twitter className="cursor-pointer hover:opacity-75" />
            <Instagram className="cursor-pointer hover:opacity-75" />
          </div>
        </div>
      </div>

      <Separator className="bg-white/20 my-10" />

      <div className="text-center text-sm text-gray-300">
        © 2025 - Todos os direitos reservados.
      </div>
    </footer>
  );
}
