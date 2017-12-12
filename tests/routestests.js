const assert = require('assert')
const routes = require('../server/routes/routes.js')
const request = require('supertest')
const server = require('../server.js')
const bcrypt = require('bcrypt')
const addDatabaseHooks = require('./utils')
const { suite, test } = require('mocha');
suite('part2 routes', addDatabaseHooks(() => {
  test('GET/ restraunts', function(done) {
    request(server)
      .get('/restaurants')
      .set('Accept', 'application/json')
      .expect((res) => {
        res.body.map((resi)=>{
          delete resi.created_at
          delete resi.updated_at
          delete resi.averageRating
          delete resi.id
        })
      })
      .expect(200,[
        {name: 'Amante Coffee',
        address:'1035 Walnut St Boulder, CO 80302',
        phonenumber:'303-546-9999',

        lat:'40.016705',
        lng:'-105.281401',
        description:'Coffee / Tea / Juice / Treats',
        url:'http://www.amantecoffee.com/',
        picture:'https://s3-media3.fl.yelpcdn.com/bphoto/s_nTWYPK6wuumlO7HSodCQ/ls.jpg',
        happyHourMenu:'Daily 3 - 6pm | Food: $3.5 Affogato & Gelato | Drinks: $3 Carlsberg Beer, $5 Coffee Cocktails, $3 Wells, $1 off Wine, $5 Shottino'
      },{name: 'Arcana Restaurant',
        address:'909 Walnut St Boulder, CO 80302',
        phonenumber:'303-444-3885',

        lat:'40.016256',
        lng:'-105.283216',
        description:'Contemporary / Fine Dining',
        url:'http://arcanarestaurant.com/',
        picture:'http://lifestylepubs.wordpress.s3-us-west-2.amazonaws.com/app/uploads/prod/2016/03/2G7A8475.jpg',
        happyHourMenu:'Daily 5 - 6pm | $3 Beer, $4 Cider, $5 Wine, $7 West Side Daiquiri, American 75 and BBQ Old Fashioned. $6 Shot & a Beer, $7 Crispy Pork Rinds, Arcana Wings, Bon Bon and Macaron Plate, $8 Grilled Head Cheese'},
        {name: 'The Attic Bar & Bistro',
        address:'949 Walnut St Boulder, CO 80302',
        phonenumber:'303-415-1300',

        lat:'40.016564',
        lng:'-105.282408',
        description:'Casual / Late Night Eats',
        url:'http://www.atticbistro.com/',
        picture:'https://res.cloudinary.com/simpleview/image/fetch/f_auto,q_75/http://Boulder.simpleviewcrm.com/images/listings/original_attic-bar-3.jpg',
        happyHourMenu:'Monday - Saturday 3 - 6pm, Sunday 9pm - Close | Food: Appetizer Specials | Drinks: $3 Wells, Drafts, and Fat Alberts, $3.75 Wines'},
        {name:'Bohemian Biergarten',
        address:'2017 13th St Boulder, CO 80302', phonenumber:'720-328-8328',

        lat:'40.018719',
        lng:'-105.279125',
        description:'Casual / Late Night Eats / Night Spots',
        url:'http://www.bohemianbiergarten.com/',
        picture:'http://yourboulder.com/wp-content/uploads/2013/10/bohemian-biergarten-boulder.jpg',
        happyHourMenu:'Daily 3 - 6pm, Monday & Sunday: 9pm - Close | Food & Drink Combos: $12 Half Litre Bier and regular Sausage OR Pierogies OR Pretzel Sausage OR Side Salad OR Goulash Boat, $14 Half Litre Bier and One Special Sausage of your choice | Drinks: $1 off .5L, $2 off 1L, $3 Well Drinks, $1 off wine, Tuesday: $8 Das Boot all day, Wednesday: $2 off House Wine'},
        {name: 'Boulder ChopHouse & Tavern',
        address:'921 Walnut St Suite 100 Boulder, CO 80302', phonenumber:'303-443-1188',

        lat:'40.016451',
        lng:'-105.282522',
        description:'Contemporary / Fine Dining', url:'http://www.chophouse.com/',
        picture:'http://firstbiteboulder.com/wp-content/uploads/2016/10/Boulder-ChopHouse.jpg',
        happyHourMenu:'Daily 4 - 6pm | Food: 1/2 Price Tavern Menu Food, $4-13 Starters & Entrees | Drinks: $3.5 Draft Beer, $4.5 Wine and Well Drinks, $5.5 Specialty Cocktails'},
        {name: 'Brasserie Ten Ten',
        address:'1011 Walnut St Boulder, CO 80302',
        phonenumber:'303-998-1010',

        lat:'40.016529',
        lng: '-105.282078',
        description:'Contemporary / Fine Dining',
        url:'https://www.brasserietenten.com/',
        picture:'https://www.brasserietenten.com/wp-content/uploads/2014/05/street-600x403.jpg',
        happyHourMenu:'NaN'},
        {name: 'Centro Mexican Kitchen',
        address:'950 Pearl St Boulder, CO 80302',
        phonenumber:'303-442-7771',

        lat:'40.016524',
        lng:'-105.282078',
        description:'Mexican / Latin / South American',
        url:'https://www.centromexican.com/',
        picture:'https://s3-media4.fl.yelpcdn.com/bphoto/WGDByQB4wNTL80Rz2Mm-JQ/348s.jpg',
        happyHourMenu:'All Night Monday, Tuesday - Sunday 2:30 - 6pm | Food: $3 Tacos, $4-8 Appetizers| Drink: $3 Can Beer, $4 Draft Beer, $5 House Wine, $6 Draft Mojito, Sangria, Sol Del Playa, $5-7 Coin Marg'}
      ],done)
});
  test('GET /restraunts/:name', function(done) {
    request(server)
      .get('/restaurants/Bohemian Biergarten')
      .set('Accept', 'application/json')
      .expect((res) => {
        delete res.body.created_at
        delete res.body.updated_at
        delete res.body.averageRating
        delete res.body.id})
      .expect(200,{name:'Bohemian Biergarten',
      address:'2017 13th St Boulder, CO 80302', phonenumber:'720-328-8328',

      lat:'40.018719',
      lng:'-105.279125',
      description:'Casual / Late Night Eats / Night Spots',
      url:'http://www.bohemianbiergarten.com/',
      picture:'http://yourboulder.com/wp-content/uploads/2013/10/bohemian-biergarten-boulder.jpg',
      happyHourMenu:'Daily 3 - 6pm, Monday & Sunday: 9pm - Close | Food & Drink Combos: $12 Half Litre Bier and regular Sausage OR Pierogies OR Pretzel Sausage OR Side Salad OR Goulash Boat, $14 Half Litre Bier and One Special Sausage of your choice | Drinks: $1 off .5L, $2 off 1L, $3 Well Drinks, $1 off wine, Tuesday: $8 Das Boot all day, Wednesday: $2 off House Wine'
      },done)
});
  test('GET /favorites/:id', function(done) {
    request(server)
      .get('/favorites/1') //must update manually
      .set('Accept', 'application/json')
      .expect((res) => {
        res.body.map((resi)=>{
          delete resi.created_at
          delete resi.updated_at
          delete resi.averageRating
        })
      })
      .expect(200,[ { id: 2,
    rating: 3,
    user_id: 1,
    restaurant_id: 2,
    name: 'Arcana Restaurant',
    address: '909 Walnut St Boulder, CO 80302',
    phonenumber: '303-444-3885',
    lat: '40.02',
    lng: '-105.28',
    description: 'Contemporary / Fine Dining',
    url: 'http://arcanarestaurant.com/',
    picture: 'http://lifestylepubs.wordpress.s3-us-west-2.amazonaws.com/app/uploads/prod/2016/03/2G7A8475.jpg',
    happyHourMenu: 'Daily 5 - 6pm | $3 Beer, $4 Cider, $5 Wine, $7 West Side Daiquiri, American 75 and BBQ Old Fashioned. $6 Shot & a Beer, $7 Crispy Pork Rinds, Arcana Wings, Bon Bon and Macaron Plate, $8 Grilled Head Cheese'
    } ],done)
});
  test('POST /user', function(done) {
    request(server)
      .post('/user')
      .set('Accept', 'application/json')
      .send({email:'schroder.brent@gmail.com', password: 'supdogmex'})
      .expect(200,{id:2},done)
});
  test('POST /users/', function(done) {
    request(server)
      .post('/users/')
      .set('Accept', 'application/json')
      .send({
        firstName:'Brian',
        lastName:'kracha',
        email:'brain@gmail.com',
        password: 'flexingfalcid'
      })
      .expect(201,{},done)
});
  test('POST /favorites/', function(done) {
    request(server)
      .post('/favorites/')
      .set('Accept', 'application/json')
      .expect(201,{},done)
});
  test('DELETE /favorites/:id', function(done) {
    request(server)
      .delete('/favorites/2')
      .set('Accept', 'application/json')
      .expect(200,{},done)
});
  test('PUT /favorites/', function(done) {
    request(server)
      .put('/favorites/')
      .set('Accept', 'application/json')
      .send({
        userId:3,
        restId:2,
        rating:3})
      .expect(200,{hello:'world'},done)
  });
}));
