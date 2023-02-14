
exports.up = function(knex) {
    return knex.schema.alterTable('games', (table) => {
        table.timestamp('delete_at').nullable().defaultTo(null);
    })
  
};

exports.down = function(knex) {
    return knex.schema.alterTable('games', (table) => {
        table.dropColumn('delete_at')
    })
  
};
