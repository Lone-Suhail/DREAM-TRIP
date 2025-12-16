export interface Package {
  id: number;
  title: string;
  location: string;
  duration: string;
  nights: number;
  price: string;          
  originalPrice: string;  
  rating: number;
  reviews: number;
  image: string;
  highlights: string[];
  minPax: number;
  tag?: string;
  description: string; 
  overview: string;    
  itinerary: { day: number; title: string; activity: string }[];
  inclusions: string[];
  exclusions: string[];
  policies: { title: string; rules: string[] }[];
}

const commonInclusions = [
  "Accommodation on double sharing basis.",
  "Welcome Drink on Arrival.",
  "Daily Breakfast and Dinner.",
  "Private Vehicle as per itinerary (Non A/C in hills).",
  "Shikara Ride in Dal/Nigeen Lake for 1 Hour (for Kashmir packs).",
  "All toll taxes, parking charges, and driver allowances."
];

const commonExclusions = [
  "5% GST on Total Billing.",
  "Air Tickets / Train Tickets.",
  "Entry Fees to Monuments, Gardens, and Parks.",
  "Chain/Vehicle costs for snow in Gulmarg/Sonamarg (if applicable).",
  "Pony Rides, Gondola Tickets, Sledging, or any adventure activities.",
  "Lunch and personal expenses like laundry, phone calls, tips."
];

const commonPolicies = [
  {
    title: "Booking Policy",
    rules: [
      "At the time of Booking: 50% of total package cost",
      "D-30 Days: 75% of package cost",
      "D-15 Days: 100% of package cost"
    ]
  },
  {
    title: "Cancellation Policy",
    rules: [
      "D-45 or prior: 50% of the package cost refunded",
      "D-30 to D-15: 25% of package cost refunded",
      "Less than 15 days: No Refund"
    ]
  },
  {
    title: "Travel Validity",
    rules: [
      "Valid for travel till 30 September 2025.",
      "Rates subject to change during peak season (20 Dec - 5 Jan & May-June)."
    ]
  }
];

export const packages: Package[] = [
  // --- 101: 2N / 3D ---
  {
    id: 101,
    title: "Quick Kashmir Escape",
    location: "Srinagar & Gulmarg Day Trip",
    duration: "2N / 3D",
    nights: 2,
    price: "6,250", 
    originalPrice: "12,500", 
    rating: 4.8,
    reviews: 45,
    minPax: 2,
    image: "/srinagar.jpg",
    highlights: ["Shikara Ride", "Gulmarg Gondola", "Mughal Gardens"],
    tag: "FLAT 50% OFF",
    description: "A perfect quick getaway to experience the highlights of Kashmir in just 3 days.",
    overview: "Short on time but want to experience the magic of Kashmir? This 2 Nights / 3 Days tour is crafted for a quick rejuvenation. Experience the tranquility of Dal Lake with a Shikara ride, witness the grandeur of Mughal Gardens, and take a day excursion to the snow-capped meadows of Gulmarg.",
    itinerary: [
      { day: 1, title: "Arrival Srinagar & Local Sightseeing", activity: "Pick up from Srinagar Airport and transfer to your Houseboat/Hotel. After freshening up, proceed for a Shikara Ride on Dal Lake. Visit the famous Mughal Gardens (Nishat & Shalimar). Overnight stay in Srinagar." },
      { day: 2, title: "Srinagar to Gulmarg Day Trip", activity: "After breakfast, drive to Gulmarg (Meadow of Flowers). Enjoy the world's highest cable car ride (Gondola) up to Phase 1 or 2 (at own cost). Admire the breathtaking views of the Apharwat peak. Return to Srinagar in the evening for overnight stay." },
      { day: 3, title: "Departure", activity: "After breakfast, check out and drive to Srinagar Airport for your onward journey with beautiful memories." }
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
    policies: commonPolicies
  },

  // --- 102: 3N / 4D ---
  {
    id: 102,
    title: "Magic of Kashmir",
    location: "Srinagar & Gulmarg Stay",
    duration: "3N / 4D",
    nights: 3,
    price: "8,500", 
    originalPrice: "17,000", 
    rating: 4.9,
    reviews: 120,
    minPax: 2,
    image: "/gulmarg.jpg",
    highlights: ["Night Stay in Gulmarg", "Houseboat Stay", "Saffron Fields"],
    tag: "FLAT 50% OFF",
    description: "Experience the magic of staying overnight in the snow-capped mountains of Gulmarg.",
    overview: "This package offers a blend of leisure and adventure. Unlike a day trip, this itinerary allows you to stay overnight in Gulmarg, giving you ample time to enjoy the snow, starry nights, and early morning views of the Himalayas.",
    itinerary: [
      { day: 1, title: "Arrival Srinagar", activity: "Arrival at Srinagar Airport. Transfer to a luxury Houseboat. Welcome drink (Kahwa). Evening Shikara ride on Dal Lake to see the Floating Vegetable Market. Overnight in Houseboat." },
      { day: 2, title: "Srinagar to Gulmarg", activity: "Drive to Gulmarg (55kms). Check into your hotel. Spend the day skiing, snowboarding, or taking the Gondola ride. Enjoy the evening bonfire (if available). Overnight stay in Gulmarg." },
      { day: 3, title: "Gulmarg to Srinagar", activity: "Morning at leisure in Gulmarg. Drive back to Srinagar. En route, stop for shopping (Shawls, Carpets, Saffron). Visit Shankaracharya Temple in the evening. Overnight in Srinagar Hotel." },
      { day: 4, title: "Departure", activity: "Breakfast and transfer to airport. Tour ends." }
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
    policies: commonPolicies
  },

  // --- 103: 4N / 5D ---
  {
    id: 103,
    title: "Valley Essence",
    location: "Srinagar, Gulmarg & Pahalgam",
    duration: "4N / 5D",
    nights: 4,
    price: "11,250", 
    originalPrice: "22,500", 
    rating: 5.0,
    reviews: 85,
    minPax: 2,
    image: "/pahalgam.jpg",
    highlights: ["Betaab Valley", "Aru Valley", "Gondola Ride", "River Rafting"],
    tag: "FLAT 50% OFF",
    description: "The classic Kashmir triangle covering the three most beautiful destinations.",
    overview: "Covering the 'Golden Triangle' of Kashmir: Srinagar, Gulmarg, and Pahalgam. This 5-day tour is the most popular choice for families and couples. From the saffron fields of Pampore to the shepherd valleys of Pahalgam and the snowy heights of Gulmarg, you will see it all.",
    itinerary: [
      { day: 1, title: "Welcome to Paradise", activity: "Arrival in Srinagar. Transfer to Houseboat/Hotel. Visit Cheshma Shahi and Pari Mahal. Sunset Shikara Ride. Overnight stay in Srinagar." },
      { day: 2, title: "Srinagar to Pahalgam", activity: "Drive to Pahalgam (Valley of Shepherds). En route visit Saffron fields and Avantipura Ruins. Visit Aru Valley, Betaab Valley, and Chandanwari (by local union cab at own cost). Overnight stay in Pahalgam." },
      { day: 3, title: "Pahalgam to Gulmarg", activity: "Drive from Pahalgam to Gulmarg. A scenic 4-hour drive. Check-in and relax. Overnight stay in Gulmarg." },
      { day: 4, title: "Gulmarg to Srinagar", activity: "Enjoy the Gondola Ride in the morning. Drive back to Srinagar in the afternoon. Evening free for shopping at Lal Chowk or Polo View Market. Overnight stay in Srinagar." },
      { day: 5, title: "Departure", activity: "Transfer to Srinagar Airport for your flight back home." }
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
    policies: commonPolicies
  },

  // --- 104: 5N / 6D ---
  {
    id: 104,
    title: "Complete Kashmir Luxury",
    location: "Srinagar, Gulmarg, Pahalgam & Sonamarg",
    duration: "5N / 6D",
    nights: 5,
    price: "14,500", 
    originalPrice: "29,000", 
    rating: 4.9,
    reviews: 124,
    minPax: 6,
    image: "/sonamarg.jpg",
    highlights: ["Dal Lake", "Cheshma Shahi", "Mughal Garden", "Thajiwas Glacier"],
    tag: "FLAT 50% OFF",
    description: "An extensive tour covering the Golden Meadow (Sonamarg) along with other classics.",
    overview: "Rightly called as the 'Paradise on Earth', Kashmir bestows its pristine beauty to its serene lakes, Chinar trees, magnificent valleys and friendly people. This tour package has been specifically designed to offer you a feel of being in heaven with comfortable accommodation and sightseeing of the valley. It comprises of 5 nights and 6 days journey that embarks from Srinagar following trip to Gulmarg. What are you waiting for? Book this tour and get ready to enjoy the unique Shikara ride and Gondola rides.",
    itinerary: [
      { day: 1, title: "Arrival Srinagar", activity: "Upon arrival at the Srinagar airport & meet our representative and drive to Srinagar. Check into the hotel and also enjoy a 1 hr. shikara ride in Dal Lake. Overnight stay in Houseboat." },
      { day: 2, title: "Srinagar - Sonmarg – Srinagar", activity: "After breakfast leave with a full day excursion for Sonmarg “The meadow of gold. Situated at an altitude of 9000 Ft. Sonmarg at a distance of 84 Kms from Srinagar is also called “The meadow of gold” Sonmarg lies in Sindh Valley streamed with flowers and surrounded by mountains. Ponies can be hired for the trip up to Thajiwas glacier. Drive back from Sonmarg to Srinagar. Overnight stay in Hotel." },
      { day: 3, title: "Srinagar - Gulmarg", activity: "After breakfast drive to Gulmarg “Meadow of Flowers” 2730 Mts. above sea level. The distance of 56 kms will be covered in about 2 hrs. Gulmarg has one of the best Ski slopes in the world. One can also have the view of Nanga Parbhat if weather permits. Enjoy the scenic view of Kongdori on a Cable Car Known as Gondola (on direct pay basis). Return hotel for overnight stay." },
      { day: 4, title: "Gulmarg to Pahalgam", activity: "After breakfast we drive to Pahalgam via Pampore, Avantipura and the village of Bijbehara which remains famous as the bread basket of Kashmir. We switch from the national highway 1A at Khanabal and drive through the second largest city of Anantnag. In Pahalgam check in at the hotel and spend the rest of the day at leisure." },
      { day: 5, title: "Pahalgam to Srinagar", activity: "After breakfast check out from Pahalgam hotel & drive to Srinagar and enjoy the site scene of the famous Mughal Gardens, Cheshma Shahi “Royal Spring Shalimar “Garden of Love” Nishat Garden “Garden of Pleasure Shankaracharya Temple. Overnight stay in Hotel." },
      { day: 6, title: "Srinagar - Airport - Onward destination", activity: "After breakfast leave for Srinagar Airport to board the flight for onward destination." }
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
    policies: commonPolicies
  },

  // --- 105: 6N / 7D ---
  {
    id: 105,
    title: "Paradise Found (Relaxed)",
    location: "All Destinations + Doodhpathri",
    duration: "6N / 7D",
    nights: 6,
    price: "17,250", 
    originalPrice: "34,500", 
    rating: 5.0,
    reviews: 40,
    minPax: 2,
    image: "/doodhpathri.jpg",
    highlights: ["Doodhpathri Day Trip", "Relaxed Pace", "Full Pahalgam Tour", "Shopping Time"],
    tag: "FLAT 50% OFF",
    description: "The ultimate relaxed tour including the hidden gem Doodhpathri.",
    overview: "For those who do not like to rush. This 7-day itinerary lets you soak in the beauty of Kashmir at a relaxed pace. The highlight of this tour is a visit to Doodhpathri (Valley of Milk), a pristine and less-crowded meadow that many tourists miss. You also get two full days to explore Pahalgam properly.",
    itinerary: [
      { day: 1, title: "Arrival", activity: "Arrival at Srinagar. Transfer to Hotel/Houseboat. Relax and enjoy the evening at Dal Lake." },
      { day: 2, title: "Doodhpathri Day Trip", activity: "Full day excursion to Doodhpathri (42 km from Srinagar). Enjoy the green meadows and the Shaliganga river. Picnic lunch by the river. Return to Srinagar." },
      { day: 3, title: "Srinagar to Pahalgam", activity: "Drive to Pahalgam. En route visit Apple Orchards. Check-in and relax by the Lidder River." },
      { day: 4, title: "Pahalgam Exploration", activity: "Full day in Pahalgam. Visit Baisaran (Mini Switzerland) via Pony. Visit Aru and Betaab Valley. Overnight in Pahalgam." },
      { day: 5, title: "Pahalgam to Gulmarg", activity: "Drive to Gulmarg. Enjoy the scenic views. Check-in and evening at leisure." },
      { day: 6, title: "Gulmarg to Srinagar", activity: "Morning Gondola Ride (Phase 1 & 2). Afternoon drive back to Srinagar. Shopping for souvenirs. Farewell Dinner." },
      { day: 7, title: "Departure", activity: "Transfer to airport. Tour ends." }
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
    policies: commonPolicies
  },

  // --- 106: Honeymoon Special ---
  {
    id: 106,
    title: "Romantic Kashmir Honeymoon",
    location: "Srinagar & Pahalgam Luxury",
    duration: "5N / 6D",
    nights: 5,
    price: "24,999", 
    originalPrice: "50,000", 
    rating: 5.0,
    reviews: 156,
    minPax: 2,
    image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80&w=800",
    highlights: ["Candle Light Dinner", "Flower Decoration", "Private Boat", "Luxury Hotels"],
    tag: "Honeymoon Special",
    description: "A specially curated romantic getaway with luxury inclusions for couples.",
    overview: "Celebrate your love in the romantic valleys of Kashmir. This package is designed for couples, featuring a romantic candle-light dinner on a Houseboat, flower bed decoration, and private transfers. Stay in premium properties in Pahalgam and enjoy privacy amidst nature.",
    itinerary: [
      { day: 1, title: "Welcome to Love", activity: "Arrival. Private transfer to Luxury Houseboat. Welcome cake and flower decoration in the room. Candle Light Dinner in the evening." },
      { day: 2, title: "Srinagar to Pahalgam", activity: "Scenic drive to Pahalgam. Check-in to a riverside resort. Evening walk by the Lidder River." },
      { day: 3, title: "Pahalgam Romance", activity: "Day at leisure. Visit Betaab Valley. Optional horse riding together. Romantic dinner at the hotel." },
      { day: 4, title: "Pahalgam to Gulmarg", activity: "Drive to the snow meadows of Gulmarg. Check-in to a heated hotel room. Enjoy the starry night." },
      { day: 5, title: "Gulmarg to Srinagar", activity: "Morning Gondola ride holding hands above the clouds. Return to Srinagar for shopping and leisure." },
      { day: 6, title: "Departure", activity: "Transfer to airport with lifetime memories." }
    ],
    inclusions: [...commonInclusions, "Honeymoon Cake & Flower Decoration", "One Candle Light Dinner"],
    exclusions: commonExclusions,
    policies: commonPolicies
  },

  // --- 107: Offbeat Gurez ---
  {
    id: 107,
    title: "Hidden Gem: Gurez Valley",
    location: "Srinagar & Gurez",
    duration: "4N / 5D",
    nights: 4,
    price: "15,500", 
    originalPrice: "31,000", 
    rating: 4.9,
    reviews: 28,
    minPax: 4,
    image: "https://images.unsplash.com/photo-1626621341120-20d716e94069?auto=format&fit=crop&q=80&w=800",
    highlights: ["Habba Khatoon Peak", "Kishanganga River", "Offbeat", "Border Tourism"],
    tag: "Offbeat Adventure",
    description: "Explore the untouched beauty of Gurez Valley near the LoC.",
    overview: "For the travelers who have seen it all. Gurez Valley is a hidden jewel located near the Line of Control. Famous for the Habba Khatoon Peak and the crystal clear Kishanganga river. This tour takes you away from the crowds into the heart of raw nature.",
    itinerary: [
      { day: 1, title: "Arrival Srinagar", activity: "Pickup and transfer to hotel. Prepare for the journey to Gurez." },
      { day: 2, title: "Srinagar to Gurez", activity: "Drive via Razdan Pass (11,672 ft). Witness breathtaking views. Check-in at Dawar, Gurez." },
      { day: 3, title: "Exploring Gurez", activity: "Visit Habba Khatoon Spring and Peak. Walk along the Kishanganga river. Experience the local Dard Shin culture." },
      { day: 4, title: "Gurez to Srinagar", activity: "Drive back to Srinagar via Wular Lake (Asia's largest freshwater lake). Overnight in Srinagar." },
      { day: 5, title: "Departure", activity: "Airport Drop." }
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
    policies: commonPolicies
  },

  // --- 108: Winter Skiing ---
  {
    id: 108,
    title: "Gulmarg Ski Adventure",
    location: "Gulmarg Only",
    duration: "3N / 4D",
    nights: 3,
    price: "18,999", 
    originalPrice: "38,000", 
    rating: 4.8,
    reviews: 65,
    minPax: 2,
    image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&q=80&w=800",
    highlights: ["Skiing Course", "Snowboarding", "ATV Ride", "Igloo Cafe"],
    tag: "Winter Special",
    description: "A focused package for snow lovers and adventure seekers in Gulmarg.",
    overview: "Stay in the heart of winter wonderland. This package is focused entirely on Gulmarg. Perfect for those who want to learn skiing or just play in the snow for 4 days without traveling too much.",
    itinerary: [
      { day: 1, title: "Arrival & Transfer to Gulmarg", activity: "Direct transfer from Airport to Gulmarg. Rent ski equipment. Evening acclimatization." },
      { day: 2, title: "Skiing & Snow Activities", activity: "Full day for snow activities. Hire an instructor (optional) or enjoy the Gondola ride to the summit." },
      { day: 3, title: "Snowmobile & ATV", activity: "Experience the thrill of Snowmobiles and ATV rides. Visit the famous Igloo Cafe for hot chocolate." },
      { day: 4, title: "Departure", activity: "Morning transfer to Srinagar Airport." }
    ],
    inclusions: commonInclusions,
    exclusions: [...commonExclusions, "Ski Equipment Rental", "Instructor Charges"],
    policies: commonPolicies
  },

  // --- 109: Ladakh (Standard) ---
  {
    id: 109,
    title: "Majestic Ladakh Circuit",
    location: "Leh, Nubra & Pangong",
    duration: "5N / 6D",
    nights: 5,
    price: "22,500", 
    originalPrice: "45,000", 
    rating: 4.9,
    reviews: 88,
    minPax: 2,
    image: "https://images.unsplash.com/photo-1629864299104-183054b5df6e?auto=format&fit=crop&q=80&w=800",
    highlights: ["Pangong Lake", "Khardung La Pass", "Nubra Desert", "Camel Ride"],
    tag: "Bestseller Ladakh",
    description: "The complete Ladakh experience covering the three giants: Leh, Nubra, and Pangong.",
    overview: "Discover the Land of High Passes. This 6-day tour is the perfect introduction to Ladakh. Cross the world's highest motorable road (Khardung La), ride double-humped camels in the sand dunes of Nubra, and witness the color-changing waters of Pangong Lake.",
    itinerary: [
      { day: 1, title: "Arrival in Leh", activity: "Airport pickup. Transfer to hotel. Full day rest for acclimatization (mandatory due to high altitude)." },
      { day: 2, title: "Leh Local Sightseeing", activity: "Visit Hall of Fame, Magnetic Hill, and Sangam (Confluence of Zanskar & Indus rivers). Evening at Shanti Stupa." },
      { day: 3, title: "Leh to Nubra Valley", activity: "Drive via Khardung La Pass (17,982 ft). Arrive in Hunder. Enjoy camel safari in sand dunes. Overnight in Camp." },
      { day: 4, title: "Nubra to Pangong Lake", activity: "Drive via Shayok river. Arrive at Pangong Tso (famous from '3 Idiots' movie). Witness the sunset. Overnight in Camp/Cottage." },
      { day: 5, title: "Pangong to Leh", activity: "Sunrise at the lake. Drive back to Leh via Chang La Pass. Visit Thiksey Monastery en route." },
      { day: 6, title: "Departure", activity: "Transfer to Leh Airport. Tour ends." }
    ],
    inclusions: ["Accommodation in Hotels/Camps", "Breakfast & Dinner", "Inner Line Permits", "Oxygen Cylinder in Vehicle", "Private Vehicle (Xylo/Innova)"],
    exclusions: commonExclusions,
    policies: commonPolicies
  },

  // --- 110: Ladakh (Short) ---
  {
    id: 110,
    title: "Short Leh Escape",
    location: "Leh & Pangong Only",
    duration: "3N / 4D",
    nights: 3,
    price: "16,500", 
    originalPrice: "33,000", 
    rating: 4.7,
    reviews: 50,
    minPax: 2,
    image: "https://images.unsplash.com/photo-1596020752538-4e8c10505e83?auto=format&fit=crop&q=80&w=800",
    highlights: ["Pangong Lake", "Shanti Stupa", "Thiksey Monastery"],
    tag: "Weekend Special",
    description: "A quick recharge trip to Ladakh visiting the famous Pangong Lake.",
    overview: "Short on time? This 4-day itinerary skips the long drive to Nubra but ensures you see the most iconic sight in Ladakh—the Pangong Lake. Perfect for long weekends.",
    itinerary: [
      { day: 1, title: "Arrival in Leh", activity: "Transfer to hotel. Rest for acclimatization. Evening walk in Leh Market." },
      { day: 2, title: "Leh to Pangong Lake", activity: "Early morning drive to Pangong Tso via Chang La. Spend the day by the lake. Overnight stay near the lake." },
      { day: 3, title: "Pangong to Leh", activity: "Drive back to Leh. Visit 3 Idiots School and Shey Palace. Evening free for souvenir shopping." },
      { day: 4, title: "Departure", activity: "Airport Transfer." }
    ],
    inclusions: ["Accommodation", "Breakfast & Dinner", "Permits", "Private Vehicle"],
    exclusions: commonExclusions,
    policies: commonPolicies
  },

  // --- 111: Religious (Vaishno Devi) ---
  {
    id: 111,
    title: "Divine Vaishno Devi",
    location: "Katra (Jammu)",
    duration: "2N / 3D",
    nights: 2,
    price: "5,500", 
    originalPrice: "11,000", 
    rating: 5.0,
    reviews: 200,
    minPax: 2,
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800",
    highlights: ["Mata Vaishno Devi", "Yatra Parchi Support", "Pick/Drop Jammu"],
    tag: "Pilgrimage",
    description: "A hassle-free pilgrimage package for Mata Vaishno Devi Darshan.",
    overview: "Seek blessings at the holy shrine of Mata Vaishno Devi. This package takes care of your logistics from Jammu to Katra, allowing you to focus purely on your spiritual journey. We assist with Yatra Parchi and hotel stays.",
    itinerary: [
      { day: 1, title: "Arrival Jammu - Katra", activity: "Pickup from Jammu Railway Station/Airport. Drive to Katra (45km). Check-in at Hotel. Collect Yatra Parchi. Relax." },
      { day: 2, title: "Mata Vaishno Devi Darshan", activity: "Proceed for the trek (13km) to the Bhawan. Darshan of the Holy Cave. Return to Katra late night." },
      { day: 3, title: "Departure", activity: "Breakfast. Drive back to Jammu for your return train/flight." }
    ],
    inclusions: ["AC Hotel in Katra", "Breakfast & Dinner", "Jammu-Katra Transfers (AC Car)", "Yatra Parchi Assistance"],
    exclusions: ["Helicopter Tickets", "Pony/Palki Charges", "Train Tickets"],
    policies: commonPolicies
  },

  // --- 112: Religious (Kashmir Spiritual) ---
  {
    id: 112,
    title: "Sufi & Spiritual Kashmir",
    location: "Srinagar Temples & Shrines",
    duration: "3N / 4D",
    nights: 3,
    price: "9,999", 
    originalPrice: "20,000", 
    rating: 4.8,
    reviews: 35,
    minPax: 4,
    image: "https://images.unsplash.com/photo-1566808902882-628be9314488?auto=format&fit=crop&q=80&w=800",
    highlights: ["Shankaracharya Temple", "Kheer Bhawani", "Hazratbal Dargah", "Jamia Masjid"],
    tag: "Religious Tour",
    description: "A journey through the spiritual heritage of Kashmir covering famous Temples and Dargahs.",
    overview: "Kashmir is known as 'Pir Waer' (Garden of Saints). This tour covers the most significant spiritual sites including the ancient Shankaracharya Temple, the holy Kheer Bhawani Spring, and the majestic Hazratbal Shrine.",
    itinerary: [
      { day: 1, title: "Arrival & Shankaracharya", activity: "Arrival in Srinagar. Visit the Shankaracharya Temple (dedicated to Lord Shiva) on the hilltop for blessings and city views. Check-in to Hotel." },
      { day: 2, title: "Kheer Bhawani & Local Shrines", activity: "Drive to Ganderbal to visit Mata Kheer Bhawani temple. Return to visit Jamia Masjid and Shah-e-Hamdan Shrine in Old City." },
      { day: 3, title: "Hazratbal & Leisure", activity: "Visit the white marble Hazratbal Dargah by the lake. Evening Shikara ride. Overnight in Houseboat." },
      { day: 4, title: "Departure", activity: "Transfer to Airport." }
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
    policies: commonPolicies
  }
];