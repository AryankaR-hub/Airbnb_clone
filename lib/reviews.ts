export type Review = {
  name: string;
  tenure: string;
  when: string;
  text: string;
  avatar?: string; // photo
  initial?: string; // letter avatar
  tint?: string;
};

export const REVIEWS: Review[] = [
  { name: "Amit", tenure: "2 months on Airbnb", when: "1 week ago", initial: "A", tint: "#f8e9d8", text: "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property." },
  { name: "Aheesh", tenure: "3 years on Airbnb", when: "2 weeks ago", avatar: "/images/avatars/rev1.jpeg", text: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again." },
  { name: "Samiksha", tenure: "8 months on Airbnb", when: "May 2026", avatar: "/images/avatars/rev2.jpeg", text: "the host nitish was really great help" },
  { name: "Vedant", tenure: "4 years on Airbnb", when: "May 2026", initial: "V", tint: "#e8e6f8", text: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine. The location is convenient and the host was a pleasure to deal with." },
  { name: "Vaibhav S", tenure: "3 years on Airbnb", when: "May 2026", avatar: "/images/avatars/rev3.jpeg", text: "Great great experience living out there , can’t expect more , will always look for it in the future and will recommend my friends too." },
  { name: "Mohd", tenure: "5 years on Airbnb", when: "May 2026", avatar: "/images/avatars/rev4.jpeg", text: "Great place. Exactly as described in the listing." },
];

export const CHIPS = [
  { label: "Comfort", count: 6, icon: "comfort" },
  { label: "Accuracy", count: 5, icon: "accuracy" },
  { label: "Hot tub", count: 5, icon: "hot-tub" },
  { label: "Condition", count: 4, icon: "condition" },
  { label: "Hospitality", count: 8, icon: "hospitality" },
  { label: "Cleanliness", count: 4, icon: "cleanliness" },
  { label: "Amenities", count: 2, icon: "amenities" },
  { label: "Decor", count: 2, icon: "decor" },
  { label: "Indoor spaces", count: 2, icon: "indoor-spaces" },
  { label: "Location", count: 2, icon: "location" },
];

export const CATEGORIES = [
  { label: "Cleanliness", score: "5.0", icon: ["SprayCan"] },
  { label: "Accuracy", score: "5.0", icon: ["CircleCheck", "CheckCircle2", "CheckCircle"] },
  { label: "Check-in", score: "5.0", icon: ["KeyRound", "Key"] },
  { label: "Communication", score: "5.0", icon: ["MessageSquare"] },
  { label: "Location", score: "4.8", icon: ["Map"] },
  { label: "Value", score: "4.8", icon: ["Tag"] },
];

export const CO_HOSTS = [
  { name: "Sharath", avatar: "/images/avatars/co1.jpg" },
  { name: "Aman Dev Pahwa", avatar: "/images/avatars/co2.jpg" },
  { name: "Maria Karen Priyanka", avatar: "/images/avatars/co3.jpg" },
  { name: "Simran", avatar: "/images/avatars/rev5.jpeg" },
  { name: "Pallavi", avatar: "/images/avatars/rev1.jpeg" },
  { name: "Sanyukta", avatar: "/images/avatars/rev2.jpeg" },
  { name: "Shruti", tint: "#fde4ec" },
  { name: "Amisha", tint: "#e3ecfd" },
];
