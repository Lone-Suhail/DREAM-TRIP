// app/data/seasons.ts

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
    heroImage: '/images/hero-winter-gulmarg.jpg', // Make sure this image exists in public/images/
    tagline: 'Experience the Magic of Snow in Kashmir',
    accentColor: '#0ea5e9', // Ice Blue
    priceMultiplier: 1.2, // 20% Higher (Heating costs)
  },
  spring: {
    name: 'Tulip Season',
    months: 'Mar - Apr',
    heroImage: '/images/hero-tulip-garden.jpg',
    tagline: 'Colors of Kashmir: Tulips & Blossoms',
    accentColor: '#ec4899', // Pink
    priceMultiplier: 1.0, // Standard Rate
  },
  summer: {
    name: 'Sunny Kashmir',
    months: 'May - Aug',
    heroImage: '/images/hero-pahalgam-green.jpg',
    tagline: 'Escape the Heat: Green Meadows Await',
    accentColor: '#16a34a', // Green
    priceMultiplier: 1.3, // Peak Season
  },
  autumn: {
    name: 'Golden Autumn',
    months: 'Sep - Nov',
    heroImage: '/images/hero-chinar-gold.jpg',
    tagline: 'Walk Through Gold: The Chinar Season',
    accentColor: '#d97706', // Gold/Orange
    priceMultiplier: 0.9, // Off-season (Cheaper)
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