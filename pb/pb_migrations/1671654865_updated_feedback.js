migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("giyukdx8f7s2rzh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7xguhcto",
    "name": "favorite_christmas_film",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 100,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("giyukdx8f7s2rzh")

  // remove
  collection.schema.removeField("7xguhcto")

  return dao.saveCollection(collection)
})
