// Amenity groups for the "Show all amenities" modal, in the order the reference lists them.
// `off: true` renders struck through (not available).
export type Amenity = { name: string; off?: boolean };
export type AmenityGroup = { title: string; items: Amenity[] };

const a = (name: string, off = false): Amenity => ({ name, ...(off ? { off } : {}) });

export const AMENITY_TOTAL = 50;

export const AMENITY_GROUPS: AmenityGroup[] = [
  { title: "Bathroom", items: [a("Hairdryer"), a("Cleaning products"), a("Shampoo"), a("Hot water"), a("Shower gel")] },
  { title: "Bedroom and laundry", items: [a("Washing machine"), a("Hangers"), a("Bed linen"), a("Room-darkening blinds"), a("Iron"), a("Clothes storage"), a("Cot")] },
  { title: "Entertainment", items: [a("TV")] },
  { title: "Family", items: [a("Cot")] },
  { title: "Heating and cooling", items: [a("Air conditioning"), a("Ceiling fan")] },
  { title: "Home safety", items: [a("Exterior security cameras on property"), a("Carbon monoxide alarm", true), a("Smoke alarm", true)] },
  { title: "Internet and office", items: [a("Wifi"), a("Dedicated workspace")] },
  { title: "Kitchen and dining", items: [a("Kitchen"), a("Fridge"), a("Freezer"), a("Microwave"), a("Cooking basics"), a("Crockery and cutlery"), a("Kettle"), a("Coffee"), a("Wine glasses"), a("Toaster"), a("Blender"), a("Cooker")] },
  { title: "Location features", items: [a("Private entrance")] },
  { title: "Outdoor", items: [a("Patio or balcony"), a("Outdoor dining area")] },
  { title: "Parking and facilities", items: [a("Free parking on premises"), a("Pool"), a("Hot tub"), a("Gym")] },
  { title: "Services", items: [a("Pets allowed"), a("Cleaning available during stay"), a("Long-term stays allowed"), a("Self check-in")] },
];

// The 10 shown on the listing page.
export const AMENITY_PREVIEW: Amenity[] = [
  a("Kitchen"), a("Wifi"), a("Dedicated workspace"), a("Free parking on premises"), a("Pool"),
  a("Hot tub"), a("Pets allowed"), a("Exterior security cameras on property"),
  a("Carbon monoxide alarm", true), a("Smoke alarm", true),
];
