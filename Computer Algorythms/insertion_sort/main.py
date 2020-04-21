"""
Insertion Sort Implementation

By: Adam Rolek
Date: 4/12/2020
"""
from random import randrange


def insertion_sort(array):
    basic_op = 0
    for i in range(1, len(array)):
        key = array[i]
        j = i - 1
        while j >= 0 and key < array[j]:
            basic_op += 1
            array[j + 1] = array[j]
            j -= 1
        array[j + 1] = key
    print(basic_op)


if __name__ == "__main__":
    print("----- Avg Case N=100 -----")
    arr = [randrange(10000) for x in range(100)]
    insertion_sort(arr)
    print("----- Worst Case N=100 -----")
    arr = [randrange(10000) for x in range(100)]
    arr.sort(reverse=True)
    insertion_sort(arr)
    print("----- Avg Case N=1000 -----")
    arr = [randrange(10000) for x in range(1000)]
    insertion_sort(arr)
    print("----- Worst Case N=1000 -----")
    arr = [randrange(10000) for x in range(1000)]
    arr.sort(reverse=True)
    insertion_sort(arr)
