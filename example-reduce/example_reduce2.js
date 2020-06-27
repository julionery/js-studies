const transactions = [
  {
    "id": "uuid",
    "title": "Salário",
    "value": 4000,
    "type": "income"
  },
  {
    "id": "uuid",
    "title": "Freela",
    "value": 2000,
    "type": "income"
  },
  {
    "id": "uuid",
    "title": "Pagamento da fatura",
    "value": 4000,
    "type": "outcome"
  },
  {
    "id": "uuid",
    "title": "Cadeira Gamer",
    "value": 1200,
    "type": "outcome"
  }
]


/**
 * REDUCE
 * Aplicando o reduce para buscar o balaço.
 */ 

function getBalance() {
  const { income, outcome } = this.transactions.reduce(
    (accumulator, transaction) => {
      switch (transaction.type) {
        case 'income':
          accumulator.income += transaction.value;
          break;
        case 'outcome':
          accumulator.outcome += transaction.value;
          break;
        default:
          break;
      }

      return accumulator;
    },
    { income: 0, outcome: 0, total: 0 },
  );

  const total = income - outcome;

  return { income, outcome, total };
}

console.log(getBalance());

/**
 *  RESULTADO
 * 
 *  "balance": {
 *   "income": 6000,
 *   "outcome": 5200,
 *   "total": 800
 *  }
 */ 
