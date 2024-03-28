import { createDataTree, flattenDataTree } from "./index.ts"

describe("Data Tree Functions", () => {
  test("createDataTree should create a valid data tree", () => {
    const dataset = [
      { id: "1", parentId: undefined, children: [] },
      { id: "2", parentId: "1", children: [] },
      { id: "3", parentId: "1", children: [] },
      { id: "4", parentId: "2", children: [] },
      { id: "5", parentId: "3", children: [] },
    ]

    const dataTree = createDataTree(dataset)

    expect(dataTree).toHaveLength(1)
    expect(dataTree[0].id).toBe("1")
    expect(dataTree[0].id).toBe("1")
    expect(dataTree[0].children).toHaveLength(2)
    expect(dataTree[0].children[0].id).toBe("2")
  })

  test("flattenDataTree should flatten the data tree correctly", () => {
    const dataTree = [
      {
        id: "1",
        parentId: undefined,
        children: [
          { id: "2", parentId: "1", children: [] },
          { id: "3", parentId: "1", children: [] },
        ],
      },
      { id: "4", parentId: "2", children: [] },
      { id: "5", parentId: "3", children: [] },
    ]

    const flattenedDataset = flattenDataTree(dataTree)

    expect(flattenedDataset).toHaveLength(5)
    expect(flattenedDataset[0].id).toBe("1")
    expect(flattenedDataset[1].id).toBe("2")
    expect(flattenedDataset[0].parentId).toBe(undefined)
    expect(flattenedDataset[1].parentId).toBe("1")
    expect(flattenedDataset[2].parentId).toBe("1")
  })
})
