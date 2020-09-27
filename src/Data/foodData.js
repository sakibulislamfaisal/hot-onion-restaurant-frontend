const foods = [
  {
    id: 101,
    title: "Healthy Meal Plan",
    subtitle: "How we dream about our future",
    price: 9.99,
    category: "lunch",
    description: "It is delicious food.We hope you can enjoy this food",
    img:
      "https://res.cloudinary.com/dtuj2anbo/image/upload/v1587577085/lunch1_sjspys.png",
  },
  {
    id: 102,
    title: "Fried Chicken Bento",
    subtitle: "How we dream about our future",
    price: 12.99,
    category: "lunch",
    description: "It is delicious food.We hope you can enjoy this food",
    img:
      "https://res.cloudinary.com/dtuj2anbo/image/upload/v1587616040/lunch2_baxtsc.png",
  },
  {
    id: 103,
    title: "Trragon-Rubbed-Salmon",
    subtitle: "How we dream about our future",
    price: 23.99,
    category: "lunch",
    description: "It is delicious food.We hope you can enjoy this food",
    img:
      "https://res.cloudinary.com/dtuj2anbo/image/upload/v1587616040/lunch3_xm1qv0.png",
  },
  {
    id: 104,
    title: "Indian Lunch",
    subtitle: "How we dream about our future",
    price: 15.99,
    category: "lunch",
    description: "It is delicious food.We hope you can enjoy this food",
    img:
      "https://res.cloudinary.com/dtuj2anbo/image/upload/v1587616041/lunch4_nwgfw8.png",
  },
  {
    id: 105,
    title: "Beaf Steak",
    subtitle: "How we dream about our future",
    price: 7.99,
    category: "lunch",
    description: "It is delicious food.We hope you can enjoy this food",
    img:
      "https://res.cloudinary.com/dtuj2anbo/image/upload/v1587616041/lunch5_iphkr2.png",
  },
  {
    id: 106,
    title: "Honey Soy Salmon",
    subtitle: "How we dream about our future",
    price: 19.99,
    category: "lunch",
    description: "It is delicious food.We hope you can enjoy this food",
    img:
      "https://res.cloudinary.com/dtuj2anbo/image/upload/v1587616038/lunch6_eytzqm.png",
  },
  {
    id: 201,
    title: "Salmon with Grapefruits",
    subtitle: "How we dream about our future",
    price: 9.99,
    category: "dinner",
    description: "It is delicious food.We hope you can enjoy this food",
    img:
      "https://res.cloudinary.com/dtuj2anbo/image/upload/v1587616268/dinner1_r492es.png",
  },
  {
    id: 202,
    title: "Lemony Salmon",
    subtitle: "How we dream about our future",
    price: 12.99,
    category: "dinner",
    description: "It is delicious food.We hope you can enjoy this food",
    img:
      "https://res.cloudinary.com/dtuj2anbo/image/upload/v1587616268/dinner2_zvzrvg.png",
  },
  {
    id: 203,
    title: "Pork Tenderiain",
    subtitle: "How we dream about our future",
    price: 23.99,
    category: "dinner",
    description: "It is delicious food.We hope you can enjoy this food",
    img:
      "https://res.cloudinary.com/dtuj2anbo/image/upload/v1587616265/dinner3_wfy3uf.png",
  },
  {
    id: 204,
    title: "Baked Chicken",
    subtitle: "How we dream about our future",
    price: 15.99,
    category: "dinner",
    description: "It is delicious food.We hope you can enjoy this food",
    img:
      "https://res.cloudinary.com/dtuj2anbo/image/upload/v1587616277/dinner4_iitcjp.png",
  },
  {
    id: 205,
    title: "Curlic Butter baked salmon",
    subtitle: "How we dream about our future",
    price: 7.99,
    category: "dinner",
    description: "It is delicious food.We hope you can enjoy this food",
    img:
      "https://res.cloudinary.com/dtuj2anbo/image/upload/v1587616269/dinner5_szk1tz.png",
  },
  {
    id: 206,
    title: "French fries with cheese",
    subtitle: "How we dream about our future",
    price: 27.99,
    category: "dinner",
    description: "It is delicious food.We hope you can enjoy this food",
    img:
      "https://res.cloudinary.com/dtuj2anbo/image/upload/v1587616265/dinner6_dfxdgt.png",
  },
  {
    id: 301,
    title: "Bagel and cream cheese",
    subtitle: "How we dream about our future",
    price: 9.99,
    category: "breakfast",
    description: "It is delicious food.We hope you can enjoy this food",
    img:
      "https://res.cloudinary.com/dtuj2anbo/image/upload/v1587616422/breakfast1_gzmwkz.png",
  },
  {
    id: 302,
    title: "Breakfast sandwich",
    subtitle: "How we dream about our future",
    price: 12.99,
    category: "breakfast",
    description: "It is delicious food.We hope you can enjoy this food",
    img:
      "https://res.cloudinary.com/dtuj2anbo/image/upload/v1587616424/breakfast2_hmn59p.png",
  },
  {
    id: 303,
    title: "Baked chicken",
    subtitle: "How we dream about our future",
    price: 23.99,
    category: "breakfast",
    description: "It is delicious food.We hope you can enjoy this food",
    img:
      "https://res.cloudinary.com/dtuj2anbo/image/upload/v1587616420/breakfast3_okdxvl.png",
  },
  {
    id: 304,
    title: "Eggs benedict",
    subtitle: "How we dream about our future",
    price: 15.99,
    category: "breakfast",
    description: "It is delicious food.We hope you can enjoy this food",
    img:
      "https://res.cloudinary.com/dtuj2anbo/image/upload/v1587616420/breakfast4_pud9ef.png",
  },
  {
    id: 305,
    title: "Toast fried Egg Butter",
    subtitle: "How we dream about our future",
    price: 8.99,
    category: "breakfast",
    description: "It is delicious food.We hope you can enjoy this food",
    img:
      "https://res.cloudinary.com/dtuj2anbo/image/upload/v1587616421/breakfast5_ped42e.png",
  },
  {
    id: 306,
    title: "Full breakfast egg toast",
    subtitle: "How we dream about our future",
    price: 18.99,
    category: "breakfast",
    description: "It is delicious food.We hope you can enjoy this food",
    img:
      "https://res.cloudinary.com/dtuj2anbo/image/upload/v1587616421/breakfast6_nyrquo.png",
  },
];

const chooseData = [
  {
    id: 401,
    title: "Fast Delivery",
    description:
      "Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future",
    img:
      "https://res.cloudinary.com/dtuj2anbo/image/upload/v1587616577/adult-blur-blurred-background-687824_fqw6ic.png",
    icon:
      "https://res.cloudinary.com/dtuj2anbo/image/upload/v1587616644/Group_245_oqdxto.png",
  },
  {
    id: 402,
    title: "A Good Auto Responder",
    description:
      "Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future",
    img:
      "https://res.cloudinary.com/dtuj2anbo/image/upload/v1587616578/chef-cook-food-33614_aklvbh.png",
    icon:
      "https://res.cloudinary.com/dtuj2anbo/image/upload/v1587616644/Group_1133_sv3v7p.png",
  },
  {
    id: 403,
    title: "Home Delivery",
    description:
      "Keep your system om sync with automated web hook based notification each time link is paid and how we dream about our future",
    img:
      "https://res.cloudinary.com/dtuj2anbo/image/upload/v1587616577/architecture-building-city-2047397_kyphws.png",
    icon:
      "https://res.cloudinary.com/dtuj2anbo/image/upload/v1587616644/Group_204_oavbnp.png",
  },
];
export { chooseData };
export default foods;
