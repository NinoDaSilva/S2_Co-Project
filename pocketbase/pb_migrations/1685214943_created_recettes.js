migrate((db) => {
  const collection = new Collection({
    "id": "ijgy67pswaasf29",
    "created": "2023-05-27 19:15:43.246Z",
    "updated": "2023-05-27 19:15:43.246Z",
    "name": "recettes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vxe1iitr",
        "name": "titre",
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
        "id": "0ye8pq5j",
        "name": "image",
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
      },
      {
        "system": false,
        "id": "bd6ktums",
        "name": "favori",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "p8hncpd5",
        "name": "temps",
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
        "id": "rvetemjo",
        "name": "nbr_personnes",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ijgy67pswaasf29");

  return dao.deleteCollection(collection);
})
