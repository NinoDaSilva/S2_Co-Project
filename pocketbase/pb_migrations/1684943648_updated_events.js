migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("636funtdh1h1koy")

  // remove
  collection.schema.removeField("oobw5n3i")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t5voopwx",
    "name": "date",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("636funtdh1h1koy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oobw5n3i",
    "name": "date",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("t5voopwx")

  return dao.saveCollection(collection)
})
