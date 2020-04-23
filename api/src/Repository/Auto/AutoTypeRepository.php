<?php

namespace App\Repository\Auto;

use App\Entity\Auto\AutoType;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method AutoType|null find($id, $lockMode = null, $lockVersion = null)
 * @method AutoType|null findOneBy(array $criteria, array $orderBy = null)
 * @method AutoType[]    findAll()
 * @method AutoType[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AutoTypeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AutoType::class);
    }

    // /**
    //  * @return AutoType[] Returns an array of AutoType objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?AutoType
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
