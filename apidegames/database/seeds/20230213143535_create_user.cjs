/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del().then(() =>{
      return knex('users').insert([
      {'email': 'helen@gmail.com', 'password':'12345'},
      {'email': 'matheus@gmail.com', 'password': '67890'}
    ]);
  });
   
};
