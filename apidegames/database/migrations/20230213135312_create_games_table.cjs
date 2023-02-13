
exports.up = function(knex) {
    return knex.schema.createTable('games', function(table){
        table.increments("id").primary();
        table.string('title').notNullable();
        table.integer('year');
        table.float('price');

    }
    )
};

exports.down = function(knex) {
    return knex.schema.dropTable('games');
};
