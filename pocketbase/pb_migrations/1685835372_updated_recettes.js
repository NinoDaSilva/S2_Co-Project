migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ijgy67pswaasf29")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gjox7p7e",
    "name": "ingredients",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "7q1ykwqrk34q790",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ijgy67pswaasf29")

  // remove
  collection.schema.removeField("gjox7p7e")

  return dao.saveCollection(collection)
})
