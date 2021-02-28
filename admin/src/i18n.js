module.exports = {
  be: {
    resources: {
      filters: {
        name: "Фiльтры",
        fields: {
          name: "Назва",
          filterType:  "Тып Фiльтру",
          filterGroup:  "Група Фiльтру"
        }
      },
      filter_groups: {
        name: "Групы Фiльтрау",
        fields: {
          name: "Назва",
          filterTypes:  "Тыпы Фiльтру"
        }
      },
      filter_types: {
        name: "Тыпы Фiльтрау",
        fields: {
          name: "Назва",
          filterGroup:  "Група Фiльтрау"
        }
      },
      filter_analogs: {
        name: "Аналагi",
        fields: {
          name: "Назва",
          filters:  "Фiльтры"
        }
      },
      autos: {
        name: "Аута",
        fields: {
          name: "Тып рухавiку",
          model:  "Мадэль",
          filters:  "Фiльтры",
        }
      },
      auto_brands: {
        name: "Марка транспартнага сродку",
        fields: {
          name: "Назва",
          models:  "Мадэлi"
        }
      },
      auto_models: {
        name: "Мадэлi",
        fields: {
          name: "Назва",
          brand:  "Марка ауто",
          type: "Тып транспартнага сродку",
          filters: "Фiльтры"
        }
      },
      auto_types: {
        name: "Тып транспартнага сродку",
        fields: {
          name: "Назва",
          models:  "Марка транспартнага сродку"
        }
      },
    },
    action: {
      export: 'Экспарт',
    },
  },
  ru: {
    resources: {
      filters: {
        name: "Фильтра",
        fields: {
          name: "Название",
          filterType:  "Тип Фильтра",
          filterGroup:  "Группа Фильтра",
          comments: "Комментарий"
        }
      },
      filter_groups: {
        name: "Группы Фильтров",
        fields: {
          name: "Название",
          filterTypes:  "Типы Фильтров"
        }
      },
      filter_types: {
        name: "Типы Фильтров",
        fields: {
          name: "Название",
          filterGroup:  "Группа Фильтров"
        }
      },
      filter_analogs: {
        name: "Аналоги",
        fields: {
          name: "Название",
          filter:  "Фильтр"
        }
      },
      autos: {
        name: "Транспортные средства",
        fields: {
          name: "Тип двигателя",
          brand:  "Марка",
          engine:  "Двигатель",
          model:  "Модель",
          filters:  "Фильтра",
        }
      },
      auto_brands: {
        name: "Марки ТС",
        fields: {
          name: "Название",
          models:  "Модели"
        }
      },
      auto_models: {
        name: "Модели ТС",
        fields: {
          name: "Название",
          brand:  "Марка ТС",
          type: "Тип ТС",
          filters: "Фильтра"
        }
      },
      auto_types: {
        name: "Типы ТС",
        fields: {
          name: "Название",
          models:  "Марка ТС"
        }
      },
    },
    action: {
      export: 'Экспорт',
    },
  },
};
