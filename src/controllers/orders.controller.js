import { createOrder } from "../repositories/orders.repository.js";
import { findClientById } from "../repositories/clients.repository.js";
import { findCakeById } from "../repositories/cakes.repository.js";



export const postOrder = async (req, res) => {
    console.log("postOrder called");
    const { clientId, cakeId, quantity, totalPrice } = req.body;

    const client = await findClientById(clientId);
    if (!client) {
        return res.status(404).send("Client not found");
    }

    const cake = await findCakeById(cakeId);
    if (!cake) {
        return res.status(404).send("Cake not found");
    }

    const order = await createOrder(clientId, cakeId, quantity, totalPrice);

    return res.status(201).send(order);
}
