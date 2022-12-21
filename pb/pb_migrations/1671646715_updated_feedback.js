migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("giyukdx8f7s2rzh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9ufdbac6",
    "name": "information_interesting",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "yes",
        "no"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("giyukdx8f7s2rzh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9ufdbac6",
    "name": "information_interesting",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "undefined",
        "yes",
        "no"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
