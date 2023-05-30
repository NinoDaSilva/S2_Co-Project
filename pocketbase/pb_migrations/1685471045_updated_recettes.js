migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ijgy67pswaasf29")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wkij3oxa",
    "name": "etape_1",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ktaburrt",
    "name": "etape_2",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b6v9unjl",
    "name": "etape_3",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fkrgzufo",
    "name": "etape_4",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1vfj6deg",
    "name": "etape_5",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4wzglh8z",
    "name": "etape_6",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a5idmxq6",
    "name": "etape_7",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vcgxutiq",
    "name": "etape_8",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xkdr62n6",
    "name": "etape_9",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zvyfey6w",
    "name": "etape_10",
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
  const collection = dao.findCollectionByNameOrId("ijgy67pswaasf29")

  // remove
  collection.schema.removeField("wkij3oxa")

  // remove
  collection.schema.removeField("ktaburrt")

  // remove
  collection.schema.removeField("b6v9unjl")

  // remove
  collection.schema.removeField("fkrgzufo")

  // remove
  collection.schema.removeField("1vfj6deg")

  // remove
  collection.schema.removeField("4wzglh8z")

  // remove
  collection.schema.removeField("a5idmxq6")

  // remove
  collection.schema.removeField("vcgxutiq")

  // remove
  collection.schema.removeField("xkdr62n6")

  // remove
  collection.schema.removeField("zvyfey6w")

  return dao.saveCollection(collection)
})
