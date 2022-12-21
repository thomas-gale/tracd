migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("giyukdx8f7s2rzh")

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t5zlapfu",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 30,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1fgs6q6p",
    "name": "feedback",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 3000,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("giyukdx8f7s2rzh")

  // remove
  collection.schema.removeField("omvgbhlt")

  // remove
  collection.schema.removeField("t5zlapfu")

  // remove
  collection.schema.removeField("1fgs6q6p")

  return dao.saveCollection(collection)
})
