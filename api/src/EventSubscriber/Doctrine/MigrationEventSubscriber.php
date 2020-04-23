<?php

namespace App\EventSubscriber\Doctrine;

use Doctrine\Common\EventSubscriber;
use Doctrine\ORM\Tools\Event\GenerateSchemaEventArgs;


/**
 * Class MigrationEventSubscriber
 *
 * @package   App\EventSubscriber\Doctrine
 * @copyright 2020 Aioma AG (https://www.aioma.com)
 * @author    Andraž Jalovec <andraz.jalovec@aioma.com>
 * @author    Anto Cabraja <anto@qedcode.net>
 * @author    Ivan Adutskevich <dutsik@gmail.com>
 */
class MigrationEventSubscriber implements EventSubscriber
{
    public function getSubscribedEvents()
    {
        return array(
            'postGenerateSchema',
        );
    }


    /**
     * @param GenerateSchemaEventArgs $Args
     *
     * @throws \Doctrine\DBAL\Schema\SchemaException
     */
    public function postGenerateSchema(GenerateSchemaEventArgs $Args)
    {
        $Schema = $Args->getSchema();

        if (!$Schema->hasNamespace('public')) {
            $Schema->createNamespace('public');
        }
    }
}
