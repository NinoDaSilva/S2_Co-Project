migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7q1ykwqrk34q790")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iacinzgb",
    "name": "vente",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7q1ykwqrk34q790")

  // remove
  collection.schema.removeField("iacinzgb")

  return dao.saveCollection(collection)
})
