"use server";

import { db } from "@/app/_lib/prisma";
import { endOfDay, startOfDay } from "date-fns";

interface getDayBookingsProps {
  date: Date;
  barberShopId: string;
}

export const getDayBookings = async ({
  date,
  barberShopId,
}: getDayBookingsProps) => {
  const bookings = await db.booking.findMany({
    where: {
      barbershopId: barberShopId,
      date: {
        lte: endOfDay(date),
        gte: startOfDay(date),
      },
    },
  });

  return bookings;
};
