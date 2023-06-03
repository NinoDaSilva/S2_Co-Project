migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ijgy67pswaasf29")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "weuhs9o8",
    "name": "type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "salée",
        "sucrée"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ijgy67pswaasf29")

  // remove
  collection.schema.removeField("weuhs9o8")

  return dao.saveCollection(collection)
})
