migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7q1ykwqrk34q790")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k6gzha2g",
    "name": "type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "fruit",
        "légume"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7q1ykwqrk34q790")

  // remove
  collection.schema.removeField("k6gzha2g")

  return dao.saveCollection(collection)
})
