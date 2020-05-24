<?php

namespace App\Entity\Filter;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Entity\Auto\Auto;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\NumericFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\RangeFilter;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\Filter\FilterRepository")
 * @ApiFilter(SearchFilter::class, properties={
 *     "filterType.id": "exact",
 *     "filterAnalogs.name": "partial",
 *     "filterAnalogs": "exact",
 *     "name": "partial"
 *     })
 * @ApiFilter(NumericFilter::class)
 * @ApiFilter(RangeFilter::class)
 *
 */
class Filter
{
    /**
     * @ORM\Id()
     * @ORM\Column(type="guid")
     * @ORM\GeneratedValue(strategy="UUID")
     */
    private $id;

    /**
     * @ORM\Column(type="decimal", nullable=true, precision=8, scale=3)
     */
    private $d;

    /**
     * @ORM\Column(type="decimal", nullable=true, precision=8, scale=3)
     */
    private $d1;

    /**
     * @ORM\Column(type="decimal", nullable=true, precision=8, scale=3)
     */
    private $d2;

    /**
     * @ORM\Column(type="decimal", nullable=true, precision=8, scale=3)
     */
    private $d3;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $f;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $g;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $l;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $b;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $h;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Filter\FilterType", inversedBy="filters")
     * @ORM\JoinColumn(nullable=false)
     */
    private $filterType;

    /**
     */
    private $filterGroup;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Auto\Auto", inversedBy="filters")
     */
    private $autos;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Filter\FilterAnalog", mappedBy="filter")
     */
    private $filterAnalogs;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $comments;


    public function __construct()
    {
        $this->filterType = new ArrayCollection();
        $this->autos = new ArrayCollection();
        $this->filterAnalogs = new ArrayCollection();
    }


    public function getId(): ?string
    {
        return $this->id;
    }

    public function getD(): ?string
    {
        return $this->d;
    }

    public function setD(string $d): self
    {
        $this->d = $d;

        return $this;
    }

    public function getD1(): ?string
    {
        return $this->d1;
    }

    public function setD1(?string $d1): self
    {
        $this->d1 = $d1;

        return $this;
    }

    public function getD2(): ?string
    {
        return $this->d2;
    }

    public function setD2(?string $d2): self
    {
        $this->d2 = $d2;

        return $this;
    }

    public function getD3(): ?string
    {
        return $this->d3;
    }

    public function setD3(?string $d3): self
    {
        $this->d3 = $d3;

        return $this;
    }

    public function getF(): ?int
    {
        return $this->f;
    }

    public function setF(?int $f): self
    {
        $this->f = $f;

        return $this;
    }

    public function getG(): ?int
    {
        return $this->g;
    }

    public function setG(?int $g): self
    {
        $this->g = $g;

        return $this;
    }

    public function getL(): ?int
    {
        return $this->l;
    }

    public function setL(?int $l): self
    {
        $this->l = $l;

        return $this;
    }

    public function getB(): ?int
    {
        return $this->b;
    }

    public function setB(?int $b): self
    {
        $this->b = $b;

        return $this;
    }

    public function getH(): ?int
    {
        return $this->h;
    }

    public function setH(?int $h): self
    {
        $this->h = $h;

        return $this;
    }

    public function getFilterType(): ?FilterType
    {
        return $this->filterType;
    }

    public function setFilterType(?FilterType $filterType): self
    {
        $this->filterType = $filterType;

        return $this;
    }

    /**
     * @return Collection|Auto[]
     */
    public function getAutos(): Collection
    {
        return $this->autos;
    }

    public function addAuto(Auto $auto): self
    {
        if (!$this->autos->contains($auto)) {
            $this->autos[] = $auto;
        }

        return $this;
    }

    public function removeAuto(Auto $auto): self
    {
        if ($this->autos->contains($auto)) {
            $this->autos->removeElement($auto);
        }

        return $this;
    }

    /**
     * @return Collection|FilterAnalog[]
     */
    public function getFilterAnalogs(): Collection
    {
        return $this->filterAnalogs;
    }

    public function addFilterAnalog(FilterAnalog $filterAnalog): self
    {
        if (!$this->filterAnalogs->contains($filterAnalog)) {
            $this->filterAnalogs[] = $filterAnalog;
        }

        return $this;
    }

    public function removeFilterAnalog(FilterAnalog $filterAnalog): self
    {
        if ($this->filterAnalogs->contains($filterAnalog)) {
            $this->filterAnalogs->removeElement($filterAnalog);
        }

        return $this;
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

    public function getComments(): ?string
    {
        return $this->comments;
    }

    public function setComments(?string $comments): self
    {
        $this->comments = $comments;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getFilterGroup()
    {
        return $this->getFilterType()->getFilterGroup();
    }

}
