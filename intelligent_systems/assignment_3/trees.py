"""
        20
       / \
     10   25
    / \    \
   5   15  30

   FOR MY OWN IMPLEMENTATION
        'd'
        / \
      'b'  'e'
      / \   \
    'a' 'c'  'g'
"""

tree = {
    20: [10, 25],
    10: [5, 15],
    25: [30],
    5: [],
    15: [],
    30: []
}

alf_tree = {
    'd': ['b', 'e'],
    'b': ['a', 'c'],
    'e': ['g'],
    'a': [],
    'c': [],
    'g': []
}


def search_dfs_stack(start, value):
    stack = [start]
    while len(stack):
        node = stack.pop()
        if node == value:
            print('[[', value, ']]')
            break
        print(node, '-> ', end='')
        for adj in reversed(tree[node]):
            stack.append(adj)


def search_bfs_queue(start, value):
    queue = [start]
    while len(queue):
        node = queue.pop(0)
        if node == value:
            print('[[', value, ']]')
            break
        print(node, '-> ', end='')
        for adj in tree[node]:
            queue.append(adj)


def my_bfs(start, value):
    queue = [start]
    while len(queue):
        node = queue.pop(0)
        if node == value:
            print('[[', value, ']]')
            break
        print(node, '-> ', end='')
        for adj in alf_tree[node]:
            queue.append(adj)


search_dfs_stack(20, 15)  # 20 -> 10 -> 5 -> [[ 15 ]]
search_bfs_queue(20, 15)  # 20 -> 10 -> 25 -> 5 -> [[ 15 ]]
my_bfs('d', 'c')

# The difference between BFS and DFS would be that DFS searches the depth of a tree, likewise, BFS will search each
# level of the tree. I received these results because I chose to search for a number toward the bottom of the tree.
# Numbers that exists further in a tree are found quicker by DFS and numbers that are closer to the root of your search
# are found quicker with BFS, since my key term was further in the tree BFS performed poor but DFS performed well.
