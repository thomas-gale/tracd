migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("giyukdx8f7s2rzh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hujc3gr7",
    "name": "any_other_information",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 1000,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("giyukdx8f7s2rzh")

  // remove
  collection.schema.removeField("hujc3gr7")

  return dao.saveCollection(collection)
})
