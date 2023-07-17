migrate((db) => {
  const collection = new Collection({
    "id": "sktnn1v4iqejqfl",
    "created": "2023-07-17 17:35:12.693Z",
    "updated": "2023-07-17 17:35:12.693Z",
    "name": "socialNetworks",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tntmmso1",
        "name": "name",
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
        "id": "xo8srw4f",
        "name": "icon",
        "type": "text",
        "required": false,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("sktnn1v4iqejqfl");

  return dao.deleteCollection(collection);
})
