migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("adlashj05wo1r7d");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "adlashj05wo1r7d",
    "created": "2023-08-07 18:01:37.489Z",
    "updated": "2023-08-07 18:03:08.149Z",
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
      },
      {
        "system": false,
        "id": "aktnrkdd",
        "name": "isHonorary",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "uvqb451m",
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
})
