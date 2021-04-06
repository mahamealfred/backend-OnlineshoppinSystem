import models from '../database/models';

const { productCategory } = models;

/**
 * @exports
 * @class categoryServices
 */

 /**
   * create new user
   * @static createcategory
   * @param {object} newcategory
   * @memberof categoryServices
   * @returns {object} data
   */

 class categoryServices {
    static createCategory(newCategory) {
        return productCategory.create(newCategory);
      }

      static getProductCategories() {
        return productCategory.findAll();
      }
      static getProductCategories() {
        return productCategory.findOne();
      }

      static updateAtt(set, prop) {
        return productCategory.update(set, {
          where: prop,
        });
      }

      static deleteProductCategory(modelId) {
        return productCategory.destroy({
          where: { id: modelId },
        });
      }
      static findById(modelId) {
        return productCategory.findOne({
          where: { id: modelId },
        });
      }
      static findByName(prop) {
        return productCategory.findOne({
          where: prop,
        });
      }
 }

 export default categoryServices;