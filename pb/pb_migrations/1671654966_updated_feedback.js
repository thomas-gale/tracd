migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("giyukdx8f7s2rzh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "omvgbhlt",
    "name": "having_a_story",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "yes",
        "no",
        "only_premium",
        "custom"
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
    "id": "omvgbhlt",
    "name": "having_a_story",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "yes",
        "no",
        "only_premium"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
