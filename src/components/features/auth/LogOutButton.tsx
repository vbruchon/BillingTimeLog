"use client";
import { LogOut } from "lucide-react";
import { Button } from "../../ui/button";
import { signOut } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";

const LogOutButton = () => {
  return (
    <Button variant="destructive">
      <LogOut className="mr-2" size={18} />
      Logout
    </Button>
  );
};

export default LogOutButton;
