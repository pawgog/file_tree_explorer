type FileNode = {
  name: string
  type: "file"
  size: number
  children?: Node[]
}

type FolderNode = {
  name: string
  type: "folder"
  children: Node[]
}

type Node = FileNode | FolderNode

export type { FileNode, FolderNode, Node }
