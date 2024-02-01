"use client";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useSession } from "next-auth/react";

const WelcomeMessage = () => {
  const { data } = useSession();

  return (
    <div className="px-5 pt-5 ">
      {data?.user ? (
        <div>
          <h2 className="text-xl font-bold">{`Olá, ${data.user.name}!`}</h2>
          <p className="capitalize text-sm">
            {format(new Date(), "EEEE', 'dd 'de' MMMM", {
              locale: ptBR,
            })}
          </p>
        </div>
      ) : (
        <h2 className="text-xl font-bold">
          Realize o cadastro para utilizar o app!
        </h2>
      )}
    </div>
  );
};

export default WelcomeMessage;
