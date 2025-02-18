/**
 * diet-plan controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::diet-plan.diet-plan', ({ strapi }) => ({
  async find(ctx) {
    try {
      const data = await strapi.entityService.findMany('api::diet-plan.diet-plan', {
        populate: {
          meals: {
            populate: {
              diet_components: true // Assuming you want to populate food details for each meal
            }
          }
        }
      });
      

      return { data };
    } catch (error) {
      console.error('Error fetching diet plans:', error);
      ctx.throw(500, 'Internal Server Error');
    }
  }
}));
