"use client";

import { useRouter } from 'next/navigation';

export const useNavigation = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    if (path.startsWith('#')) {
      // Handle Smooth Scroll for anchors
      const id = path.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Handle Page Routing
      router.push(path);
    }
  };

  return { navigateTo };
};