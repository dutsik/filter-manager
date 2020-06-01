<?php

namespace App\Entity\Auto;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
 use App\Entity\Filter\Filter;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource(attributes={"order"={"engine": "ASC"}})
 * @ORM\Entity(repositoryClass="App\Repository\Auto\AutoRepository")
 * @ApiFilter(SearchFilter::class, properties={
 *     "engine": "exact",
 *     "model.id": "exact"
 * })
 */
class Auto
{
    /**
     * @ORM\Id()
     * @ORM\Column(type="guid")
     * @ORM\GeneratedValue(strategy="UUID")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Auto\AutoModel", inversedBy="autos")
     * @ORM\JoinColumn(nullable=false)
     */
    private $model;

    /**
     * @ORM\Column(type="string", length=255, nullable=false)
     */
    private $engine;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Filter\Filter", mappedBy="autos")
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


    public function getModel(): ?AutoModel
    {
        return $this->model;
    }

    public function setModel(?AutoModel $model): self
    {
        $this->model = $model;

        return $this;
    }

    public function getEngine(): ?string
    {
        return $this->engine;
    }

    public function setEngine(string $engine): self
    {
        $this->engine = $engine;

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
            $filter->addAuto($this);
        }

        return $this;
    }

    public function removeFilter(Filter $filter): self
    {
        if ($this->filters->contains($filter)) {
            $this->filters->removeElement($filter);
            $filter->removeAuto($this);
        }

        return $this;
    }
}
