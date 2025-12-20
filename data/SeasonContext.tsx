'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { getSeasonByMonth, SeasonType } from '@/data/seasons';

type SeasonContextType = {
  season: SeasonType;
  setSeason: (season: SeasonType) => void;
};

const SeasonContext = createContext<SeasonContextType | undefined>(undefined);

export function SeasonProvider({ children }: { children: React.ReactNode }) {
  const [season, setSeason] = useState<SeasonType>('winter'); // Default

  // Set correct season on load
  useEffect(() => {
    setSeason(getSeasonByMonth());
  }, []);

  return (
    <SeasonContext.Provider value={{ season, setSeason }}>
      {children}
    </SeasonContext.Provider>
  );
}

export function useSeason() {
  const context = useContext(SeasonContext);
  if (context === undefined) {
    throw new Error('useSeason must be used within a SeasonProvider');
  }
  return context;
}