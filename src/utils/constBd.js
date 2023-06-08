const restaurants = [
  {
    idRestaurant: "burgerKing",
    nameRestaurant: "Burger King",
    product: [
      {
        "idProduct": 1,
        "title": "Чизбургер",
        "price": 45.95,
        "description": "Мясная котлета, салат Айсберг, Шеф-соус, помидоры, корнишоны, сыр Чеддер, соус Барбекю",
        "image": "img/burger_king/cheeseburger.jpg",
      },
      {
        "idProduct": 2,
        "title": "Буррито с курицей",
        "price": 79.99,
        "description": "Сыр, помидор, цыпленок, перец сладкий, лук, салат, яичный блинчик, соус сырный, тортилья, кетчуп",
        "image": "img/burger_king/burrito.jpg",
      },
      {
        "idProduct": 3,
        "title": "Эби удон",
        "price": 65.85,
        "description": "Японский супчик на мисном бульоне с добавлением яйца, тигровой креветки, лапши, шампиньонов и зеленого лучка.",
        "image": "img/burger_king/udon.jpg",
      },
      {
        "idProduct": 4,
        "title": "Пицца Римская",
        "price": 107.50,
        "description": "30 см. Корнишоны, томатный соус, колбаса, красный лучок, сыр моцарелла, помидоры Черри, зелень.",
        "image": "img/burger_king/rome.jpg",
      },
      {
        "idProduct": 5,
        "title": "Комбо 3 пиццы",
        "price": 229.85,
        "description": "Пепперони, Чикен Барбекю, Капричеза",
        "image": "img/burger_king/combo.jpg",
      },
      {
        "idProduct": 6,
        "title": "Пицца Фьюжн",
        "price": 99.99,
        "description": "Сыр моцарелла, соус томатный, курица, пепперони, перец болгарский, томаты, лук красный, соус бургер, лук зеленый",
        "image": "img/burger_king/fusion.jpg",
      },
    ],
  },
  {
    idRestaurant: "bestSushi",
    nameRestaurant: "Best Sushi",
    product: [
      {
        "idProduct": 7,
        "title": "ФИЛАДЕЛЬФИЯ НИСУАЗ",
        "price": 120.00,
        "description": "Угорь, авокадо, сыр, тобико, соус «Нисуаз», кунжут, 6 шт.",
        "image": "img/best_sushi/nisuaz.jpg",
      },
      {
        "idProduct": 8,
        "title": "ФИЛАДЕЛЬФИЯ СМОУК",
        "price": 115.00,
        "description": "Лосось копченый, курица копченая, омлет, огурец, авокадо, сыр, микс соусов, 6 шт.",
        "image": "img/best_sushi/smoke.jpg",
      },
      {
        "idProduct": 9,
        "title": "ФИЛАДЕЛЬФИЯ ФРЕШ",
        "price": 130.00,
        "description": "Лосось, авокадо, огурец, сыр, омлет, тобико, микс соусов",
        "image": "img/best_sushi/fresh.jpg",
      },
      {
        "idProduct": 10,
        "title": "КАЛИФОРНИЯ АЖИ",
        "price": 100.00,
        "description": "Лосось, авокадо, краб-микс, сыр, соус «Ажи-маракуйя», тобико, кунжут, 6 шт.",
        "image": "img/best_sushi/azhi.jpg",
      },
      {
        "idProduct": 11,
        "title": "КАЛИФОРНИЯ БЛЭК",
        "price": 110.00,
        "description": "Креветка, краб-микс, сыр, тобико, микс соусов, кунжут, 6 шт.",
        "image": "img/best_sushi/black.jpg",
      },
      {
        "idProduct": 12,
        "title": "ТАНУКИ",
        "price": 135.00,
        "description": "Креветка, снежный краб, гуакамоле, сыр, огурец, микс соусов, тобико, кунжут, 6 шт.",
        "image": "img/best_sushi/tanuki.jpg",
      },
    ],
  },
  {
    idRestaurant: "pizzeriaItalia",
    nameRestaurant: "Pizzeria Italia",
    product: [
      {
        "idProduct": 13,
        "title": "Маргарита",
        "price": 150.00,
        "description": "Пицца, соус, сыр Моцарелла, томат, куриное филе, пепперони, свинина, бекон",
        "image": "img/pizzeria_italia/margarita.jpg",
      },
      {
        "idProduct": 14,
        "title": "Мясная",
        "price": 170.00,
        "description": "Пицца, соус, сыр Моцарелла, томат, куриное филе, пепперони, свинина, бекон",
        "image": "img/pizzeria_italia/meet.jpg",
      },
      {
        "idProduct": 15,
        "title": "Семь сыров",
        "price": 130.00,
        "description": "Сыр моцарелла, сыр эмменталь, соус сырный, сыр горгондзола, сыр чеддер, сыр креметте, сыр фетакса, сыр пармезан",
        "image": "img/pizzeria_italia/seven-cheeses.jpg",
      },
      {
        "idProduct": 16,
        "title": "Пепперони",
        "price": 140.00,
        "description": "Пицца соус, пепперони, сыр Моцарелла",
        "image": "img/pizzeria_italia/pepperoni.jpg",
      },
      {
        "idProduct": 17,
        "title": "Том Ям",
        "price": 180.00,
        "description": "Креветки, куриное филе, соус Том Ям, сыр Моцарелла, шампиньоны, капуста брокколи, томат.",
        "image": "img/pizzeria_italia/tom-yam.jpg",
      },
      {
        "idProduct": 18,
        "title": "Норвежская",
        "price": 170.00,
        "description": "Сливочный соус, соус манго-чили, сыр моцарелла, лук красный, перец болгарский, ломтики лосося, салат Айсберг",
        "image": "img/pizzeria_italia/norwegian.jpg",
      },
    ],
  },
  {
    idRestaurant: "pizzaCelentano",
    nameRestaurant: "Pizza Celentano",
    product: [
      {
        "idProduct": 19,
        "title": "Пицца от Шеф-повара",
        "price": 140.00,
        "description": "Сыр моцарелла, помидоры, салями, бекон, сыр пармезан, зелень, ветчина",
        "image": "img/pizza_celentano/pizza-chef.jpg",
      },
      {
        "idProduct": 20,
        "title": "Пицца Мясное ассорти",
        "price": 155.00,
        "description": "Сыр моцарелла, фирменный соус, помидоры, куриная грудка, бекон, свинина, говядина, зелень",
        "image": "img/pizza_celentano/pizza-meat.jpg",
      },
      {
        "idProduct": 21,
        "title": "Пицца Деревенская",
        "price": 145.00,
        "description": "Сыр моцарелла, пицца соус, чеснок, сыр пармезан, шампиньоны, помидоры, зелень, лук, курица, бекон, ветчина, пепперони",
        "image": "img/pizza_celentano/pizza-village.jpg",
      },
      {
        "idProduct": 22,
        "title": "Пицца Цезарь",
        "price": 150.00,
        "description": "Соус Цезарь, куриная грудка, сыр пармезан, моцарелла, гренки, помидоры, салат айсберг",
        "image": "img/pizza_celentano/pizza-caesar.jpg",
      },
      {
        "idProduct": 23,
        "title": "Пицца Пепперони",
        "price": 175.00,
        "description": "Сыр моцарелла, пицца соус, шампиньоны, пепперони",
        "image": "img/pizza_celentano/pizza-pepperoni.jpg",
      },
      {
        "idProduct": 24,
        "title": "Пицца Дачная",
        "price": 160.00,
        "description": "Сыр моцарелла, пицца соус, бекон, картофель фри, куриная грудка, помидоры, пепперони, ветчина, зелень",
        "image": "img/pizza_celentano/pizza-dacha.jpg",
      },
    ],
  },
  {
    idRestaurant: "pizzaPlus",
    nameRestaurant: "Pizza Plus",
    product: [
      {
        "idProduct": 25,
        "title": "Пицца Везувий",
        "price": 130.00,
        "description": "Соус томатный, сыр «Моцарелла», ветчина, пепперони, перец «Халапенье», соус «Тобаско», томаты.",
        "image": "img/pizza_plus/pizza-vesuvius.jpg",
      },
      {
        "idProduct": 26,
        "title": "Пицца Девичник",
        "price": 120.00,
        "description": "Соус томатный, постное тесто, нежирный сыр, кукуруза, лук, маслины, грибы, помидоры, болгарский перец.",
        "image": "img/pizza_plus/pizza-girls.jpg",
      },
      {
        "idProduct": 27,
        "title": "Пицца Оле-Оле",
        "price": 125.00,
        "description": "Соус томатный, сыр «Моцарелла», черри, маслины, зелень, майонез",
        "image": "img/pizza_plus/pizza-oleole.jpg",
      },
      {
        "idProduct": 28,
        "title": "Пицца Плюс",
        "price": 135.00,
        "description": "Соус томатный, сыр «Моцарелла», сыр «Чеддер», томаты, пепперони, телятина, грибы, бекон, болгарский перец.",
        "image": "img/pizza_plus/pizza-plus.jpg",
      },
      {
        "idProduct": 29,
        "title": "Пицца Гавайская",
        "price": 140.00,
        "description": "Соус томатный, сыр «Моцарелла», ветчина, ананасы",
        "image": "img/pizza_plus/pizza-hawaiian.jpg",
      },
      {
        "idProduct": 30,
        "title": "Пицца Классика",
        "price": 130.00,
        "description": "Соус томатный, сыр «Моцарелла», сыр «Пармезан», ветчина, салями, грибы.",
        "image": "img/pizza_plus/pizza-classic.jpg",
      },
    ],
  },
  {
    idRestaurant: "ukrainianFood",
    nameRestaurant: "Ukrainian Food",
    product: [
      {
        "idProduct": 31,
        "title": "Вареники с картошкой",
        "price": 50.00,
        "description": "Ручная лепка вареников из пушистого теста на домашних желтках и сметане",
        "image": "img/ukrainian_food/dumplings.jpg",
      },
      {
        "idProduct": 32,
        "title": "Плов",
        "price": 45.00,
        "description": "Плов на углях из украинского риса с бараниной, пряностями и овощами на курдючном жире",
        "image": "img/ukrainian_food/plov.jpg",
      },
      {
        "idProduct": 33,
        "title": "Цыпленок на вертеле",
        "price": 150.00,
        "description": "Подается на лаваше со свежим томатом и огурцом, с маринованным луком и с шашлычным соусом",
        "image": "img/ukrainian_food/chick.jpg",
      },
      {
        "idProduct": 34,
        "title": "Куринный суп с макаронами",
        "price": 40.00,
        "description": "Куриная тушка, морковь, макароны, зелень, яйцо, соль, специи.",
        "image": "img/ukrainian_food/chicken-soup.jpg",
      },
      {
        "idProduct": 35,
        "title": "Отбивная из поросенка",
        "price": 70.00,
        "description": "Толстый кусок парной свинины с томатами и грибами под сырной корочкой",
        "image": "img/ukrainian_food/pig-chop.jpg",
      },
      {
        "idProduct": 36,
        "title": "Теленок в сливочном соусе",
        "price": 150.00,
        "description": "Теленок с шампиньонами и луком обжаривается в сливочно-сметанном соусе с картофельным пюре и солеными огурчиками.",
        "image": "img/ukrainian_food/calf-sauce.jpg",
      },
      {
        "idProduct": 37,
        "title": "Судак запеченный",
        "price": 140.00,
        "description": "Филе судака с картошкой, домашней сметаной, травами и луком",
        "image": "img/ukrainian_food/zander.jpg",
      },
      {
        "idProduct": 38,
        "title": "Фаршированые кальмары на мангале",
        "price": 130.00,
        "description": "Кальмары на мангале фаршированые с чесночным маслом",
        "image": "img/ukrainian_food/squid.jpg",
      },
      {
        "idProduct": 39,
        "title": "Уха по украински",
        "price": 100.00,
        "description": "Наваристая уха на четырех видах рыб, лаврушка, перец, лук",
        "image": "img/ukrainian_food/ear.jpg",
      },
    ],
  }
];

export default restaurants;
