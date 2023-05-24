migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("636funtdh1h1koy")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lkm6beoz",
    "name": "image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("636funtdh1h1koy")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lkm6beoz",
    "name": "img",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
