/* SUDVEE – all editable content lives here. Use plain text (no HTML tags).
   Put your own images in assets/images/ and reference them like "assets/images/hero-1.jpg". */
window.SUDVEE_CONFIG = {
  brand: {
    // name: "SUDVEE",
    logo: "images/logonbg2.png", // replace with e.g. "assets/images/logo.png"
    tagline: "images/sudh.png"
    
  },

  

  navigation: [ // "page" must match <body data-page="..."> to highlight the active link
    { label: "Home", href: "index.html", page: "home" },
    { label: "About Us", href: "about.html", page: "about" },
    { label: "Products", href: "products.html", page: "products" },
    { label: "Recipes", href: "recipes.html" }
  ],
  contactButton: { label: "Contact", href: "#contact" },
  footerLinks: [
    { label: "About Us", href: "about.html" },
    { label: "Products", href: "products.html" }
  ],

  contact: { // placeholders – replace
    email: "hello@yourdomain.com",
    phone: "+91 00000 00000",
    address: "Your Street, City, State – PIN"
  },
  social: [
    { name: "Instagram", icon: "instagram", url: "https://instagram.com/sudveepantry" },
    { name: "Facebook", icon: "facebook", url: "https://facebook.com/sudveepantry" },
    { name: "YouTube", icon: "youtube", url: "https://youtube.com/sudveepantry" }
  ],
  legal: { text: "All Rights Reserved.", developer: "Culinary Design Studio", developerUrl: "" },

  hero: {
    slideCount: 4,      // how many of the slides below are shown
    autoplay: true,
    intervalMs: 5500,
    slides: [
      { image: "images/s2.png", alt: "Heritage spices and grains"},

      { image: "images/haldi.png", alt: "Stone grinder with whole spices",},

      { image: "images/pasta.png", alt: "Clay pot of simmering curry sauce"},

      { image: "images/noodles.png", alt: "Bowl of artisanal millet noodles"}
    ]
  },

  featureBanner: {
    autoplay: true,
    intervalMs: 6000,
    slides: [
        {
            image: "images/logonbg.png",
            alt: "SUDVEE pantry",
            eyebrow: "From Farm to Jar",
            title: "Grown slowly. Ground fresh."
        },
        {
            image: "images/s2.png",
            alt: "Traditional Indian ingredients",
            eyebrow: "Pure Ingredients",
            title: "Naturally Good. Always."
        }
    ]
},

featureBanner2: {
    autoplay: true,
    intervalMs: 5000,
    slides: [
        {
            image: "images/mirchi.png",
            alt: "Fresh spices",
            eyebrow: "Our Ingredients",
            title: "Tradition in Every Jar."
        },
        {
            image: "images/pasta.jpeg",
            alt: "Artisanal pantry products",
            eyebrow: "Our Promise",
            title: "Honest. Authentic. Delicious."
        }
    ]
},

  pillars: [
    { icon: "eco", title: "Single-Origin Provenance", text: "Direct partnerships with multi-generational spice cultivators across Kerala, Karnataka & Rajasthan." },
    { icon: "grain", title: "Stone-Ground & Cold-Tempered", text: "Preserving delicate essential oils, aromas, and micronutrients without artificial machine heat." },
    { icon: "workspace_premium", title: "Zero Refined Additives", text: "Strictly zero palm oil, preservatives, MSG, synthetic flavourings, or refined white flours." }
  ],

  productButton: { label: "Enquire Now", href: "#contact" }, // a product's own "href" overrides this
  products: [ // newArrival: true → shown in the Home carousel. All items show on the Products page.


    { title: "Vegetable Noodles", category: "Noodles", tag: "Stone-Milled", size: "75g Packet", price: "₹XX",
      notes: "Wholesome grain noodles crafted for a delicious and satisfying meal.", image: "images/noodles.png", newArrival: true },

    { title: "Durum Wheat Pasta ", category: "Pasta", tag: "Stone-Milled", size: "500g Packet", price: "₹XX",
      notes: "Premium durum wheat pasta crafted for a firm texture and delicious, authentic Italian-inspired meals.", image: "images/pasta.png", newArrival: true },

    { title: "Slow-Cooked Tomato Sauce", category: "Sauce", tag: "Small-Batch", size: "350g glass jar", price: "₹XX",
      notes: "Rich, slow-cooked tomato sauce crafted for a deep, naturally sweet flavour. Perfect for pasta, pizza and everyday meals..", image: "images/tomato sauce.png", newArrival: true },
      
    { title: "Sun-Dried Millet Ramen & Curry Noodles", category: "Ancient Grains", tag: "Small Batch", size: "200g artisanal box", price: "₹220",
      notes: "Crafted with foxtail millet and Emmer khapli wheat, slow air-dried.", image: "assets/images/millet-noodles.jpg", newArrival: true },

    { title: "Kashmiri Kahwa Whole Spice Blend", category: "Botanical Infusions", tag: "Single-Estate", size: "100g heritage tin", price: "₹480",
      notes: "Pampore saffron strands, green cardamom pods, and Ceylon cinnamon.", image: "assets/images/products/kahwa.jpg", newArrival: true },

    { title: "Slow-Tempered Kokum & Coconut Simmer Sauce", category: "Slow Sauces", tag: "Zero Preservatives", size: "250ml glass bottle", price: "₹310",
      notes: "Wild Konkan kokum infused with stone-pressed coconut cream.", image: "assets/images/products/kokum-sauce.jpg", newArrival: true },

    { title: "Cold-Pressed Yellow Mustard & Fenugreek Oil", category: "Kachi Ghani Oils", tag: "First Harvest", size: "500ml amber bottle", price: "₹390",
      notes: "Rajasthan yellow mustard seeds slow-crushed in wooden churners.", image: "assets/images/products/mustard-oil.jpg", newArrival: true }
  ],

  recipeBanner: {
    image: "images/s2.png",
    alt: "SUDVEE recipes banner"
  },


  recipes: [ // add/remove recipes freely – tabs 1/2/3… are generated
    { title: "20-Minute Butter Garlic Masala Noodles with Charred Paneer", headline: "A quick weeknight masterpiece celebrating slow-ground spice warmth.",
      image: "images/haldi.png", difficulty: "Easy", prep: "10 mins", cook: "15 mins", servings: "2 Servings",
      ingredients: ["1 pack SUDVEE Sun-Dried Millet Noodles", "1.5 tsp SUDVEE Roasted Garam Masala", "150g fresh paneer, cubed and seared", "4 cloves garlic, minced fine"] },
    
    { title: "Slow-Simmered Malabar Kokum Curry with Crispy Curry Leaves", headline: "Velvety coastal curry with tart kokum and fragrant mustard tempering.",
      image: "images/haldi.png", difficulty: "Medium", prep: "15 mins", cook: "35 mins", servings: "3-4 Servings",
      ingredients: ["1 bottle SUDVEE Kokum & Coconut Simmer Sauce", "250g seasonal vegetables or firm tofu", "1 tbsp SUDVEE Cold-Pressed Mustard Oil", "1 sprig fresh curry leaves"] },
   
    { title: "Golden Saffron & Cardamom Spiced Rice Bowls", headline: "Fragrant heritage grains infused with genuine Pampore saffron.",
      image: "images/haldi.png", difficulty: "Easy", prep: "10 mins", cook: "20 mins", servings: "2 Servings",
      ingredients: ["1 pinch Kashmiri saffron strands", "4 pods whole green cardamom (cracked)", "1 cup aged basmati rice", "1 tbsp A2 cow ghee"] },

    { title: "Golden Saffron & Cardamom Spiced Rice Bowls", headline: "Fragrant heritage grains infused with genuine Pampore saffron.",
      image: "images/haldi.png", difficulty: "Easy", prep: "10 mins", cook: "20 mins", servings: "2 Servings",
      ingredients: ["1 pinch Kashmiri saffron strands", "4 pods whole green cardamom (cracked)", "1 cup aged basmati rice", "1 tbsp A2 cow ghee"] },


    { title: "20-Minute Butter Garlic Masala Noodles with Charred Paneer", headline: "A quick weeknight masterpiece celebrating slow-ground spice warmth.",
      image: "images/haldi.png", difficulty: "Easy", prep: "10 mins", cook: "15 mins", servings: "2 Servings",
      ingredients: ["1 pack SUDVEE Sun-Dried Millet Noodles", "1.5 tsp SUDVEE Roasted Garam Masala", "150g fresh paneer, cubed and seared", "4 cloves garlic, minced fine"] },


    { title: "20-Minute Butter Garlic Masala Noodles with Charred Paneer", headline: "A quick weeknight masterpiece celebrating slow-ground spice warmth.",
      image: "images/haldi.png", difficulty: "Easy", prep: "10 mins", cook: "15 mins", servings: "2 Servings",
      ingredients: ["1 pack SUDVEE Sun-Dried Millet Noodles", "1.5 tsp SUDVEE Roasted Garam Masala", "150g fresh paneer, cubed and seared", "4 cloves garlic, minced fine"] },



    { title: "20-Minute Butter Garlic Masala Noodles with Charred Paneer", headline: "A quick weeknight masterpiece celebrating slow-ground spice warmth.",
      image: "images/haldi.png", difficulty: "Easy", prep: "10 mins", cook: "15 mins", servings: "2 Servings",
      ingredients: ["1 pack SUDVEE Sun-Dried Millet Noodles", "1.5 tsp SUDVEE Roasted Garam Masala", "150g fresh paneer, cubed and seared", "4 cloves garlic, minced fine"] },


    { title: "20-Minute Butter Garlic Masala Noodles with Charred Paneer", headline: "A quick weeknight masterpiece celebrating slow-ground spice warmth.",
      image: "images/haldi.png", difficulty: "Easy", prep: "10 mins", cook: "15 mins", servings: "2 Servings",
      ingredients: ["1 pack SUDVEE Sun-Dried Millet Noodles", "1.5 tsp SUDVEE Roasted Garam Masala", "150g fresh paneer, cubed and seared", "4 cloves garlic, minced fine"] },
  ]
};
