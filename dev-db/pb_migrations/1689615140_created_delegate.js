migrate((db) => {
  const collection = new Collection({
    "id": "5011sf3v8xnb42t",
    "created": "2023-07-17 17:32:20.193Z",
    "updated": "2023-07-17 17:32:20.193Z",
    "name": "delegate",
    "type": "base",
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
  const collection = dao.findCollectionByNameOrId("5011sf3v8xnb42t");

  return dao.deleteCollection(collection);
})
