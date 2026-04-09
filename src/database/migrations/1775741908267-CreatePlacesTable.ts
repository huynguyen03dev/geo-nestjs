import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePlacesTable1775741908267 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "pgcrypto"`);
      await queryRunner.query(`CREATE TABLE "places" (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), name VARCHAR(255) NOT NULL, category VARCHAR(255) NOT NULL, address VARCHAR(255), location GEOGRAPHY(POINT, 4326) NOT NULL, created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(`DROP TABLE "places"`);
    }

}
