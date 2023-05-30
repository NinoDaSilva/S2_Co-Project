migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("hjwgdechhd7y3dt");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "hjwgdechhd7y3dt",
    "created": "2023-05-27 19:18:39.103Z",
    "updated": "2023-05-27 19:29:54.914Z",
    "name": "etapes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ndqx2rsg",
        "name": "numero",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "xsartscj",
        "name": "description",
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
        "id": "60awj0ap",
        "name": "recette",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "ijgy67pswaasf29",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "id",
            "titre"
          ]
        }
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
})
