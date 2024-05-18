import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("customers").del();

    // Inserts seed entries
    await knex("customers").insert([
        {
            name: 'customer a',
            email: 'c1@example.com',
            alamat: '123 Main Street',
            phone_number: '1234567890'
        },
        {
            name: 'customer b',
            email: 'c2@example.com',
            alamat: '456 Elm Street',
            phone_number: '9876543210'
        }

    ]);
};
