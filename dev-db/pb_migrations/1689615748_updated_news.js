migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n0w834k860xxnh5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g7y2r9j9",
    "name": "content",
    "type": "editor",
    "required": true,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0cnjnrug",
    "name": "thumbnail",
    "type": "file",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/png",
        "image/jpeg"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n0w834k860xxnh5")

  // remove
  collection.schema.removeField("g7y2r9j9")

  // remove
  collection.schema.removeField("0cnjnrug")

  return dao.saveCollection(collection)
})
