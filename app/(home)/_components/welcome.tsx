import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const WelcomeMessage = () => {
  return (
    <div className="px-5 pt-5 ">
      <h2 className="text-xl font-bold">Olá, Miguel!</h2>
      <p className="capitalize text-sm">
        {format(new Date(), "EEEE', 'dd 'de' MMMM", {
          locale: ptBR,
        })}
      </p>
    </div>
  );
};

export default WelcomeMessage;
