import { db } from "@/app/_lib/prisma";
import BarberShopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface BarberShopDetailsProps {
  params: {
    id?: string;
  };
}

const BarberShopDetailsPage = async ({ params }: BarberShopDetailsProps) => {
  const session = await getServerSession(authOptions);
  if (!params.id) {
    return null;
  }

  const barberShop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });

  if (!barberShop) {
    return null;
  }

  return (
    <div>
      <BarberShopInfo barberShop={barberShop} />

      <div className="px-5 flex flex-col gap-4 py-6">
        {barberShop.services.map((service) => (
          <ServiceItem
            key={service.id}
            service={service}
            isAuthenticated={!!session?.user}
          />
        ))}
      </div>
    </div>
  );
};

export default BarberShopDetailsPage;
