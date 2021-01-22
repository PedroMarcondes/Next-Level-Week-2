import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('connections', (table) => {
    table.increments('id').primary();    // Id da conexão
       
    table
      .integer('user_id').notNullable()  // Id do professor
      .references('id').inTable('users') // Relacionamento com users
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    
      table.timestamp('created_at')
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      .notNullable();
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('connections');
}