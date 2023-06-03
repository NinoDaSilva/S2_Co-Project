migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ijgy67pswaasf29")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dullw6md",
    "name": "image_hero",
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
  const collection = dao.findCollectionByNameOrId("ijgy67pswaasf29")

  // remove
  collection.schema.removeField("dullw6md")

  return dao.saveCollection(collection)
})
