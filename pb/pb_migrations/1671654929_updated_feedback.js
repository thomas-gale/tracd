migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("giyukdx8f7s2rzh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xmb30ptv",
    "name": "how_was_beer",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "great",
        "passable",
        "stick_to_day_job",
        "can_i_have_refund"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("giyukdx8f7s2rzh")

  // remove
  collection.schema.removeField("xmb30ptv")

  return dao.saveCollection(collection)
})
