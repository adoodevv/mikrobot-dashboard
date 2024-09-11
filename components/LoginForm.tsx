"use client"
import Link from "next/link"
import { useCallback, useState } from "react";

import { Button } from "@/components/ui/button"
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const [variant, setVariant] = useState("login");

   const toggleVariant = useCallback(() => {
      setVariant((currentVariant) => (currentVariant === "login" ? "register" : "login"));
   }, []);

   return (
      <Card className="mx-auto max-w-sm">
         <CardHeader>
            <CardTitle className="text-2xl">{variant === "login" ? "Sign in" : "Register"}</CardTitle>
            <CardDescription className="text-mutedForeground">
               Enter your email below to login to your account
            </CardDescription>
         </CardHeader>
         <CardContent>
            <div className="grid gap-4">
               <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                     id="email"
                     value={email}
                     onChange={(ev: any) => setEmail(ev.target.value)}
                     type="email"
                     placeholder="me@example.com"
                     required
                  />
               </div>
               <div className="grid gap-2">
                  <div className="flex items-center">
                     <Label htmlFor="password">Password</Label>
                     <Link href="#" className="ml-auto inline-block text-sm underline">
                        Forgot your password?
                     </Link>
                  </div>
                  <Input
                     id="password"
                     value={password}
                     onChange={(ev: any) => setEmail(ev.target.value)}
                     type="password"
                     required
                  />
               </div>
               <Button type="submit" className="w-full bg-primary text-primaryForeground">
                  {variant === "login" ? "Login" : "Sign up"}
               </Button>
               {variant === "login" && (
                  <Button variant="outline" className="w-full">
                     Login with Google
                  </Button>
               )}
            </div>
            <div className="mt-4 text-center text-sm">
               {variant === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
               <span onClick={toggleVariant} className="cursor-pointer underline">
                  {variant === "login" ? "Create an account" : "Login"}
               </span>
            </div>
         </CardContent>
      </Card>
   )
}
export default LoginForm;