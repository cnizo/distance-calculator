import { MigrationInterface, QueryRunner } from 'typeorm';

export class PostRefactoringTIMESTAMP implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "search" (id int, source_address varchar(100), destination_address varchar100), distance float)`,
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "search" `);
  }
}
