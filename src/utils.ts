import type { Node } from "./type";

export function formatSize(size: number) {
  if (size < 1024) return `${size} B`
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`
  
  return `${(size / (1024 * 1024)).toFixed(1)} MB`
}

export function calculateFolderSize(node : Node): number | undefined {
  if (node?.type === "file") return node?.size

  return node?.children?.reduce(
    (acc, child) => acc + (child ? calculateFolderSize(child) ?? 0 : 0),
    0
  )
}

export function findNode(tree: Node | null | undefined, path: string): typeof tree | Node {
  const parts = path.split("/")
  let current = tree

  for (let i = 1; i < parts.length; i++) {
    current = current?.children?.find(
      (child) => child?.name === parts[i]
    )
  }

  return current
}

export function searchTree(node : Node, query: string, path = "") {
  const results = []
  const currentPath = path ? `${path}/${node?.name}` : node?.name

  if (node?.name.toLowerCase().includes(query.toLowerCase())) {
    results.push({
      name: node.name,
      path: currentPath
    })
  }
  if (node?.children) {
    node.children.forEach((child) =>
      results.push(...searchTree(child, query, currentPath))
    )
  }

  return results
}
