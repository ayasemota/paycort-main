"use client";

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigation } from "@/hooks/use-navigation";
import { Loader2 } from 'lucide-react';
import Button from "@/components/ui/Button";

const registerSchema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  password: z.string().min(8, "Use 8 characters or more"),
});

type RegisterValues = z.infer<typeof registerSchema>;

export default function Register() {
  const { navigateTo } = useNavigation();
  const [serverError, setServerError] = useState("");
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterValues) => {
    setServerError("");
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        localStorage.setItem("paycort_token", result.token);
        navigateTo('/onboarding');
      } else {
        setServerError(result.message || "Something went wrong");
      }
    } catch (err) {
      setServerError("Server unreachable");
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[450px] bg-white border border-slate-200 rounded-lg p-8 md:p-10 shadow-sm">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">P</div>
          <h1 className="text-2xl font-medium text-slate-900">Create your Paycort Account</h1>
          <p className="text-slate-600 mt-2">Continue to Paycort AI</p>
        </div>

        {serverError && (
          <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-600 text-xs font-medium rounded">
            {serverError}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <input 
                {...register("name")}
                placeholder=" "
                className={`block w-full px-4 py-3 text-slate-900 bg-transparent border rounded-md focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 peer outline-none transition-all ${errors.name ? 'border-red-500' : 'border-slate-300'}`}
              />
              <label className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Full name</label>
            </div>

            <div className="relative">
              <input 
                {...register("email")}
                placeholder=" "
                className={`block w-full px-4 py-3 text-slate-900 bg-transparent border rounded-md focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 peer outline-none transition-all ${errors.email ? 'border-red-500' : 'border-slate-300'}`}
              />
              <label className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Email address</label>
            </div>

            <div className="relative">
              <input 
                {...register("password")}
                type="password"
                placeholder=" "
                className={`block w-full px-4 py-3 text-slate-900 bg-transparent border rounded-md focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 peer outline-none transition-all ${errors.password ? 'border-red-500' : 'border-slate-300'}`}
              />
              <label className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Password</label>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4">
            <button 
              type="button"
              onClick={() => navigateTo('/login')}
              className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors text-sm"
            >
              Sign in instead
            </button>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="px-6 py-2 bg-emerald-600 text-white font-semibold rounded hover:bg-emerald-700 transition-all shadow-sm active:scale-95 disabled:opacity-70 min-w-[100px]"
            >
              {isSubmitting ? <Loader2 className="animate-spin mx-auto" size={20} /> : "Next"}
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}