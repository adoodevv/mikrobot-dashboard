"use client"
import LoginForm from "@/components/LoginForm";
import { useCallback, useState } from "react";

function LoginPage() {
   return (
      <div>
         <nav className="px-12 py-5">
            <img src="/images/logo-light.jpg" alt="Logo" className="h-28" />
         </nav>
         <LoginForm />
      </div>
   );
}

export default LoginPage;