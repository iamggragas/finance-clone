import { ClerkLoaded, ClerkLoading, SignIn, SignUp } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div className="h-full lg:flex flex-col items-center justify-center px-4 bg-gradient-to-r from-gray-700 to-black">
            <div className="text-center space-y-4 pt-16">
                <h1 className="font-bold text-3xl text-[#e6e5ec]">
                    Welcome Back!
                </h1>
                <p className="text-base text-[#7e8ca0]">
                    Log in or Create account to get to your dashboard.
                </p>
            </div>
            <div className="flex itc justify-center mt-8">
                <ClerkLoaded>
                    <SignUp path="/sign-up"/>
                </ClerkLoaded>
                <ClerkLoading>
                    <Loader2 className="animate-spin text-muted-foreground" />
                </ClerkLoading>
            </div>            
        </div>
        <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
            <Image src="/vercel.svg" alt="Vercel Logo" width={400} height={400}/>
        </div>
    </div>
  ) 
}