"use strict"
const productWrapper = document.querySelector('.product-wrapper'),
productContainer = document.querySelector('.product-container'),
addBtn = document.querySelector('.add-btn'),
productInput = document.querySelector('.product-input'),
findBtn = document.querySelector('.find-btn'),
searchWrapper = document.querySelector('.search-wrapper'),
headerWrapper = document.querySelector('.header-wrapper'),
cartBtn = document.querySelector('.cart-btn');
const quantityInput = document.querySelector('.quantity-input'),
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
cartWrapper = document.querySelector('.cart-wrapper'),
orderWrapper = document.querySelector('.order-wrapper'),
orderNumber = document.querySelector('.order-number');
const orderBtn = document.querySelector('.order-btn');
const orderInput = document.querySelector('.order-input');

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
          productPic: "baumanns marie bisquits 150g.jpg",
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
          productPic: "blossom spread 25% fat spread 1kg.jpg",
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
          productPic: "Jungle Oats 1kg.jpg",
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
                                        <button class="add-btn" onclick="ordering(\`${products[i].productName}\`, \`${quantityInput.value = 1}\`, \`${quantityInput1.value = 1}\`, \`${quantityInput2.value = 1}\`, \`${quantityInput3.value = 1}\`, \`${quantityInput4.value = 1}\`, \`${quantityInput5.value = 1}\`, \`${quantityInput6.value = 1}\`, \`${quantityInput7.value = 1}\`, \`${quantityInput8.value = 1}\`, \`${quantityInput9.value = 1}\`, \`${quantityInput10.value = 1}\`, \`${quantityInput11.value = 1}\`, \`${quantityInput12.value = 1}\`, \`${quantityInput13.value = 1}\`, \`${quantityInput14.value = 1}\`, \`${quantityInput15.value = 1}\`, \`${quantityInput16.value = 1}\`, \`${quantityInput17.value = 1}\`, \`${quantityInput18.value = 1}\`, \`${quantityInput19.value = 1}\`, \`${quantityInput20.value = 1}\`, \`${quantityInput21.value = 1}\`, \`${quantityInput22.value = 1}\`, \`${quantityInput23.value = 1}\`, \`${quantityInput24.value = 1}\`, \`${quantityInput25.value = 1}\`, \`${quantityInput26.value = 1}\`, \`${quantityInput27.value = 1}\`, \`${quantityInput28.value = 1}\`, \`${quantityInput29.value = 1}\`, \`${quantityInput30.value = 1}\`, \`${quantityInput31.value = 1}\`, \`${quantityInput32.value = 1}\`, \`${quantityInput33.value = 1}\`, \`${quantityInput34.value = 1}\`, \`${quantityInput35.value = 1}\`, \`${quantityInput36.value = 1}\`, \`${quantityInput37.value = 1}\`, \`${quantityInput38.value = 1}\`, \`${quantityInput39.value = 1}\`, \`${quantityInput40.value = 1}\`, \`${quantityInput41.value = 1}\`, \`${quantityInput42.value = 1}\`, \`${quantityInput43.value = 1}\`, \`${quantityInput44.value = 1}\`, \`${quantityInput45.value = 1}\`, \`${quantityInput46.value = 1}\`, \`${quantityInput47.value = 1}\`, \`${quantityInput48.value = 1}\`)">Add</button>
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
            }
        localStorage.setItem("order", JSON.stringify(order));
      };

      function removeOrder() {
        localStorage.clear();
      }

      cartBtn.addEventListener('click', () => {
        if(!cartBtn.classList.contains('cart-left')){
          productWrapper.classList.add('hide');
          orderWrapper.classList.remove('hide');
          cartBtn.classList.add('cart-left');
          
          for(let i = 0; i < order.length; i++) {
            
              orderWrapper.innerHTML += `<div class="product-container">
                                          <img src="${order[i].orderPic}" class="product-pic">
                                          <p class="product-name">${order[i].orderName}</p>
                                          <p class="product-price">R${order[i].orderPrice}</p>
                                          <p class="quantity-text">Quantity: ${order[i].orderQuantity}</p>
                                          <button class="remove-btn" onclick="removeOrder()">Remove</button>
                                         </div>`;
            
          }
        } else {
          productWrapper.classList.remove('hide');
          orderWrapper.classList.add('hide');
          cartBtn.classList.remove('cart-left');
        }
        
        
      });

      console.log(products.length);

      orderBtn.addEventListener('click', () => {
        for(let i = 0; i < order.length; i++){
          orderInput.value += ` Order Pic: ${order[i].orderPic}, Order Name: ${order[i].orderName}, Order Price: R${order[i].orderPrice}, Quantity: ${order[i].orderQuantity} `;
        };
        
      });
      
      orderInput.classList.add('hide');

      window.onload = () => {
        searchWrapper.classList.add('hide');
        orderWrapper.classList.add('hide');
      }