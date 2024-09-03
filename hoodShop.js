"use strict"
const productWrapper = document.querySelector('.product-wrapper'),
productContainer = document.querySelector('.product-container'),
addBtn = document.querySelector('.add-btn'),
productInput = document.querySelector('.product-input'),
findBtn = document.querySelector('.find-btn'),
searchWrapper = document.querySelector('.search-wrapper'),
headerWrapper = document.querySelector('.header-wrapper'),
cartBtn = document.querySelector('.cart-btn'),
quantityInput = document.querySelector('.quantity-input'),
quantityInput1 = document.querySelector('.quantity-input1'),
quantityInput2 = document.querySelector('.quantity-input2'),
quantityInput3 = document.querySelector('.quantity-input3'),
quantityInput4 = document.querySelector('.quantity-input4'),
quantityInput5 = document.querySelector('.quantity-input5'),
quantityInput6 = document.querySelector('.quantity-input6'),
quantityInput7 = document.querySelector('.quantity-input7'),
quantityInput8 = document.querySelector('.quantity-input8'),
quantityInput9 = document.querySelector('.quantity-input9'),
quantityInput10 = document.querySelector('.quantity-input10'),
quantityInput11 = document.querySelector('.quantity-input11'),
quantityInput12 = document.querySelector('.quantity-input12'),
quantityInput13 = document.querySelector('.quantity-input13'),
quantityInput14 = document.querySelector('.quantity-input14'),
quantityInput15 = document.querySelector('.quantity-input15'),
quantityInput16 = document.querySelector('.quantity-input16'),
quantityInput17 = document.querySelector('.quantity-input17'),
quantityInput18 = document.querySelector('.quantity-input18'),
quantityInput19 = document.querySelector('.quantity-input19'),
quantityInput20 = document.querySelector('.quantity-input20'),
quantityInput21 = document.querySelector('.quantity-input21'),
quantityInput22 = document.querySelector('.quantity-input22'),
quantityInput23 = document.querySelector('.quantity-input23'),
quantityInput24 = document.querySelector('.quantity-input24'),
quantityInput25 = document.querySelector('.quantity-input25'),
quantityInput26 = document.querySelector('.quantity-input26'),
quantityInput27 = document.querySelector('.quantity-input27'),
quantityInput28 = document.querySelector('.quantity-input28'),
quantityInput29 = document.querySelector('.quantity-input29'),
quantityInput30 = document.querySelector('.quantity-input30'),
quantityInput31 = document.querySelector('.quantity-input31'),
quantityInput32 = document.querySelector('.quantity-input32'),
quantityInput33 = document.querySelector('.quantity-input33'),
quantityInput34 = document.querySelector('.quantity-input34'),
quantityInput35 = document.querySelector('.quantity-input35'),
quantityInput36 = document.querySelector('.quantity-input36'),
quantityInput37 = document.querySelector('.quantity-input37'),
quantityInput38 = document.querySelector('.quantity-input38'),
quantityInput39 = document.querySelector('.quantity-input39'),
quantityInput40 = document.querySelector('.quantity-input40'),
quantityInput41 = document.querySelector('.quantity-input41'),
quantityInput42 = document.querySelector('.quantity-input42'),
quantityInput43 = document.querySelector('.quantity-input43'),
quantityInput44 = document.querySelector('.quantity-input44'),
quantityInput45 = document.querySelector('.quantity-input45'),
quantityInput46 = document.querySelector('.quantity-input46'),
quantityInput47 = document.querySelector('.quantity-input47'),
quantityInput48 = document.querySelector('.quantity-input48'),
quantityInput49 = document.querySelector('.quantity-input49'),
quantityInput50 = document.querySelector('.quantity-input50'),
quantityInput51 = document.querySelector('.quantity-input51'),
quantityInput52 = document.querySelector('.quantity-input52'),
quantityInput53 = document.querySelector('.quantity-input53'),
quantityInput54 = document.querySelector('.quantity-input54'),
quantityInput55 = document.querySelector('.quantity-input55'),
quantityInput56 = document.querySelector('.quantity-input56'),
quantityInput57 = document.querySelector('.quantity-input57'),
quantityInput58 = document.querySelector('.quantity-input58'),
quantityInput59 = document.querySelector('.quantity-input59'),
quantityInput60 = document.querySelector('.quantity-input60'),
quantityInput61 = document.querySelector('.quantity-input61'),
quantityInput62 = document.querySelector('.quantity-input62'),
quantityInput63 = document.querySelector('.quantity-input63'),
quantityInput64 = document.querySelector('.quantity-input64'),
quantityInput65 = document.querySelector('.quantity-input65'),
quantityInput66 = document.querySelector('.quantity-input66'),
quantityInput67 = document.querySelector('.quantity-input67'),
quantityInput68 = document.querySelector('.quantity-input68'),
quantityInput69 = document.querySelector('.quantity-input69'),
quantityInput70 = document.querySelector('.quantity-input70'),
quantityInput71 = document.querySelector('.quantity-input71'),
quantityInput72 = document.querySelector('.quantity-input72'),
quantityInput73 = document.querySelector('.quantity-input73'),
quantityInput74 = document.querySelector('.quantity-input74'),
quantityInput75 = document.querySelector('.quantity-input75'),
quantityInput76 = document.querySelector('.quantity-input76'),
quantityInput77 = document.querySelector('.quantity-input77'),
quantityInput78 = document.querySelector('.quantity-input78'),
quantityInput79 = document.querySelector('.quantity-input79'),
quantityInput80 = document.querySelector('.quantity-input80'),
quantityInput81 = document.querySelector('.quantity-input81'),
quantityInput82 = document.querySelector('.quantity-input82'),
quantityInput83 = document.querySelector('.quantity-input83'),
quantityInput84 = document.querySelector('.quantity-input84'),
quantityInput85 = document.querySelector('.quantity-input85'),
quantityInput86 = document.querySelector('.quantity-input86'),
quantityInput87 = document.querySelector('.quantity-input87'),
quantityInput88 = document.querySelector('.quantity-input88'),
quantityInput89 = document.querySelector('.quantity-input89'),
quantityInput90 = document.querySelector('.quantity-input90'),
quantityInput91 = document.querySelector('.quantity-input91'),
quantityInput92 = document.querySelector('.quantity-input92'),
quantityInput93 = document.querySelector('.quantity-input93'),
quantityInput94 = document.querySelector('.quantity-input94'),
quantityInput95 = document.querySelector('.quantity-input95'),
quantityInput96 = document.querySelector('.quantity-input96'),
quantityInput97 = document.querySelector('.quantity-input97'),
quantityInput98 = document.querySelector('.quantity-input98'),
quantityInput99 = document.querySelector('.quantity-input99'),
quantityInput100 = document.querySelector('.quantity-input100'),
quantityInput101 = document.querySelector('.quantity-input101'),
quantityInput102 = document.querySelector('.quantity-input102'),
quantityInput103 = document.querySelector('.quantity-input103'),
quantityInput104 = document.querySelector('.quantity-input104'),
quantityInput105 = document.querySelector('.quantity-input105'),
quantityInput106 = document.querySelector('.quantity-input106'),
quantityInput107 = document.querySelector('.quantity-input107'),
quantityInput108 = document.querySelector('.quantity-input108'),
quantityInput109 = document.querySelector('.quantity-input109'),
quantityInput110 = document.querySelector('.quantity-input110'),
quantityInput111 = document.querySelector('.quantity-input111'),
quantityInput112 = document.querySelector('.quantity-input112'),
quantityInput113 = document.querySelector('.quantity-input113'),
quantityInput114 = document.querySelector('.quantity-input114'),
quantityInput115 = document.querySelector('.quantity-input115'),
quantityInput116 = document.querySelector('.quantity-input116'),
quantityInput117 = document.querySelector('.quantity-input117'),
quantityInput118 = document.querySelector('.quantity-input118'),
quantityInput119 = document.querySelector('.quantity-input119'),
quantityInput120 = document.querySelector('.quantity-input120'),
quantityInput121 = document.querySelector('.quantity-input121'),
quantityInput122 = document.querySelector('.quantity-input122'),
quantityInput123 = document.querySelector('.quantity-input123'),
quantityInput124 = document.querySelector('.quantity-input124'),
quantityInput125 = document.querySelector('.quantity-input125'),
quantityInput126 = document.querySelector('.quantity-input126'),
quantityInput127 = document.querySelector('.quantity-input127'),
quantityInput128 = document.querySelector('.quantity-input128'),
quantityInput129 = document.querySelector('.quantity-input129'),
quantityInput130 = document.querySelector('.quantity-input130'),
quantityInput131 = document.querySelector('.quantity-input131'),
quantityInput132 = document.querySelector('.quantity-input132'),
quantityInput133 = document.querySelector('.quantity-input133'),
quantityInput134 = document.querySelector('.quantity-input134'),
quantityInput135 = document.querySelector('.quantity-input135'),
cartWrapper = document.querySelector('.cart-wrapper'),
orderWrapper = document.querySelector('.order-wrapper'),
cartMoney = document.querySelector('.cart-money'),
cartAmount = document.querySelector('.cart-amount'),
totalText = document.querySelector('.total-text'),
orderNumber = document.querySelector('.order-number'),
orderBtn = document.querySelector('.order-btn'),
orderDetailsWrapper = document.querySelector('.order-details-wrapper'),
orderInputting = document.querySelector('.order-inputting'),
copyBtn = document.querySelector('.copy-btn');

      const products = [
        {
          productPic: "albany brown bread.jpg",
          productName: "Albany Everyday Brown Bread Loaf 700g",
          productPrice: 17
        },
        {
          productPic: "albany white.jpg",
          productName: "Albany Every Day Thick Sliced White Bread",
          productPrice: 18
        },
        {
          productPic: "baked beans.jpg",
          productName: "Ritebrand Baked Beans in Tomato Sauce Can 410g",
          productPrice: 12
        },
        {
          productPic: "blue ribbon white.jpg",
          productName: "Blue Ribbon Sliced White Bread 700g",
          productPrice: 20
        },
        {
          productPic: "brown sugar.jpg",
          productName: "Selati Golden Brown Sugar 2kg",
          productPrice: 60
        },
        {
          productPic: "fat spread brick.jpg",
          productName: "D'Lite 40% Fat Spread Brick 500g",
          productPrice: 15
        },
        {
          productPic: "large eggs.jpg",
          productName: "Nulaid Large Eggs 18 Pack",
          productPrice: 60
        },
        {
          productPic: "loose banana.jpg",
          productName: "Loose Bananas Per kg",
          productPrice: 17
        },
        {
          productPic: "macaroni.jpg",
          productName: "Mr.Pasta Macaroni Pasta 500g",
          productPrice: 16
        },
        {
          productPic: "mixed chicken portions.jpg",
          productName: "Farmer's Choice Frozen Mixed Chicken Portions with Brine Based Mixture 5kg",
          productPrice: 235
        },
        {
          productPic: "potato pack 2kg.jpg",
          productName: "Potatoes Pack 2kg",
          productPrice: 30
        },
        {
          productPic: "potato sock.jpg",
          productName: "Potatoes Sock 7kg",
          productPrice: 80
        },
        {
          productPic: "sasko low g.i white bread.jpg",
          productName: "SASKO Low G.I Dumpy Oats & Honey Flavoured White Bread 700g",
          productPrice: 24
        },
        {
          productPic: "spaghetti.jpg",
          productName: "Mr.Pasta Spaghetti Pasta 500g",
          productPrice: 16
        },
        {
          productPic: "spekko parboiled white rice.jpg",
          productName: "Spekko Long Grain Parboiled White Rice Bag 2kg",
          productPrice: 50
        },
        {
          productPic: "standard white bread.jpg",
          productName: "Standard White Bread 600g",
          productPrice: 12
        },
        {
          productPic: "sunflower seed oil 4l.jpg",
          productName: "Ritebrand Sunflower Seed Oil 4L",
          productPrice: 130
        },
        {
          productPic: "sunflower seed oil 750ml.jpg",
          productName: "Sunfoil Pure Sunflower Seed Oil 750ml",
          productPrice: 37
        },
        {
          productPic: "weet bix 450g.jpg",
          productName: "Weet-Bix Wholegrain Wheat Biscuits 450g",
          productPrice: 37
        },
        {
          productPic: "white hamburger roll.jpg",
          productName: "White Hamburger Roll",
          productPrice: 3
        },
        {
          productPic: "white maize bread.jpg",
          productName: "White Maize Bread 600g",
          productPrice: 10
        },
        {
          productPic: "white star super maize meal 5kg.jpg",
          productName: "White Star Super Maize Meal 5kg",
          productPrice: 60
        },
        {
          productPic: "amasi 2l.jpg",
          productName: "Darling Amasi Maas Bottle 2L",
          productPrice: 37
        },
        {
          productPic: "baumanns marie biscuits 150g.jpg",
          productName: "Baumann's Marie Bisquits 150g",
          productPrice: 15
        },
        {
          productPic: "beef potjiekos.jpg",
          productName: "Beef Potjiekos Per kg",
          productPrice: 100
        },
        {
          productPic: "benny chicken stock powder 17g.jpg",
          productName: "Benny Chicken Flavoured Stock Powder 17g",
          productPrice: 2
        },
        {
          productPic: "black pepper.jpg",
          productName: "Rebertsons Coarse Black Pepper Compound Envelope 7g",
          productPrice: 4
        },
        {
          productPic: "cerebos iodated sea salt 500g.jpg",
          productName: "Cerebos Iodated Sea Salt 500g",
          productPrice: 11
        },
        {
          productPic: "clover classic dairy snack 6 x 100g.jpg",
          productName: "Clover Classic Assorted Low Fat Flavoured Dairy Snack 6 x 100g",
          productPrice: 23
        },
        {
          productPic: "crisp lettuce head pack.jpg",
          productName: "Crisp Lettuce Head Pack",
          productPrice: 19
        },
        {
          productPic: "english cucumber single.jpg",
          productName: "English Cucumber Single",
          productPrice: 19
        },
        {
          productPic: "excella mayonnaise 750g.jpg",
          productName: "Excella Rich & Creamy Mayonnaise 750g",
          productPrice: 39
        },
        {
          productPic: "gouda cheese.jpg",
          productName: "Crystal Valley Gouda Flavoured Full Cream Processed Cheese Slices 9 Pack",
          productPrice: 30
        },
        {
          productPic: "hot dog roll 6 pack.jpg",
          productName: "White Hotdog Roll 6 Pack",
          productPrice: 15
        },
        {
          productPic: "huletts white sugar 2,5kg.jpg",
          productName: "Huletts White Sugar 2,5kg",
          productPrice: 64
        },
        {
          productPic: "lamington snowball.jpg",
          productName: "Pink Lamington Snowball",
          productPrice: 10
        },
        {
          productPic: "large unwrapped cabbage.jpg",
          productName: "Large Unwrapped Cabbage Single",
          productPrice: 25
        },
        {
          productPic: "Lucky Star pilchards 400g.jpg",
          productName: "Lucky Star Pilchards In Tomato Sauce Tin 400g",
          productPrice: 29
        },
        {
          productPic: "magic moments pink and white marshmallows 120g.jpg",
          productName: "Magic Moments Pink & White Marshmallows 120g",
          productPrice: 17
        },
        {
          productPic: "milk 1l.jpg",
          productName: "Crystal Valley Full Cream Long Life Milk 1L",
          productPrice: 17
        },
        {
          productPic: "nyama choma bbq spice 200g.jpg",
          productName: "Nyama Choma BBQ Spice 200g",
          productPrice: 16
        },
        {
          productPic: "rhodes tomato paste 50g.jpg",
          productName: "Rhodes Quality Tomato Paste Sachet 50g",
          productPrice: 5
        },
        {
          productPic: "ritebrand milk 6 x 1L.jpg",
          productName: "Ritebrand Long Life Full Cream Milk 6 x 1L",
          productPrice: 99
        },
        {
          productPic: "ritebrand mixed frozen vegetables 900g.jpg",
          productName: "Ritebrand Mixed Frozen Vegetables 900g",
          productPrice: 40
        },
        {
          productPic: "ritebrand smooth peanut butter 400g.jpg",
          productName: "Ritebrand Smooth Peanut Butter 400g",
          productPrice: 39
        },
        {
          productPic: "sasko brown bread loaf 700g.jpg",
          productName: "Sasko More Slices Brown Bread Loaf 700g",
          productPrice: 17
        },
        {
          productPic: "sasko wheat flour 2,5kg.jpg",
          productName: "Sasko Cake Wheat Flour Bag 2,5kg",
          productPrice: 42
        },
        {
          productPic: "wheat flour.jpg",
          productName: "Golden Cloud Cake Wheat Flour 2,5kg",
          productPrice: 43
        },
        {
          productPic: "white mushrooms 250g.jpg",
          productName: "White Mushrooms Pack 250g",
          productPrice: 20
        },
        {
          productPic: "all gold tomato sauce 700ml.jpg",
          productName: "ALL GOLD Tomato Sauce Bottle 700ml",
          productPrice: 40
        },
        {
          productPic: "avocados pack 1kg.jpg",
          productName: "Avocados Pack 1kg",
          productPrice: 25
        },
        {
          productPic: "bar one large chocolate 52g.jpg",
          productName: "Bar-One Large Chocolate 52g",
          productPrice: 14
        },
        {
          productPic: "beetroot 1kg.jpg",
          productName: "Beetroots Pack 1kg",
          productPrice: 13
        },
        {
          productPic: "blossom spread fat spread 1kg.jpg",
          productName: "Blossom Spread 25% Fat Spread 1kg",
          productPrice: 50
        },
        {
          productPic: "bokomo corn flakes 1kg.jpg",
          productName: "Bokomo Original Corn Flakes 1kg",
          productPrice: 70
        },
        {
          productPic: "cadbury crunchie chocolate 40g.jpg",
          productName: "Cadbury Crunchie Chocolate Bar 40g",
          productPrice: 14
        },
        {
          productPic: "cadbury lunch bar max 62g.jpg",
          productName: "Cadbury Lunch Bar Max Chocolate Bar 62g",
          productPrice: 17
        },
        {
          productPic: "cadbury p.s milk chocolate 48g.jpg",
          productName: "Cadbury P.S. Milk Chocolate Bar 48g",
          productPrice: 14
        },
        {
          productPic: "carrots pack 3kg.jpg",
          productName: "Carrots Pack 3kg",
          productPrice: 35
        },
        {
          productPic: "cauliflower and brocolli pack.jpg",
          productName: "Cauliflower & Brocolli Pack",
          productPrice: 30
        },
        {
          productPic: "cheas snaks cheese maize snack 135g.jpg",
          productName: "Cheas Snaks Cheese Flavoured Maize Snack 135g",
          productPrice: 15
        },
        {
          productPic: "coney roll single.jpg",
          productName: "Coney Roll Single",
          productPrice: 4
        },
        {
          productPic: "danone nutriday mixed flavoured dairy snack 6 x 100g.jpg",
          productName: "Danone NutriDay Strawberry, Banana And Mixed Fruit Flavoured Low Fat Dairy Snack 6 x 100g",
          productPrice: 23
        },
        {
          productPic: "doritos sweet chilli pepper corn chips 145g.jpg",
          productName: "Doritos Sweet Chilli Pepper Flavoured Corn Chips 145g",
          productPrice: 23
        },
        {
          productPic: "fair cape dairies chocolate dessert 125ml.jpg",
          productName: "Fair Cape Dairies Chocolate Dessert 125ml",
          productPrice: 10
        },
        {
          productPic: "fresh large french loaf 400g.jpg",
          productName: "Fresh Large French Loaf 400g",
          productPrice: 17
        },
        {
          productPic: "ghost pops the original maize snack 100g.jpg",
          productName: "Ghost Pops The Original Flavoured Maize Snack 100g",
          productPrice: 16
        },
        {
          productPic: "gold star yeast 10g.jpg",
          productName: "Gold Star Instant Yeast 10g",
          productPrice: 7
        },
        {
          productPic: "green pepper.jpg",
          productName: "Green Peppers Bag",
          productPrice: 30
        },
        {
          productPic: "heavenly chocolate slab 80g.jpg",
          productName: "Heavenly Hazel Heaven Chocolate Slab 80g",
          productPrice: 20
        },
        {
          productPic: "huletts white sugar 10kg.jpg",
          productName: "Huletts White Sugar 10kg",
          productPrice: 250
        },
        {
          productPic: "imana super stock chill beef cubes 12 pack.jpg",
          productName: "Imana Super Stock Chill Beef Flavoured Cubes 12 Pack",
          productPrice: 16
        },
        {
          productPic: "jungle Oats 1kg.jpg",
          productName: "Jungle Oats 1kg",
          productPrice: 46
        },
        {
          productPic: "kitkat 4 finger milk chocolate 41.5g.jpg",
          productName: "KitKat 4 Finger Milk Chocolate Bar 41.5g",
          productPrice: 14
        },
        {
          productPic: "knorr brown onion soup 50g.jpg",
          productName: "Knorr Brown Onion Thickening Soup 50g",
          productPrice: 8
        },
        {
          productPic: "knorrox beef flavoured stock cubes 12 x 10g.jpg",
          productName: "Knorrox Beef Flavoured Stock Cubes 12 x 10g",
          productPrice: 19
        },
        {
          productPic: "knorrox boerewors flavoured soya mince 400g.jpg",
          productName: "Knorrox Boerewors Flavoured Soya Mince 400g",
          productPrice: 33
        },
        {
          productPic: "knorrox chilli beef soya mince 400g.jpg",
          productName: "Knorrox Chilli Beef Flavoured Soya Mince 400g",
          productPrice: 33
        },
        {
          productPic: "knorrox mutton flavoured soya mince 400g.jpg",
          productName: "Knorrox Mutton Flavoured Soya Mince 400g",
          productPrice: 33
        },
        {
          productPic: "lean beef mince per kg.jpg",
          productName: "Lean Beef Mince Per kg",
          productPrice: 110
        },
        {
          productPic: "lucky star pilchards in hot chili sauce.jpg",
          productName: "Lucky Star Pilchards in Hot Chilli Sauce",
          productPrice: 29
        },
        {
          productPic: "mixed pepper.jpg",
          productName: "Mixed Peppers Bag",
          productPrice: 30
        },
        {
          productPic: "mutton pack per kg.jpg",
          productName: "Mutton Pack Per kg",
          productPrice: 110
        },
        {
          productPic: "nosh chocolate 56g.jpg",
          productName: "Nosh Chocolate Bar 56g",
          productPrice: 13
        },
        {
          productPic: "onions bag 3kg.jpg",
          productName: "Onions Bag 3kg",
          productPrice: 50
        },
        {
          productPic: "onions per kg.jpg",
          productName: "Onions Per KG",
          productPrice: 18
        },
        {
          productPic: "oreo biscuits 128g.jpg",
          productName: "OREO Original Biscuits 128g",
          productPrice: 19
        },
        {
          productPic: "padkos roasted & salted peanuts with raisins 150g.jpg",
          productName: "Padkos Roasted & Salted Peanuts & Raisins 150g",
          productPrice: 17
        },
        {
          productPic: "parmalat single cheese.jpg",
          productName: "Parmalat Single Cheese Slice",
          productPrice: 3
        },
        {
          productPic: "piemans pepper steak jumbo pie.jpg",
          productName: "PIEMAN'S Pepper Steak Jumbo Pie Jumbo",
          productPrice: 20
        },
        {
          productPic: "rajah flavourful & mild curry powder 7g.jpg",
          productName: "Rajah Flavourful & Mild Curry Powder Envelope 7g",
          productPrice: 4
        },
        {
          productPic: "rajah medium curry powder 7g.jpg",
          productName: "Rajah Medium Curry Powder Envelope 7g",
          productPrice: 4
        },
        {
          productPic: "rajah medium curry powder 50g.jpg",
          productName: "Rajah Medium Curry Powder 50g",
          productPrice: 16
        },
        {
          productPic: "rajah mild & spicy curry powder box 50g.jpg",
          productName: "Rajah Mild & Spicy Curry Powder Box 50g",
          productPrice: 16
        },
        {
          productPic: "rajah mild and spicy curry powder 7g.jpg",
          productName: "Rajah Mild & Spice Curry Powder Envelope 7g",
          productPrice: 4
        },
        {
          productPic: "ritebrand brown spirit vinegar 750ml.jpg",
          productName: "Ritebrand Brown Spirit Vinegar 750ml",
          productPrice: 14
        },
        {
          productPic: "ritebrand french polony 750g.jpg",
          productName: "Ritebrand French Polony 750g",
          productPrice: 30
        },
        {
          productPic: "robertsons chicken spice refill 84g.jpg",
          productName: "Robertsons Chicken Spice Refill 84g",
          productPrice: 20
        },
        {
          productPic: "robertsons peri peri spice 7g.jpg",
          productName: "Robertsons Peri-Peri Spice Envelope 7g",
          productPrice: 4
        },
        {
          productPic: "royco brown soup 50g.jpg",
          productName: "Royco Brown Onion Soup Packet 50g",
          productPrice: 7
        },
        {
          productPic: "royco rich oxtail soup packet 50g.jpg",
          productName: "Royco Rich Oxtail Soup Packet 50g",
          productPrice: 7
        },
        {
          productPic: "school buns 10 pack.jpg",
          productName: "School Buns 10 Pack",
          productPrice: 13
        },
        {
          productPic: "spinach bag 300g.jpg",
          productName: "Spinach Bag 300g",
          productPrice: 17
        },
        {
          productPic: "stewing beef per kg.jpg",
          productName: "Stewing Beef Per kg",
          productPrice: 100
        },
        {
          productPic: "sweetcorn 4 pack.jpg",
          productName: "Sweetcorn 4 Pack",
          productPrice: 30
        },
        {
          productPic: "tex large chocolate 40g.jpg",
          productName: "Tex Large Chocolate Bar 40g",
          productPrice: 14
        },
        {
          productPic: "tomatoes.jpg",
          productName: "Tomatoes Bag 1kg",
          productPrice: 25
        },
        {
          productPic: "wellington's tomato sauce 700ml.jpg",
          productName: "Welington's New Recipe Tomato Sauce 700ml",
          productPrice: 39
        },
        {
          productPic: "coca-cola original 2l.jpg",
          productName: "Coca-Cola Original Less Sugar Soft Drink Bottle 2L",
          productPrice: 27
        },
        {
          productPic: "coca-cola original 440ml.jpg",
          productName: "Coca-Cola Original Soft Drink Bottle 440ml",
          productPrice: 14
        },
        {
          productPic: "cremora coffee creamer box 750g.jpg",
          productName: "Cremora Coffee Creamer Box 750g",
          productPrice: 67
        },
        {
          productPic: "darling fruit worx mango and peach juice 3l.jpg",
          productName: "Darling Fruit Worx Mango & Peach Juice 3L",
          productPrice: 45
        },
        {
          productPic: "ellis brown coffee creamer 750g.jpg",
          productName: "Ellis Brown Coffee Creamer 750g",
          productPrice: 65
        },
        {
          productPic: "glen african blend tea bags 100 pack.jpg",
          productName: "Glen African Blend Tea Bags 100 Pack",
          productPrice: 35
        },
        {
          productPic: "jacobs original 3in1 instant coffee stick 18g.jpg",
          productName: "Jacobs Original 3-In-1 Instant Coffee Stick 18g",
          productPrice: 5
        },
        {
          productPic: "jive cream soda drink 2l.jpg",
          productName: "Jive Cream Soda Flavoured Soft Drink Bottle 2L",
          productPrice: 15
        },
        {
          productPic: "jive pine whizz drink 2l.jpg",
          productName: "Jive Pine Whizz Flavoured Soft Drink Bottle 2L",
          productPrice: 15
        },
        {
          productPic: "jive pineapple spike drink 2l.jpg",
          productName: "Jive Pineapple Spike Flavoured Soft Drink Bottle 2L",
          productPrice: 15
        },
        {
          productPic: "joko strong qulity teabags 100 pack.jpg",
          productName: "Joko Strong Quality Teabags 100 Pack",
          productPrice: 57
        },
        {
          productPic: "monster energy drink 500ml.jpg",
          productName: "Monster Energy Drink 500ml",
          productPrice: 19
        },
        {
          productPic: "nescafe classic instant coffee 200g.jpg",
          productName: "NESCAFE Classic Instant Coffee 200g",
          productPrice: 125
        },
        {
          productPic: "nescafe original 3in1 instant coffe 17.5g.jpg",
          productName: "NESCAFE ORIGINAL 3-In-1 Instant Coffee 17.5g",
          productPrice: 6
        },
        {
          productPic: "nescafe ricoffy instant coffee 100g.jpg",
          productName: "NESCAFE RICOFFY Instant Coffee 100g",
          productPrice: 35
        },
        {
          productPic: "nescafe ricoffy instant coffee 250g.jpg",
          productName: "NESCAFE RICOFFY Instant Coffee 250g",
          productPrice: 70
        },
        {
          productPic: "nescafe ricoffy refill 800g.jpg",
          productName: "NESCAFE RICOFFY Soluble Chicory & Coffee Granules Refill 800g",
          productPrice: 130
        },
        {
          productPic: "power play original energy drink 440ml.jpg",
          productName: "Power Play Original Energy Drink 440ml",
          productPrice: 15
        },
        {
          productPic: "reboost original energy drink 500ml.jpg",
          productName: "Reboost Original Flavour Energy Drink 500ml",
          productPrice: 11
        },
        {
          productPic: "ritebrand peach and apricot blend 1l.jpg",
          productName: "Ritebrand Peach & Apricot Flavoured Dairy Blend Concentrate 1L",
          productPrice: 13
        },
        {
          productPic: "spar-letta drink creme soda 2l.jpg",
          productName: "Spar-Letta Soft Drink Creme Soda Bottle 2L",
          productPrice: 17
        },
        {
          productPic: "spar-letta iron brew drink 2l.jpg",
          productName: "Spar-Letta Iron Brew Flavour Soft Drink Bottle 2L",
          productPrice: 17
        },
        {
          productPic: "spar-letta pine nut drink 2l.jpg",
          productName: "Spar-Letta Pine Nut Flavoured Soft Drink Bottle 2L",
          productPrice: 17
        },
        {
          productPic: "spar-letta sparberry 2l.jpg",
          productName: "Spar-Letta Soft Drink Sparberry Bottle 2L",
          productPrice: 17
        },
        {
          productPic: "steri stumpie chocolate milk 350ml.jpg",
          productName: "Steri Stumpie Chocolate Flavoured Milk 350ml",
          productPrice: 17
        },
        {
          productPic: "twist lemon drink 2l.jpg",
          productName: "Twist Lemon Flavoured Soft Drink Bottle 2L",
          productPrice: 17
        }
      ];

      findBtn.addEventListener('click', () => {
        headerWrapper.innerHTML = `<p class="product-name">hoodShop</p>`;
        cartWrapper.classList.add('hide');
        orderWrapper.classList.add('hide');

        for(let i = 0; i < products.length; i++) {
          productWrapper.classList.add('hide');
          searchWrapper.classList.remove('hide');
          
          if(products[i].productName.includes(productInput.value)) {
            searchWrapper.innerHTML += `<div class="product-container">
                                        <img src="${products[i].productPic}" class="product-pic">
                                        <p class="product-name">${products[i].productName}</p>
                                        <p class="product-price">R${products[i].productPrice}</p>
                                        <button class="add-btn" onclick="ordering(\`${products[i].productName}\`, \`${quantityInput.value = 1}\`, \`${quantityInput1.value = 1}\`, \`${quantityInput2.value = 1}\`, \`${quantityInput3.value = 1}\`, \`${quantityInput4.value = 1}\`, \`${quantityInput5.value = 1}\`, \`${quantityInput6.value = 1}\`, \`${quantityInput7.value = 1}\`, \`${quantityInput8.value = 1}\`, \`${quantityInput9.value = 1}\`, \`${quantityInput10.value = 1}\`, \`${quantityInput11.value = 1}\`, \`${quantityInput12.value = 1}\`, \`${quantityInput13.value = 1}\`, \`${quantityInput14.value = 1}\`, \`${quantityInput15.value = 1}\`, \`${quantityInput16.value = 1}\`, \`${quantityInput17.value = 1}\`, \`${quantityInput18.value = 1}\`, \`${quantityInput19.value = 1}\`, \`${quantityInput20.value = 1}\`, \`${quantityInput21.value = 1}\`, \`${quantityInput22.value = 1}\`, \`${quantityInput23.value = 1}\`, \`${quantityInput24.value = 1}\`, \`${quantityInput25.value = 1}\`, \`${quantityInput26.value = 1}\`, \`${quantityInput27.value = 1}\`, \`${quantityInput28.value = 1}\`, \`${quantityInput29.value = 1}\`, \`${quantityInput30.value = 1}\`, \`${quantityInput31.value = 1}\`, \`${quantityInput32.value = 1}\`, \`${quantityInput33.value = 1}\`, \`${quantityInput34.value = 1}\`, \`${quantityInput35.value = 1}\`, \`${quantityInput36.value = 1}\`, \`${quantityInput37.value = 1}\`, \`${quantityInput38.value = 1}\`, \`${quantityInput39.value = 1}\`, \`${quantityInput40.value = 1}\`, \`${quantityInput41.value = 1}\`, \`${quantityInput42.value = 1}\`, \`${quantityInput43.value = 1}\`, \`${quantityInput44.value = 1}\`, \`${quantityInput45.value = 1}\`, \`${quantityInput46.value = 1}\`, \`${quantityInput47.value = 1}\`, \`${quantityInput48.value = 1}\`, \`${quantityInput49.value = 1}\`, \`${quantityInput50.value = 1}\`, \`${quantityInput51.value = 1}\`, \`${quantityInput52.value = 1}\`, \`${quantityInput53.value = 1}\`, \`${quantityInput54.value = 1}\`, \`${quantityInput55.value = 1}\`, \`${quantityInput56.value = 1}\`, \`${quantityInput57.value = 1}\`, \`${quantityInput58.value = 1}\`, \`${quantityInput59.value = 1}\`, \`${quantityInput60.value = 1}\`, \`${quantityInput61.value = 1}\`, \`${quantityInput62.value = 1}\`, \`${quantityInput63.value = 1}\`, \`${quantityInput64.value = 1}\`, \`${quantityInput65.value = 1}\`, \`${quantityInput66.value = 1}\`, \`${quantityInput67.value = 1}\`, \`${quantityInput68.value = 1}\`, \`${quantityInput69.value = 1}\`, \`${quantityInput70.value = 1}\`, \`${quantityInput71.value = 1}\`, \`${quantityInput72.value = 1}\`, \`${quantityInput73.value = 1}\`, \`${quantityInput74.value = 1}\`, \`${quantityInput75.value = 1}\`, \`${quantityInput76.value = 1}\`, \`${quantityInput77.value = 1}\`, \`${quantityInput78.value = 1}\`, \`${quantityInput79.value = 1}\`, \`${quantityInput80.value = 1}\`, \`${quantityInput81.value = 1}\`, \`${quantityInput82.value = 1}\`, \`${quantityInput83.value = 1}\`, \`${quantityInput84.value = 1}\`, \`${quantityInput85.value = 1}\`, \`${quantityInput86.value = 1}\`, \`${quantityInput87.value = 1}\`, \`${quantityInput88.value = 1}\`, \`${quantityInput89.value = 1}\`, \`${quantityInput90.value = 1}\`, \`${quantityInput91.value = 1}\`, \`${quantityInput92.value = 1}\`, \`${quantityInput93.value = 1}\`, \`${quantityInput94.value = 1}\`, \`${quantityInput95.value = 1}\`, \`${quantityInput96.value = 1}\`, \`${quantityInput97.value = 1}\`, \`${quantityInput98.value = 1}\`, \`${quantityInput99.value = 1}\`, \`${quantityInput100.value = 1}\`, \`${quantityInput101.value = 1}\`, \`${quantityInput102.value = 1}\`, \`${quantityInput103.value = 1}\`, \`${quantityInput104.value = 1}\`, \`${quantityInput105.value = 1}\`, \`${quantityInput106.value = 1}\`, \`${quantityInput107.value = 1}\`, \`${quantityInput108.value = 1}\`, \`${quantityInput109.value = 1}\`, \`${quantityInput110.value = 1}\`, \`${quantityInput111.value = 1}\`, \`${quantityInput112.value = 1}\`, \`${quantityInput113.value = 1}\`, \`${quantityInput114.value = 1}\`, \`${quantityInput115.value = 1}\`, \`${quantityInput116.value = 1}\`, \`${quantityInput117.value = 1}\`, \`${quantityInput118.value = 1}\`, \`${quantityInput119.value = 1}\`, \`${quantityInput120.value = 1}\`, \`${quantityInput121.value = 1}\`, \`${quantityInput122.value = 1}\`, \`${quantityInput123.value = 1}\`, \`${quantityInput124.value = 1}\`, \`${quantityInput125.value = 1}\`, \`${quantityInput126.value = 1}\`, \`${quantityInput127.value = 1}\`, \`${quantityInput128.value = 1}\`, \`${quantityInput129.value = 1}\`, \`${quantityInput130.value = 1}\`, \`${quantityInput131.value = 1}\`, \`${quantityInput132.value = 1}\`, \`${quantityInput133.value = 1}\`, \`${quantityInput134.value = 1}\`, \`${quantityInput135.value = 1}\`)">Add</button>
                                       </div>`;
          }
        };
      });

      let order = JSON.parse(localStorage.getItem("order")) || [];

      function ordering(food) {
        if(food === "Albany Everyday Brown Bread Loaf 700g"){
          order.push({
            orderPic: "albany brown bread.jpg",
            orderName: "Albany Everyday Brown Bread Loaf 700g",
            orderPrice: 17,
            orderQuantity: quantityInput.value
          });
        } else if(food === "Albany Every Day Thick Sliced White Bread") {
          order.push({
            orderPic: "albany white.jpg",
            orderName: "Albany Every Day Thick Sliced White Bread",
            orderPrice: 18,
            orderQuantity: quantityInput1.value
          });
          } else if(food === "Ritebrand Baked Beans in Tomato Sauce Can 410g") {
              order.push({
                orderPic: "baked beans.jpg",
                orderName: "Ritebrand Baked Beans in Tomato Sauce Can 410g",
                orderPrice: 12,
                orderQuantity: quantityInput2.value
              });
            } else if(food === "Blue Ribbon Sliced White Bread 700g") {
              order.push({
                orderPic: "blue ribbon white.jpg",
                orderName: "Blue Ribbon Sliced White Bread 700g",
                orderPrice: 20,
                orderQuantity: quantityInput3.value
              });
            } else if(food === "Selati Golden Brown Sugar 2kg") {
              order.push({
                orderPic: "brown sugar.jpg",
                orderName: "Selati Golden Brown Sugar 2kg",
                orderPrice: 60,
                orderQuantity: quantityInput4.value
              });
            } else if(food === "D'Lite 40% Fat Spread Brick 500g") {
              order.push({
                orderPic: "fat spread brick.jpg",
                orderName: "D'Lite 40% Fat Spread Brick 500g",
                orderPrice: 15,
                orderQuantity: quantityInput5.value
              });
            } else if(food === "Nulaid Large Eggs 18 Pack") {
              order.push({
                orderPic: "large eggs.jpg",
                orderName: "Nulaid Large Eggs 18 Pack",
                orderPrice: 60,
                orderQuantity: quantityInput6.value
              });
            } else if(food === "Loose Bananas Per kg") {
              order.push({
                orderPic: "loose banana.jpg",
                orderName: "Loose Bananas Per kg",
                orderPrice: 17,
                orderQuantity: quantityInput7.value
              });
            } else if(food === "Mr.Pasta Macaroni Pasta 500g") {
              order.push({
                orderPic: "macaroni.jpg",
                orderName: "Mr.Pasta Macaroni Pasta 500g",
                orderPrice: 16,
                orderQuantity: quantityInput8.value
              });
            } else if(food === "Farmer's Choice Frozen Mixed Chicken Portions with Brine Based Mixture 5kg") {
              order.push({
                orderPic: "mixed chicken portions.jpg",
                orderName: "Farmer's Choice Frozen Mixed Chicken Portions with Brine Based Mixture 5kg",
                orderPrice: 235,
                orderQuantity: quantityInput9.value
              });
            } else if(food === "Potatoes Pack 2kg") {
              order.push({
                orderPic: "potato pack 2kg.jpg",
                orderName: "Potatoes Pack 2kg",
                orderPrice: 30,
                orderQuantity: quantityInput10.value
              });
            } else if(food === "Potatoes Sock 7kg") {
              order.push({
                orderPic: "potato sock.jpg",
                orderName: "Potatoes Sock 7kg",
                orderPrice: 80,
                orderQuantity: quantityInput11.value
              });
            } else if(food === "SASKO Low G.I Dumpy Oats & Honey Flavoured White Bread 700g") {
              order.push({
                orderPic: "sasko low g.i white bread.jpg",
                orderName: "SASKO Low G.I Dumpy Oats & Honey Flavoured White Bread 700g",
                orderPrice: 24,
                orderQuantity: quantityInput12.value
              });
            } else if(food === "Mr.Pasta Spaghetti Pasta 500g") {
              order.push({
                orderPic: "spaghetti.jpg",
                orderName: "Mr.Pasta Spaghetti Pasta 500g",
                orderPrice: 16,
                orderQuantity: quantityInput13.value
              });
            } else if(food === "Spekko Long Grain Parboiled White Rice Bag 2kg") {
              order.push({
                orderPic: "spekko parboiled white rice.jpg",
                orderName: "Spekko Long Grain Parboiled White Rice Bag 2kg",
                orderPrice: 50,
                orderQuantity: quantityInput14.value
              });
            } else if(food === "Standard White Bread 600g") {
              order.push({
                orderPic: "standard white bread.jpg",
                orderName: "Standard White Bread 600g",
                orderPrice: 12,
                orderQuantity: quantityInput15.value
              });
            } else if(food === "Ritebrand Sunflower Seed Oil 4L") {
              order.push({
                orderPic: "sunflower seed oil 4l.jpg",
                orderName: "Ritebrand Sunflower Seed Oil 4L",
                orderPrice: 130,
                orderQuantity: quantityInput16.value
              });
            } else if(food === "Sunfoil Pure Sunflower Seed Oil 750ml") {
              order.push({
                orderPic: "sunflower seed oil 750ml.jpg",
                orderName: "Sunfoil Pure Sunflower Seed Oil 750ml",
                orderPrice: 37,
                orderQuantity: quantityInput17.value
              });
            } else if(food === "Weet-Bix Wholegrain Wheat Biscuits 450g") {
              order.push({
                orderPic: "weet bix 450g.jpg",
                orderName: "Weet-Bix Wholegrain Wheat Biscuits 450g",
                orderPrice: 37,
                orderQuantity: quantityInput18.value
              });
            } else if(food === "White Hamburger Roll") {
              order.push({
                orderPic: "white hamburger roll.jpg",
                orderName: "White Hamburger Roll",
                orderPrice: 3,
                orderQuantity: quantityInput19.value
              });
            } else if(food === "White Maize Bread 600g") {
              order.push({
                orderPic: "white maize bread.jpg",
                orderName: "White Maize Bread 600g",
                orderPrice: 10,
                orderQuantity: quantityInput20.value
              });
            } else if(food === "White Star Super Maize Meal 5kg") {
              order.push({
                orderPic: "white star super maize meal 5kg.jpg",
                orderName: "White Star Super Maize Meal 5kg",
                orderPrice: 60,
                orderQuantity: quantityInput21.value
              });
            } else if(food === "Darling Amasi Maas Bottle 2L") {
              order.push({
                orderPic: "amasi 2l.jpg",
                orderName: "Darling Amasi Maas Bottle 2L",
                orderPrice: 37,
                orderQuantity: quantityInput22.value
              });
            } else if(food === "Baumann's Marie Bisquits 150g") {
              order.push({
                orderPic: "baumanns marie biscuits 150g.jpg",
                orderName: "Baumann's Marie Bisquits 150g",
                orderPrice: 15,
                orderQuantity: quantityInput23.value
              });
            } else if(food === "Beef Potjiekos Per kg") {
              order.push({
                orderPic: "beef potjiekos.jpg",
                orderName: "Beef Potjiekos Per kg",
                orderPrice: 100,
                orderQuantity: quantityInput24.value
              });
            } else if(food === "Benny Chicken Flavoured Stock Powder 17g") {
              order.push({
                orderPic: "benny chicken stock powder 17g.jpg",
                orderName: "Benny Chicken Flavoured Stock Powder 17g",
                orderPrice: 2,
                orderQuantity: quantityInput25.value
              });
            } else if(food === "Rebertsons Coarse Black Pepper Compound Envelope 7g") {
              order.push({
                orderPic: "black pepper.jpg",
                orderName: "Rebertsons Coarse Black Pepper Compound Envelope 7g",
                orderPrice: 4,
                orderQuantity: quantityInput26.value
              });
            } else if(food === "Cerebos Iodated Sea Salt 500g") {
              order.push({
                orderPic: "cerebos iodated sea salt 500g.jpg",
                orderName: "Cerebos Iodated Sea Salt 500g",
                orderPrice: 11,
                orderQuantity: quantityInput27.value
              });
            } else if(food === "Clover Classic Assorted Low Fat Flavoured Dairy Snack 6 x 100g") {
              order.push({
                orderPic: "clover classic dairy snack 6 x 100g.jpg",
                orderName: "Clover Classic Assorted Low Fat Flavoured Dairy Snack 6 x 100g",
                orderPrice: 23,
                orderQuantity: quantityInput28.value
              });
            } else if(food === "Crisp Lettuce Head Pack") {
              order.push({
                orderPic: "crisp lettuce head pack.jpg",
                orderName: "Crisp Lettuce Head Pack",
                orderPrice: 19,
                orderQuantity: quantityInput29.value
              });
            } else if(food === "English Cucumber Single") {
              order.push({
                orderPic: "english cucumber single.jpg",
                orderName: "English Cucumber Single",
                orderPrice: 19,
                orderQuantity: quantityInput30.value
              });
            } else if(food === "Excella Rich & Creamy Mayonnaise 750g") {
              order.push({
                orderPic: "excella mayonnaise 750g.jpg",
                orderName: "Excella Rich & Creamy Mayonnaise 750g",
                orderPrice: 39,
                orderQuantity: quantityInput31.value
              });
            } else if(food === "Crystal Valley Gouda Flavoured Full Cream Processed Cheese Slices 9 Pack") {
              order.push({
                orderPic: "gouda cheese.jpg",
                orderName: "Crystal Valley Gouda Flavoured Full Cream Processed Cheese Slices 9 Pack",
                orderPrice: 30,
                orderQuantity: quantityInput32.value
              });
            } else if(food === "White Hotdog Roll 6 Pack") {
              order.push({
                orderPic: "hot dog roll 6 pack.jpg",
                orderName: "White Hotdog Roll 6 Pack",
                orderPrice: 15,
                orderQuantity: quantityInput33.value
              });
            } else if(food === "Huletts White Sugar 2,5kg") {
              order.push({
                orderPic: "huletts white sugar 2,5kg.jpg",
                orderName: "Huletts White Sugar 2,5kg",
                orderPrice: 64,
                orderQuantity: quantityInput34.value
              });
            } else if(food === "Pink Lamington Snowball") {
              order.push({
                orderPic: "lamington snowball.jpg",
                orderName: "Pink Lamington Snowball",
                orderPrice: 10,
                orderQuantity: quantityInput35.value
              });
            } else if(food === "Large Unwrapped Cabbage Single") {
              order.push({
                orderPic: "large unwrapped cabbage.jpg",
                orderName: "Large Unwrapped Cabbage Single",
                orderPrice: 25,
                orderQuantity: quantityInput36.value
              });
            } else if(food === "Lucky Star Pilchards In Tomato Sauce Tin 400g") {
              order.push({
                orderPic: "Luck Star pilchards 400g.jpg",
                orderName: "Lucky Star Pilchards In Tomato Sauce Tin 400g",
                orderPrice: 29,
                orderQuantity: quantityInput37.value
              });
            } else if(food === "Magic Moments Pink & White Marshmallows 120g") {
              order.push({
                orderPic: "magic moments pink and white marshmallows 120g.jpg",
                orderName: "Magic Moments Pink & White Marshmallows 120g",
                orderPrice: 17,
                orderQuantity: quantityInput38.value
              });
            } else if(food === "Crystal Valley Full Cream Long Life Milk 1L") {
              order.push({
                orderPic: "milk 1l.jpg",
                orderName: "Crystal Valley Full Cream Long Life Milk 1L",
                orderPrice: 17,
                orderQuantity: quantityInput39.value
              });
            } else if(food === "Nyama Choma BBQ Spice 200g") {
              order.push({
                orderPic: "nyama choma bbq spice 200g.jpg",
                orderName: "Nyama Choma BBQ Spice 200g",
                orderPrice: 16,
                orderQuantity: quantityInput40.value
              });
            } else if(food === "Rhodes Quality Tomato Paste Sachet 50g") {
              order.push({
                orderPic: "rhodes tomato paste 50g.jpg",
                orderName: "Rhodes Quality Tomato Paste Sachet 50g",
                orderPrice: 5,
                orderQuantity: quantityInput41.value
              });
            } else if(food === "Ritebrand Long Life Full Cream Milk 6 x 1L") {
              order.push({
                orderPic: "ritebrand milk 6 x 1L.jpg",
                orderName: "Ritebrand Long Life Full Cream Milk 6 x 1L",
                orderPrice: 99,
                orderQuantity: quantityInput42.value
              });
            } else if(food === "Ritebrand Mixed Frozen Vegetables 900g") {
              order.push({
                orderPic: "ritebrand mixed frozen vegetables 900g.jpg",
                orderName: "Ritebrand Mixed Frozen Vegetables 900g",
                orderPrice: 40,
                orderQuantity: quantityInput43.value
              });
            } else if(food === "Ritebrand Smooth Peanut Butter 400g") {
              order.push({
                orderPic: "ritebrand smooth peanut butter 400g.jpg",
                orderName: "Ritebrand Smooth Peanut Butter 400g",
                orderPrice: 39,
                orderQuantity: quantityInput44.value
              });
            } else if(food === "Sasko More Slices Brown Bread Loaf 700g") {
              order.push({
                orderPic: "sasko brown bread loaf 700g.jpg",
                orderName: "Sasko More Slices Brown Bread Loaf 700g",
                orderPrice: 17,
                orderQuantity: quantityInput45.value
              });
            } else if(food === "Sasko Cake Wheat Flour Bag 2,5kg") {
              order.push({
                orderPic: "sasko wheat flour 2,5kg.jpg",
                orderName: "Sasko Cake Wheat Flour Bag 2,5kg",
                orderPrice: 42,
                orderQuantity: quantityInput46.value
              });
            } else if(food === "Golden Cloud Cake Wheat Flour 2,5kg") {
              order.push({
                orderPic: "wheat flour.jpg",
                orderName: "Golden Cloud Cake Wheat Flour 2,5kg",
                orderPrice: 43,
                orderQuantity: quantityInput47.value
              });
            } else if(food === "White Mushrooms Pack 250g") {
              order.push({
                orderPic: "white mushrooms 250g.jpg",
                orderName: "White Mushrooms Pack 250g",
                orderPrice: 20,
                orderQuantity: quantityInput48.value
              });
            } else if(food === "ALL GOLD Tomato Sauce Bottle 700ml") {
              order.push({
                orderPic: "all gold tomato sauce 700ml.jpg",
                orderName: "ALL GOLD Tomato Sauce Bottle 700ml",
                orderPrice: 40,
                orderQuantity: quantityInput49.value
              });
              } else if(food === "Avocados Pack 1kg") {
                  order.push({
                    orderPic: "avocados pack 1kg.jpg",
                    orderName: "Avocados Pack 1kg",
                    orderPrice: 25,
                    orderQuantity: quantityInput50.value
                  });
                } else if(food === "Bar-One Large Chocolate 52g") {
                  order.push({
                    orderPic: "bar one large chocolate 52g.jpg",
                    orderName: "Bar-One Large Chocolate 52g",
                    orderPrice: 14,
                    orderQuantity: quantityInput51.value
                  });
                } else if(food === "Beetroots Pack 1kg") {
                  order.push({
                    orderPic: "beetroot 1kg.jpg",
                    orderName: "Beetroots Pack 1kg",
                    orderPrice: 13,
                    orderQuantity: quantityInput52.value
                  });
                } else if(food === "Blossom Spread 25% Fat Spread 1kg") {
                  order.push({
                    orderPic: "blossom spread fat spread 1kg.jpg",
                    orderName: "Blossom Spread 25% Fat Spread 1kg",
                    orderPrice: 50,
                    orderQuantity: quantityInput53.value
                  });
                } else if(food === "Bokomo Original Corn Flakes 1kg") {
                  order.push({
                    orderPic: "bokomo corn flakes 1kg.jpg",
                    orderName: "Bokomo Original Corn Flakes 1kg",
                    orderPrice: 70,
                    orderQuantity: quantityInput54.value
                  });
                } else if(food === "Cadbury Crunchie Chocolate Bar 40g") {
                  order.push({
                    orderPic: "cadbury crunchie chocolate 40g.jpg",
                    orderName: "Cadbury Crunchie Chocolate Bar 40g",
                    orderPrice: 14,
                    orderQuantity: quantityInput55.value
                  });
                } else if(food === "Cadbury Lunch Bar Max Chocolate Bar 62g") {
                  order.push({
                    orderPic: "cadbury lunch bar max 62g.jpg",
                    orderName: "Cadbury Lunch Bar Max Chocolate Bar 62g",
                    orderPrice: 17,
                    orderQuantity: quantityInput56.value
                  });
                } else if(food === "Cadbury P.S. Milk Chocolate Bar 48g") {
                  order.push({
                    orderPic: "cadbury p.s milk chocolate 48g.jpg",
                    orderName: "Cadbury P.S. Milk Chocolate Bar 48g",
                    orderPrice: 14,
                    orderQuantity: quantityInput57.value
                  });
                } else if(food === "Carrots Pack 3kg") {
                  order.push({
                    orderPic: "carrots pack 3kg.jpg",
                    orderName: "Carrots Pack 3kg",
                    orderPrice: 35,
                    orderQuantity: quantityInput58.value
                  });
                } else if(food === "Cauliflower & Brocolli Pack") {
                  order.push({
                    orderPic: "cauliflower and brocolli pack.jpg",
                    orderName: "Cauliflower & Brocolli Pack",
                    orderPrice: 30,
                    orderQuantity: quantityInput59.value
                  });
                } else if(food === "Cheas Snaks Cheese Flavoured Maize Snack 135g") {
                  order.push({
                    orderPic: "cheas snaks cheese maize snack 135g.jpg",
                    orderName: "Cheas Snaks Cheese Flavoured Maize Snack 135g",
                    orderPrice: 15,
                    orderQuantity: quantityInput60.value
                  });
                } else if(food === "Coney Roll Single") {
                  order.push({
                    orderPic: "coney roll single.jpg",
                    orderName: "Coney Roll Single",
                    orderPrice: 4,
                    orderQuantity: quantityInput61.value
                  });
                  } else if(food === "Danone NutriDay Strawberry, Banana And Mixed Fruit Flavoured Low Fat Dairy Snack 6 x 100g") {
                      order.push({
                        orderPic: "danone nutriday mixed flavoured dairy snack 6 x 100g.jpg",
                        orderName: "Danone NutriDay Strawberry, Banana And Mixed Fruit Flavoured Low Fat Dairy Snack 6 x 100g",
                        orderPrice: 23,
                        orderQuantity: quantityInput62.value
                      });
                    } else if(food === "Doritos Sweet Chilli Pepper Flavoured Corn Chips 145g") {
                      order.push({
                        orderPic: "doritos sweet chilli pepper corn chips 145g.jpg",
                        orderName: "Doritos Sweet Chilli Pepper Flavoured Corn Chips 145g",
                        orderPrice: 23,
                        orderQuantity: quantityInput63.value
                      });
                    } else if(food === "Fair Cape Dairies Chocolate Dessert 125ml") {
                      order.push({
                        orderPic: "fair cape dairies chocolate dessert 125ml.jpg",
                        orderName: "Fair Cape Dairies Chocolate Dessert 125ml",
                        orderPrice: 10,
                        orderQuantity: quantityInput64.value
                      });
                    } else if(food === "Fresh Large French Loaf 400g") {
                      order.push({
                        orderPic: "fresh large french loaf 400g.jpg",
                        orderName: "Fresh Large French Loaf 400g",
                        orderPrice: 17,
                        orderQuantity: quantityInput65.value
                      });
                    } else if(food === "Ghost Pops The Original Flavoured Maize Snack 100g") {
                      order.push({
                        orderPic: "ghost pops the original maize snack 100g.jpg",
                        orderName: "Ghost Pops The Original Flavoured Maize Snack 100g",
                        orderPrice: 16,
                        orderQuantity: quantityInput66.value
                      });
                    } else if(food === "Gold Star Instant Yeast 10g") {
                      order.push({
                        orderPic: "gold star yeast 10g.jpg",
                        orderName: "Gold Star Instant Yeast 10g",
                        orderPrice: 7,
                        orderQuantity: quantityInput67.value
                      });
                    } else if(food === "Green Peppers Bag") {
                      order.push({
                        orderPic: "green pepper.jpg",
                        orderName: "Green Peppers Bag",
                        orderPrice: 30,
                        orderQuantity: quantityInput68.value
                      });
                    } else if(food === "Heavenly Hazel Heaven Chocolate Slab 80g") {
                      order.push({
                        orderPic: "heavenly chocolate slab 80g.jpg",
                        orderName: "Heavenly Hazel Heaven Chocolate Slab 80g",
                        orderPrice: 20,
                        orderQuantity: quantityInput69.value
                      });
                    } else if(food === "Huletts White Sugar 10kg") {
                      order.push({
                        orderPic: "huletts white sugar 10kg.jpg",
                        orderName: "Huletts White Sugar 10kg",
                        orderPrice: 250,
                        orderQuantity: quantityInput70.value
                      });
                    } else if(food === "Imana Super Stock Chill Beef Flavoured Cubes 12 Pack") {
                      order.push({
                        orderPic: "imana super stock chill beef cubes 12 pack.jpg",
                        orderName: "Imana Super Stock Chill Beef Flavoured Cubes 12 Pack",
                        orderPrice: 16,
                        orderQuantity: quantityInput71.value
                      });
                    } else if(food === "Jungle Oats 1kg") {
                      order.push({
                        orderPic: "jungle Oats 1kg.jpg",
                        orderName: "Jungle Oats 1kg",
                        orderPrice: 46,
                        orderQuantity: quantityInput72.value
                      });
                    } else if(food === "KitKat 4 Finger Milk Chocolate Bar 41.5g") {
                      order.push({
                        orderPic: "kitkat 4 finger milk chocolate 41.5g.jpg",
                        orderName: "KitKat 4 Finger Milk Chocolate Bar 41.5g",
                        orderPrice: 14,
                        orderQuantity: quantityInput73.value
                      });
                      } else if(food === "Knorr Brown Onion Thickening Soup 50g") {
                          order.push({
                            orderPic: "knorr brown onion soup 50g.jpg",
                            orderName: "Knorr Brown Onion Thickening Soup 50g",
                            orderPrice: 8,
                            orderQuantity: quantityInput74.value
                          });
                        } else if(food === "Knorrox Beef Flavoured Stock Cubes 12 x 10g") {
                          order.push({
                            orderPic: "knorrox beef flavoured stock cubes 12 x 10g.jpg",
                            orderName: "Knorrox Beef Flavoured Stock Cubes 12 x 10g",
                            orderPrice: 19,
                            orderQuantity: quantityInput75.value
                          });
                        } else if(food === "Knorrox Boerewors Flavoured Soya Mince 400g") {
                          order.push({
                            orderPic: "knorrox boerewors flavoured soya mince 400g.jpg",
                            orderName: "Knorrox Boerewors Flavoured Soya Mince 400g",
                            orderPrice: 33,
                            orderQuantity: quantityInput76.value
                          });
                        } else if(food === "Knorrox Chilli Beef Flavoured Soya Mince 400g") {
                          order.push({
                            orderPic: "knorrox chilli beef soya mince 400g.jpg",
                            orderName: "Knorrox Chilli Beef Flavoured Soya Mince 400g",
                            orderPrice: 33,
                            orderQuantity: quantityInput77.value
                          });
                        } else if(food === "Knorrox Mutton Flavoured Soya Mince 400g") {
                          order.push({
                            orderPic: "knorrox mutton flavoured soya mince 400g.jpg",
                            orderName: "Knorrox Mutton Flavoured Soya Mince 400g",
                            orderPrice: 33,
                            orderQuantity: quantityInput78.value
                          });
                        } else if(food === "Lean Beef Mince Per kg") {
                          order.push({
                            orderPic: "lean beef mince per kg.jpg",
                            orderName: "Lean Beef Mince Per kg",
                            orderPrice: 110,
                            orderQuantity: quantityInput79.value
                          });
                        } else if(food === "Lucky Star Pilchards in Hot Chilli Sauce") {
                          order.push({
                            orderPic: "lucky star pilchards in hot chili sauce.jpg",
                            orderName: "Lucky Star Pilchards in Hot Chilli Sauce",
                            orderPrice: 29,
                            orderQuantity: quantityInput80.value
                          });
                        } else if(food === "Mixed Peppers Bag") {
                          order.push({
                            orderPic: "mixed pepper.jpg",
                            orderName: "Mixed Peppers Bag",
                            orderPrice: 30,
                            orderQuantity: quantityInput81.value
                          });
                        } else if(food === "Mutton Pack Per kg") {
                          order.push({
                            orderPic: "mutton pack per kg.jpg",
                            orderName: "Mutton Pack Per kg",
                            orderPrice: 110,
                            orderQuantity: quantityInput82.value
                          });
                        } else if(food === "Nosh Chocolate Bar 56g") {
                          order.push({
                            orderPic: "nosh chocolate 56g.jpg",
                            orderName: "Nosh Chocolate Bar 56g",
                            orderPrice: 13,
                            orderQuantity: quantityInput83.value
                          });
                        } else if(food === "Onions Bag 3kg") {
                          order.push({
                            orderPic: "onions bag 3kg.jpg",
                            orderName: "Onions Bag 3kg",
                            orderPrice: 50,
                            orderQuantity: quantityInput84.value
                          });
                        } else if(food === "Onions Per KG") {
                          order.push({
                            orderPic: "onions per kg.jpg",
                            orderName: "Onions Per KG",
                            orderPrice: 18,
                            orderQuantity: quantityInput85.value
                          });
                          } else if(food === "OREO Original Biscuits 128g") {
                              order.push({
                                orderPic: "oreo biscuits 128g.jpg",
                                orderName: "OREO Original Biscuits 128g",
                                orderPrice: 19,
                                orderQuantity: quantityInput86.value
                              });
                            } else if(food === "Padkos Roasted & Salted Peanuts & Raisins 150g") {
                              order.push({
                                orderPic: "padkos roasted & salted peanuts with raisins 150g.jpg",
                                orderName: "Padkos Roasted & Salted Peanuts & Raisins 150g",
                                orderPrice: 17,
                                orderQuantity: quantityInput87.value
                              });
                            } else if(food === "Parmalat Single Cheese Slice") {
                              order.push({
                                orderPic: "parmalat single cheese.jpg",
                                orderName: "Parmalat Single Cheese Slice",
                                orderPrice: 3,
                                orderQuantity: quantityInput88.value
                              });
                            } else if(food === "PIEMAN'S Pepper Steak Jumbo Pie Jumbo") {
                              order.push({
                                orderPic: "piemans pepper steak jumbo pie.jpg",
                                orderName: "PIEMAN'S Pepper Steak Jumbo Pie Jumbo",
                                orderPrice: 20,
                                orderQuantity: quantityInput89.value
                              });
                            } else if(food === "Rajah Flavourful & Mild Curry Powder Envelope 7g") {
                              order.push({
                                orderPic: "rajah flavourful & mild curry powder 7g.jpg",
                                orderName: "Rajah Flavourful & Mild Curry Powder Envelope 7g",
                                orderPrice: 4,
                                orderQuantity: quantityInput90.value
                              });
                            } else if(food === "Rajah Medium Curry Powder Envelope 7g") {
                              order.push({
                                orderPic: "rajah medium curry powder 7g.jpg",
                                orderName: "Rajah Medium Curry Powder Envelope 7g",
                                orderPrice: 4,
                                orderQuantity: quantityInput91.value
                              });
                            } else if(food === "Rajah Medium Curry Powder 50g") {
                              order.push({
                                orderPic: "rajah medium curry powder 50g.jpg",
                                orderName: "Rajah Medium Curry Powder 50g",
                                orderPrice: 16,
                                orderQuantity: quantityInput92.value
                              });
                            } else if(food === "Rajah Mild & Spicy Curry Powder Box 50g") {
                              order.push({
                                orderPic: "rajah mild & spicy curry powder box 50g.jpg",
                                orderName: "Rajah Mild & Spicy Curry Powder Box 50g",
                                orderPrice: 16,
                                orderQuantity: quantityInput93.value
                              });
                            } else if(food === "Rajah Mild & Spice Curry Powder Envelope 7g") {
                              order.push({
                                orderPic: "rajah mild and spicy curry powder 7g.jpg",
                                orderName: "Rajah Mild & Spice Curry Powder Envelope 7g",
                                orderPrice: 4,
                                orderQuantity: quantityInput94.value
                              });
                            } else if(food === "Ritebrand Brown Spirit Vinegar 750ml") {
                              order.push({
                                orderPic: "ritebrand brown spirit vinegar 750ml.jpg",
                                orderName: "Ritebrand Brown Spirit Vinegar 750ml",
                                orderPrice: 14,
                                orderQuantity: quantityInput95.value
                              });
                            } else if(food === "Ritebrand French Polony 750g") {
                              order.push({
                                orderPic: "ritebrand french polony 750g.jpg",
                                orderName: "Ritebrand French Polony 750g",
                                orderPrice: 30,
                                orderQuantity: quantityInput96.value
                              });
                            } else if(food === "Robertsons Chicken Spice Refill 84g") {
                              order.push({
                                orderPic: "robertsons chicken spice refill 84g.jpg",
                                orderName: "Robertsons Chicken Spice Refill 84g",
                                orderPrice: 20,
                                orderQuantity: quantityInput97.value
                              });
                              } else if(food === "Robertsons Peri-Peri Spice Envelope 7g") {
                                  order.push({
                                    orderPic: "robertsons peri peri spice 7g.jpg",
                                    orderName: "Robertsons Peri-Peri Spice Envelope 7g",
                                    orderPrice: 4,
                                    orderQuantity: quantityInput98.value
                                  });
                                } else if(food === "Royco Brown Onion Soup Packet 50g") {
                                  order.push({
                                    orderPic: "royco brown soup 50g.jpg",
                                    orderName: "Royco Brown Onion Soup Packet 50g",
                                    orderPrice: 7,
                                    orderQuantity: quantityInput99.value
                                  });
                                } else if(food === "Royco Rich Oxtail Soup Packet 50g") {
                                  order.push({
                                    orderPic: "royco rich oxtail soup packet 50g.jpg",
                                    orderName: "Royco Rich Oxtail Soup Packet 50g",
                                    orderPrice: 7,
                                    orderQuantity: quantityInput100.value
                                  });
                                } else if(food === "School Buns 10 Pack") {
                                  order.push({
                                    orderPic: "school buns 10 pack.jpg",
                                    orderName: "School Buns 10 Pack",
                                    orderPrice: 13,
                                    orderQuantity: quantityInput101.value
                                  });
                                } else if(food === "Spinach Bag 300g") {
                                  order.push({
                                    orderPic: "spinach bag 300g.jpg",
                                    orderName: "Spinach Bag 300g",
                                    orderPrice: 17,
                                    orderQuantity: quantityInput102.value
                                  });
                                } else if(food === "Stewing Beef Per kg") {
                                  order.push({
                                    orderPic: "stewing beef per kg.jpg",
                                    orderName: "Stewing Beef Per kg",
                                    orderPrice: 100,
                                    orderQuantity: quantityInput103.value
                                  });
                                } else if(food === "Sweetcorn 4 Pack") {
                                  order.push({
                                    orderPic: "sweetcorn 4 pack.jpg",
                                    orderName: "Sweetcorn 4 Pack",
                                    orderPrice: 30,
                                    orderQuantity: quantityInput104.value
                                  });
                                } else if(food === "Tex Large Chocolate Bar 40g") {
                                  order.push({
                                    orderPic: "tex large chocolate 40g.jpg",
                                    orderName: "Tex Large Chocolate Bar 40g",
                                    orderPrice: 14,
                                    orderQuantity: quantityInput105.value
                                  });
                                } else if(food === "Tomatoes Bag 1kg") {
                                  order.push({
                                    orderPic: "tomatoes.jpg",
                                    orderName: "Tomatoes Bag 1kg",
                                    orderPrice: 25,
                                    orderQuantity: quantityInput106.value
                                  });
                                } else if(food === "Welington's New Recipe Tomato Sauce 700ml") {
                                  order.push({
                                    orderPic: "wellington's tomato sauce 700ml.jpg",
                                    orderName: "Welington's New Recipe Tomato Sauce 700ml",
                                    orderPrice: 39,
                                    orderQuantity: quantityInput107.value
                                  });
                                } else if(food === "Coca-Cola Original Less Sugar Soft Drink Bottle 2L") {
                                    order.push({
                                      orderPic: "coca-cola original 2l.jpg",
                                      orderName: "Coca-Cola Original Less Sugar Soft Drink Bottle 2L",
                                      orderPrice: 27,
                                      orderQuantity: quantityInput108.value
                                    });
                                  } else if(food === "Coca-Cola Original Soft Drink Bottle 440ml") {
                                        order.push({
                                          orderPic: "coca-cola original 440ml.jpg",
                                          orderName: "Coca-Cola Original Soft Drink Bottle 440ml",
                                          orderPrice: 14,
                                          orderQuantity: quantityInput109.value
                                        });
                                      } else if(food === "Cremora Coffee Creamer Box 750g") {
                                        order.push({
                                          orderPic: "cremora coffee creamer box 750g.jpg",
                                          orderName: "Cremora Coffee Creamer Box 750g",
                                          orderPrice: 67,
                                          orderQuantity: quantityInput110.value
                                        });
                                      } else if(food === "Darling Fruit Worx Mango & Peach Juice 3L") {
                                        order.push({
                                          orderPic: "darling fruit worx mango and peach juice 3l.jpg",
                                          orderName: "Darling Fruit Worx Mango & Peach Juice 3L",
                                          orderPrice: 45,
                                          orderQuantity: quantityInput111.value
                                        });
                                      } else if(food === "Ellis Brown Coffee Creamer 750g") {
                                        order.push({
                                          orderPic: "ellis brown coffee creamer 750g.jpg",
                                          orderName: "Ellis Brown Coffee Creamer 750g",
                                          orderPrice: 65,
                                          orderQuantity: quantityInput112.value
                                        });
                                      } else if(food === "Glen African Blend Tea Bags 100 Pack") {
                                        order.push({
                                          orderPic: "glen african blend tea bags 100 pack.jpg",
                                          orderName: "Glen African Blend Tea Bags 100 Pack",
                                          orderPrice: 35,
                                          orderQuantity: quantityInput113.value
                                        });
                                      } else if(food === "Jacobs Original 3-In-1 Instant Coffee Stick 18g") {
                                        order.push({
                                          orderPic: "jacobs original 3in1 instant coffee stick 18g.jpg",
                                          orderName: "Jacobs Original 3-In-1 Instant Coffee Stick 18g",
                                          orderPrice: 5,
                                          orderQuantity: quantityInput114.value
                                        });
                                      } else if(food === "Jive Cream Soda Flavoured Soft Drink Bottle 2L") {
                                        order.push({
                                          orderPic: "jive cream soda drink 2l.jpg",
                                          orderName: "Jive Cream Soda Flavoured Soft Drink Bottle 2L",
                                          orderPrice: 15,
                                          orderQuantity: quantityInput115.value
                                        });
                                      } else if(food === "Jive Pine Whizz Flavoured Soft Drink Bottle 2L") {
                                        order.push({
                                          orderPic: "jive pine whizz drink 2l.jpg",
                                          orderName: "Jive Pine Whizz Flavoured Soft Drink Bottle 2L",
                                          orderPrice: 15,
                                          orderQuantity: quantityInput116.value
                                        });
                                      } else if(food === "Jive Pineapple Spike Flavoured Soft Drink Bottle 2L") {
                                        order.push({
                                          orderPic: "jive pineapple spike drink 2l.jpg",
                                          orderName: "Jive Pineapple Spike Flavoured Soft Drink Bottle 2L",
                                          orderPrice: 15,
                                          orderQuantity: quantityInput117.value
                                        });
                                      } else if(food === "Joko Strong Quality Teabags 100 Pack") {
                                        order.push({
                                          orderPic: "joko strong qulity teabags 100 pack.jpg",
                                          orderName: "Joko Strong Quality Teabags 100 Pack",
                                          orderPrice: 65,
                                          orderQuantity: quantityInput118.value
                                        });
                                      } else if(food === "Monster Energy Drink 500ml") {
                                        order.push({
                                          orderPic: "monster energy drink 500ml.jpg",
                                          orderName: "Monster Energy Drink 500ml",
                                          orderPrice: 19,
                                          orderQuantity: quantityInput119.value
                                        });
                                      } else if(food === "NESCAFE Classic Instant Coffee 200g") {
                                        order.push({
                                          orderPic: "nescafe classic instant coffee 200g.jpg",
                                          orderName: "NESCAFE Classic Instant Coffee 200g",
                                          orderPrice: 125,
                                          orderQuantity: quantityInput120.value
                                        });
                                      } else if(food === "NESCAFE ORIGINAL 3-In-1 Instant Coffee 17.5g") {
                                        order.push({
                                          orderPic: "nescafe original 3in1 instant coffe 17.5g.jpg",
                                          orderName: "NESCAFE ORIGINAL 3-In-1 Instant Coffee 17.5g",
                                          orderPrice: 6,
                                          orderQuantity: quantityInput121.value
                                        });
                                      } else if(food === "NESCAFE RICOFFY Instant Coffee 100g") {
                                        order.push({
                                          orderPic: "nescafe ricoffy instant coffee 100g.jpg",
                                          orderName: "NESCAFE RICOFFY Instant Coffee 100g",
                                          orderPrice: 35,
                                          orderQuantity: quantityInput122.value
                                        });
                                      } else if(food === "NESCAFE RICOFFY Instant Coffee 250g") {
                                        order.push({
                                          orderPic: "nescafe ricoffy instant coffee 250g.jpg",
                                          orderName: "NESCAFE RICOFFY Instant Coffee 250g",
                                          orderPrice: 70,
                                          orderQuantity: quantityInput123.value
                                        });
                                      } else if(food === "NESCAFE RICOFFY Soluble Chicory & Coffee Granules Refill 800g") {
                                        order.push({
                                          orderPic: "nescafe ricoffy refill 800g.jpg",
                                          orderName: "NESCAFE RICOFFY Soluble Chicory & Coffee Granules Refill 800g",
                                          orderPrice: 130,
                                          orderQuantity: quantityInput124.value
                                        });
                                      } else if(food === "Power Play Original Energy Drink 440ml") {
                                        order.push({
                                          orderPic: "power play original energy drink 440ml.jpg",
                                          orderName: "Power Play Original Energy Drink 440ml",
                                          orderPrice: 15,
                                          orderQuantity: quantityInput125.value
                                        });
                                      } else if(food === "Reboost Original Flavour Energy Drink 500ml") {
                                        order.push({
                                          orderPic: "reboost original energy drink 500ml.jpg",
                                          orderName: "Reboost Original Flavour Energy Drink 500ml",
                                          orderPrice: 11,
                                          orderQuantity: quantityInput126.value
                                        });
                                      } else if(food === "Ritebrand Peach & Apricot Flavoured Dairy Blend Concentrate 1L") {
                                        order.push({
                                          orderPic: "ritebrand peach and apricot blend 1l.jpg",
                                          orderName: "Ritebrand Peach & Apricot Flavoured Dairy Blend Concentrate 1L",
                                          orderPrice: 13,
                                          orderQuantity: quantityInput127.value
                                        });
                                      } else if(food === "Spar-Letta Soft Drink Creme Soda Bottle 2L") {
                                        order.push({
                                          orderPic: "spar-letta drink creme soda 2l.jpg",
                                          orderName: "Spar-Letta Soft Drink Creme Soda Bottle 2L",
                                          orderPrice: 17,
                                          orderQuantity: quantityInput128.value
                                        });
                                      } else if(food === "Spar-Letta Iron Brew Flavour Soft Drink Bottle 2L") {
                                        order.push({
                                          orderPic: "spar-letta iron brew drink 2l.jpg",
                                          orderName: "Spar-Letta Iron Brew Flavour Soft Drink Bottle 2L",
                                          orderPrice: 17,
                                          orderQuantity: quantityInput129.value
                                        });
                                      } else if(food === "Spar-Letta Pine Nut Flavoured Soft Drink Bottle 2L") {
                                        order.push({
                                          orderPic: "spar-letta pine nut drink 2l.jpg",
                                          orderName: "Spar-Letta Pine Nut Flavoured Soft Drink Bottle 2L",
                                          orderPrice: 17,
                                          orderQuantity: quantityInput130.value
                                        });
                                      } else if(food === "Spar-Letta Soft Drink Sparberry Bottle 2L") {
                                        order.push({
                                          orderPic: "spar-letta sparberry 2l.jpg",
                                          orderName: "Spar-Letta Soft Drink Sparberry Bottle 2L",
                                          orderPrice: 17,
                                          orderQuantity: quantityInput131.value
                                        });
                                      } else if(food === "Steri Stumpie Chocolate Flavoured Milk 350ml") {
                                        order.push({
                                          orderPic: "steri stumpie chocolate milk 350ml.jpg",
                                          orderName: "Steri Stumpie Chocolate Flavoured Milk 350ml",
                                          orderPrice: 17,
                                          orderQuantity: quantityInput132.value
                                        });
                                      } else if(food === "Twist Lemon Flavoured Soft Drink Bottle 2L") {
                                        order.push({
                                          orderPic: "twist lemon drink 2l.jpg",
                                          orderName: "Twist Lemon Flavoured Soft Drink Bottle 2L",
                                          orderPrice: 17,
                                          orderQuantity: quantityInput133.value
                                        });
                                      } else if(food === "Cerebos Iodated Sea Salt 500g") {
                                        order.push({
                                          orderPic: "cerebos iodated sea salt 500g.jpg",
                                          orderName: "Cerebos Iodated Sea Salt 500g",
                                          orderPrice: 11,
                                          orderQuantity: quantityInput134.value
                                        });
                                      } else if(food === "Clover Classic Assorted Low Fat Flavoured Dairy Snack 6 x 100g") {
                                        order.push({
                                          orderPic: "clover classic dairy snack 6 x 100g.jpg",
                                          orderName: "Clover Classic Assorted Low Fat Flavoured Dairy Snack 6 x 100g",
                                          orderPrice: 23,
                                          orderQuantity: quantityInput135.value
                                        });
                                      }
        localStorage.setItem("order", JSON.stringify(order));
      };
      function addOrder() {
        for(let i = 0; i < order.length; i++) {
          orderInputting.value += `${order[i].orderName}, R${order[i].orderPrice}, Quantity: ${order[i].orderQuantity}`;
        };
      };
      addOrder();
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(orderInputting.value).then(() => {
          alert("Text copied");
        });
      });

      function removeOrder() {
        localStorage.clear();
      }

      let money = 0,
          deliveryFee = 34;
      function myMoney() {
        for(let i = 0; i < order.length; i++) {
          money += order[i].orderPrice;
        };
      };

      orderBtn.addEventListener('click', () => {
        if(!orderBtn.classList.contains('order-press')) {
          productWrapper.classList.add('hide');
          orderWrapper.classList.add('hide');
          orderBtn.classList.add('order-press');
          orderDetailsWrapper.classList.remove('hide');

          for(let i = 0; i < order.length; i++) {
            orderDetailsWrapper.innerHTML += `<p class="product-name">${order[i].orderName}</p>
                                            <p class="product-price">R${order[i].orderPrice}</p>
                                            <p class="quantity-text">Quantity: ${order[i].orderQuantity}</p>`;
          };
        } else {
          productWrapper.classList.remove('hide');
          orderWrapper.classList.add('hide');
          orderBtn.classList.remove('order-press');
          orderDetailsWrapper.classList.add('hide');
        }
        
        
      });

      cartBtn.addEventListener('click', () => {
        if(!cartBtn.classList.contains('cart-left')){
          productWrapper.classList.add('hide');
          orderWrapper.classList.remove('hide');
          cartBtn.classList.add('cart-left');
          myMoney();
          cartMoney.textContent = `R${money}`;
          if(order.length > 15) {
            deliveryFee = deliveryFee * 2;
            cartAmount.textContent = `R${deliveryFee}`;
          } else if(order.length == 0) {
            deliveryFee = 0;
            cartAmount.textContent = `R${deliveryFee}`;
          }
           else {
            cartAmount.textContent = `R${deliveryFee}`;
          };
          totalText.textContent = ` R${money + deliveryFee}`;
          
          for(let i = 0; i < order.length; i++) {
            
              orderWrapper.innerHTML += `
                                         <div class="product-container">
                                          <img src="${order[i].orderPic}" class="product-pic">
                                          <p class="product-name">${order[i].orderName}</p>
                                          <p class="product-price">R${order[i].orderPrice}</p>
                                          <p class="quantity-text">Quantity: ${order[i].orderQuantity}</p>
                                          
                                         </div>`;
            
          }
        } else {
          productWrapper.classList.remove('hide');
          orderWrapper.classList.add('hide');
          cartBtn.classList.remove('cart-left');
        }
        
        
      });

      console.log(products.length);
      

      window.onload = () => {
        searchWrapper.classList.add('hide');
        orderWrapper.classList.add('hide');
        orderInputting.classList.add('hide'); 
        orderDetailsWrapper.classList.add('hide');
      }
