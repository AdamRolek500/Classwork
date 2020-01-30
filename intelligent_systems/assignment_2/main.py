"""
Assignment 2 for Intelligent Systems

By: Adam Rolek
Date: 1/27/2020
"""
from cookbooks import *

if __name__ == "__main__":
    book = Cookbook()
    book.new_recipe("Rice", "Just add water")
    book.new_recipe("Cake", "Just add eggs")
    book.new_recipe("Cereal", "Just add milk")
    book.print_recipe("Rice")
    book.print_recipe("Cereal")
