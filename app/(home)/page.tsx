import BookingItem from "../_components/booking-item";
import Header from "../_components/header";
import { db } from "../_lib/prisma";
import Carousel from "./_components/carousel";
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

      <Carousel text="Recomendados"/>

      <Carousel text="Populares"/>
    </div>
  );
}
