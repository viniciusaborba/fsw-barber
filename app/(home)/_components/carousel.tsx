import { db } from "@/app/_lib/prisma";
import BarberShopItem from "./barbershop-item";

interface CarouselProps {
  text: string;
  recommended?: boolean;
}

async function Carousel({ text, recommended }: CarouselProps) {
  const barberShops = await db.barbershop.findMany({});
  const recommendedBarberShops = await db.barbershop.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return (
    <div className="mt-6">
      <h2 className="px-5 text-xs uppercase text-gray-400 font-bold mb-3">
        {text}
      </h2>

      {recommended ? (
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden px-5">
          {recommendedBarberShops.map((barberShop) => (
            <div key={barberShop.id} className="min-w-[167px] max-w-[167px]">
              <BarberShopItem barberShop={barberShop} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden px-5">
          {barberShops.map((barberShop) => (
            <div key={barberShop.id} className="min-w-[167px] max-w-[167px]">
              <BarberShopItem barberShop={barberShop} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Carousel;
