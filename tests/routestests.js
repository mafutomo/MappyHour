const assert = require('assert')
const routes = require('../server/routes/routes.js')
const request = require('supertest')
const server = require('../server.js')
const bcrypt = require('bcrypt')
const addDatabaseHooks = require('./utils')
const {
  suite,
  test
} = require('mocha');
suite('part2 routes', addDatabaseHooks(() => {
  test('GET/ restraunts', function(done) {
    request(server)
      .get('/restaurants')
      .set('Accept', 'application/json')
      .expect((res) => {
        res.body.map((resi) => {
          delete resi.created_at
          delete resi.updated_at
          delete resi.averageRating
          delete resi.id
          delete resi.lat
          delete resi.lng
        })
      })
      .expect(200, [{
          name: 'Amante Coffee',
          address: '1035 Walnut St Boulder, CO 80302',
          phonenumber: '303-546-9999',

          description: 'Coffee / Tea / Juice / Treats',
          url: 'http://www.amantecoffee.com/',
          picture: "https://static.rootsrated.com/image/upload/s--WVcgyS97--/t_rr_large_traditional/qjdzt1ux48dmqfqbngj9.jpg",
          happyHourMenu: 'Daily 3 - 6pm | Food: $3.5 Affogato & Gelato | Drinks: $3 Carlsberg Beer, $5 Coffee Cocktails, $3 Wells, $1 off Wine, $5 Shottino'
        }, {
          name: 'Arcana Restaurant',
          address: '909 Walnut St Boulder, CO 80302',
          phonenumber: '303-444-3885',
          description: 'Contemporary / Fine Dining',
          url: 'http://arcanarestaurant.com/',
          picture: 'http://lifestylepubs.wordpress.s3-us-west-2.amazonaws.com/app/uploads/prod/2016/03/2G7A8475.jpg',
          happyHourMenu: 'Daily 5 - 6pm | $3 Beer, $4 Cider, $5 Wine, $7 West Side Daiquiri, American 75 and BBQ Old Fashioned. $6 Shot & a Beer, $7 Crispy Pork Rinds, Arcana Wings, Bon Bon and Macaron Plate, $8 Grilled Head Cheese'
        },
        {
          name: 'The Attic Bar & Bistro',
          address: '949 Walnut St Boulder, CO 80302',
          phonenumber: '303-415-1300',
          description: 'Casual / Late Night Eats',
          url: 'http://www.atticbistro.com/',
          picture: 'https://res.cloudinary.com/simpleview/image/fetch/f_auto,q_75/http://Boulder.simpleviewcrm.com/images/listings/original_attic-bar-3.jpg',
          happyHourMenu: 'Monday - Saturday 3 - 6pm, Sunday 9pm - Close | Food: Appetizer Specials | Drinks: $3 Wells, Drafts, and Fat Alberts, $3.75 Wines'
        },
        {
          name: 'Bohemian Biergarten',
          address: '2017 13th St Boulder, CO 80302',
          phonenumber: '720-328-8328',
          description: 'Casual / Late Night Eats / Night Spots',
          url: 'http://www.bohemianbiergarten.com/',
          picture: 'http://yourboulder.com/wp-content/uploads/2013/10/bohemian-biergarten-boulder.jpg',
          happyHourMenu: 'Daily 3 - 6pm, Monday & Sunday: 9pm - Close | Food & Drink Combos: $12 Half Litre Bier and regular Sausage OR Pierogies OR Pretzel Sausage OR Side Salad OR Goulash Boat, $14 Half Litre Bier and One Special Sausage of your choice | Drinks: $1 off .5L, $2 off 1L, $3 Well Drinks, $1 off wine, Tuesday: $8 Das Boot all day, Wednesday: $2 off House Wine'
        },
        {
          name: 'Boulder ChopHouse & Tavern',
          address: '921 Walnut St Suite 100 Boulder, CO 80302',
          phonenumber: '303-443-1188',
          description: 'Contemporary / Fine Dining',
          url: 'http://www.chophouse.com/',
          picture: 'http://firstbiteboulder.com/wp-content/uploads/2016/10/Boulder-ChopHouse.jpg',
          happyHourMenu: 'Daily 4 - 6pm | Food: 1/2 Price Tavern Menu Food, $4-13 Starters & Entrees | Drinks: $3.5 Draft Beer, $4.5 Wine and Well Drinks, $5.5 Specialty Cocktails'
        },
        {
          name: 'Brasserie Ten Ten',
          address: '1011 Walnut St Boulder, CO 80302',
          phonenumber: '303-998-1010',
          description: 'Contemporary / Fine Dining',
          url: 'https://www.brasserietenten.com/',
          picture: 'https://www.brasserietenten.com/wp-content/uploads/2014/05/street-600x403.jpg',
          happyHourMenu: 'Daily 3 - 6:30pm | Food: Discounted hors d\'oeuvres | Drinks: $3.25 Tap Beer, $4.5 Featured Wine, $4.5-6 Cocktails'
        },
        {
          name: 'Centro Mexican Kitchen',
          address: '950 Pearl St Boulder, CO 80302',
          phonenumber: '303-442-7771',
          description: 'Mexican / Latin / South American',
          url: 'https://www.centromexican.com/',
          picture: 'https://s3-media4.fl.yelpcdn.com/bphoto/WGDByQB4wNTL80Rz2Mm-JQ/348s.jpg',
          happyHourMenu: 'All Night Monday, Tuesday - Sunday 2:30 - 6pm | Food: $3 Tacos, $4-8 Appetizers| Drink: $3 Can Beer, $4 Draft Beer, $5 House Wine, $6 Draft Mojito, Sangria, Sol Del Playa, $5-7 Coin Marg'
        },
        {
          name: 'The Cheesecake Factory',
          address: '1401 Pearl St Suite 100 Boulder, CO 80302',
          phonenumber: '303-546-0222',
          description: 'Casual',
          url: 'https://www.thecheesecakefactory.com/',
          picture: 'https://media-cdn.tripadvisor.com/media/photo-s/09/3f/57/1e/cheesecake-anyone.jpg',
          happyHourMenu: 'Monday - Friday 4 - 6pm | Food: $5.95 Small Plates and Appetizers | Drinks: $5.95 Specialty Cocktails, $4.95 Wells and Wine, $3.25 Beers'
        },
        {
          name: 'Eureka!',
          address: '1048 Pearl St Suite 105 Boulder, CO 80302',
          phonenumber: '720-259-3636',
          description: 'Casual / Late Night Eats /Weekend Brunch',
          url: 'http://eurekarestaurantgroup.com/',
          picture: 'https://www.boulderdowntown.com/_files/images/eureka_storefront_2016.jpg',
          happyHourMenu: '"Hoppy" Hour Daily 2 - 6pm & 9pm - Close | Food: Appetizer Specials | Drinks: $1 off permanent Beers, $2 off local Spirits'
        },
        {
          name: 'Foolish Craig\'s Cafe',
          address: '1611 Pearl St Boulder, CO 80302',
          phonenumber: '303-247-9383',
          description: 'Breakfast / Casual',
          url: 'http://foolishcraigs.com/',
          picture: 'https://www.boulderdowntown.com/_files/images/foolishcraigs_storefront_2015.jpg',
          happyHourMenu: 'Monday - Friday 3 - 6pm & Sunday 5pm - Close | Food: Appetizers $6 and under | Drinks: Coors Light cans $3, Draft Beer $3.50-6, Well Cocktails $4, Import & Micro bottles $3.50, House Wines $5'
        },
        {
          name: 'Hapa Sushi Grill & Sake Bar',
          address: '1117 Pearl St Boulder, CO 80302',
          phonenumber: '303-473-4730',
          description: 'Asian / Sushi / Indian',
          url: 'https://hapasushi.com/',
          picture: 'https://www.boulderdowntown.com/_files/images/hapa_storefront_2015.jpg',
          happyHourMenu: 'Monday - Saturday 2:30 - 5:30pm & Thursday - Saturday 10pm-Midnight | Food: $7.90 for 2 beginner rolls & 1/2 price Hapa starters and traditional starters | Drinks: $3.50 Hapa Beer. $3.50 Hot Sake and $3 Fruit Infused Sake. $4.5 Sake Cocktails & Well Drinks. $5 House Wine. $8.5 Sake Bombs.'
        },
        {
          name: 'Illegal Pete\'s, Inc.',
          address: '1447 Pearl St Boulder, CO 80302',
          phonenumber: '303-440-3955',
          description: 'Mexican / Latin / South American',
          url: 'http://www.illegalpetes.com/',
          picture: 'https://sirvo.com/wp-content/uploads/2016/05/illegalpetes_storefront_2015-1.jpg',
          happyHourMenu: 'Daily 3 - 8pm, Thursday - Saturday 11:00pm - 1:00am | Food: Free chips & salsa with bar drink | Drinks: $4 House Margs, $2.50 Domestic Drafts, $2.50 Wells, $3.50 Select Craft Drafts, $3 Wells'
        },
        {
          name: 'Japango',
          address: '1136 Pearl St Boulder, CO 80302',
          phonenumber: '303-938-0330',
          description: 'Asian / Sushi / Indian',
          url: 'http://www.boulderjapango.com/',
          picture: 'http://www.usmenuguide.com/japangonew2.jpg',
          happyHourMenu: 'Daily Lunchtime 11 am - 3pm, Afternoon 3 - 6pm , Friday and Saturday Late Night 10 - 11pm | Food: (Lunchtime) $3 Handrolls, Discounted Nigiri & Sashimi, $8.5, Featured Bento Box, (Daily Afternoon) $3-5 Bar Menu Items, $2 off Special Rolls, $3 Handrolls, Kirin Draft & Hot Sake (small), $5 Well Drinks & House Wine, $6 Hot Sake (large), $7 Bartender’s Choice Cocktail, House Sangria, (Late Night) 1/2 off Special Rolls, $3 Handrolls, Sapporo Draft & Hot Sake, $4 House Wine, $6 Premium Spirits'
        },
        {
          name: 'Jax Fish House',
          address: '928 Pearl St Boulder, CO 80302',
          phonenumber: '303-444-1811',
          description: 'Contemporary / Fine Dining',
          url: 'http://jaxboulder.com/',
          picture: 'http://diningoutwp.funjuczse.maxcdn-edge.com/denverboulder/wp-content/uploads/sites/13/2015/07/Jax-Fish-House-Oysters.jpg',
          happyHourMenu: 'Daily 4 - 6pm, Monday All Night | Food: $1.50 Oysters, $5-12 Small Plates | Drinks: $4-10 Cocktails, $5-6 Wine, $2.25 Oyster Shooters, $1 off ALL Draft Beers, $7 Jax Mule.'
        },
        {
          name: 'Jill\'s Restaurant & Bistro',
          address: '900 Walnut St Boulder, CO 80302',
          phonenumber: '720-406-7399',
          description: 'Breakfast / Contemporary / Fine Dining',
          url: "http://www.stjulien.com/eat-drink/jill's-restaurant-and-bistro",
          picture: 'https://www.boulderdowntown.com/_files/images/jills_storefront_2015.jpg',
          happyHourMenu: ' Daily 4 - 6pm | Food: $4.95-9.95 small plates & snacks | Drinks: $4 Draft Beers, $5 House Wines, $7 Bellinis and Cocktails'
        },
        {
          name: 'Lazy Dog Sports Bar & Grill',
          address: '1346 Pearl St Boulder, CO 80302',
          phonenumber: '303-440-3355',
          description: 'Casual / Night Spots',
          url: 'http://www.thelazydog.com/',
          picture: 'https://www.boulderdowntown.com/_files/images/lazydog_storefront_2015.jpg',
          happyHourMenu: 'Monday - Friday 3 - 6pm | Food: $5 select appetizers, .50 cent Wings | Drinks: $3 Drafts, $3 Wells, $4 House Wines'
        },
        {
          name: 'Leaf',
          address: '2010 16th St Boulder, CO 80302',
          phonenumber: '303-442-1485',
          description: 'Contemporary / Fine Dining / Vegitarian',
          url: 'http://www.leafvegetarianrestaurant.com/',
          picture: 'https://www.boulderdowntown.com/_files/images/leafvegetarian_storefront_2015.jpg',
          happyHourMenu: 'Daily 3 - 6pm | Food: $3-7.5 small plates and salads | Drinks: $4.5 Well Cocktails, $7-8 Premium Cocktails, $5 House Wine, $4-6 Tap Beers'
        },
        {
          name: 'License No. 1',
          address: '2115 13th St Boulder, CO 80302',
          phonenumber: '303-443-0486',
          description: 'Night Spots',
          url: 'http://boulderado.com/dining-drinks/license',
          picture: 'https://static1.squarespace.com/static/5759cab3cf80a13a8191b520/5759dd074c2f85212d78cc6c/5759dd78d210b8b40dafa4aa/1465507202018/IMG_6366.jpg',
          happyHourMenu: 'Daily 5 - 7pm | Food: $3-7 small plates | Drinks: $3 Draft Beers, $6 Select Cocktails, 5$ House Wines'
        },
        {
          name: 'Mateo',
          address: '1837 Pearl St Boulder, CO 80302',
          phonenumber: '303-443-7766',
          description: 'Contemporary / Fine Dining',
          url: 'http://www.mateorestaurant.com/',
          picture: 'http://www.boulderweekly.com/wp-content/uploads/2010/05/697.jpg',
          happyHourMenu: 'Monday - Friday 3 - 6 pm | Food: $2-7 Appetizers, $7-13 meals | Drinks: Beers on tap half off & all Vino by the glass $3 off (ask about our bottle special)'
        },
        {
          name: 'Moongate Asian Bistro',
          address: '1628 Pearl St Boulder, CO 80302',
          phonenumber: '720-406-8888',
          description: 'Asian / Sushi / Indian',
          url: 'http://moongateasianbistro.com/',
          picture: 'http://file1.chinesemenu.com/307145571/201203272249598.jpg',
          happyHourMenu: 'Daily 5 - 10pm | Drinks: Discounted Saki and Domestic Beers'
        },
        {
          name: 'Mountain Sun Pub & Brewery',
          address: '1535 Pearl St Boulder, CO 80302',
          phonenumber: '303-546-0886',
          description: 'Brewpubs / Casual',
          url: 'http://www.mountainsunpub.com/',
          picture: 'https://boulderhomes.co/wp-content/uploads/2017/11/mountain-sun-pub-and-brewery-boulder-colorado-boulderhomes-for-sale-svein-groem.png',
          happyHourMenu: 'Daily 4 - 6pm & 9pm - close | Food: $3.95 - 5.95 Appetizers & Salads | Drinks: $3.5 Flagship Beers, $10.5 Pitchers, $5 Wine by the glass & Cocktails'
        },
        {
          name: 'Next Door',
          address: '1035 Pearl St Boulder, CO 80302',
          phonenumber: '720-542-8159',
          description: 'Casual',
          url: 'http://www.thekitchen.com/nextdoor-boulder',
          picture: 'http://draftmag.com/wp-content/uploads/KitchenNextDoorBoulder.jpg',
          happyHourMenu: 'Daily 3 - 6pm & 9pm - Close | Food: $3-5 snacks | Drinks: $3 Beer, $6 Wine, $5 Specialty Cocktails | Late Night ½ price specials on select beer pitchers & wine bottles'
        },
        {
          name: 'Nick-N-Willy\'s Pizza',
          address: '801 Pearl St Boulder, CO 80302',
          phonenumber: '303-444-9898',
          description: 'Italian / Mediterranean / Pizza',
          url: 'http://nicknwillyspizzaboulder.com/',
          picture: 'https://www.boulderdowntown.com/_files/images/nicknwillys_storefront_2015.jpg',
          happyHourMenu: 'Monday - Thursday, 4:30 pm - 6:30 pm | Food: Reduced price on select Pizzas | Drinks: Reduced price on select drinks'
        },
        {
          name: 'OAK at fourteenth',
          address: 'Boulder, CO 80302',
          phonenumber: '303-444-3622',
          description: 'Contemporary / Fine Dining',
          url: 'http://oakatfourteenth.com/',
          picture: 'https://cdn.vox-cdn.com/thumbor/AVSEhZRa3yUwsN_drL2CDZYm76Y=/48x0:750x527/1200x800/filters:focal(48x0:750x527)/cdn.vox-cdn.com/uploads/chorus_image/image/51637615/OAK_9625e.0.0.0.jpg',
          happyHourMenu: 'Monday - Saturday 2:30 - 5:30pm | Food: Reduced price small plates and appetizers | Drinks: $6 Cocktails, $8 Dealer’s Choice Cocktail, $2 Coors/Coors Light, $3 Avery IPA & White Rascal'
        },
        {
          name: 'Pasta Jay\'s',
          address: '1001 Pearl St Boulder, CO 80302',
          phonenumber: '303-444-5800',
          description: 'Italian / Mediterranean / Pizza',
          url: 'http://www.pastajay.com/',
          picture: 'https://www.boulderdowntown.com/_files/images/pastajays_storefront_2015.jpg',
          happyHourMenu: 'Daily 3 - 6pm | Food: Reduced price on select dishes (dishes vary each night) | Drinks: $3 Beer & House Wine'
        },
        {
          name: 'Pearl Street Pub & Cellar',
          address: '1108 Pearl St Boulder, CO 80302',
          phonenumber: '303-939-9900',
          description: 'Casual / Late Night Eats',
          url: 'https://www.yelp.com/biz/pearl-street-pub-and-cellar-boulder-2',
          picture: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/51324429/pearlstreetpub_storefront_2015.0.0.jpg',
          happyHourMenu: 'Daily 4 - 7pm | Food: $2 Wings (6), $2.75 Sliders | Drinks: $3.25 Well Drinks, $3 Microbrew Drafts, $2.5 Bud Drafts'
        },
        {
          name: 'Pizzeria Locale',
          address: '1730 Pearl St Boulder, CO 80302',
          phonenumber: '303-442-3003',
          description: 'Italian / Mediterranean / Pizza',
          url: 'http://www.pizzerialocale.com/',
          picture: 'https://www.boulderdowntown.com/_files/images/pizza-locale--storefront-oct13.jpg',
          happyHourMenu: 'Daily 3:30 - 5:30pm | Food: $2-5 small plates and appetizers, $5-9 pizzas | Drinks: $2.50-5 Wine, Cocktails & Beer'
        },
        {
          name: 'PMG',
          address: '2018 10th St Boulder, CO 80302',
          phonenumber: '303-786-8585',
          description: 'Contemporary / Fine Dining',
          url: 'http://pmgwine.com/',
          picture: 'https://i2.wp.com/www.suitcasegetaways.com/wp-content/uploads/2015/11/PMG-Boulder-CO-2014.jpg?fit=1030%2C687',
          happyHourMenu: 'Daily 4 - 6 pm | Food: $5 Snack Items | Drinks: $5 Wine & Beer, $7 Cocktails'
        },
        {
          name: 'Press Play',
          address: '1005 Pearl St Boulder, CO 80302',
          phonenumber: '720-508-4916',
          description: 'Night Spots',
          url: 'http://www.pressplaybar.com/',
          picture: 'https://images1.westword.com/imager/press-play-arcade-bar-is-now-open-for-busi/u/original/6407644/pressplay2.jpg',
          happyHourMenu: 'Daily 4 - 7pm | Food: $6 Cheese pizza, $8 Two topping pizza. | Drinks: $3 Wells & Wine, 3$ Domestic Beers, $3.50 Import Beers.'
        },
        {
          name: 'Riffs Urban Fare',
          address: '1115 Pearl St Boulder, CO 80302',
          phonenumber: '303-440-6699',
          description: 'Contemporary / Fine Dining',
          url: 'http://riffsboulder.com/',
          picture: 'https://www.boulderdowntown.com/_files/images/riffs_storefront_2015.jpg',
          happyHourMenu: 'Monday - Friday 3 - 5pm | Food: $3-12 small plates menu | Drinks: $2 off Draft Beers, $6 Select Cocktails and 33% off Wine list'
        },
        {
          name: 'Rio Grande Mexican Restaurant',
          address: '1101 Walnut St Boulder, CO 80302',
          phonenumber: '303-444-3690',
          description: 'Mexican / Latin / South American',
          url: 'http://www.riograndemexican.com/',
          picture: 'http://www.r3design.net/wp-content/uploads/2015/11/RIO-GRANDE-PATIO.jpg',
          happyHourMenu: 'Monday - Friday 3 - 6pm. Thursday Late Night Happy Hour 9pm - 12am | Food: $1 off small plate menu, $3 Tacos | Drinks: $1 off Classic Rio Margs & Big Tex Margs, $3 draft beers, Tecate cans & shots of Cinge'
        },
        {
          name: 'Rueben\'s Burger Bistro',
          address: '1800 Broadway Suite 150 Boulder, CO 80302',
          phonenumber: '303-443-5000',
          description: 'Casual',
          url: 'http://ruebensburgerbistro.com/',
          picture: 'https://www.boulderdowntown.com/_files/images/ruebens600x400.jpg',
          happyHourMenu: 'Daily 3 - 6pm, Sunday ALL DAY | Food: 1/2 off signature starters| Drinks: 1/2 off Draft beers, Wine & Signature Cocktails'
        },
        {
          name: 'SALT the Bistro',
          address: '1047 Pearl St Boulder, CO 80302',
          phonenumber: '303-444-7258',
          description: 'Contemporary / Fine Dining',
          url: 'Contemporary / Fine Dining ',
          picture: 'http://saltthebistro.com/wp-content/uploads/2012/12/IMG_9703.jpg',
          happyHourMenu: 'Daily 3 - 5pm | Food: $2-7 assorted appetizers, $15 Meat & Cheese plate | Drinks: $4 Drafts, $3 Selected Bottled Beer, $4 Wine, $6 Cocktails, $7 Featured Cocktails'
        },
        {
          name: 'Sforno Trattoria Romana',
          address: '1308 Pearl St Boulder, CO 80302',
          phonenumber: '303-449-1787',
          description: 'Italian / Mediterranean / Pizza',
          url: 'http://www.sfornoboulder.com/location.html',
          picture: 'https://www.boulderdowntown.com/_files/images/sforno_storefront_2015.jpg',
          happyHourMenu: 'Daily 3 - 6pm, Mondays 3pm - Close | Food: $4-5 small plates, $8-10 Pizzas, $5-8 House Specialties | Drinks: $1 off Draft & Bottled Beers, $4 House Wine, $6 Cocktails'
        },
        {
          name: 'Sherpa\'s Adventurers Restaurant & Bar',
          address: '825 Walnut St Boulder, CO 80302',
          phonenumber: '303-440-7151',
          description: 'Asian / Sushi / Indian',
          url: 'http://www.sherpasrestaurant.com/',
          picture: 'https://www.boulderdowntown.com/_files/images/sherpas_storefront_2015.jpg',
          happyHourMenu: 'Daily 5 - 7pm | Drinks: $2 Select Draft Beers'
        },
        {
          name: 'Sushi Zanmai',
          address: '1221 Spruce St Boulder, CO 80302',
          phonenumber: '303-440-0733',
          description: 'Asian / Sushi / Indian',
          url: 'http://www.sushizanmai.com/',
          picture: 'https://www.boulderdowntown.com/_files/images/sushi-zanmai-storefront-oct13.jpg',
          happyHourMenu: 'Monday - Friday 11:30am - 2pm | Monday - Saturday 5 - 6:30pm | Saturday Super Happy Hour 10 - 11pm | Sunday 5 - 10pm | Food: Reduced price on select sushi and various menu items | Drinks: Discounted Saki, Select Beers & Cocktails.'
        },
        {
          name: 'T/ACO',
          address: '1175 Walnut St Boulder, CO 80302',
          phonenumber: '303-443-9468',

          description: 'Mexican / Latin / South American',
          url: 'http://www.tacocolorado.com/',
          picture: 'http://gracefullplate.com/wp-content/uploads/2012/05/H-Burger.jpg',
          happyHourMenu: '2 -6 pm Daily | Food: $2 Street Tacos | Drinks: $3 Draft Beer, $4 House Marg, $5 Silver Shot, $6 Juicy Marg'
        },
        {
          name: 'Tahona Tequila Bistro',
          address: '1035 Pearl St Boulder, CO 80302',
          phonenumber: '303-938-9600',
          description: 'Mexican / Latin / South American',
          url: 'http://www.tahonaboulder.com/',
          picture: 'https://i.pinimg.com/originals/05/6a/1d/056a1d26a609dab94bda16db7058d36f.jpg',
          happyHourMenu: 'Monday ALL NIGHT | Tuesday - Thursday 4 - 6pm | Friday- Sunday 11:30am - 6pm | Food: $3.50 Daily Tamale, $2 Chips & Salsa, $5 Chips & Tres Salsas, $2.75 Tacos, $4.5-6.5 Small Plates | Drink: $4.50 Well Margs & House Wine, $4 Tequila shooters; $4 Wells & Draft Beer, $4 Tequila Infusion Shooters'
        },
        {
          name: 'Ted\'s Montana Grill',
          address: '1701 Pearl St Boulder, CO 80302',
          phonenumber: '303-449-5546',
          description: 'Casual',
          url: 'http://www.tedsmontanagrill.com/',
          picture: 'https://www.boulderdowntown.com/_files/images/teds--storefront-oct13.jpg',
          happyHourMenu: 'Daily 3 - 6pm | Food: $3 Onion Rings & Bison Nachos. $4 Homemade Chips, $5 Lucky Burger, $6 Beef or $8 Bison Sliders | Drinks: $3 Select Draft Beers, $6 Wine by the glass, $6 Margarita, Sangria & other Cocktails'
        },
        {
          name: 'The Corner Bar',
          address: '2115 13th St Boulder, CO 80302',
          phonenumber: '303-442-4560',
          description: 'Casual',
          url: 'http://cornerbarboulderado.com/',
          picture: 'https://media-cdn.tripadvisor.com/media/photo-s/02/a2/bf/83/filename-corner-bar-building2.jpg',
          happyHourMenu: 'Daily 3 - 6pm | Food: Appetizers & Small Plates $3-10 | $6 Cocktails, Select Wines $4-10, $4 Draft Beers'
        },
        {
          name: 'The Kitchen',
          address: '1039 Pearl St Boulder, CO 80302',
          phonenumber: '303-544-5973',
          description: 'Contemporary / Fine Dining',
          url: 'http://www.thekitchen.com/',
          picture: 'http://photos-albums.com/wp-content/uploads/2017/05/inspiring-brown-rectangle-modern-wooden-the-kitchen-boulder-stained-design.jpg',
          happyHourMenu: 'Monday - Friday 3 - 5pm | Food: $3 Appetizers & $8 Plates | Drinks $4 Beers, $6 Wine by the glass, $5 Cocktails'
        },
        {
          name: 'The Mediterranean',
          address: '1002 Walnut St Boulder, CO 80302',
          phonenumber: '303-444-5335',
          description: 'Contemporary / Fine Dining',
          url: 'http://www.themedboulder.com/',
          picture: 'https://www.boulderdowntown.com/_files/images/themed_storefront_2015.jpg',
          happyHourMenu: 'Monday - Saturday 3 - 6:30pm & 9pm - Close, Sunday 3 - 6:30pm & 8pm - Close | Food: Discounted Tapas, $6.5 Margherita Pizzas | Drinks: $1 off Draft Beers, $5 Sangria, $5 Well Cocktails and House Wine, $6.5 House Margarita or Well Martini'
        },
        {
          name: 'Upstairs',
          address: '1039 Pearl St Boulder, CO 80302',
          phonenumber: '303-544-5973',
          description: 'Contemporary / Fine Dining',
          url: 'http://thekitchen.com/',
          picture: 'http://olivertwistbistro.com/wp-content/uploads/2017/09/best-restaurants-boulder-brasserie-ten-ten-boulder-co-kitchen-upstairs-with-desig-idea-romantic-with-lamp-light.jpg',
          happyHourMenu: 'Daily 5:30 - 6:30pm | Food: $5 Appetizers, $8 Pizza, $14 Mussels | Drinks: $4 Select Beers, $5-7 Cocktails, $6 Wines by the glass'
        },
        {
          name: 'Walrus Saloon',
          address: '1911 11th St Boulder, CO 80302',
          phonenumber: '303-443-9902',
          description: 'Night Spots',
          url: 'http://www.boulderwalrus.com/',
          picture: 'https://www.boulderdowntown.com/_files/images/walrus_storefront_2015.jpg',
          happyHourMenu: 'Monday - Saturday 4pm - 8pm | Food: $6 Cheese Pizza, $8 2-Topping Pizza | Drinks: $3 Wells/Wines, $3 Domestic Beers, $3.5 Import Beers | Sunday Specials: $1 Mystery Cans, $2 Domestics, $3 You-Call-Its'
        },
        {
          name: 'West End Tavern',
          address: '1125 Pearl St Boulder, CO 80302',
          phonenumber: '303-444-3535',
          description: 'Casual',
          url: 'http://www.thewestendtavern.com/',
          picture: 'https://img2.10bestmedia.com/Images/Photos/300809/p-1978578-10152912898725572-4761211931405087302-o_54_990x660.jpg',
          happyHourMenu: 'Monday - Friday 3 - 6pm | Late Night Thursday - Saturday 9pm - 12am | Food: $2-6 “Good Eats” | Drinks: $1 off Drafts, $3 PBR Tall Boy Can, $3.5 Premium Cans, $2.5 “Workin’ Man Cans”, $5 House Wine, Cocktails, Shot & Beer Combo, $3.5 Well Drinks, $3 Mystery Shot'
        },
        {
          name: 'West Flanders Brewing Company',
          address: ' Boulder, CO 80302',
          phonenumber: '303-447-2739',
          description: 'Brewpubs / Casual',
          url: 'http://www.wfbrews.com/',
          picture: 'https://res.cloudinary.com/simpleview/image/fetch/f_auto,q_75/http://Boulder.simpleviewcrm.com/images/listings/original_westflanders0.jpg',
          happyHourMenu: 'Monday - Friday 3 - 6 pm, all day Tuesdays, when it\'s below 20 degrees outside and during all Broncos games | Food: $2 off apps | Drinks: $2 off full pour House Beer, $6 House Wines, $7 Specialty Cocktails and $2 off Crowlers.'
        },
        {
          name: 'Wild Standard',
          address: '1043 Pearl St Boulder, CO 80302',
          phonenumber: '720-638-4800',
          description: 'Contemporary / Fine Dining',
          url: 'http://wildstandard.com/',
          picture: 'https://images1.westword.com/imager/u/original/7769758/wild-standard-int.jpg',
          happyHourMenu: 'Daily 3 - 5pm | Food: $2-9 assorted appetizers, $2 Wild Standard Oysters | Drinks: $4 Draft Beer, $5 House Wine, $5 Well Spirits'
        },
        {
          name: 'Zeal',
          address: '1710 Pearl St Boulder, CO 80302',
          phonenumber: '720-708-6309',
          description: 'Casual',
          url: 'http://www.zealfood.com/',
          picture: 'https://i.pinimg.com/736x/a9/f6/30/a9f630372a23a048ebd3a2af7e6950ad.jpg',
          happyHourMenu: 'Monday - Friday 3:30 - 5:30pm | Food: $5 Small Plates or 3 for $13, $7 Small Bowls | Drinks: $2 off Cocktail Menu, Beer on Tap $2.5 (short) & $3.5 (pint), $6 Wines, $5 Juice on Tap'
        }
      ], done)
  });
  test('GET /restraunts/:name', function(done) {
    request(server)
      .get('/restaurants/Bohemian Biergarten')
      .set('Accept', 'application/json')
      .expect((res) => {
        delete res.body.created_at
        delete res.body.updated_at
        delete res.body.averageRating
        delete res.body.id
      })
      .expect(200, {
        name: 'Bohemian Biergarten',
        address: '2017 13th St Boulder, CO 80302',
        phonenumber: '720-328-8328',
        description: 'Casual / Late Night Eats / Night Spots',
        lat: "40.018719",
        lng: "-105.279125",
        url: 'http://www.bohemianbiergarten.com/',
        picture: 'http://yourboulder.com/wp-content/uploads/2013/10/bohemian-biergarten-boulder.jpg',
        happyHourMenu: 'Daily 3 - 6pm, Monday & Sunday: 9pm - Close | Food & Drink Combos: $12 Half Litre Bier and regular Sausage OR Pierogies OR Pretzel Sausage OR Side Salad OR Goulash Boat, $14 Half Litre Bier and One Special Sausage of your choice | Drinks: $1 off .5L, $2 off 1L, $3 Well Drinks, $1 off wine, Tuesday: $8 Das Boot all day, Wednesday: $2 off House Wine'
      }, done)
  });
  test('GET /favorites/:id', function(done) {
    request(server)
      .get('/favorites/1') //must update manually
      .set('Accept', 'application/json')
      .expect((res) => {
        res.body.map((resi) => {
          delete resi.created_at
          delete resi.updated_at
          delete resi.averageRating
        })
      })
      .expect(200, [{
        id: 2,
        rating: 3,
        user_id: 1,
        restaurant_id: 2,
        name: 'Arcana Restaurant',
        address: '909 Walnut St Boulder, CO 80302',
        phonenumber: '303-444-3885',
        lat: "40.016256",
        lng: "-105.283216",
        description: 'Contemporary / Fine Dining',
        url: 'http://arcanarestaurant.com/',
        picture: 'http://lifestylepubs.wordpress.s3-us-west-2.amazonaws.com/app/uploads/prod/2016/03/2G7A8475.jpg',
        happyHourMenu: 'Daily 5 - 6pm | $3 Beer, $4 Cider, $5 Wine, $7 West Side Daiquiri, American 75 and BBQ Old Fashioned. $6 Shot & a Beer, $7 Crispy Pork Rinds, Arcana Wings, Bon Bon and Macaron Plate, $8 Grilled Head Cheese'
      }], done)
  });
  test('POST /user', function(done) {
    request(server)
      .post('/user')
      .set('Accept', 'application/json')
      .send({
        email: 'schroder.brent@gmail.com',
        password: 'supdogmex'
      })
      .expect(200, {
        id: 2
      }, done)
  });
  test('POST /users/', function(done) {
    request(server)
      .post('/users/')
      .set('Accept', 'application/json')
      .send({
        firstName: 'Brian',
        lastName: 'kracha',
        email: 'brain@gmail.com',
        password: 'flexingfalcid'
      })
      .expect(204, {}, done)
  });
  test('POST /favorites/', function(done) {
    request(server)
      .post('/favorites/')
      .send({
        restId: 13,
        userId: 4
      })
      .set('Accept', 'application/json')
      .expect(201, {}, done)
  });
  test('DELETE /favorites/:id/:id', function(done) {
    request(server)
      .delete('/favorites/2/4')
      .set('Accept', 'application/json')
      .expect(200, {}, done)
  });
  test('PUT /favorites/', function(done) {
    request(server)
      .put('/favorites/')
      .set('Accept', 'application/json')
      .send({
        userId: 3,
        restId: 2,
        rating: 3
      })
      .expect(200, {}, done)
  });
}));
