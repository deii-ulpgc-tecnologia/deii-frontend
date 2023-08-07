migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("adlashj05wo1r7d")

  collection.options = {
    "query": "SELECT \n  delegatesData.id,\n  delegatesData.created,\n  delegatesData.updated,\n  delegatesData.name,\n  delegatesData.avatar,\n  delegatesData.rol,\n  (delegatesData.rol = 'Delegado Honorario') AS isHonorary,\n  (\n      CASE WHEN delegatesData.rol IN (\n          'Presidente',\n          'Vicepresidente',\n          'Secretario') \n      THEN 'true' ELSE 'false' END\n  ) AS isPresidency\nFROM delegatesData"
  }

  // remove
  collection.schema.removeField("sxvdlc8p")

  // remove
  collection.schema.removeField("zna0x61p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aktnrkdd",
    "name": "isHonorary",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uvqb451m",
    "name": "isPresidency",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("adlashj05wo1r7d")

  collection.options = {
    "query": "SELECT \n  delegatesData.id,\n  delegatesData.created,\n  delegatesData.updated,\n  delegatesData.name,\n  delegatesData.avatar,\n  delegatesData.rol,\n  (delegatesData.rol = 'Delegado Honorario') AS isHonorary,\n  (\n      CASE WHEN rol IN (\n          'Presidente',\n          'Vicepresidente',\n          'Secretario') \n      THEN 'true' ELSE 'false' END\n  ) AS isPresidency\nFROM delegatesData"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sxvdlc8p",
    "name": "isHonorary",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zna0x61p",
    "name": "isPresidency",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("aktnrkdd")

  // remove
  collection.schema.removeField("uvqb451m")

  return dao.saveCollection(collection)
})
