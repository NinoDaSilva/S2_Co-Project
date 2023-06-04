migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("83c9w25isg1o8sz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "096uu9se",
    "name": "newsletter",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("83c9w25isg1o8sz")

  // remove
  collection.schema.removeField("096uu9se")

  return dao.saveCollection(collection)
})
