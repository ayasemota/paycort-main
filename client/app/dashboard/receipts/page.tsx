"use client";

import React, { useState, useRef } from 'react';
import { Camera, Upload, X, FileText, Loader2, CheckCircle2 } from 'lucide-react';
import Button from "@/components/ui/Button";

export default function ReceiptsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setSelectedImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    setIsUploading(true);
    // Simulate upload delay for sexy UX
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsUploading(false);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setSelectedImage(null);
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-white pt-12 px-6 font-sans text-black animate-in fade-in duration-500">
      <div className="max-w-md mx-auto">
        
        <header className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-black tracking-tighter uppercase leading-none">Your Receipts</h1>
            <p className="text-zinc-500 font-medium mt-2">AI-powered expense tracking.</p>
          </div>
          <FileText className="text-zinc-100" size={40} />
        </header>

        {/* Upload Selection Zone */}
        {!selectedImage ? (
          <div className="space-y-4 mb-12">
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="w-full p-8 rounded-[2.5rem] border-2 border-dashed border-zinc-100 bg-zinc-50 flex flex-col items-center gap-4 group hover:border-brand-green/30 transition-all"
            >
              <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <Camera className="text-brand-green" size={24} />
              </div>
              <div className="text-center">
                <p className="text-sm font-black uppercase tracking-tight">Take a photo</p>
                <p className="text-[10px] font-bold text-zinc-400 mt-1 uppercase">Use your camera</p>
              </div>
            </button>

            <button 
              onClick={() => fileInputRef.current?.click()}
              className="w-full p-8 rounded-[2.5rem] border-2 border-zinc-100 bg-white flex flex-col items-center gap-4 group hover:bg-zinc-50 transition-all"
            >
              <div className="h-14 w-14 rounded-full bg-zinc-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Upload className="text-white" size={24} />
              </div>
              <div className="text-center">
                <p className="text-sm font-black uppercase tracking-tight">Upload Image</p>
                <p className="text-[10px] font-bold text-zinc-400 mt-1 uppercase">Select from gallery</p>
              </div>
            </button>
            
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*" 
              onChange={handleFileChange} 
            />
          </div>
        ) : (
          /* Preview State */
          <div className="mb-12 animate-in zoom-in-95 duration-300">
            <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-zinc-100 bg-zinc-100 aspect-[3/4]">
              <img src={selectedImage} alt="Preview" className="w-full h-full object-cover" />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <Button 
              disabled={isUploading || isSuccess}
              onClick={handleUpload}
              className="w-full h-16 rounded-full mt-6 bg-zinc-900 text-white font-black uppercase tracking-[0.2em] text-xs"
            >
              {isUploading ? <Loader2 className="animate-spin" /> : 
               isSuccess ? <span className="flex items-center gap-2"><CheckCircle2 size={18}/> Success</span> : 
               "Process with AI"}
            </Button>
          </div>
        )}

        {/* Recent Receipts List Placeholder */}
        <section>
          <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-6">Recent Uploads</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-3xl bg-zinc-50 border border-zinc-100 flex items-center justify-center">
               <span className="text-[10px] font-black text-zinc-300 uppercase">Empty</span>
            </div>
            <div className="aspect-square rounded-3xl bg-zinc-50 border border-zinc-100 flex items-center justify-center">
               <span className="text-[10px] font-black text-zinc-300 uppercase">Empty</span>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}