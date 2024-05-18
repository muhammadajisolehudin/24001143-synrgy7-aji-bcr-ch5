import { Model } from 'objection';

export class CustomerModel extends Model {
  static tableName = 'customers';

  id!: number;
  name!: string;
  email!: string;
  alamat!: string;
  phone_number!: string;
}

export interface Customer {
  name: string;
  email: string;
  alamat: string;
  phone_number: string;
}
