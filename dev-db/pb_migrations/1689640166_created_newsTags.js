migrate((db) => {
  const collection = new Collection({
    "id": "bjr3s7m15v57zz1",
    "created": "2023-07-18 00:29:26.237Z",
    "updated": "2023-07-18 00:29:26.237Z",
    "name": "newsTags",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "x0km7umi",
        "name": "name",
        "type": "text",
        "required": true,
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
  const collection = dao.findCollectionByNameOrId("bjr3s7m15v57zz1");

  return dao.deleteCollection(collection);
})
