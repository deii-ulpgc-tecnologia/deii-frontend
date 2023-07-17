migrate((db) => {
  const collection = new Collection({
    "id": "pcnvzp9huk10e8i",
    "created": "2023-07-17 17:40:54.158Z",
    "updated": "2023-07-17 17:40:54.158Z",
    "name": "faqs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ahu7gm42",
        "name": "question",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "dusfmhyq",
        "name": "answer",
        "type": "editor",
        "required": true,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("pcnvzp9huk10e8i");

  return dao.deleteCollection(collection);
})
