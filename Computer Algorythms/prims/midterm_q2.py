"""
Prim's Algorithm implementation
Implemented with inspiration from:
    https://www.programiz.com/dsa/prim-algorithm

By: Adam Rolek
Date: 4/2/2020
"""
from sys import maxsize


NODES = ('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H')


def is_edge_legal(u, v, current_mst):
    """
    Function to check this validity of an edge

    :param u: first node of the edge
    :param v: second node of the edge
    :param current_mst: the current MST
    :return: true if the edge is valid, false otherwise
    """
    # both nodes present (they have been visited) or neither node is present in the tree (neither has been visited)
    if current_mst[u] is False and current_mst[v] is False or current_mst[u] is True and current_mst[v] is True:
        return False
    else:
        return True  # if i get here, the edge must be valid to be considered


def prim(graph):
    """
    This is the implementation of Prim's Algorithm

    :param graph: The graph in Matrix form
    :return: Nothing
    """
    vertex_count = len(graph)
    current_mst = [True if x == 0 else False for x in range(vertex_count)]
    min_cost = op_count = 0
    for edge_num in range(vertex_count - 1):  # add all n - 1 vertices to mst
        cost = maxsize
        a = b = -1
        for i in range(vertex_count):
            for j in range(vertex_count):
                op_count += 1  # This would be my basic operation
                if graph[i][j] < cost and not graph[i][j] == 0:
                    if is_edge_legal(i, j, current_mst):
                        op_count += 1
                        cost = graph[i][j]
                        a = i
                        b = j
        if a != -1 and b != -1:
            print("Edge {}: {} - {}\t|\tCost: {}"
                  .format(edge_num + 1, NODES[a], NODES[b], cost))  # im only accessing an array here for style
            min_cost += cost
            current_mst[b] = current_mst[a] = True
    print("Tree Cost = {}".format(min_cost))
    print("Basic Operations = {}".format(op_count))


if __name__ == "__main__":  # making sure code is not run if I import this file into a project later.
    print("----- 4 Nodes -----")
    g = [[0, 2, 0, 6],
         [2, 0, 3, 8],
         [0, 3, 0, 0],
         [6, 8, 0, 0]]
    prim(g)
    print("----- 5 Nodes -----")
    g = [[0, 2, 4, 0, 0],
         [2, 0, 0, 6, 0],
         [4, 0, 0, 1, 7],
         [0, 6, 1, 0, 2],
         [0, 0, 7, 2, 0]]
    prim(g)
    print("----- 6 Nodes -----")
    g = [[0, 0, 5, 6, 0, 0],
         [0, 0, 0, 3, 4, 0],
         [5, 0, 0, 0, 0, 9],
         [6, 3, 0, 0, 0, 8],
         [0, 4, 0, 0, 0, 7],
         [0, 0, 9, 8, 7, 0]]
    prim(g)
    print("----- 7 Nodes -----")
    g = [[0, 0, 0, 0, 1, 0, 1],
         [0, 0, 8, 2, 0, 4, 0],
         [0, 8, 0, 0, 5, 0, 0],
         [0, 2, 0, 0, 0, 0, 6],
         [1, 0, 5, 0, 0, 0, 0],
         [0, 4, 0, 0, 0, 0, 7],
         [1, 0, 0, 6, 0, 7, 0]]
    prim(g)
