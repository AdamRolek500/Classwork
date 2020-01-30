"""
Cookbook class module (Assignment 2 for Intelligent Systems)

By: Adam Rolek
Date: 1/27/2020
"""
class Cookbook:
    def __init__(self):
        self.recipes = []

    def new_recipe(self, meal, directions):
        """
        Appends a new recipe to the cookbook

        :param meal: Meal name
        :param directions: Meal directions
        :return: Nothing
        """
        # Appending a dictionary of the meal name and directions to the cookbook
        self.recipes.append({
            "meal": meal,
            "directions": directions
        })

    def print_recipe(self, meal):
        """
        Prints the entire dictionary object of a given meal name

        :param meal: Meal name to search for
        :return: Nothing
        """
        for item in self.recipes:
            if item["meal"] == meal:
                print(item)
                return
        # We only get here if the meal was not found
        print("Meal not found!")


if __name__ == "__main__":
    # Do Nothing, makes sure no un-scoped code will run
    pass
