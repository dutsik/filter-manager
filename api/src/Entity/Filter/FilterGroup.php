<?php

namespace App\Entity\Filter;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\Filter\FilterGroupRepository")
 */
class FilterGroup
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
     * @ORM\OneToMany(targetEntity="App\Entity\Filter\FilterType", mappedBy="filterGroup")
     */
    private $filterTypes;

    public function __construct()
    {
        $this->filterTypes = new ArrayCollection();
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

    /**
     * @return Collection|FilterType[]
     */
    public function getFilterTypes(): Collection
    {
        return $this->filterTypes;
    }

    public function addFilterType(FilterType $filterType): self
    {
        if (!$this->filterTypes->contains($filterType)) {
            $this->filterTypes[] = $filterType;
            $filterType->setFilterGroup($this);
        }

        return $this;
    }

    public function removeFilterType(FilterType $filterType): self
    {
        if ($this->filterTypes->contains($filterType)) {
            $this->filterTypes->removeElement($filterType);
            // set the owning side to null (unless already changed)
            if ($filterType->getFilterGroup() === $this) {
                $filterType->setFilterGroup(null);
            }
        }

        return $this;
    }
}
