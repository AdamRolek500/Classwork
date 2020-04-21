#ifndef PERSON_H
#define PERSON_H

#include <sstream>

using namespace std;

class Person
{
	public:
		Person(){};
		Person(string name, int age);
		virtual string getDetails();
	private:
		string name;
		int age;
};

#endif
