const static_data = [
  {
    title: "Electronics",
    description: "Gadgets and tech accessories",
    sub_category: [
      {
        sub_title: "Handphone",
        description: "Smartphones from various brands with different features.",
        items: [
          {
            id: 1,
            name: "Samsung A5",
            price: 2000000,
            category: "Electronics",
            sub_category: "Handphone",
            status: "bekas",
            location: "Los Santos Street 12",
            link_gmap: "https://maps.example.com/handphone1",
            seller: "John Doe",
            description: "A decent mid-range phone with good battery life.",
          },
          {
            id: 2,
            name: "iPhone 11",
            price: 7500000,
            category: "Electronics",
            sub_category: "Handphone",
            status: "bekas",
            location: "Grove Street 24",
            link_gmap: "https://maps.example.com/handphone2",
            seller: "Jane Smith",
            description: "Popular Apple phone with great camera features.",
          },
          {
            id: 3,
            name: "Xiaomi Redmi Note 10",
            price: 3000000,
            category: "Electronics",
            sub_category: "Handphone",
            status: "bekas",
            location: "Idlewood Avenue 44",
            link_gmap: "https://maps.example.com/handphone3",
            seller: "Mike Ross",
            description: "Budget-friendly phone with AMOLED display.",
          },
          {
            id: 4,
            name: "Xiaomi Redmi Note 10",
            price: 3000000,
            category: "Electronics",
            sub_category: "Handphone",
            status: "bekas",
            location: "Idlewood Avenue 44",
            link_gmap: "https://maps.example.com/handphone3",
            seller: "Mike Ross",
            description: "Budget-friendly phone with AMOLED display.",
          },
          {
            id: 5,
            name: "Xiaomi Redmi Note 10",
            price: 3000000,
            category: "Electronics",
            sub_category: "Handphone",
            status: "bekas",
            location: "Idlewood Avenue 44",
            link_gmap: "https://maps.example.com/handphone3",
            seller: "Mike Ross",
            description: "Budget-friendly phone with AMOLED display.",
          },
          // ...add more to reach 10–20 if you like
        ],
      },
      {
        sub_title: "Laptop",
        description: "Portable computers for work, gaming, and creativity.",
        items: [
          {
            id: 6,
            name: "MacBook Air M1",
            price: 14000000,
            location: "Downtown LS",
            link_gmap: "https://maps.example.com/laptop1",
            seller: "Alice Johnson",
            description: "Lightweight and powerful laptop for daily use.",
          },
          {
            id: 7,
            name: "Asus ROG Zephyrus",
            price: 19000000,
            location: "Vinewood Hills 55",
            link_gmap: "https://maps.example.com/laptop2",
            seller: "Bob Brown",
            description: "Gaming laptop with RTX GPU and fast refresh rate.",
          },
          // Add more if needed
        ],
      },
      {
        sub_title: "Tablet",
        description: "Handy devices for media, reading, and light work.",
        items: [
          {
            id: 8,
            name: "iPad Air",
            price: 9000000,
            location: "Vinewood Blvd 3",
            link_gmap: "https://maps.example.com/tablet1",
            seller: "Chris Redfield",
            description: "Perfect for entertainment and productivity.",
          },
          {
            id: 9,
            name: "Samsung Galaxy Tab S6",
            price: 8000000,
            location: "Palomino Street 22",
            link_gmap: "https://maps.example.com/tablet2",
            seller: "Claire Redfield",
            description: "High-performance tablet with stylus support.",
          },
        ],
      },
    ],
  },
  {
    title: "Home Appliances",
    description: "Home Furniture and properties",
    sub_category: [
      {
        sub_title: "Refrigerator",
        description: "Cooling appliances for food and drinks.",
        items: [
          {
            name: "LG Double Door",
            price: 3500000,
            location: "East LS",
            link_gmap: "https://maps.example.com/fridge1",
            seller: "Tom Hardy",
            description: "Energy-efficient refrigerator with spacious storage.",
          },
          {
            name: "Samsung Smart Fridge",
            price: 8000000,
            location: "San Andreas Ave 66",
            link_gmap: "https://maps.example.com/fridge2",
            seller: "Anna Belle",
            description: "Smart fridge with touchscreen and WiFi.",
          },
        ],
      },
      {
        sub_title: "Washing Machine",
        description: "Machines for cleaning clothes efficiently.",
        items: [
          {
            name: "Panasonic Top Load",
            price: 2000000,
            location: "Jefferson Lane",
            link_gmap: "https://maps.example.com/wm1",
            seller: "Linda Holmes",
            description: "Automatic washing machine with child lock.",
          },
          {
            name: "LG Front Load",
            price: 4500000,
            location: "Ganton Circle",
            link_gmap: "https://maps.example.com/wm2",
            seller: "David Tennant",
            description: "Quiet operation and quick wash cycle.",
          },
        ],
      },
      {
        sub_title: "Microwave",
        description: "Kitchen appliance for heating and cooking food quickly.",
        items: [
          {
            name: "Sharp Microwave",
            price: 900000,
            location: "El Corona Ave",
            link_gmap: "https://maps.example.com/mw1",
            seller: "Martha Wayne",
            description: "Reliable and compact for any kitchen.",
          },
          {
            name: "Panasonic Inverter",
            price: 1500000,
            location: "Little Seoul Street",
            link_gmap: "https://maps.example.com/mw2",
            seller: "Bruce Wayne",
            description: "Inverter tech for even heating.",
          },
        ],
      },
    ],
  },
  {
    title: "Beauty",
    description: "Skincare, makeup, and personal care",
    sub_category: [],
  },
  {
    title: "Sports",
    description: "Equipment and athletic wear",
    sub_category: [],
  },
  {
    title: "Books & Media",
    description: "Literature, music, and entertainment",
    sub_category: [],
  },
  {
    title: "Home & Living",
    description: "Furniture, decor, and essentials",
    sub_category: [],
  },
];

let itemId = 1;

static_data.forEach((category) => {
  category.sub_category.forEach((sub) => {
    sub.items.forEach((item) => {
      item.id = itemId++;
    });
  });
});

export default static_data;
