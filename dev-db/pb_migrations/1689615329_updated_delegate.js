migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5011sf3v8xnb42t")

  collection.name = "delegates"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5011sf3v8xnb42t")

  collection.name = "delegate"

  return dao.saveCollection(collection)
})
