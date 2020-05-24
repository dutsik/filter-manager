<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200523122748 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('ALTER TABLE filter ADD comments VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE filter ALTER d TYPE NUMERIC(8, 3)');
        $this->addSql('ALTER TABLE filter ALTER d DROP DEFAULT');
        $this->addSql('ALTER TABLE filter ALTER d DROP NOT NULL');
        $this->addSql('ALTER TABLE filter ALTER d1 TYPE NUMERIC(8, 3)');
        $this->addSql('ALTER TABLE filter ALTER d1 DROP DEFAULT');
        $this->addSql('ALTER TABLE filter ALTER d2 TYPE NUMERIC(8, 3)');
        $this->addSql('ALTER TABLE filter ALTER d2 DROP DEFAULT');
        $this->addSql('ALTER TABLE filter ALTER d3 TYPE NUMERIC(8, 3)');
        $this->addSql('ALTER TABLE filter ALTER d3 DROP DEFAULT');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'postgresql', 'Migration can only be executed safely on \'postgresql\'.');

        $this->addSql('ALTER TABLE filter DROP comments');
        $this->addSql('ALTER TABLE filter ALTER d TYPE INT');
        $this->addSql('ALTER TABLE filter ALTER d DROP DEFAULT');
        $this->addSql('ALTER TABLE filter ALTER d SET NOT NULL');
        $this->addSql('ALTER TABLE filter ALTER d1 TYPE INT');
        $this->addSql('ALTER TABLE filter ALTER d1 DROP DEFAULT');
        $this->addSql('ALTER TABLE filter ALTER d2 TYPE INT');
        $this->addSql('ALTER TABLE filter ALTER d2 DROP DEFAULT');
        $this->addSql('ALTER TABLE filter ALTER d3 TYPE INT');
        $this->addSql('ALTER TABLE filter ALTER d3 DROP DEFAULT');
    }
}
