import { MigrationInterface, QueryRunner } from 'typeorm';

export class $npmConfigName1737826964521 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE "user" (
            id uuid NOT NULL default uuid_generate_v4(),
            username varchar(255) NOT NULL,
            password_hash varchar(255) NOT NULL,
            CONSTRAINT user_pk_id PRIMARY KEY (id),
            CONSTRAINT user_un_username UNIQUE (username)
        )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS user;`);
  }
}
