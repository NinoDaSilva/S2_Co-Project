migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hjwgdechhd7y3dt")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hjwgdechhd7y3dt")

  // update
  collection.schema.addField(new SchemaField({
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
        "id"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
