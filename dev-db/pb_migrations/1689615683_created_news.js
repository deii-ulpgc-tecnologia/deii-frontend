migrate((db) => {
  const collection = new Collection({
    "id": "n0w834k860xxnh5",
    "created": "2023-07-17 17:41:23.482Z",
    "updated": "2023-07-17 17:41:23.482Z",
    "name": "news",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qafipqfb",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
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
  const collection = dao.findCollectionByNameOrId("n0w834k860xxnh5");

  return dao.deleteCollection(collection);
})
