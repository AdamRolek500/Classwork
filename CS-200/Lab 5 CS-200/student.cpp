#include "student.h"

Student::Student(string name, int age, string major) : Person(name, age){
	this->major = major;
}

string Student::getDetails(){
	return ("Student\n" + Person::getDetails() + "\nMajor: " + this->major + "\n");
}
