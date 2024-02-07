"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { SheetHeader, SheetTitle } from "./ui/sheet";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  CalendarIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SideMenu = () => {
  const { data } = useSession();

  const router = useRouter();

  const handleBookingPageClick = () => {
    router.push("/bookings");
  };

  const handleSignOutClick = () => {
    signOut();
  };

  const handleLogInClick = () => {
    signIn("google");
  };

  return (
    <>
      <SheetHeader className="text-left border-b border-solid border-secondary p-5">
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>

      {data?.user ? (
        <div className="flex justify-between px-5 py-6 items-center">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage
                src={data.user?.image ?? ""}
                className="rounded-full h-12"
              />
            </Avatar>

            <h2 className="font-bold">{data.user.name}</h2>
          </div>

          <Button variant="secondary" size="icon" onClick={handleSignOutClick}>
            <LogOutIcon />
          </Button>
        </div>
      ) : (
        <div className="flex flex-col px-5 py-3 gap-3">
          <div className="flex items-center gap-2">
            <UserIcon size={32} />
            <h2 className="font-bold">Olá, faça seu login!</h2>
          </div>

          <Button
            variant="secondary"
            className="w-full justify-start"
            onClick={handleLogInClick}
          >
            <LogInIcon className="mr-2" size={18} />
            Fazer login
          </Button>
        </div>
      )}

      <div className="flex flex-col gap-3 px-5">
        <Button variant="outline" className="justify-start" asChild>
          <Link href="/">
            <HomeIcon size={18} className="mr-2" />
            Início
          </Link>
        </Button>

        {data?.user && (
          <Button
            variant="outline"
            className="justify-start"
            onClick={handleBookingPageClick}
          >
            <CalendarIcon size={18} className="mr-2" />
            Agendamentos
          </Button>
        )}
      </div>
    </>
  );
};

export default SideMenu;
