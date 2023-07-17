migrate((db) => {
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5011sf3v8xnb42t")

  // remove
  collection.schema.removeField("bkrzvm8s")

  // remove
  collection.schema.removeField("t6wvp0jk")

  // remove
  collection.schema.removeField("kkyx8d7v")

  return dao.saveCollection(collection)
})
