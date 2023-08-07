migrate((db) => {
  const collection = new Collection({
    "id": "gyt5ynsxz1yt0qx",
    "created": "2023-08-07 18:08:22.130Z",
    "updated": "2023-08-07 18:08:22.130Z",
    "name": "delegates",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hqwii8jg",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": 50,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "zubfnqgs",
        "name": "avatar",
        "type": "file",
        "required": false,
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
      },
      {
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
      },
      {
        "system": false,
        "id": "aehpjsj8",
        "name": "isHonorary",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "ze76capm",
        "name": "isPresidency",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT \n  delegatesData.id,\n  delegatesData.created,\n  delegatesData.updated,\n  delegatesData.name,\n  delegatesData.avatar,\n  delegatesData.rol,\n  (delegatesData.rol = 'Delegado Honorario') AS isHonorary,\n  (\n      CASE WHEN delegatesData.rol IN (\n          'Presidente',\n          'Vicepresidente',\n          'Secretario') \n      THEN 'true' ELSE 'false' END\n  ) AS isPresidency\nFROM delegatesData"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("gyt5ynsxz1yt0qx");

  return dao.deleteCollection(collection);
})
