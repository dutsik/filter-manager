<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200508192841 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('DROP TABLE filter_analog_filter');
        $this->addSql('ALTER TABLE filter_analog ADD filter_id UUID NOT NULL');
        $this->addSql('ALTER TABLE filter_analog ADD CONSTRAINT FK_8AA7CBBFD395B25E FOREIGN KEY (filter_id) REFERENCES filter (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_8AA7CBBFD395B25E ON filter_analog (filter_id)');
        $this->addSql('ALTER TABLE filter ALTER name DROP DEFAULT');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('CREATE TABLE filter_analog_filter (filter_analog_id INT NOT NULL, filter_id UUID NOT NULL, PRIMARY KEY(filter_analog_id, filter_id))');
        $this->addSql('CREATE INDEX idx_6b067c79d395b25e ON filter_analog_filter (filter_id)');
        $this->addSql('CREATE INDEX idx_6b067c79c8ff4459 ON filter_analog_filter (filter_analog_id)');
        $this->addSql('ALTER TABLE filter_analog_filter ADD CONSTRAINT fk_6b067c79c8ff4459 FOREIGN KEY (filter_analog_id) REFERENCES filter_analog (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE filter_analog_filter ADD CONSTRAINT fk_6b067c79d395b25e FOREIGN KEY (filter_id) REFERENCES filter (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE filter ALTER name SET DEFAULT \'changeme\'');
        $this->addSql('ALTER TABLE filter_analog DROP CONSTRAINT FK_8AA7CBBFD395B25E');
        $this->addSql('DROP INDEX IDX_8AA7CBBFD395B25E');
        $this->addSql('ALTER TABLE filter_analog DROP filter_id');
    }
}
