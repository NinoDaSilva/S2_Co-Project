migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7q1ykwqrk34q790")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ipfo09nj",
    "name": "disponible",
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
  collection.schema.removeField("ipfo09nj")

  return dao.saveCollection(collection)
})
