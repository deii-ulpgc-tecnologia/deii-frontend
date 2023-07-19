migrate((db) => {
  const collection = new Collection({
    "id": "a0q6gkp779dvnzt",
    "created": "2023-07-18 00:37:11.040Z",
    "updated": "2023-07-18 00:37:11.040Z",
    "name": "faqHasTags",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xqj70ymv",
        "name": "tag",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "aj0ma4bxzw5i7xm",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
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
  const collection = dao.findCollectionByNameOrId("a0q6gkp779dvnzt");

  return dao.deleteCollection(collection);
})
