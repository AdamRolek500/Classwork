#ifndef STUDENT_H
#define STUDENT_H

#include "person.h"

class Student : public Person
{
	public:
		Student(){};
		Student(string name, int age, string major);
		virtual string getDetails();
	private:
		string major;
};

#endif
