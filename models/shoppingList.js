import { pool } from "../db/index.js";

export async function getShoppingList() {
  const data = await pool.query("SELECT * FROM shopping ORDER BY completed;");
  console.log("The shopping list is", data.rows);
  return data.rows;
}

export async function postListItem(listItem) {
  const { item, completed } = listItem;
  const data = await pool.query(
    `INSERT INTO shopping (
      item,
      completed
    ) VALUES ($1,$2) RETURNING *;`,
    [item, completed]
  );
  return data.rows[0];
}

export async function updateCompleted(listItem) {
  const { item, completed } = listItem;
  const data = await pool.query(
    `UPDATE shopping
     SET completed = $2
     WHERE item = $1
     RETURNING *;`,
    [item, completed]
  );
  return data.rows[0];
}