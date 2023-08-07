migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5011sf3v8xnb42t")

  // remove
  collection.schema.removeField("bkrzvm8s")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5011sf3v8xnb42t")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bkrzvm8s",
    "name": "rol",
    "type": "text",
    "required": false,
    "unique": true,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
