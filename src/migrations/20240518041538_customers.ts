import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('customers', (table: Knex.TableBuilder)=>{
        table.increments('id').primary()
        table.string('name', 255).notNullable()
        table.string('email', 255).notNullable()
        table.string('alamat', 255).notNullable()
        table.string('phone_number', 20).notNullable().unique()
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('customers')
}

