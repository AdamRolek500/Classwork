#include "person.h"

Person::Person(string name, int age)
{
	this->name = name;
	this->age = age;
}

string Person::getDetails(){
	ostringstream strs;
	strs << this->age;
	return ("Name: " + this->name + "\nAge: " + strs.str());
}
