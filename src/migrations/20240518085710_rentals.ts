import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('rentals', (table: Knex.TableBuilder)=>{
        table.increments('id').primary();
        table.integer('car_id').unsigned().notNullable();
        table.foreign('car_id').references('cars.id').onDelete('CASCADE').onUpdate('CASCADE');
        table.integer('customer_id').unsigned().notNullable();
        table.foreign('customer_id').references('customers.id').onDelete('CASCADE').onUpdate('CASCADE');;
        table.date('rental_date').notNullable();
        table.date('completion_date').notNullable();
        table.integer('total_payment').notNullable();
        table.timestamps(true, true);
    })
}


export async function down(knex: Knex): Promise<void> {
     return knex.schema.dropTable('rentals')
}

