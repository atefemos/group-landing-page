// function for make tree from json data
export const createDataTree = (dataset) => {
  const hashTable = Object.create(null)

  dataset.forEach((aData) => (hashTable[aData.id] = { ...aData, children: [] }))

  const dataTree: any[] = []

  dataset.forEach((aData) => {
    if (aData.parentId) {
      if (hashTable[aData.parentId]) {
        hashTable[aData.parentId].children.push(hashTable[aData.id])
      } else {
        console.error(`ParentID ${aData.parentId} does not exist in dataset.`)
      }
    } else {
      dataTree.push(hashTable[aData.id])
    }
  })

  return dataTree
}

// function for flat nested tree
export const flattenDataTree = (dataTree) => {
  const flattenedArray: any[] = []

  const flattenHelper = (node: any) => {
    const { children, ...rest } = node
    flattenedArray.push(rest)
    node.children.forEach(flattenHelper)
  }

  dataTree.forEach(flattenHelper)

  return flattenedArray
}
