"""
      5
     / \
    6   7
   / \ / \
  1   2   3
"""

tree = {
    5: [6, 7],
    6: [5, 1, 2],
    7: [5, 2, 3],
    1: [6],
    2: [6, 7],
    3: [7]
}


def search_dfs_stack(start, value):
    stack = [start]
    visited = set()
    while len(stack):
        node = stack.pop()
        if node == value:
            print('[[', value, ']]')
            break
        print(node, '-> ', end='')
        for adj in reversed(tree[node]):
            if adj not in visited:
                stack.append(adj)
        visited.add(node)


def search_bfs_queue(start, value):
    queue = [start]
    visited = set()
    while len(queue):
        node = queue.pop(0)
        if node == value:
            print('[[', value, ']]')
            break
        print(node, '-> ', end='')
        for adj in tree[node]:
            if adj not in visited:
                queue.append(adj)
        visited.add(node)


search_dfs_stack(5, 2)  # 5 -> 6 -> 1 -> [[ 2 ]]
search_bfs_queue(5, 2)  # 5 -> 6 -> 7 -> 1 -> [[ 2 ]]

# The difference between BFS and DFS would be that DFS searches the depth of a tree, likewise, BFS will search each
# level of the tree. I received these results because I chose to search for a number toward the bottom of the tree.
# Numbers that exists further in a tree are found quicker by DFS and numbers that are closer to the root of your search
# are found quicker with BFS, since my key term was further in the tree BFS performed poor but DFS performed well.
