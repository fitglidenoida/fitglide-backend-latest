/**
 * diet-plan controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::diet-plan.diet-plan', ({ strapi }) => ({
    async find(ctx) {
        ctx.query = {
            ...ctx.query,
            populate: {
              meals: {
                populate: {
                  food_items: {
                    fields: ["name", "calories", "protein", "carbohydrate", "total_fat"]
                  }
                }
              }
            }
          };
          const { data, meta } = await super.find(ctx);
          return { data, meta };
        }
      }
    )
);
      

