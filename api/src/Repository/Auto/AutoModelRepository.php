<?php

namespace App\Repository\Auto;

use App\Entity\Auto\AutoModel;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method AutoModel|null find($id, $lockMode = null, $lockVersion = null)
 * @method AutoModel|null findOneBy(array $criteria, array $orderBy = null)
 * @method AutoModel[]    findAll()
 * @method AutoModel[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AutoModelRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AutoModel::class);
    }

    // /**
    //  * @return Model[] Returns an array of Model objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('m.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Model
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
