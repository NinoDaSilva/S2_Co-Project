migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7q1ykwqrk34q790")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ep5d5kpz",
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
  const collection = dao.findCollectionByNameOrId("7q1ykwqrk34q790")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ep5d5kpz",
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
