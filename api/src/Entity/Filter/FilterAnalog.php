<?php

namespace App\Entity\Filter;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\OrderFilter;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource(attributes={"order"={"name": "ASC"}})
 * @ORM\Entity(repositoryClass="App\Repository\Filter\FilterAnalogRepository")
 * @ApiFilter(SearchFilter::class, properties={
 *     "name": "partial",
 *     "filter.id": "exact",
 *     "filter.name": "partial",
 *     "filter": "exact",
 *     })
 * @ApiFilter(OrderFilter::class)
 */
class FilterAnalog
{
    /**
     * @ORM\Id()
     * @ORM\Column(type="guid")
     * @ORM\GeneratedValue(strategy="UUID")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Filter\Filter", inversedBy="filterAnalogs")
     * @ORM\JoinColumn(nullable=false)
     */
    private $filter;



    public function getId(): ?string
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Filter
     */
    public function getFilter(): Filter
    {
        return $this->filter;
    }

    /**
     * @param mixed $filter
     * @return FilterAnalog
     */
    public function setFilter($filter)
    {
        $this->filter = $filter;
        return $this;
    }

}
