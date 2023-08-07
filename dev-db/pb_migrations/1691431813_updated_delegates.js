migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gyt5ynsxz1yt0qx")

  collection.options = {
    "query": "SELECT \n  delegatesData.id,\n  delegatesData.created,\n  delegatesData.updated,\n  delegatesData.name,\n  delegatesData.avatar,\n  delegatesData.rol,\n  (\n      CASE WHEN delegatesData.rol = 'Delegado Honorario' \n      THEN 'true' ELSE 'false' END\n  ) AS isHonorary,\n  (\n      CASE WHEN delegatesData.rol IN (\n          'Presidente',\n          'Vicepresidente',\n          'Secretario') \n      THEN 'true' ELSE 'false' END\n  ) AS isPresidency\nFROM delegatesData"
  }

  // remove
  collection.schema.removeField("aehpjsj8")

  // remove
  collection.schema.removeField("ze76capm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kjr3ay6k",
    "name": "isHonorary",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "70sco0aa",
    "name": "isPresidency",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gyt5ynsxz1yt0qx")

  collection.options = {
    "query": "SELECT \n  delegatesData.id,\n  delegatesData.created,\n  delegatesData.updated,\n  delegatesData.name,\n  delegatesData.avatar,\n  delegatesData.rol,\n  (delegatesData.rol = 'Delegado Honorario') AS isHonorary,\n  (\n      CASE WHEN delegatesData.rol IN (\n          'Presidente',\n          'Vicepresidente',\n          'Secretario') \n      THEN 'true' ELSE 'false' END\n  ) AS isPresidency\nFROM delegatesData"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aehpjsj8",
    "name": "isHonorary",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ze76capm",
    "name": "isPresidency",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("kjr3ay6k")

  // remove
  collection.schema.removeField("70sco0aa")

  return dao.saveCollection(collection)
})
