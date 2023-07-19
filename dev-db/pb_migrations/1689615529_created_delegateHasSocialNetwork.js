migrate((db) => {
  const collection = new Collection({
    "id": "zzvhwmrm2wtmb02",
    "created": "2023-07-17 17:38:49.968Z",
    "updated": "2023-07-17 17:38:49.968Z",
    "name": "delegateHasSocialNetwork",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "77b0wsuz",
        "name": "link",
        "type": "url",
        "required": true,
        "unique": true,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "rhlfv7pa",
        "name": "delegate",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "5011sf3v8xnb42t",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "wp8nkog9",
        "name": "socialNetwork",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "sktnn1v4iqejqfl",
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
  const collection = dao.findCollectionByNameOrId("zzvhwmrm2wtmb02");

  return dao.deleteCollection(collection);
})
