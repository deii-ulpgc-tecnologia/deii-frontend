migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("gyt5ynsxz1yt0qx")

  collection.options = {
    "query": "SELECT \n  delegatesData.id,\n  delegatesData.created,\n  delegatesData.updated,\n  delegatesData.name,\n  delegatesData.avatar,\n  delegatesData.rol,\n  (\n      CASE WHEN delegatesData.rol = 'Delegado Honorario' \n      THEN 'true' ELSE 'false' END\n  ) AS isHonorary,\n  (\n      CASE WHEN delegatesData.rol IN (\n          'Presidente',\n          'Vicepresidente',\n          'Secretario') \n      THEN 'true' ELSE 'false' END\n  ) AS belongsPresidency\nFROM delegatesData"
  }

  // remove
  collection.schema.removeField("kjr3ay6k")

  // remove
  collection.schema.removeField("70sco0aa")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qlrziswu",
    "name": "isHonorary",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hbyedffd",
    "name": "belongsPresidency",
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
    "query": "SELECT \n  delegatesData.id,\n  delegatesData.created,\n  delegatesData.updated,\n  delegatesData.name,\n  delegatesData.avatar,\n  delegatesData.rol,\n  (\n      CASE WHEN delegatesData.rol = 'Delegado Honorario' \n      THEN 'true' ELSE 'false' END\n  ) AS isHonorary,\n  (\n      CASE WHEN delegatesData.rol IN (\n          'Presidente',\n          'Vicepresidente',\n          'Secretario') \n      THEN 'true' ELSE 'false' END\n  ) AS isPresidency\nFROM delegatesData"
  }

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

  // remove
  collection.schema.removeField("qlrziswu")

  // remove
  collection.schema.removeField("hbyedffd")

  return dao.saveCollection(collection)
})
