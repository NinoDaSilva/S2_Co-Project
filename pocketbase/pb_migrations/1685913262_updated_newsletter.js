migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lijnhztdmohrx2q")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fk6nyhnn",
    "name": "autorization",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lijnhztdmohrx2q")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fk6nyhnn",
    "name": "autorisation",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
