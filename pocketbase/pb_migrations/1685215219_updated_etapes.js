migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hjwgdechhd7y3dt")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hjwgdechhd7y3dt")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ndqx2rsg",
    "name": "numero",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
