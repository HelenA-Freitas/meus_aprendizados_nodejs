/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del().then(() =>{
    knex('users').insert([
    {'title': 'Call of duty MW', 'year':2019, 'price': 60},
    {'title': 'Sea of thieves', 'year': 2018, 'price': 40},
    {'title': 'Minecraft', 'year': 2012, 'price': 20}
  ]);
})
};
