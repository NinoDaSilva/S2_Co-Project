migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7q1ykwqrk34q790")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wr8cczdm",
    "name": "saison",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "printemps",
        "été",
        "automne",
        "hiver"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7q1ykwqrk34q790")

  // remove
  collection.schema.removeField("wr8cczdm")

  return dao.saveCollection(collection)
})
