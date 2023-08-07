migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n0w834k860xxnh5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qafipqfb",
    "name": "title",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": 50,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n0w834k860xxnh5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qafipqfb",
    "name": "title",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
