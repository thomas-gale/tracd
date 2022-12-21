migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("giyukdx8f7s2rzh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "grld5dlx",
    "name": "what_information_worth_showing",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 4,
      "values": [
        "co2e",
        "recycled",
        "blockchain",
        "process_steps"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("giyukdx8f7s2rzh")

  // remove
  collection.schema.removeField("grld5dlx")

  return dao.saveCollection(collection)
})
