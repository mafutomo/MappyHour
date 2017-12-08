
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('restaurants').insert([
        {id: 1, name: 'Amante Coffee', address:'1035 Walnut St Boulder, CO 80302', phonenumber:'303-546-9999',latitude:40.016705,longitude:-105.281401,description:'Coffee / Tea / Juice / Treats', url:'http://www.amantecoffee.com/', picture:'https://s3-media3.fl.yelpcdn.com/bphoto/s_nTWYPK6wuumlO7HSodCQ/ls.jpg', happyHourMenu:'Daily 3 - 6pm | Food: $3.5 Affogato & Gelato | Drinks: $3 Carlsberg Beer, $5 Coffee Cocktails, $3 Wells, $1 off Wine, $5 Shottino'},
        {id: 2, name: 'Arcana Restaurant', address:'909 Walnut St Boulder, CO 80302', phonenumber:'303-444-3885',latitude:40.016256,longitude:-105.283216,description:'Contemporary / Fine Dining', url:'http://arcanarestaurant.com/', picture:'http://lifestylepubs.wordpress.s3-us-west-2.amazonaws.com/app/uploads/prod/2016/03/2G7A8475.jpg', happyHourMenu:'Daily 5 - 6pm | $3 Beer, $4 Cider, $5 Wine, $7 West Side Daiquiri, American 75 and BBQ Old Fashioned. $6 Shot & a Beer, $7 Crispy Pork Rinds, Arcana Wings, Bon Bon and Macaron Plate, $8 Grilled Head Cheese'},
        {id: 3, name: 'The Attic Bar & Bistro', address:'949 Walnut St Boulder, CO 80302', phonenumber:'303-415-1300',latitude:40.016564,longitude:-105.282408,description:'Casual / Late Night Eats', url:'http://www.atticbistro.com/', picture:'https://res.cloudinary.com/simpleview/image/fetch/f_auto,q_75/http://Boulder.simpleviewcrm.com/images/listings/original_attic-bar-3.jpg', happyHourMenu:'Monday - Saturday 3 - 6pm, Sunday 9pm - Close | Food: Appetizer Specials | Drinks: $3 Wells, Drafts, and Fat Alberts, $3.75 Wines'},
        {id: 4, name: 'Bohemian Biergarten', address:'2017 13th St Boulder, CO 80302', phonenumber:'720-328-8328',latitude:40.018719,longitude:-105.279125,description:' Casual / Late Night Eats / Night Spots ', url:'http://www.bohemianbiergarten.com/', picture:'http://yourboulder.com/wp-content/uploads/2013/10/bohemian-biergarten-boulder.jpg', happyHourMenu:'Daily 3 - 6pm, Monday & Sunday: 9pm - Close | Food & Drink Combos: $12 Half Litre Bier and regular Sausage OR Pierogies OR Pretzel Sausage OR Side Salad OR Goulash Boat, $14 Half Litre Bier and One Special Sausage of your choice | Drinks: $1 off .5L, $2 off 1L, $3 Well Drinks, $1 off wine, Tuesday: $8 Das Boot all day, Wednesday: $2 off House Wine'}
      ])
      .then(function(){
        return knex.raw("SELECT setval('restaurants_id_seq', (SELECT MAX(id) FROM restaurants))")
      })
};
