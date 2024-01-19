"use client";
import { User } from "@/payload-types";

import {
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import Link from "next/link";
import { useAuth } from "@/hooks/use-auth";

function UserAccountNav({ user }: { user: User }) {
  const { signOut } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="overflow-visible">
        <Button variant="ghost" size="sm" className="relative">
          My account
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white w-60 " align="end">
        <div className="flex items-center justify-center gap-2 p-2">
          <div className="flex flex-col space-y-0.5 leading-none">
            <p className="font-medium text-sm text-black">{user.email}</p>
          </div>
        </div>

        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/sell">Seller dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={signOut} asChild>
          <p>Log out</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserAccountNav;
