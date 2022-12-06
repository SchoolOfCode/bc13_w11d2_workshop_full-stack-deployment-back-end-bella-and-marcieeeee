import express from "express";
import { getShoppingList, postListItem, updateCompleted} from "../models/shoppingList.js";

const router = express.Router();

/* GET shopping list. */
router.get("/", async (req, res) => {
  const data = await getShoppingList();
  res.json({ success: true, payload: data });
});

router.post("/", async (req, res) => {
  const { listItem, completed } = req.body;
  const result = await postListItem(listItem, completed);
  res.status(201).json({ success: true, payload: result });
});

router.patch("/", async (req, res) => {
  const { listItem, completed } = req.body;
  const result = await updateCompleted(listItem, completed);
res.status(200).json({ success: true, payload: result });
});


export default router;
