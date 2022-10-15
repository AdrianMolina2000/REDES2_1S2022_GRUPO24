const express = require("express");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://ec2-44-202-253-179.compute-1.amazonaws.com:27017/DB";

var app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/Administrador", function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("DB");
    dbo
      .collection("Administrador")
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        res.send(result);
        db.close();
      });
  });
});

app.get("/Desarrollador", function (req, res) {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("DB");
      dbo
        .collection("Desarrollador")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          res.send(result);
          db.close();
        });
    });
  });

  app.get("/FuncionPublica", function (req, res) {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("DB");
      dbo
        .collection("FuncionPublica")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          res.send(result);
          db.close();
        });
    });
  });

  app.get("/DesarrolloEconomico", function (req, res) {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("DB");
      dbo
        .collection("DesarrolloEconomico")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          res.send(result);
          db.close();
        });
    });
  });

  app.get("/UltimaNoticia", function (req, res) {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("DB");
      dbo
        .collection("UltimaNoticia")
        .find({})
        .toArray(function (err, result) {
          if (err) throw err;
          res.send(result);
          db.close();
        });
    });
  });

app.listen(5000, () => console.log("Server on port 5000"));
