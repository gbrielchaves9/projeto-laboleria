import {
    createOrder,
    findClientById,
    findCakeById,
    getAllOrders as fetchAllOrders,
    getOrderById as fetchOrderById,
    getClientOrders as fetchClientOrders,
  } from '../repositories/orders.repository.js';
  
  export const postOrder = async (req, res) => {
    try {
      const { clientId, cakeId, quantity, totalPrice } = req.body;
      const client = await findClientById(clientId);
      if (!client) {
        return res.status(404).json({ error: 'Client not found' });
      }
  
      const cake = await findCakeById(cakeId);
      if (!cake) {
        return res.status(404).json({ error: 'Cake not found' });
      }
  
      const order = await createOrder(clientId, cakeId, quantity, totalPrice);
  
      return res.status(201).json(order);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  export const getAllOrders = async (req, res) => {
    try {
      const { date } = req.query;
      const orders = await fetchAllOrders(date);
      if (orders.length === 0) {
        return res.status(404).json([]);
      }
      return res.status(200).json(orders);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  export const getOrderById = async (req, res) => {
    try {
      const { id } = req.params;
      const order = await fetchOrderById(id);
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
      return res.status(200).json(order);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  export const getClientOrders = async (req, res) => {
    try {
      const { id } = req.params;
      const client = await findClientById(id);
      if (!client) {
        return res.status(404).json({ error: 'Client not found' });
      }
      const orders = await fetchClientOrders(id);
      return res.status(200).json(orders);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  