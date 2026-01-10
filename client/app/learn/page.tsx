"use client";

import React from "react";
import { BookOpen, PlayCircle, Shield, TrendingUp, Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import { useNavigation } from "@/hooks/use-navigation";

// Dummy Data for Learning Modules
const LEARN_MODULES = [
  {
    id: 1,
    title: "Getting Started with Paycort",
    description:
      "Learn the basics of your new dashboard, how to fund your wallet, and pay your first bill.",
    category: "Basics",
    duration: "5 min",
    icon: <Zap className="w-5 h-5 text-amber-500" />,
    level: "Beginner",
  },
  {
    id: 2,
    title: "Understanding Smart Tax AI",
    description:
      "Deep dive into how our AI analyzes your transaction patterns to legitimate tax savings.",
    category: "AI Features",
    duration: "12 min",
    icon: <PlayCircle className="w-5 h-5 text-emerald-500" />,
    level: "Intermediate",
  },
  {
    id: 3,
    title: "Secure Your Account",
    description:
      "Best practices for keeping your financial data safe. 2FA setup and security keys.",
    category: "Security",
    duration: "8 min",
    icon: <Shield className="w-5 h-5 text-blue-500" />,
    level: "All Levels",
  },
  {
    id: 4,
    title: "Maximizing Cashback Rewards",
    description:
      "Strategies to get the most out of every utility payment and successful referral.",
    category: "Rewards",
    duration: "6 min",
    icon: <TrendingUp className="w-5 h-5 text-purple-500" />,
    level: "Intermediate",
  },
];

export default function LearnPage() {
  const { navigateTo } = useNavigation();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Learning Center
              </h1>
              <p className="mt-2 text-lg text-slate-600">
                Master your finances with Paycort's guides and tutorials.
              </p>
            </div>
            <Button onClick={() => navigateTo("/dashboard")} variant="outline">
              Back to Dashboard
            </Button>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Featured Banner */}
        <div className="bg-emerald-900 rounded-2xl p-8 mb-10 text-white flex flex-col md:flex-row items-center justify-between shadow-lg overflow-hidden relative">
          <div className="relative z-10 max-w-lg">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-800 text-emerald-100 text-xs font-medium mb-4 border border-emerald-700">
              New Course
            </div>
            <h2 className="text-2xl font-bold mb-3">
              Crypto & Tax Compliance 101
            </h2>
            <p className="text-emerald-100 mb-6 leading-relaxed">
              Learn how to navigate the complex world of cryptocurrency
              taxation. Our new AI module automatically generates reports for
              your crypto assets.
            </p>
            <Button className="bg-white text-emerald-900 hover:bg-emerald-50 border-transparent">
              Start Learning
            </Button>
          </div>
          {/* Abstract Background Decoration */}
          <div className="absolute right-0 top-0 h-full w-1/3 opacity-10 pointer-events-none">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#FFFFFF"
                d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.9C87.4,-34.7,90.1,-20.4,85.8,-7.1C81.5,6.2,70.2,18.5,60.5,29.6C50.8,40.7,42.7,50.6,33.4,58.8C24.1,67,13.6,73.5,1.7,70.6C-10.2,67.7,-23.5,55.4,-36.8,45.8C-50.1,36.2,-63.4,29.3,-71.8,17.9C-80.2,6.5,-83.7,-9.4,-78.6,-22.8C-73.5,-36.2,-59.8,-47.1,-46.5,-54.6C-33.2,-62.1,-20.3,-66.2,-6.9,-54.3L0,0Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>

        {/* Modules List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LEARN_MODULES.map((module) => (
            <div
              key={module.id}
              className="group bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-all duration-300 hover:border-emerald-200 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-colors">
                  {module.icon}
                </div>
                <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                  {module.level}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                {module.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                {module.description}
              </p>

              <div className="flex items-center text-xs text-slate-400 pt-4 border-t border-slate-100">
                <BookOpen className="w-3.5 h-3.5 mr-1.5" />
                <span className="mr-3">{module.category}</span>
                <span className="w-1 h-1 rounded-full bg-slate-300 mr-3"></span>
                <span>{module.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
