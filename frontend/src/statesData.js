// ==============================================================================
// HomeSetu Multi-State Student Housing Intelligence (15 Indian States x 15 Famous Localities)
// Master Directory of Rents, Food Profiles, Girls/Boys Safety Standards & College Hubs
// ==============================================================================

export const INDIAN_STATES_DATA = [
  {
    "id": "maharashtra",
    "state": "Maharashtra",
    "defaultCity": "Pune",
    "cities": [
      "Pune",
      "Mumbai",
      "Nagpur",
      "Nashik",
      "Navi Mumbai",
      "Thane",
      "Aurangabad"
    ],
    "localities": [
      {
        "name": "Kothrud, Pune",
        "hub": "MIT-WPU & Cummins Engineering Hub",
        "avgRent": 7500
      },
      {
        "name": "Baner, Pune",
        "hub": "NICMAR & Hinjewadi Transit Hub",
        "avgRent": 8200
      },
      {
        "name": "Hinjewadi Phase 1, Pune",
        "hub": "Tech & MCA Student Hub",
        "avgRent": 7800
      },
      {
        "name": "Viman Nagar, Pune",
        "hub": "Symbiosis Design & Law Campus",
        "avgRent": 8500
      },
      {
        "name": "Shivaji Nagar / FC Road, Pune",
        "hub": "Fergusson, BMCC & COEP Hub",
        "avgRent": 8500
      },
      {
        "name": "Wakad, Pune",
        "hub": "D.Y. Patil & JSPM Hub",
        "avgRent": 7400
      },
      {
        "name": "Pimpri-Chinchwad, Pune",
        "hub": "PCCOE & DY Patil Engg Hub",
        "avgRent": 6800
      },
      {
        "name": "Powai, Mumbai",
        "hub": "IIT Bombay & NITIE Hub",
        "avgRent": 13500
      },
      {
        "name": "Andheri West, Mumbai",
        "hub": "Bhavan's & SP Jain Hub",
        "avgRent": 12500
      },
      {
        "name": "Vile Parle, Mumbai",
        "hub": "NMIMS, Mithibai & D.J. Sanghvi",
        "avgRent": 13000
      },
      {
        "name": "Dadar, Mumbai",
        "hub": "Ruia, Podar & Welinkar Hub",
        "avgRent": 11000
      },
      {
        "name": "Navi Mumbai (Kharghar)",
        "hub": "NIFT, Bharati Vidyapeeth & ITM",
        "avgRent": 7200
      },
      {
        "name": "Thane West",
        "hub": "Engineering & Management Hub",
        "avgRent": 8000
      },
      {
        "name": "Dhankawadi / Katraj, Pune",
        "hub": "Bharati Vidyapeeth Campus Hub",
        "avgRent": 6500
      },
      {
        "name": "Karve Nagar, Pune",
        "hub": "Cummins Engg for Women Hub",
        "avgRent": 7200
      }
    ],
    "rentRange": {
      "triple": "₹5,500 – ₹7,000",
      "double": "₹7,500 – ₹9,500",
      "singleAc": "₹11,500 – ₹15,000",
      "depositMonths": "1–2 months"
    },
    "foodOptions": "Homely Maharashtrian & North Indian food (Poha, Misal, Poli-Bhaji, Dal-Chawal, Chicken Curry on Wed/Sun, Jain options)",
    "girlsSafety": "Mandatory biometric entry, 10:00 PM gate closing, resident female warden, 24/7 CCTV, emergency alarm.",
    "boysFacilities": "High-speed 300 Mbps Wi-Fi, inverter power backup, attached bath, bike parking, study table, laundry.",
    "topFacilities": [
      "Wi-Fi (300 Mbps)",
      "RO Purified Water",
      "Daily Housekeeping",
      "Attached Bath",
      "Mess Food 3-times",
      "Power Backup"
    ],
    "popularColleges": [
      "COEP Pune",
      "MIT-WPU",
      "Symbiosis",
      "IIT Bombay",
      "NMIMS Mumbai",
      "Cummins College"
    ]
  },
  {
    "id": "karnataka",
    "state": "Karnataka",
    "defaultCity": "Bengaluru",
    "cities": [
      "Bengaluru",
      "Mysuru",
      "Mangaluru",
      "Manipal",
      "Hubballi",
      "Belagavi"
    ],
    "localities": [
      {
        "name": "Koramangala, Bengaluru",
        "hub": "Christ University & Startup Hub",
        "avgRent": 9500
      },
      {
        "name": "Electronic City, Bengaluru",
        "hub": "IIIT-B & PES Tech Hub",
        "avgRent": 7200
      },
      {
        "name": "HSR Layout, Bengaluru",
        "hub": "NIFT & Tech Stays Hub",
        "avgRent": 9000
      },
      {
        "name": "Indiranagar, Bengaluru",
        "hub": "Central Bengaluru Student Hub",
        "avgRent": 11000
      },
      {
        "name": "BTM Layout, Bengaluru",
        "hub": "Coaching & Tech Training Hub",
        "avgRent": 7500
      },
      {
        "name": "Whitefield, Bengaluru",
        "hub": "MVJ College & IT Export Hub",
        "avgRent": 8000
      },
      {
        "name": "Marathahalli, Bengaluru",
        "hub": "Engineering & IT Coaching",
        "avgRent": 7200
      },
      {
        "name": "Malleshwaram, Bengaluru",
        "hub": "IISc Bangalore & MES Hub",
        "avgRent": 8500
      },
      {
        "name": "Jayanagar, Bengaluru",
        "hub": "National College & RV Hub",
        "avgRent": 8800
      },
      {
        "name": "Yelahanka, Bengaluru",
        "hub": "BMSIT, Srishti Design & REVA",
        "avgRent": 7800
      },
      {
        "name": "Bannerghatta Road, Bengaluru",
        "hub": "IIM Bangalore & AMC Hub",
        "avgRent": 8200
      },
      {
        "name": "Saraswathipuram, Mysuru",
        "hub": "SJCE & University of Mysore",
        "avgRent": 5800
      },
      {
        "name": "Kodialbail, Mangaluru",
        "hub": "St. Aloysius & KMC Hub",
        "avgRent": 6200
      },
      {
        "name": "Tiger Circle, Manipal",
        "hub": "MAHE / MIT Manipal University",
        "avgRent": 9500
      },
      {
        "name": "Vidyanagar, Hubballi",
        "hub": "BVB / KLE Technological Univ",
        "avgRent": 5500
      }
    ],
    "rentRange": {
      "triple": "₹5,800 – ₹7,200",
      "double": "₹7,800 – ₹10,500",
      "singleAc": "₹12,000 – ₹16,500",
      "depositMonths": "1–2 months"
    },
    "foodOptions": "South & North Indian meals (Idli, Dosa, Sambar, North Indian Roti-Sabzi, Biryani weekends, Veg & Non-Veg)",
    "girlsSafety": "RFID keycard, 10:30 PM gate limit, female security guard on premises, CCTV at all entry points.",
    "boysFacilities": "High-speed fiber Wi-Fi, dedicated study desks, RO water cooler, solar water heater, self-cook pantry.",
    "topFacilities": [
      "High-Speed Wi-Fi",
      "Daily Cleaning",
      "3-Time Meals",
      "Power Backup",
      "Geyser / Solar Water",
      "CCTV Security"
    ],
    "popularColleges": [
      "Christ University",
      "IISc",
      "IIM-B",
      "PES University",
      "MIT Manipal",
      "BMS College"
    ]
  },
  {
    "id": "delhi-ncr",
    "state": "Delhi (NCR)",
    "defaultCity": "Delhi",
    "cities": [
      "Delhi",
      "New Delhi",
      "North Delhi",
      "South Delhi"
    ],
    "localities": [
      {
        "name": "Kamla Nagar, North Campus",
        "hub": "Delhi University Main Arts/Science",
        "avgRent": 9000
      },
      {
        "name": "Satya Niketan, South Campus",
        "hub": "Venkateswara & ARSD Hub",
        "avgRent": 9200
      },
      {
        "name": "Hudson Lane, North Campus",
        "hub": "Student Cafes & Stays Corridor",
        "avgRent": 9800
      },
      {
        "name": "Vijay Nagar, North Campus",
        "hub": "Girls & Boys Student Residences",
        "avgRent": 8500
      },
      {
        "name": "GTB Nagar, North Campus",
        "hub": "Metro Station Student Hub",
        "avgRent": 8800
      },
      {
        "name": "Mukherjee Nagar",
        "hub": "UPSC, SSC & IAS Coaching Capital",
        "avgRent": 7500
      },
      {
        "name": "Laxmi Nagar",
        "hub": "CA, CS & Commerce Coaching Hub",
        "avgRent": 6200
      },
      {
        "name": "Hauz Khas",
        "hub": "IIT Delhi & NIFT Delhi Hub",
        "avgRent": 12000
      },
      {
        "name": "Malviya Nagar",
        "hub": "South Delhi College Hub",
        "avgRent": 10500
      },
      {
        "name": "Karol Bagh",
        "hub": "Civil Services Coaching Hub",
        "avgRent": 9500
      },
      {
        "name": "Patel Nagar",
        "hub": "West-Central Student Hub",
        "avgRent": 8200
      },
      {
        "name": "Kalkaji / Govindpuri",
        "hub": "Deshbandhu & Jamia Access",
        "avgRent": 7000
      },
      {
        "name": "Dwarka Sector 6-14",
        "hub": "GGSIPU Main University Campus",
        "avgRent": 7800
      },
      {
        "name": "Rohini Sector 14-16",
        "hub": "DTU Delhi Tech University Hub",
        "avgRent": 7600
      },
      {
        "name": "Rajouri Garden",
        "hub": "Shivaji & Rajdhani College Hub",
        "avgRent": 8400
      }
    ],
    "rentRange": {
      "triple": "₹6,000 – ₹7,500",
      "double": "₹8,000 – ₹11,000",
      "singleAc": "₹13,000 – ₹18,000",
      "depositMonths": "1 month"
    },
    "foodOptions": "North Indian specialties (Aloo Paratha, Rajma Chawal, Shahi Paneer, Chole Bhature, Egg Curry, Homely Tiffin)",
    "girlsSafety": "Police verified staff, 9:30 PM gate timing, female caretaker, biometric fingerprint scanner, strict visitor checks.",
    "boysFacilities": "High capacity ACs, 24/7 power backup, study library room, Wi-Fi 200 Mbps, laundry washing machines.",
    "topFacilities": [
      "Full Power Backup",
      "High-Speed Wi-Fi",
      "AC & Geyser",
      "Nutritious Food",
      "CCTV 24/7",
      "Library Study Room"
    ],
    "popularColleges": [
      "DU North Campus",
      "DU South Campus",
      "IIT Delhi",
      "DTU",
      "NIFT Delhi",
      "Jamia Millia"
    ]
  },
  {
    "id": "uttar-pradesh",
    "state": "Uttar Pradesh",
    "defaultCity": "Ghaziabad",
    "cities": [
      "Ghaziabad",
      "Noida",
      "Greater Noida",
      "Lucknow",
      "Kanpur",
      "Varanasi",
      "Prayagraj",
      "Agra",
      "Meerut"
    ],
    "localities": [
      {
        "name": "Crossings Republik, Ghaziabad",
        "hub": "ABES EC & AKGEC Student Hub",
        "avgRent": 8500
      },
      {
        "name": "Knowledge Park I-III, Gr. Noida",
        "hub": "Sharda, Galgotias & GL Bajaj",
        "avgRent": 8000
      },
      {
        "name": "Sector 62, Noida",
        "hub": "JIIT Jaypee & Symbiosis Noida",
        "avgRent": 8800
      },
      {
        "name": "Sector 126 / 128, Noida",
        "hub": "Amity University Main Hub",
        "avgRent": 9500
      },
      {
        "name": "Opp. ABES Gate, NH-24 Ghaziabad",
        "hub": "Direct Walk-in Engineering Stays",
        "avgRent": 7500
      },
      {
        "name": "Raj Nagar Extension, Ghaziabad",
        "hub": "Modern Gated Student Living",
        "avgRent": 7200
      },
      {
        "name": "Indirapuram, Ghaziabad",
        "hub": "Habitat Centre & Coaching Hub",
        "avgRent": 8200
      },
      {
        "name": "Gomti Nagar, Lucknow",
        "hub": "BBD Univ & Amity Lucknow Hub",
        "avgRent": 7000
      },
      {
        "name": "Aliganj, Lucknow",
        "hub": "Lucknow University Coaching Hub",
        "avgRent": 6500
      },
      {
        "name": "Hazratganj, Lucknow",
        "hub": "Central Education Hub",
        "avgRent": 7200
      },
      {
        "name": "Lanka, Varanasi",
        "hub": "Banaras Hindu University (BHU)",
        "avgRent": 5500
      },
      {
        "name": "Kakadeo, Kanpur",
        "hub": "JEE / NEET Coaching & HBTU Hub",
        "avgRent": 5800
      },
      {
        "name": "Civil Lines, Prayagraj",
        "hub": "Allahabad Univ & UPSC Coaching",
        "avgRent": 5400
      },
      {
        "name": "Dayal Bagh, Agra",
        "hub": "DEI & Engineering Cluster",
        "avgRent": 5200
      },
      {
        "name": "Shastri Nagar, Meerut",
        "hub": "CCSU & Medical College Corridor",
        "avgRent": 5000
      }
    ],
    "rentRange": {
      "triple": "₹5,000 – ₹6,500",
      "double": "₹7,000 – ₹9,000",
      "singleAc": "₹10,500 – ₹14,000",
      "depositMonths": "1 month"
    },
    "foodOptions": "Pure North Indian Veg & Non-Veg (Tawa Roti, Dal Makhani, Paneer, Seasonal Sabzi, Rice, Kheer, Egg/Chicken)",
    "girlsSafety": "Zero-tolerance security, 9:30 PM curfew, 24/7 security guard, Aadhaar verification, female warden.",
    "boysFacilities": "Heavy power backup for summers, high-speed Wi-Fi, study chairs, attached bathrooms, RO water.",
    "topFacilities": [
      "Inverter Power Backup",
      "High-Speed Wi-Fi",
      "Meals Included",
      "Attached Washrooms",
      "CCTV",
      "RO Water"
    ],
    "popularColleges": [
      "ABES Engineering College",
      "AKGEC",
      "KIET",
      "Galgotias Univ",
      "Sharda Univ",
      "Amity Noida",
      "BHU"
    ]
  },
  {
    "id": "rajasthan",
    "state": "Rajasthan",
    "defaultCity": "Kota",
    "cities": [
      "Kota",
      "Jaipur",
      "Jodhpur",
      "Udaipur",
      "Bikaner",
      "Ajmer"
    ],
    "localities": [
      {
        "name": "Landmark City, Kota",
        "hub": "Allen Samyak & Kunhari Coaching",
        "avgRent": 7000
      },
      {
        "name": "Indra Vihar, Kota",
        "hub": "Allen Safalya & Medical Coaching",
        "avgRent": 7500
      },
      {
        "name": "Talwandi, Kota",
        "hub": "Commerce & NEET Coaching Hub",
        "avgRent": 6800
      },
      {
        "name": "Mahaveer Nagar 1-3, Kota",
        "hub": "Resonance & Career Point Hub",
        "avgRent": 6500
      },
      {
        "name": "Vigyan Nagar, Kota",
        "hub": "Hostel & Mess Intensive Corridor",
        "avgRent": 6200
      },
      {
        "name": "Malviya Nagar, Jaipur",
        "hub": "MNIT Jaipur & World Trade Park",
        "avgRent": 7500
      },
      {
        "name": "Gopalpura Bypass, Jaipur",
        "hub": "RAS & RPSC Coaching Hub",
        "avgRent": 6500
      },
      {
        "name": "Raja Park, Jaipur",
        "hub": "Central College & University Hub",
        "avgRent": 7200
      },
      {
        "name": "Mansarovar, Jaipur",
        "hub": "University of Rajasthan Access",
        "avgRent": 6000
      },
      {
        "name": "Vaishali Nagar, Jaipur",
        "hub": "West Jaipur Coaching Hub",
        "avgRent": 6800
      },
      {
        "name": "Tonk Road, Jaipur",
        "hub": "SMS Medical College Corridor",
        "avgRent": 7000
      },
      {
        "name": "Sardarpura, Jodhpur",
        "hub": "MBM Engineering & NLU Jodhpur",
        "avgRent": 5800
      },
      {
        "name": "Ratanada, Jodhpur",
        "hub": "Jodhpur University Campus Hub",
        "avgRent": 5500
      },
      {
        "name": "Sukhadia Circle, Udaipur",
        "hub": "MLSU & RNT Medical College",
        "avgRent": 5800
      },
      {
        "name": "Shobhagpura, Udaipur",
        "hub": "Management & Tech Institutes",
        "avgRent": 6000
      }
    ],
    "rentRange": {
      "triple": "₹4,800 – ₹6,000",
      "double": "₹6,500 – ₹8,200",
      "singleAc": "₹9,500 – ₹13,000",
      "depositMonths": "1 month"
    },
    "foodOptions": "Rajasthani & North Indian food (Dal-Baati-Churma on Sundays, Kadhi-Khichdi, Paneer, Phulkas, Fresh Milk/Chai)",
    "girlsSafety": "Biometric attendance, parent notification on check-in/out, 9:00 PM strict timing, CCTV, female warden.",
    "boysFacilities": "Ergonomic study chairs, large study tables, high-speed Wi-Fi, air cooling / AC, silent study zones.",
    "topFacilities": [
      "Ergonomic Study Desks",
      "Silent Study Hours",
      "Meals & Milk Included",
      "Power Backup",
      "Wi-Fi",
      "CCTV"
    ],
    "popularColleges": [
      "Allen Kota",
      "Resonance Kota",
      "MNIT Jaipur",
      "IIT Jodhpur",
      "BITS Pilani",
      "SMS Medical Jaipur"
    ]
  },
  {
    "id": "tamil-nadu",
    "state": "Tamil Nadu",
    "defaultCity": "Chennai",
    "cities": [
      "Chennai",
      "Coimbatore",
      "Madurai",
      "Tiruchirappalli",
      "Salem",
      "Kanchipuram"
    ],
    "localities": [
      {
        "name": "Guindy, Chennai",
        "hub": "Anna University Main Campus",
        "avgRent": 8000
      },
      {
        "name": "T. Nagar, Chennai",
        "hub": "Central Coaching & Student Hub",
        "avgRent": 8500
      },
      {
        "name": "Adyar, Chennai",
        "hub": "IIT Madras & CLRI Campus Hub",
        "avgRent": 9500
      },
      {
        "name": "Thiruvanmiyur / OMR, Chennai",
        "hub": "IT & Engineering Corridor",
        "avgRent": 7800
      },
      {
        "name": "Velachery, Chennai",
        "hub": "Guru Nanak & Tech Hub",
        "avgRent": 7400
      },
      {
        "name": "Anna Nagar, Chennai",
        "hub": "IAS Coaching & Medical Hub",
        "avgRent": 8500
      },
      {
        "name": "Nungambakkam, Chennai",
        "hub": "Loyola & WCC Campus Hub",
        "avgRent": 9200
      },
      {
        "name": "Peelamedu, Coimbatore",
        "hub": "PSG Tech & Coimbatore Medical",
        "avgRent": 6200
      },
      {
        "name": "Gandhipuram, Coimbatore",
        "hub": "Central Coaching & Bus Terminal",
        "avgRent": 6000
      },
      {
        "name": "RS Puram, Coimbatore",
        "hub": "Government College & Arts Hub",
        "avgRent": 6400
      },
      {
        "name": "Kattankulathur, Kanchipuram",
        "hub": "SRM University Main Campus Hub",
        "avgRent": 8500
      },
      {
        "name": "Kelambakkam, Chennai",
        "hub": "VIT Chennai Campus Hub",
        "avgRent": 8000
      },
      {
        "name": "KK Nagar, Madurai",
        "hub": "Madurai Kamaraj University Hub",
        "avgRent": 5000
      },
      {
        "name": "Thillai Nagar, Tiruchirappalli",
        "hub": "NIT Trichy & St. Joseph's Hub",
        "avgRent": 5200
      },
      {
        "name": "Saravanampatti, Coimbatore",
        "hub": "Kumaraguru (KCT) Tech Hub",
        "avgRent": 5800
      }
    ],
    "rentRange": {
      "triple": "₹5,000 – ₹6,500",
      "double": "₹7,000 – ₹9,200",
      "singleAc": "₹11,000 – ₹15,000",
      "depositMonths": "2 months"
    },
    "foodOptions": "Traditional Tamil Nadu & North Indian mess (Idli, Vada, Dosa, Sambhar, Rasam, Curd Rice, Chapati, Chicken on Sun)",
    "girlsSafety": "Warden monitoring, biometric registration, 9:30 PM gate rule, emergency contacts list, CCTV in common areas.",
    "boysFacilities": "High-speed Wi-Fi, laundry service, RO water dispenser, study table, geyser, parking space.",
    "topFacilities": [
      "Wi-Fi (200 Mbps)",
      "South/North Mess",
      "RO Water",
      "Daily Cleaning",
      "Geyser",
      "CCTV Security"
    ],
    "popularColleges": [
      "Anna University",
      "IIT Madras",
      "PSG Tech",
      "SRM University",
      "VIT Chennai",
      "NIT Trichy"
    ]
  },
  {
    "id": "telangana",
    "state": "Telangana",
    "defaultCity": "Hyderabad",
    "cities": [
      "Hyderabad",
      "Secunderabad",
      "Warangal",
      "Nizamabad",
      "Karimnagar"
    ],
    "localities": [
      {
        "name": "Madhapur, Hyderabad",
        "hub": "NIFT, Degree Colleges & Tech Stays",
        "avgRent": 8800
      },
      {
        "name": "Gachibowli, Hyderabad",
        "hub": "IIIT-H, University of Hyderabad & ISB",
        "avgRent": 9200
      },
      {
        "name": "Hitec City, Hyderabad",
        "hub": "Software Interns & Student Suites",
        "avgRent": 9500
      },
      {
        "name": "Kondapur, Hyderabad",
        "hub": "Engineering & IT Coaching Hub",
        "avgRent": 8200
      },
      {
        "name": "Ameerpet, Hyderabad",
        "hub": "World-Famous IT & Software Training",
        "avgRent": 6500
      },
      {
        "name": "Dilsukhnagar, Hyderabad",
        "hub": "Govt Job & Competitive Exam Hub",
        "avgRent": 6000
      },
      {
        "name": "Kukatpally, Hyderabad",
        "hub": "JNTU Hyderabad Main Campus",
        "avgRent": 7200
      },
      {
        "name": "Begumpet, Hyderabad",
        "hub": "St. Francis & Osmania Access",
        "avgRent": 7800
      },
      {
        "name": "Mehdipatnam, Hyderabad",
        "hub": "St. Ann's & Medical Colleges",
        "avgRent": 6800
      },
      {
        "name": "SR Nagar, Hyderabad",
        "hub": "Student PG & Coaching Corridor",
        "avgRent": 6400
      },
      {
        "name": "Himayatnagar, Hyderabad",
        "hub": "IAS Academy & Commerce Hub",
        "avgRent": 7500
      },
      {
        "name": "Jubilee Hills / Film Nagar",
        "hub": "Media, Film & Animation Hub",
        "avgRent": 11000
      },
      {
        "name": "Nanakramguda, Hyderabad",
        "hub": "Financial District Tech Stays",
        "avgRent": 9000
      },
      {
        "name": "Kothapet / LB Nagar",
        "hub": "East Hyderabad College Hub",
        "avgRent": 5800
      },
      {
        "name": "Hanamkonda, Warangal",
        "hub": "NIT Warangal Main Gate Hub",
        "avgRent": 5400
      }
    ],
    "rentRange": {
      "triple": "₹5,200 – ₹6,800",
      "double": "₹7,200 – ₹9,800",
      "singleAc": "₹11,500 – ₹16,000",
      "depositMonths": "1–2 months"
    },
    "foodOptions": "Hyderabadi & Andhra cuisine with North Indian rotis (Pappu, Sambar, Chicken Biryani weekends, Veg/Non-Veg)",
    "girlsSafety": "She Teams coordination, biometric security, 10:00 PM entry, 24/7 guard, visitor restriction policy.",
    "boysFacilities": "High-speed Wi-Fi, uninterrupted power backup, separate study area, RO drinking water, geyser.",
    "topFacilities": [
      "High-Speed Wi-Fi",
      "Andhra & North Mess",
      "Power Backup",
      "Attached Washrooms",
      "CCTV",
      "Washing Machine"
    ],
    "popularColleges": [
      "IIIT Hyderabad",
      "JNTUH",
      "Osmania University",
      "NIT Warangal",
      "Univ of Hyderabad",
      "ISB"
    ]
  },
  {
    "id": "gujarat",
    "state": "Gujarat",
    "defaultCity": "Ahmedabad",
    "cities": [
      "Ahmedabad",
      "Gandhinagar",
      "Vadodara",
      "Surat",
      "Rajkot",
      "Anand"
    ],
    "localities": [
      {
        "name": "Navrangpura, Ahmedabad",
        "hub": "Gujarat University, CEPT & St. Xavier's",
        "avgRent": 7200
      },
      {
        "name": "Vastrapur, Ahmedabad",
        "hub": "IIM Ahmedabad & ATIRA Hub",
        "avgRent": 8500
      },
      {
        "name": "Bodakdev, Ahmedabad",
        "hub": "Nirma University Access Hub",
        "avgRent": 8000
      },
      {
        "name": "Satellite / SG Highway",
        "hub": "Modern Student Accommodations",
        "avgRent": 7800
      },
      {
        "name": "Memnagar, Ahmedabad",
        "hub": "Commerce & Science College Hub",
        "avgRent": 7000
      },
      {
        "name": "Infocity, Gandhinagar",
        "hub": "DAIICT & PDPU Tech Corridor",
        "avgRent": 8200
      },
      {
        "name": "Kudasan, Gandhinagar",
        "hub": "GNLU National Law & NIFT Hub",
        "avgRent": 8000
      },
      {
        "name": "Raysan, Gandhinagar",
        "hub": "PDEU & IIT Gandhinagar Hub",
        "avgRent": 8500
      },
      {
        "name": "Fatehgunj, Vadodara",
        "hub": "MS University of Baroda Main Gate",
        "avgRent": 5800
      },
      {
        "name": "Alkapuri, Vadodara",
        "hub": "Central Vadodara Student Hub",
        "avgRent": 6500
      },
      {
        "name": "Sayajigunj, Vadodara",
        "hub": "MSU Polytechnic & Science Hub",
        "avgRent": 5500
      },
      {
        "name": "Vesu, Surat",
        "hub": "SVNIT Surat & VNSGU Hub",
        "avgRent": 6800
      },
      {
        "name": "Adajan, Surat",
        "hub": "West Surat Education Corridor",
        "avgRent": 6000
      },
      {
        "name": "Piplod, Surat",
        "hub": "Design & Engineering Hub",
        "avgRent": 6400
      },
      {
        "name": "Vallabh Vidyanagar, Anand",
        "hub": "Sardar Patel University Town",
        "avgRent": 5200
      }
    ],
    "rentRange": {
      "triple": "₹4,800 – ₹6,200",
      "double": "₹6,800 – ₹8,800",
      "singleAc": "₹10,500 – ₹14,500",
      "depositMonths": "1–2 months"
    },
    "foodOptions": "Pure Veg Gujarati, Jain & North Indian food (Thepla, Khichdi-Kadhi, Roti-Dal, Paneer, Sweet Dal, Buttermilk)",
    "girlsSafety": "Very high safety ratings, biometric door locks, 10:30 PM entry, security cameras, resident warden.",
    "boysFacilities": "High-speed Wi-Fi, RO filtered water, AC rooms, quiet study atmosphere, laundry service.",
    "topFacilities": [
      "Pure Veg & Jain Meals",
      "Wi-Fi (300 Mbps)",
      "AC Rooms",
      "RO Water",
      "CCTV",
      "Daily Housekeeping"
    ],
    "popularColleges": [
      "IIM Ahmedabad",
      "NID",
      "CEPT",
      "DAIICT",
      "GNLU",
      "IIT Gandhinagar",
      "MSU Baroda",
      "SVNIT"
    ]
  },
  {
    "id": "west-bengal",
    "state": "West Bengal",
    "defaultCity": "Kolkata",
    "cities": [
      "Kolkata",
      "Durgapur",
      "Siliguri",
      "Kharagpur",
      "Howrah",
      "Asansol"
    ],
    "localities": [
      {
        "name": "Salt Lake Sector V, Kolkata",
        "hub": "Techno India & IT College Hub",
        "avgRent": 7500
      },
      {
        "name": "New Town Action Area I",
        "hub": "Amity & St. Xavier's University",
        "avgRent": 8000
      },
      {
        "name": "Jadavpur, Kolkata",
        "hub": "Jadavpur University Main Hub",
        "avgRent": 5800
      },
      {
        "name": "College Street, Kolkata",
        "hub": "Calcutta Univ & Presidency Univ",
        "avgRent": 5500
      },
      {
        "name": "Ballygunge, Kolkata",
        "hub": "South Kolkata College Cluster",
        "avgRent": 7200
      },
      {
        "name": "Bhawanipur, Kolkata",
        "hub": "Bhawanipur Gujarati Education",
        "avgRent": 7000
      },
      {
        "name": "Gariahat, Kolkata",
        "hub": "South City & Heritage Transit",
        "avgRent": 6800
      },
      {
        "name": "Rajarhat, Kolkata",
        "hub": "Technical Colleges Corridor",
        "avgRent": 7200
      },
      {
        "name": "Dum Dum / Nagerbazar",
        "hub": "North Kolkata Transit Hub",
        "avgRent": 5400
      },
      {
        "name": "Behala / Taratala, Kolkata",
        "hub": "IIM Calcutta & Marine Engg",
        "avgRent": 6000
      },
      {
        "name": "City Centre, Durgapur",
        "hub": "NIT Durgapur Main Hub",
        "avgRent": 5200
      },
      {
        "name": "B-Zone, Durgapur",
        "hub": "Dr. BC Roy Engg & Medical",
        "avgRent": 4800
      },
      {
        "name": "Bidhan Nagar, Kolkata",
        "hub": "Central Salt Lake Hub",
        "avgRent": 7000
      },
      {
        "name": "Hakim Para, Siliguri",
        "hub": "North Bengal University Access",
        "avgRent": 4800
      },
      {
        "name": "Matigara, Siliguri",
        "hub": "North Bengal Medical College",
        "avgRent": 5000
      }
    ],
    "rentRange": {
      "triple": "₹4,500 – ₹5,800",
      "double": "₹6,200 – ₹8,200",
      "singleAc": "₹9,500 – ₹13,500",
      "depositMonths": "1–2 months"
    },
    "foodOptions": "Bengali & North Indian cuisine (Fish curry on weekends, Luchi-Alur Dom, Dal-Bhat, Roti-Tarka, Egg curry)",
    "girlsSafety": "Security guard at gate, 10:00 PM entry, CCTV monitoring, guest register, female caretaker.",
    "boysFacilities": "High-speed Wi-Fi, attached washrooms, geyser, study tables, power backup, daily maid cleaning.",
    "topFacilities": [
      "Wi-Fi",
      "Bengali/North Mess",
      "RO Water",
      "CCTV",
      "Power Backup",
      "Attached Bath"
    ],
    "popularColleges": [
      "Jadavpur University",
      "IIT Kharagpur",
      "IIM Calcutta",
      "Calcutta University",
      "NIT Durgapur"
    ]
  },
  {
    "id": "madhya-pradesh",
    "state": "Madhya Pradesh",
    "defaultCity": "Indore",
    "cities": [
      "Indore",
      "Bhopal",
      "Gwalior",
      "Jabalpur",
      "Ujjain"
    ],
    "localities": [
      {
        "name": "Bhawarkua, Indore",
        "hub": "MPPSC, UPSC & Coaching Capital",
        "avgRent": 5500
      },
      {
        "name": "Vijay Nagar, Indore",
        "hub": "Prestige & IT Park Corridor",
        "avgRent": 7000
      },
      {
        "name": "Old Palasia, Indore",
        "hub": "Central Student Stays Hub",
        "avgRent": 6500
      },
      {
        "name": "Geeta Bhawan, Indore",
        "hub": "Holkar Science & DAVV Hub",
        "avgRent": 6000
      },
      {
        "name": "Rau / Bypass, Indore",
        "hub": "IIM Indore & Medicaps Univ",
        "avgRent": 6200
      },
      {
        "name": "MP Nagar Zone I-II, Bhopal",
        "hub": "Coaching & Technical Hub",
        "avgRent": 5800
      },
      {
        "name": "Arera Colony, Bhopal",
        "hub": "Central Bhopal Student Hub",
        "avgRent": 6500
      },
      {
        "name": "Indrapuri, Bhopal",
        "hub": "MANIT Bhopal & BHEL Hub",
        "avgRent": 5400
      },
      {
        "name": "Kolar Road, Bhopal",
        "hub": "LNCT & RKDF University Hub",
        "avgRent": 5200
      },
      {
        "name": "Hoshangabad Road, Bhopal",
        "hub": "Barkatullah University Hub",
        "avgRent": 5600
      },
      {
        "name": "Wright Town, Jabalpur",
        "hub": "JEC Jabalpur Engineering Hub",
        "avgRent": 4800
      },
      {
        "name": "Napier Town, Jabalpur",
        "hub": "Medical & Law College Hub",
        "avgRent": 5000
      },
      {
        "name": "City Centre, Gwalior",
        "hub": "Jiwaji Univ & ABV-IIITM Hub",
        "avgRent": 5200
      },
      {
        "name": "Morar, Gwalior",
        "hub": "MITS Gwalior Engineering Hub",
        "avgRent": 4600
      },
      {
        "name": "Madhav Nagar, Ujjain",
        "hub": "Vikram University Campus Hub",
        "avgRent": 4500
      }
    ],
    "rentRange": {
      "triple": "₹4,200 – ₹5,500",
      "double": "₹5,800 – ₹7,500",
      "singleAc": "₹8,500 – ₹12,000",
      "depositMonths": "1 month"
    },
    "foodOptions": "Indori & North Indian vegetarian specialties (Poha-Jalebi, Sev-Tamatar, Dal-Bafla Sundays, Homely Thali)",
    "girlsSafety": "Female warden, 9:30 PM curfew, CCTV at entrance, entry logs, safe student colonies.",
    "boysFacilities": "High-speed Wi-Fi, air cooler / AC, study tables, laundry service, silent study atmosphere.",
    "topFacilities": [
      "Pure Veg Indori Mess",
      "Wi-Fi",
      "Air Cooler / AC",
      "RO Water",
      "CCTV Security",
      "Power Backup"
    ],
    "popularColleges": [
      "IIM Indore",
      "IIT Indore",
      "MANIT Bhopal",
      "ABV-IIITM Gwalior",
      "DAVV Indore",
      "LNCT Bhopal"
    ]
  },
  {
    "id": "punjab-chandigarh",
    "state": "Punjab & Chandigarh",
    "defaultCity": "Chandigarh",
    "cities": [
      "Chandigarh",
      "Mohali",
      "Ludhiana",
      "Jalandhar",
      "Amritsar",
      "Patiala"
    ],
    "localities": [
      {
        "name": "Sector 15, Chandigarh",
        "hub": "Panjab University (PU) Main Hub",
        "avgRent": 8500
      },
      {
        "name": "Sector 34, Chandigarh",
        "hub": "North India Coaching Hub",
        "avgRent": 8800
      },
      {
        "name": "Sector 22, Chandigarh",
        "hub": "Central Market & Student Stays",
        "avgRent": 8000
      },
      {
        "name": "Sector 35, Chandigarh",
        "hub": "Student Stays & Food Corridor",
        "avgRent": 8500
      },
      {
        "name": "Phase 7, Mohali",
        "hub": "IT & Engineering Stays Hub",
        "avgRent": 7500
      },
      {
        "name": "Phase 3B2, Mohali",
        "hub": "Food & Coaching Street Hub",
        "avgRent": 7800
      },
      {
        "name": "Kharar, Mohali",
        "hub": "Chandigarh University (CU) Main Hub",
        "avgRent": 6500
      },
      {
        "name": "Landran, Mohali",
        "hub": "CGC Landran Campus Hub",
        "avgRent": 6200
      },
      {
        "name": "Zirakpur VIP Road",
        "hub": "Budget Student & Intern Stays",
        "avgRent": 7000
      },
      {
        "name": "Model Town, Ludhiana",
        "hub": "PAU Punjab Agricultural Univ",
        "avgRent": 6800
      },
      {
        "name": "Sarabha Nagar, Ludhiana",
        "hub": "GNDEC & Coaching Hub",
        "avgRent": 6500
      },
      {
        "name": "Model Town, Jalandhar",
        "hub": "NIT Jalandhar Transit Hub",
        "avgRent": 6200
      },
      {
        "name": "Cantt Road, Jalandhar",
        "hub": "DAV & Doaba College Hub",
        "avgRent": 5800
      },
      {
        "name": "Ranjit Avenue, Amritsar",
        "hub": "GNDU Amritsar Main Hub",
        "avgRent": 6000
      },
      {
        "name": "Thapar University Corridor, Patiala",
        "hub": "TIET Patiala Campus Hub",
        "avgRent": 7500
      }
    ],
    "rentRange": {
      "triple": "₹5,200 – ₹6,800",
      "double": "₹7,200 – ₹9,500",
      "singleAc": "₹11,500 – ₹15,500",
      "depositMonths": "1 month"
    },
    "foodOptions": "Rich Punjabi & North Indian meals (Aloo-Gobi Paratha with Curd, Dal Makhani, Paneer Bhurji, Rajma, Chicken on weekends)",
    "girlsSafety": "Gated sectors, biometric attendance, 10:00 PM gate closing, female supervisor, verified staff.",
    "boysFacilities": "Heavy AC cooling, inverter backup, high-speed Wi-Fi, open terraces, bike parking, study tables.",
    "topFacilities": [
      "Punjabi / North Indian Mess",
      "High-Speed Wi-Fi",
      "Heavy AC Cooling",
      "Power Backup",
      "Geyser",
      "CCTV"
    ],
    "popularColleges": [
      "Panjab University",
      "Thapar Institute TIET",
      "Chandigarh University",
      "NIT Jalandhar",
      "IIT Ropar"
    ]
  },
  {
    "id": "haryana",
    "state": "Haryana",
    "defaultCity": "Gurugram",
    "cities": [
      "Gurugram",
      "Faridabad",
      "Sonipat",
      "Rohtak",
      "Hisar",
      "Kurukshetra",
      "Karnal",
      "Panchkula"
    ],
    "localities": [
      {
        "name": "Sector 14, Gurugram",
        "hub": "Dronacharya College & IT Hub",
        "avgRent": 9500
      },
      {
        "name": "DLF Phase 3, Gurugram",
        "hub": "Corporate Interns & Student Hub",
        "avgRent": 11000
      },
      {
        "name": "Sector 43, Gurugram",
        "hub": "Sushant Univ & Golf Course Hub",
        "avgRent": 10500
      },
      {
        "name": "Cyber City / Udyog Vihar",
        "hub": "Tech Stays & Interns Hub",
        "avgRent": 10000
      },
      {
        "name": "Sector 56, Gurugram",
        "hub": "South Gurugram Student Corridor",
        "avgRent": 9000
      },
      {
        "name": "Sector 15, Faridabad",
        "hub": "Manav Rachna Transit Hub",
        "avgRent": 7200
      },
      {
        "name": "NIT Faridabad 1-5",
        "hub": "JC Bose YMCA University Hub",
        "avgRent": 6800
      },
      {
        "name": "Sector 14, Sonipat",
        "hub": "Ashoka University Transit Hub",
        "avgRent": 7000
      },
      {
        "name": "Murthal, Sonipat",
        "hub": "DCRUST Engineering Univ Hub",
        "avgRent": 6200
      },
      {
        "name": "Model Town, Rohtak",
        "hub": "MDU Maharshi Dayanand Univ Hub",
        "avgRent": 5500
      },
      {
        "name": "Sector 1-4, Rohtak",
        "hub": "PGIMS Medical College Hub",
        "avgRent": 5800
      },
      {
        "name": "Urban Estate 1-2, Hisar",
        "hub": "GJU Science & Tech Hub",
        "avgRent": 5000
      },
      {
        "name": "Sector 13, Kurukshetra",
        "hub": "Kurukshetra University & NIT",
        "avgRent": 5200
      },
      {
        "name": "Sector 7, Panchkula",
        "hub": "Panchkula-Chandigarh Stays",
        "avgRent": 7500
      },
      {
        "name": "Sector 12, Karnal",
        "hub": "Karnal Central Education Hub",
        "avgRent": 5200
      }
    ],
    "rentRange": {
      "triple": "₹5,000 – ₹6,500",
      "double": "₹7,200 – ₹9,800",
      "singleAc": "₹12,000 – ₹17,000",
      "depositMonths": "1 month"
    },
    "foodOptions": "Desi Haryanvi & North Indian meals (Pure buffalo milk, Parathas with white butter, Dal Tadka, Kadhi, Paneer)",
    "girlsSafety": "High security gates, biometric scanner, 9:30 PM entry, 24/7 security guard, CCTV, female warden.",
    "boysFacilities": "Heavy capacity ACs, power backup, study desks, Wi-Fi 300 Mbps, vehicle parking, geyser.",
    "topFacilities": [
      "24/7 Power Backup",
      "High-Speed Wi-Fi",
      "Fresh Milk & Meals",
      "Attached Washrooms",
      "CCTV",
      "AC"
    ],
    "popularColleges": [
      "NIT Kurukshetra",
      "Ashoka University",
      "YMCA Faridabad",
      "MDU Rohtak",
      "DCRUST Murthal"
    ]
  },
  {
    "id": "kerala",
    "state": "Kerala",
    "defaultCity": "Kochi",
    "cities": [
      "Kochi",
      "Thiruvananthapuram",
      "Kozhikode",
      "Thrissur",
      "Kottayam",
      "Kollam"
    ],
    "localities": [
      {
        "name": "Kalamassery, Kochi",
        "hub": "CUSAT Cochin University Hub",
        "avgRent": 6500
      },
      {
        "name": "Kakkanad / InfoPark, Kochi",
        "hub": "Rajagiri & Tech Stays Hub",
        "avgRent": 7500
      },
      {
        "name": "Kaloor, Kochi",
        "hub": "Metro Transit & Coaching Hub",
        "avgRent": 6800
      },
      {
        "name": "Edapally, Kochi",
        "hub": "Amrita Institute Transit Hub",
        "avgRent": 7000
      },
      {
        "name": "Thrikkakara, Kochi",
        "hub": "Model Engineering College (MEC)",
        "avgRent": 6200
      },
      {
        "name": "Palayam, Thiruvananthapuram",
        "hub": "University of Kerala Central Hub",
        "avgRent": 6000
      },
      {
        "name": "Kazhakkoottam, Trivandrum",
        "hub": "Technopark & Marian College",
        "avgRent": 6800
      },
      {
        "name": "Kariavattom, Trivandrum",
        "hub": "Kerala Univ Kariavattom Campus",
        "avgRent": 5800
      },
      {
        "name": "East Fort, Thrissur",
        "hub": "Medical College & St. Thomas Hub",
        "avgRent": 5200
      },
      {
        "name": "Round West, Thrissur",
        "hub": "GEC Thrissur Transit Hub",
        "avgRent": 5500
      },
      {
        "name": "Mavoor Road, Kozhikode",
        "hub": "Farook & Medical College Hub",
        "avgRent": 5500
      },
      {
        "name": "Nadakkavu, Kozhikode",
        "hub": "Malabar Christian College Hub",
        "avgRent": 5800
      },
      {
        "name": "Kanjirappally, Kottayam",
        "hub": "Amal Jyothi Engineering Hub",
        "avgRent": 5000
      },
      {
        "name": "Manarcaud, Kottayam",
        "hub": "CMS & BCM College Hub",
        "avgRent": 4800
      },
      {
        "name": "Cherthala, Alappuzha",
        "hub": "KVM Engineering & Medical Hub",
        "avgRent": 4600
      }
    ],
    "rentRange": {
      "triple": "₹4,200 – ₹5,500",
      "double": "₹6,000 – ₹7,800",
      "singleAc": "₹9,500 – ₹13,000",
      "depositMonths": "1–2 months"
    },
    "foodOptions": "Kerala traditional & North Indian options (Appam, Puttu, Kadala curry, Kerala rice with Thoran & Moru, Fish/Chicken)",
    "girlsSafety": "Warden managed, strict 9:00 PM entry, entry register, CCTV surveillance, parent notification.",
    "boysFacilities": "Wi-Fi 200 Mbps, washing machines, roof study area, bike parking, RO drinking water.",
    "topFacilities": [
      "Kerala & North Meals",
      "Wi-Fi (200 Mbps)",
      "RO Purified Water",
      "Daily Cleaning",
      "Geyser",
      "CCTV"
    ],
    "popularColleges": [
      "CUSAT Kochi",
      "IIM Kozhikode",
      "NIT Calicut",
      "Model Engineering College",
      "Univ of Kerala"
    ]
  },
  {
    "id": "uttarakhand",
    "state": "Uttarakhand",
    "defaultCity": "Dehradun",
    "cities": [
      "Dehradun",
      "Roorkee",
      "Rishikesh",
      "Nainital",
      "Pantnagar",
      "Haridwar"
    ],
    "localities": [
      {
        "name": "Karanpur, Dehradun",
        "hub": "IAS, NDA, CDS Coaching Hub",
        "avgRent": 6500
      },
      {
        "name": "Rajpur Road, Dehradun",
        "hub": "DIT & IMS Unison Corridor",
        "avgRent": 8500
      },
      {
        "name": "Prem Nagar, Dehradun",
        "hub": "UPES Energy Acres Transit Hub",
        "avgRent": 7500
      },
      {
        "name": "Clement Town, Dehradun",
        "hub": "Graphic Era University (GEU) Hub",
        "avgRent": 7800
      },
      {
        "name": "Chakrata Road, Dehradun",
        "hub": "Wadia Institute & Stays Hub",
        "avgRent": 7000
      },
      {
        "name": "Ballupur Chowk, Dehradun",
        "hub": "Coaching & Girls PG Hub",
        "avgRent": 7200
      },
      {
        "name": "Subhash Nagar, Dehradun",
        "hub": "Graphic Era Hill University Hub",
        "avgRent": 7200
      },
      {
        "name": "Selaqui, Dehradun",
        "hub": "Pharma & Technical College Hub",
        "avgRent": 6000
      },
      {
        "name": "Bidholi, Dehradun",
        "hub": "UPES Bidholi Main Campus Hub",
        "avgRent": 8000
      },
      {
        "name": "Civil Lines, Roorkee",
        "hub": "IIT Roorkee Main Gate Hub",
        "avgRent": 6200
      },
      {
        "name": "Solani Puram, Roorkee",
        "hub": "COER & Engineering Stays Hub",
        "avgRent": 5500
      },
      {
        "name": "Awas Vikas, Rishikesh",
        "hub": "AIIMS Rishikesh Medical Hub",
        "avgRent": 6500
      },
      {
        "name": "Tapovan, Rishikesh",
        "hub": "Yoga & Sanskrit Studies Hub",
        "avgRent": 6000
      },
      {
        "name": "Tallital, Nainital",
        "hub": "DSB Campus Kumaun University",
        "avgRent": 5500
      },
      {
        "name": "Pantnagar, Udham Singh Nagar",
        "hub": "GBPUAT Agriculture University",
        "avgRent": 4800
      }
    ],
    "rentRange": {
      "triple": "₹5,000 – ₹6,500",
      "double": "₹7,000 – ₹9,200",
      "singleAc": "₹11,000 – ₹15,000",
      "depositMonths": "1 month"
    },
    "foodOptions": "Garhwali & North Indian homely food (Gahat Dal, Mandua Roti, Rajma-Chawal, Aloo Parathas, Egg/Chicken curry)",
    "girlsSafety": "Safe valley environment, female warden, 9:30 PM gate limit, CCTV at entry, verified staff.",
    "boysFacilities": "High-speed Wi-Fi, mountain view study balconies, geyser in all bathrooms, power backup, study desks.",
    "topFacilities": [
      "Geyser in All Rooms",
      "High-Speed Wi-Fi",
      "Homely 3-time Meals",
      "Power Backup",
      "CCTV",
      "Study Tables"
    ],
    "popularColleges": [
      "IIT Roorkee",
      "UPES Dehradun",
      "Graphic Era",
      "DIT University",
      "AIIMS Rishikesh",
      "GBPUAT"
    ]
  },
  {
    "id": "odisha",
    "state": "Odisha",
    "defaultCity": "Bhubaneswar",
    "cities": [
      "Bhubaneswar",
      "Cuttack",
      "Rourkela",
      "Sambalpur",
      "Berhampur"
    ],
    "localities": [
      {
        "name": "Patia, Bhubaneswar",
        "hub": "KIIT University & KIMS Main Hub",
        "avgRent": 7500
      },
      {
        "name": "Infocity, Bhubaneswar",
        "hub": "Silicon Institute & IT Hub",
        "avgRent": 7800
      },
      {
        "name": "Jayadev Vihar, Bhubaneswar",
        "hub": "BPUT & Utkal Univ Transit",
        "avgRent": 7000
      },
      {
        "name": "Saheed Nagar, Bhubaneswar",
        "hub": "Rama Devi Women's University",
        "avgRent": 6500
      },
      {
        "name": "Khandagiri, Bhubaneswar",
        "hub": "ITER & SOA University Hub",
        "avgRent": 6800
      },
      {
        "name": "Master Canteen, Bhubaneswar",
        "hub": "Central Coaching & Railway Hub",
        "avgRent": 6200
      },
      {
        "name": "Nayapalli, Bhubaneswar",
        "hub": "Regional College of Education",
        "avgRent": 6600
      },
      {
        "name": "Chandrasekharpur, Bhubaneswar",
        "hub": "DAV & Technical Hub",
        "avgRent": 6800
      },
      {
        "name": "Rasulgarh, Bhubaneswar",
        "hub": "Hi-Tech Medical College Hub",
        "avgRent": 5800
      },
      {
        "name": "CDA Sector 6-10, Cuttack",
        "hub": "National Law University (NLUO)",
        "avgRent": 6200
      },
      {
        "name": "College Square, Cuttack",
        "hub": "Ravenshaw University Main Hub",
        "avgRent": 5200
      },
      {
        "name": "Badambadi, Cuttack",
        "hub": "SCB Medical College Transit",
        "avgRent": 5000
      },
      {
        "name": "Chhend Colony, Rourkela",
        "hub": "NIT Rourkela Campus Hub",
        "avgRent": 5500
      },
      {
        "name": "Civil Township, Rourkela",
        "hub": "Rourkela City Student Stays",
        "avgRent": 5200
      },
      {
        "name": "Burla, Sambalpur",
        "hub": "VSSUT Veer Surendra Sai Univ",
        "avgRent": 4500
      }
    ],
    "rentRange": {
      "triple": "₹4,200 – ₹5,500",
      "double": "₹6,000 – ₹8,000",
      "singleAc": "₹9,500 – ₹13,500",
      "depositMonths": "1–2 months"
    },
    "foodOptions": "Odia & North Indian cuisine (Dalma, Santula, Chhena Poda weekends, Fish/Chicken curry, Roti-Tadka)",
    "girlsSafety": "Biometric attendance, 9:30 PM gate timing, female caretaker, CCTV surveillance, emergency helpdesk.",
    "boysFacilities": "High-speed Wi-Fi, air cooler / AC, attached washrooms, study desks, RO purified water.",
    "topFacilities": [
      "Wi-Fi (200 Mbps)",
      "Odia & North Meals",
      "Attached Washrooms",
      "RO Water",
      "Power Backup",
      "CCTV"
    ],
    "popularColleges": [
      "KIIT University",
      "NIT Rourkela",
      "IIT Bhubaneswar",
      "SOA / ITER",
      "AIIMS Bhubaneswar",
      "Ravenshaw"
    ]
  }
];

export function getAllStates() {
  return INDIAN_STATES_DATA.map(s => s.state);
}

export function getStateData(stateNameOrCity) {
  if (!stateNameOrCity) return INDIAN_STATES_DATA[0];
  const query = stateNameOrCity.toLowerCase().trim();
  
  // Try exact state match
  let found = INDIAN_STATES_DATA.find(s => s.state.toLowerCase() === query || s.id.toLowerCase() === query);
  if (found) return found;

  // Try city or locality match
  found = INDIAN_STATES_DATA.find(s => 
    s.cities.some(c => c.toLowerCase() === query || query.includes(c.toLowerCase())) ||
    s.localities.some(l => l.name.toLowerCase().includes(query) || l.hub.toLowerCase().includes(query))
  );
  return found || INDIAN_STATES_DATA[0];
}

export function getLocalitiesForState(stateName) {
  const data = getStateData(stateName);
  return data ? data.localities : [];
}

export function getCalculatedRent(stateName, localityName, roomType = 'Double Sharing', hasAc = true, foodIncluded = true) {
  const st = getStateData(stateName);
  let baseRent = 7500;
  
  if (localityName) {
    const loc = st.localities.find(l => l.name.toLowerCase().includes(localityName.toLowerCase()));
    if (loc && loc.avgRent) {
      baseRent = loc.avgRent;
    }
  }

  // Room type multiplier
  if (roomType === 'Single Sharing' || roomType === 'Single Private Room') {
    baseRent = Math.round(baseRent * 1.45);
  } else if (roomType === 'Triple Sharing') {
    baseRent = Math.round(baseRent * 0.78);
  }

  // AC supplement
  if (hasAc) {
    baseRent += 1500;
  }

  // Food supplement
  if (foodIncluded) {
    baseRent += 2000;
  }

  return baseRent;
}
