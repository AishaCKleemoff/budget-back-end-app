const { v4: uuidv4 } = require("uuid");

module.exports = [
  {
    id: uuidv4(),
    item_name: "income",
    amount: 2500,
    date: "10/07/2023",
    from: "employer",
    category: "income",
  },
  {
    id: uuidv4(),
    item_name: "savings",
    amount: 2500000,
    date: "01/02/2023",
    from: "Stock Dividend",
    category: "income",
  },
  {
    id: uuidv4(),
    item_name: "co-op-maintaince",
    amount: 3000,
    date: "11/01/2023",
    from: "Sowdum Property MGT",
    category: "living-expense",
  },
  {
    id: uuidv4(),
    item_name: "groceries",
    amount: 1200,
    date: "10/15/2023",
    from: "Instacart",
    category: "food",
  },
  {
    id: uuidv4(),
    item_name: "outfit",
    amount: 2500,
    date: "10/25/2023",
    from: "Amiga Bodaga",
    category: "clothing",
  },
];
