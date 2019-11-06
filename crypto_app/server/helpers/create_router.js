const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

  const router = express.Router();

  router.get('/', (req, res) => {
    collection
    .find()
    .toArray()
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  });

  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection
    .findOne({ _id: ObjectID(id) })
    .then((doc) => res.json(doc))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  });

  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection
    .deleteOne({ _id: ObjectID(id) })
    .then(() => collection.find().toArray())
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });
  });

  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    delete updatedData._id;
    collection
    .findOneAndUpdate({ _id: ObjectID(id) }, { $set: updatedData })
    .then(() => collection.find().toArray())
    .then((docs) => res.json(docs))
    .catch((err) => {
      res.status(500);
      res.json({ status: 500, error: err });
    });
  });

  router.post('/:id/buy', (req, res) => {
    const id = req.params.id;
    const currencyData = req.body;
    collection
    .findOne({ _id: ObjectID(id) })
    .then(buyer => {
      buyer.wallet.push(currencyData);
      delete buyer._id

      collection.findOneAndUpdate(
        { _id: ObjectID(id) },
        { $set: buyer },
        { returnOriginal: false })
        .then(result => res.json(result.value));
      })
      .catch((err) => {
        res.status(500);
        res.json({ status: 500, error: err });
      });
    });

    router.post('/:id/edit', (req, res) => {
      const id = req.params.id;
      const currencyData = req.body;
      collection
      .findOne({ _id: ObjectID(id) })
      .then(buyer => {
        buyer.wallet.push(currencyData);
        delete buyer._id

        collection.findOneAndUpdate(
          { _id: ObjectID(id) },
          { $set: buyer },
          { returnOriginal: false })
          .then(result => res.json(result.value));
        })
        .catch((err) => {
          res.status(500);
          res.json({ status: 500, error: err });
        });
      });


    router.post('/:id/delete-coin', (req, res) => {
      const id = req.params.id;
      const currencyData = req.body;

      collection.findOne({ _id: ObjectID(id) })
        .then(buyer => {
          buyer.wallet = buyer.wallet.filter(transaction => {
            return transaction.currency.name !== currencyData.currency.name;
          });
          delete buyer._id

          collection.findOneAndUpdate(
            { _id: ObjectID(id) },
            { $set: buyer },
            { returnOriginal: false })
            .then(result => res.json(result.value))
        })
        .catch((err) => {
          res.status(500);
          res.json({ status: 500, error: err });
        });
      });




      router.post('/', (req, res) => {
        const newData = req.body;
        collection
        .insertOne(newData)
        .then((result) => {
          res.json(result.ops[0])
        })
        .catch((err) => {
          console.error(err);
          res.status(500);
          res.json({ status: 500, error: err });
        });
      });

      return router;
    };
    module.exports = createRouter;
