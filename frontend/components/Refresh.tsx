"use client"

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Refresh() {
  const router = useRouter();
  const [confirmedRefresh, setConfirmedRefresh] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!confirmedRefresh) {
        e.preventDefault();
        e.returnValue = 'You have unsaved changes. Are you sure you want to leave this page?';
      }
    };

    const handleUnload = () => {
      if (!confirmedRefresh) {
        router.push('/');
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    window.addEventListener('load', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('load', handleUnload);
    };
  }, [router, confirmedRefresh]);

  return null; 
}





