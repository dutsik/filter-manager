<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200423070220 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
        $this->addSql('CREATE SEQUENCE filter_analog_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE filter_analog (id INT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE filter_analog_filter (filter_analog_id INT NOT NULL, filter_id UUID NOT NULL, PRIMARY KEY(filter_analog_id, filter_id))');
        $this->addSql('CREATE INDEX IDX_6B067C79C8FF4459 ON filter_analog_filter (filter_analog_id)');
        $this->addSql('CREATE INDEX IDX_6B067C79D395B25E ON filter_analog_filter (filter_id)');
        $this->addSql('CREATE TABLE filter_group (id UUID NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE filter_type (id UUID NOT NULL, filter_group_id UUID NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_E4E43050C33BDCE7 ON filter_type (filter_group_id)');
        $this->addSql('CREATE TABLE filter (id UUID NOT NULL, filter_type_id UUID NOT NULL, d INT NOT NULL, d1 INT DEFAULT NULL, d2 INT DEFAULT NULL, d3 INT DEFAULT NULL, f INT DEFAULT NULL, g INT DEFAULT NULL, l INT DEFAULT NULL, b INT DEFAULT NULL, h INT DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_7FC45F1D72DCFBF6 ON filter (filter_type_id)');
        $this->addSql('CREATE TABLE filter_auto (filter_id UUID NOT NULL, auto_id UUID NOT NULL, PRIMARY KEY(filter_id, auto_id))');
        $this->addSql('CREATE INDEX IDX_E804283D395B25E ON filter_auto (filter_id)');
        $this->addSql('CREATE INDEX IDX_E8042831D55B925 ON filter_auto (auto_id)');
        $this->addSql('CREATE TABLE auto_brand (id UUID NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE auto_type (id UUID NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE auto_model (id UUID NOT NULL, brand_id UUID NOT NULL, type_id UUID NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_DE101D2244F5D008 ON auto_model (brand_id)');
        $this->addSql('CREATE INDEX IDX_DE101D22C54C8C93 ON auto_model (type_id)');
        $this->addSql('CREATE TABLE auto (id UUID NOT NULL, model_id UUID NOT NULL, engine VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_66BA25FA7975B7E7 ON auto (model_id)');
        $this->addSql('ALTER TABLE filter_analog_filter ADD CONSTRAINT FK_6B067C79C8FF4459 FOREIGN KEY (filter_analog_id) REFERENCES filter_analog (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE filter_analog_filter ADD CONSTRAINT FK_6B067C79D395B25E FOREIGN KEY (filter_id) REFERENCES filter (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE filter_type ADD CONSTRAINT FK_E4E43050C33BDCE7 FOREIGN KEY (filter_group_id) REFERENCES filter_group (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE filter ADD CONSTRAINT FK_7FC45F1D72DCFBF6 FOREIGN KEY (filter_type_id) REFERENCES filter_type (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE filter_auto ADD CONSTRAINT FK_E804283D395B25E FOREIGN KEY (filter_id) REFERENCES filter (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE filter_auto ADD CONSTRAINT FK_E8042831D55B925 FOREIGN KEY (auto_id) REFERENCES auto (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE auto_model ADD CONSTRAINT FK_DE101D2244F5D008 FOREIGN KEY (brand_id) REFERENCES auto_brand (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE auto_model ADD CONSTRAINT FK_DE101D22C54C8C93 FOREIGN KEY (type_id) REFERENCES auto_type (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE auto ADD CONSTRAINT FK_66BA25FA7975B7E7 FOREIGN KEY (model_id) REFERENCES auto_model (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('ALTER TABLE filter_analog_filter DROP CONSTRAINT FK_6B067C79C8FF4459');
        $this->addSql('ALTER TABLE filter_type DROP CONSTRAINT FK_E4E43050C33BDCE7');
        $this->addSql('ALTER TABLE filter DROP CONSTRAINT FK_7FC45F1D72DCFBF6');
        $this->addSql('ALTER TABLE filter_analog_filter DROP CONSTRAINT FK_6B067C79D395B25E');
        $this->addSql('ALTER TABLE filter_auto DROP CONSTRAINT FK_E804283D395B25E');
        $this->addSql('ALTER TABLE auto_model DROP CONSTRAINT FK_DE101D2244F5D008');
        $this->addSql('ALTER TABLE auto_model DROP CONSTRAINT FK_DE101D22C54C8C93');
        $this->addSql('ALTER TABLE auto DROP CONSTRAINT FK_66BA25FA7975B7E7');
        $this->addSql('ALTER TABLE filter_auto DROP CONSTRAINT FK_E8042831D55B925');
        $this->addSql('DROP SEQUENCE filter_analog_id_seq CASCADE');
        $this->addSql('DROP TABLE filter_analog');
        $this->addSql('DROP TABLE filter_analog_filter');
        $this->addSql('DROP TABLE filter_group');
        $this->addSql('DROP TABLE filter_type');
        $this->addSql('DROP TABLE filter');
        $this->addSql('DROP TABLE filter_auto');
        $this->addSql('DROP TABLE auto_brand');
        $this->addSql('DROP TABLE auto_type');
        $this->addSql('DROP TABLE auto_model');
        $this->addSql('DROP TABLE auto');
        $this->addSql('DROP EXTENSION "uuid-ossp"');
    }
}
