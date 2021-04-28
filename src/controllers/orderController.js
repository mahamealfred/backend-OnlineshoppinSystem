import Models from "../database/models";
const { orders, users } = Models;

class orderController {

    static async add(req, res) {
        try {
            const {
              userId,
              product,
              quantity,
              total,
             
            } = req.body;
      
            const found = await users.findOne({
              where: { id: userId },
            });
            if (found) {
              await orders.create({
                userId,
                product,
                quantity,
                total,
              });
              return res.status(200).json({
                status: 200,
                message: "New order have been added",
      
              });
            } else {
              return res.status(400).json({
                status: 400,
                message: "user not found please signup",
              });
            }
          } catch (error) {
            return res.status(500).json({
              status: 500,
              message: error.message,
            });
          }

    }

    static async deleteOrder(req, res) {
        try {
          const modelId = req.params.id;
          const found = await orders.findOne({
            where: { id: modelId },
          });
          if (found) {
            const deletedOrder = await orders.destroy({
              where: { id: modelId },
            });
            return res.status(200).json({
              status: 200,
              message: "order deleted ",
              data: deletedOrder,
            });
          }
          res.status(404).json({
            status: 404,
            message: "order not found",
          });
        } catch (error) {
          res.status(500).json({ status: 500, message: "server error"+error.message });
        }
      }

      static async getAllOrder(req, res) {
        try {
          const data = await orders.findAll({
            include: [
              {
                model: users,
              },
            ],
          });
    
          return res.status(200).json({
            status: 200,
            message: "Fetchs orders succeffuly",
            data: data,
          });
        } catch (error) {
          return res.status(500).json({
            status: 500,
            message: "server error "+error.message,
          });
        }
      }

}
export default orderController;
