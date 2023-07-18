migrate((db) => {
  const collection = new Collection({
    "id": "7o7wyo27r5svx6b",
    "created": "2023-07-18 00:29:02.797Z",
    "updated": "2023-07-18 00:29:02.797Z",
    "name": "newHasTags",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "q4suotn8",
        "name": "news",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "n0w834k860xxnh5",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 3,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("7o7wyo27r5svx6b");

  return dao.deleteCollection(collection);
})
