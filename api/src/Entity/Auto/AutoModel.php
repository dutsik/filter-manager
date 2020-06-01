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
 * @ApiResource(attributes={"order"={"name": "ASC"}})
 * @ORM\Entity(repositoryClass="App\Repository\Auto\AutoModelRepository")
 * @ApiFilter(SearchFilter::class, properties={
 *     "brand.id": "exact",
 *     "type.id": "exact"
 *     })
 */
class AutoModel
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
    private $nameWithBrand;

    /**
     * @ORM\ManyToOne(targetEntity="AutoBrand", inversedBy="models")
     * @ORM\JoinColumn(nullable=false)
     */
    private $brand;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Auto\Auto", mappedBy="model", orphanRemoval=true)
     */
    private $autos;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Auto\AutoType", inversedBy="models")
     * @ORM\JoinColumn(nullable=false)
     */
    private $type;

    public function __construct()
    {
        $this->autos = new ArrayCollection();
    }

    public function getId(): ?string
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function getNameWithBrand(): ?string
    {
        return $this->getBrand()->getName() . ' | ' . $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getBrand(): ?AutoBrand
    {
        return $this->brand;
    }

    public function setBrand(?AutoBrand $brand): self
    {
        $this->brand = $brand;

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
            $auto->setModel($this);
        }

        return $this;
    }

    public function removeAuto(Auto $auto): self
    {
        if ($this->autos->contains($auto)) {
            $this->autos->removeElement($auto);
            // set the owning side to null (unless already changed)
            if ($auto->getModel() === $this) {
                $auto->setModel(null);
            }
        }

        return $this;
    }

    public function getType(): ?AutoType
    {
        return $this->type;
    }

    public function setType(?AutoType $type): self
    {
        $this->type = $type;

        return $this;
    }
}
