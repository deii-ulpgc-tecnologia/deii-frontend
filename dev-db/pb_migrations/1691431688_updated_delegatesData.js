migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5011sf3v8xnb42t")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cuvubur0",
    "name": "rol",
    "type": "select",
    "required": false,
    "unique": true,
    "options": {
      "maxSelect": 1,
      "values": [
        "Presidente",
        "Vicepresidente",
        "Secretario",
        "Tesorero",
        "Coord. División Tecnológica",
        "Cood. División de Documentación",
        "Coord. División de Comunicación"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5011sf3v8xnb42t")

  // remove
  collection.schema.removeField("cuvubur0")

  return dao.saveCollection(collection)
})
