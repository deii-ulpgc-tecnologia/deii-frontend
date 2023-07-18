migrate((db) => {
  const collection = new Collection({
    "id": "aj0ma4bxzw5i7xm",
    "created": "2023-07-18 00:31:50.429Z",
    "updated": "2023-07-18 00:31:50.429Z",
    "name": "faqTag",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zkxfiflu",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "q4muj30x",
        "name": "icon",
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
  const collection = dao.findCollectionByNameOrId("aj0ma4bxzw5i7xm");

  return dao.deleteCollection(collection);
})
