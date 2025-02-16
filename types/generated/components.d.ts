import type { Struct, Schema } from '@strapi/strapi';

export interface DietMeal extends Struct.ComponentSchema {
  collectionName: 'components_diet_meals';
  info: {
    displayName: 'meal';
    description: '';
  };
  attributes: {
    meal_time_slot: Schema.Attribute.Time;
    diet_components: Schema.Attribute.Relation<
      'oneToMany',
      'api::diet-component.diet-component'
    >;
    calories: Schema.Attribute.String;
    proteins: Schema.Attribute.String;
    sugar: Schema.Attribute.String;
    carbs: Schema.Attribute.String;
    fats: Schema.Attribute.String;
    meal_time: Schema.Attribute.Enumeration<
      ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Drinks']
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'diet.meal': DietMeal;
    }
  }
}
