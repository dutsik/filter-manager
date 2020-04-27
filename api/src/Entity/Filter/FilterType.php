<?php

namespace App\Entity\Filter;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\Filter\FilterTypeRepository")
 * @ApiFilter(SearchFilter::class, properties={
 *     "filterGroup.id": "exact"
 *     })
 */
class FilterType
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
     * @ORM\ManyToOne(targetEntity="App\Entity\Filter\FilterGroup", inversedBy="filterTypes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $filterGroup;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Filter\Filter", mappedBy="filterType")
     */
    private $filters;

    public function __construct()
    {
        $this->filters = new ArrayCollection();
    }


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

    public function getFilterGroup(): ?FilterGroup
    {
        return $this->filterGroup;
    }

    public function setFilterGroup(?FilterGroup $filterGroup): self
    {
        $this->filterGroup = $filterGroup;

        return $this;
    }

    /**
     * @return Collection|Filter[]
     */
    public function getFilters(): Collection
    {
        return $this->filters;
    }

    public function addFilter(Filter $filter): self
    {
        if (!$this->filters->contains($filter)) {
            $this->filters[] = $filter;
            $filter->setFilterType($this);
        }

        return $this;
    }

    public function removeFilter(Filter $filter): self
    {
        if ($this->filters->contains($filter)) {
            $this->filters->removeElement($filter);
            // set the owning side to null (unless already changed)
            if ($filter->getFilterType() === $this) {
                $filter->setFilterType(null);
            }
        }

        return $this;
    }
}
