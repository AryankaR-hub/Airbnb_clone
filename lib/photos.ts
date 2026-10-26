// Photo Tour data. Order and grouping follow the reference page.
// Each room lists its rows: a one-photo row renders large, a two-photo row renders as a pair.
export const TOUR_PARAM = "PHOTO_TOUR_SCROLLABLE";
export const ITEM_BASE = 1000; // reference uses modalItem=1000+index (1042 = 43rd photo)

export type Photo = { index: number; src: string; alt: string; roomId: string; roomTitle: string };
export type Room = { id: string; title: string; amenities?: string; thumb: string; rows: Photo[][] };

type RoomSpec = { id: string; title: string; amenities?: string; rows: string[][] };

const SPEC: RoomSpec[] = [
  {
    "id": "living-room-1",
    "title": "Living room 1",
    "amenities": "Sofa · Air conditioning · Ceiling fan · TV",
    "rows": [
      [
        "living-room-1-01.jpeg"
      ],
      [
        "living-room-1-02.jpeg",
        "living-room-1-03.jpeg"
      ]
    ]
  },
  {
    "id": "living-room-2",
    "title": "Living room 2",
    "amenities": "Ceiling fan · Hot tub",
    "rows": [
      [
        "living-room-2-01.jpeg"
      ],
      [
        "living-room-2-02.jpeg",
        "living-room-2-03.jpeg"
      ],
      [
        "living-room-2-04.jpeg"
      ],
      [
        "living-room-2-05.jpeg",
        "living-room-2-06.jpeg"
      ],
      [
        "living-room-2-07.jpeg"
      ]
    ]
  },
  {
    "id": "full-kitchen",
    "title": "Full kitchen",
    "amenities": "Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery",
    "rows": [
      [
        "full-kitchen-01.jpeg",
        "full-kitchen-02.jpeg"
      ]
    ]
  },
  {
    "id": "bedroom",
    "title": "Bedroom",
    "amenities": "Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi",
    "rows": [
      [
        "bedroom-01.jpeg"
      ],
      [
        "unplaced-03.jpeg",
        "unplaced-00.jpeg"
      ],
      [
        "bedroom-01.jpeg"
      ],
      [
        "bedroom-02.jpeg",
        "bedroom-03.jpeg"
      ]
    ]
  },
  {
    "id": "full-bathroom",
    "title": "Full bathroom",
    "amenities": "Hairdryer · Hot water · Shampoo · Shower gel",
    "rows": [
      [
        "full-bathroom-01.jpeg"
      ]
    ]
  },
  {
    "id": "gym",
    "title": "Gym",
    "amenities": "Air conditioning · Gym · Exercise equipment · Ceiling fan",
    "rows": [
      [
        "gym-01.jpeg"
      ],
      [
        "gym-02.jpeg",
        "gym-03.jpeg"
      ],
      [
        "gym-04.jpeg",
        "gym-05.jpeg"
      ]
    ]
  },
  {
    "id": "exterior",
    "title": "Exterior",
    "rows": [
      [
        "exterior-01.jpeg"
      ],
      [
        "exterior-02.jpeg",
        "exterior-03.jpeg"
      ],
      [
        "exterior-04.jpeg"
      ],
      [
        "exterior-05.jpeg",
        "exterior-06.jpeg"
      ]
    ]
  },
  {
    "id": "pool",
    "title": "Pool",
    "amenities": "Pool",
    "rows": [
      [
        "pool-01.jpeg"
      ],
      [
        "pool-02.jpeg",
        "pool-03.jpeg"
      ]
    ]
  },
  {
    "id": "additional-photos",
    "title": "Additional photos",
    "rows": [
      [
        "additional-photos-01.jpeg"
      ],
      [
        "additional-photos-02.jpeg",
        "additional-photos-03.jpeg"
      ],
      [
        "additional-photos-04.jpeg"
      ],
      [
        "additional-photos-05.jpeg",
        "additional-photos-06.jpeg"
      ],
      [
        "additional-photos-07.jpeg"
      ],
      [
        "additional-photos-08.jpeg",
        "additional-photos-09.jpeg"
      ],
      [
        "additional-photos-10.jpeg"
      ]
    ]
  }
];

let counter = 0;
export const ROOMS: Room[] = SPEC.map((room) => {
  let n = 0;
  const rows = room.rows.map((row) =>
    row.map((file) => {
      n += 1;
      return {
        index: counter++,
        src: `/images/photos/${file}`,
        alt: `${room.title}, photo ${n}`,
        roomId: room.id,
        roomTitle: room.title,
      };
    }),
  );
  return { ...room, rows, thumb: rows[0][0].src };
});

export const PHOTOS: Photo[] = ROOMS.flatMap((room) => room.rows.flat());

const img = (file: string) => `/images/photos/${file}`;
export const HERO = {
  main: img("living-room-2-04.jpeg"),
  topMiddle: img("living-room-2-01.jpeg"),
  topRight: img("living-room-2-02.jpeg"),
  bottomMiddle: img("bedroom-alt.jpeg"),
  bottomRight: img("exterior-05.jpeg"),
};
