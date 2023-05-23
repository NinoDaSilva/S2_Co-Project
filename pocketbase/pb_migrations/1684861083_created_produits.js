migrate((db) => {
  const collection = new Collection({
    "id": "7q1ykwqrk34q790",
    "created": "2023-05-23 16:58:03.782Z",
    "updated": "2023-05-23 16:58:03.782Z",
    "name": "produits",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cgxo59yt",
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
        "id": "ep5d5kpz",
        "name": "img",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("7q1ykwqrk34q790");

  return dao.deleteCollection(collection);
})
