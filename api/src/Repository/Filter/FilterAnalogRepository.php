<?php

namespace App\Repository\Filter;

use App\Entity\Filter\FilterAnalog;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method FilterAnalog|null find($id, $lockMode = null, $lockVersion = null)
 * @method FilterAnalog|null findOneBy(array $criteria, array $orderBy = null)
 * @method FilterAnalog[]    findAll()
 * @method FilterAnalog[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FilterAnalogRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FilterAnalog::class);
    }

    // /**
    //  * @return FilterAnalog[] Returns an array of FilterAnalog objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('f.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?FilterAnalog
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
