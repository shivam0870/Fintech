const Transaction = require("../models/Transaction");
const { validationResult } = require("express-validator");

exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.getAll();
    res.json(transactions);
  } catch (error) {
    next(error);
  }
};

exports.getSpendingByCategory = async (req, res, next) => {
  try {
    const spending = await Transaction.getByCategory();
    res.json(spending);
  } catch (error) {
    next(error);
  }
};

exports.createTransaction = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const existingTransaction = await Transaction.getByTransactionId(req.body.transactionId);
    if (existingTransaction) {
      return res.status(400).json({ message: "Duplicate payment detected" });
    }

    const transaction = await Transaction.create(req.body);
    res.status(201).json(transaction);
  } catch (error) {
    next(error);
  }
};


exports.processRefund = async (req, res, next) => {
  try {
    const { transactionId } = req.params;
    await Transaction.processRefund(transactionId);
    res.json({ message: "Refund processed successfully" });
  } catch (error) {
    next(error);
  }
};

exports.processRefundRequest = async (req, res, next) => {
  try {
    const { transactionId } = req.params;


    const transaction = await Transaction.getById(transactionId);
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    if (transaction.status === "refunded") {
      return res.status(400).json({ message: "Transaction already refunded" });
    }


    await Transaction.processRefund(transactionId);

    res.status(200).json({ message: "Refund processed successfully" });
  } catch (error) {
    next(error);
  }
};


