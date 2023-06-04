migrate((db) => {
  const collection = new Collection({
    "id": "lijnhztdmohrx2q",
    "created": "2023-06-04 21:13:54.686Z",
    "updated": "2023-06-04 21:13:54.686Z",
    "name": "newsletter",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "onz2xold",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "lulrixmp",
        "name": "first_name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "infpnrlf",
        "name": "email",
        "type": "email",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "fk6nyhnn",
        "name": "autorisation",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("lijnhztdmohrx2q");

  return dao.deleteCollection(collection);
})
