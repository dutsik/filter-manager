module.exports = {
  be: {
    resources: {
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
