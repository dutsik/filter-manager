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
      }
    },
    action: {
      export: 'Экспарт',
    },
  },
};
