migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7o7wyo27r5svx6b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ktbyofe2",
    "name": "tag",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "bjr3s7m15v57zz1",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7o7wyo27r5svx6b")

  // remove
  collection.schema.removeField("ktbyofe2")

  return dao.saveCollection(collection)
})
