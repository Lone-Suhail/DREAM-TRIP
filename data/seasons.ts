export type SeasonType = 'winter' | 'spring' | 'summer' | 'autumn';

export interface SeasonConfig {
  name: string;
  months: string;
  heroImage: string;
  tagline: string;
  accentColor: string;
  priceMultiplier: number;
}

export const seasonConfig: Record<SeasonType, SeasonConfig> = {
  winter: {
    name: 'Winter Wonderland',
    months: 'Dec - Feb',
    // ✅ FIX: Using a direct web link instead of a local file
    heroImage: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=1920&auto=format&fit=crop',
    tagline: 'Experience the Magic of Snow in Kashmir',
    accentColor: '#0ea5e9',
    priceMultiplier: 1.2,
  },
  spring: {
    name: 'Tulip Season',
    months: 'Mar - Apr',
    // ✅ FIX: Using a direct web link
    heroImage: 'https://images.unsplash.com/photo-1560113888-963d72659104?q=80&w=1920&auto=format&fit=crop',
    tagline: 'Colors of Kashmir: Tulips & Blossoms',
    accentColor: '#ec4899',
    priceMultiplier: 1.0,
  },
  summer: {
    name: 'Sunny Kashmir',
    months: 'May - Aug',
    // ✅ FIX: Using a direct web link
    heroImage: 'https://images.unsplash.com/photo-1595843477820-205933060596?q=80&w=1920&auto=format&fit=crop',
    tagline: 'Escape the Heat: Green Meadows Await',
    accentColor: '#16a34a',
    priceMultiplier: 1.3,
  },
  autumn: {
    name: 'Golden Autumn',
    months: 'Sep - Nov',
    // ✅ FIX: Using a direct web link
    heroImage: 'https://images.unsplash.com/photo-1573489868770-07e335752940?q=80&w=1920&auto=format&fit=crop',
    tagline: 'Walk Through Gold: The Chinar Season',
    accentColor: '#d97706',
    priceMultiplier: 0.9,
  }
};

// Helper function to automatically detect the current season
export const getSeasonByMonth = (): SeasonType => {
  const month = new Date().getMonth(); // 0 = Jan, 11 = Dec

  // Winter: Dec (11), Jan (0), Feb (1)
  if (month === 11 || month <= 1) return 'winter';
  
  // Spring: Mar (2), Apr (3)
  if (month >= 2 && month <= 3) return 'spring';
  
  // Summer: May (4) to Aug (7)
  if (month >= 4 && month <= 7) return 'summer';
  
  // Autumn: Sep (8) to Nov (10)
  return 'autumn';
};