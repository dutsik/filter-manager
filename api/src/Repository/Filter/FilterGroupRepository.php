<?php

namespace App\Repository\Filter;

use App\Entity\Filter\FilterGroup;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method FilterGroup|null find($id, $lockMode = null, $lockVersion = null)
 * @method FilterGroup|null findOneBy(array $criteria, array $orderBy = null)
 * @method FilterGroup[]    findAll()
 * @method FilterGroup[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FilterGroupRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, FilterGroup::class);
    }

    // /**
    //  * @return FilterGroup[] Returns an array of FilterGroup objects
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
    public function findOneBySomeField($value): ?FilterGroup
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
