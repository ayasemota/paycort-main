"use client";

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigation } from "@/hooks/use-navigation";
import { Loader2 } from 'lucide-react';
import Button from "@/components/ui/Button";

const loginSchema = z.object({
  email: z.string().email("Enter an email"),
  password: z.string().min(1, "Enter a password"),
});

type LoginValues = z.infer<typeof loginSchema>;

export default function Login() {
  const { navigateTo } = useNavigation();
  const [serverError, setServerError] = useState("");

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema)
  });

  const onLogin = async (data: LoginValues) => {
    setServerError("");
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        localStorage.setItem("paycort_token", result.token);
        navigateTo('/dashboard');
      } else {
        setServerError(result.message || "Invalid credentials");
      }
    } catch (err) {
      setServerError("System offline");
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[450px] bg-white border border-slate-200 rounded-lg p-8 md:p-10 shadow-sm">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">P</div>
          <h1 className="text-2xl font-medium text-slate-900">Sign in</h1>
          <p className="text-slate-600 mt-2 text-sm uppercase tracking-wide">Use your Paycort Account</p>
        </div>

        {serverError && (
          <div className="mb-6 p-3 bg-red-50 text-red-600 text-xs font-medium rounded border border-red-200">
            {serverError}
          </div>
        )}

        <form onSubmit={handleSubmit(onLogin)} className="space-y-6">
          <div className="relative">
            <input 
              {...register("email")}
              placeholder=" "
              className={`block w-full px-4 py-3.5 text-slate-900 bg-transparent border rounded-md focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 peer outline-none transition-all ${errors.email ? 'border-red-500' : 'border-slate-300'}`}
            />
            <label className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Email address</label>
          </div>

          <div className="relative">
            <input 
              {...register("password")}
              type="password"
              placeholder=" "
              className={`block w-full px-4 py-3.5 text-slate-900 bg-transparent border rounded-md focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 peer outline-none transition-all ${errors.password ? 'border-red-500' : 'border-slate-300'}`}
            />
            <label className="absolute text-sm text-slate-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-3">Password</label>
          </div>

          <div className="flex items-center justify-between pt-6">
            <button 
              type="button" 
              onClick={() => navigateTo('/register')}
              className="text-emerald-600 font-semibold text-sm hover:text-emerald-700"
            >
              Create account
            </button>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="px-8 py-2.5 bg-emerald-600 text-white font-semibold rounded hover:bg-emerald-700 transition-all shadow-sm active:scale-95 disabled:opacity-70 min-w-[100px]"
            >
              {isSubmitting ? <Loader2 className="animate-spin mx-auto" size={20} /> : "Sign in"}
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}