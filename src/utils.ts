import type { Node } from "./type";

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
