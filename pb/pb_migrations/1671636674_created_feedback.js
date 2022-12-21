migrate((db) => {
  const collection = new Collection({
    "id": "giyukdx8f7s2rzh",
    "created": "2022-12-21 15:31:14.781Z",
    "updated": "2022-12-21 15:31:14.781Z",
    "name": "feedback",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ktjjszim",
        "name": "bottle_number",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 47
        }
      },
      {
        "system": false,
        "id": "4qcxuxs9",
        "name": "information_interesting",
        "type": "bool",
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
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("giyukdx8f7s2rzh");

  return dao.deleteCollection(collection);
})
