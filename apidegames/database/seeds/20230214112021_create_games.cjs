/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex('games').del().then(() =>{
    return knex('games').insert([
    {'title': 'Call of duty MW', 'year': 2019, 'price': 60.00},
    {'title': 'Sea of thieves', 'year': 2018, 'price': 40.00},
    {'title': 'Minecraft', 'year': 2012, 'price': 20.00}
  ]);
});
};
