migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("giyukdx8f7s2rzh")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ktjjszim",
    "name": "bottle_number",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 47
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("giyukdx8f7s2rzh")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
