migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lijnhztdmohrx2q")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_bodghG8` ON `newsletter` (`email`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lijnhztdmohrx2q")

  collection.indexes = []

  return dao.saveCollection(collection)
})
