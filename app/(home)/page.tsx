import BookingItem from "../_components/booking-item";
import Header from "../_components/header";
import { db } from "../_lib/prisma";
import BarberShopItem from "./_components/barbershop-item";
import Search from "./_components/search";
import WelcomeMessage from "./_components/welcome";

export default async function Home() {
  const barberShops = await db.barbershop.findMany({});

  return (
    <div>
      <Header />

      <WelcomeMessage />

      <div className="px-5 mt-6">
        <Search />
      </div>

      <div className="px-5 mt-6">
        <h2 className="text-xs uppercase text-gray-400 font-bold mb-3">
          Agendamentos
        </h2>
        <BookingItem />
      </div>

      <div className="mt-6">
        <h2 className="px-5 text-xs uppercase text-gray-400 font-bold mb-3">
          Recomendados
        </h2>

        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden px-5">
          {barberShops.map((barberShop) => (
            <BarberShopItem key={barberShop.id} barberShop={barberShop}/>
          ))}
        </div>
      </div>
    </div>
  );
}
