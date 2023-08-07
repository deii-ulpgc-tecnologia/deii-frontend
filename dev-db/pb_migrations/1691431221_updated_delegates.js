migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5011sf3v8xnb42t")

  collection.name = "delegatesData"

  // remove
  collection.schema.removeField("t6wvp0jk")

  // remove
  collection.schema.removeField("kkyx8d7v")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5011sf3v8xnb42t")

  collection.name = "delegates"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t6wvp0jk",
    "name": "belongsPresidency",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kkyx8d7v",
    "name": "isHonorary",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
