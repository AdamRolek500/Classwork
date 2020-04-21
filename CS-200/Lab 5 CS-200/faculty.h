#ifndef FACULTY_H
#define FACULTY_H

#include "person.h"

class Faculty : public Person
{
	public:
		Faculty();
		Faculty(string name, int age, double pay);
		virtual string getDetails();
	private:
		double pay;
};

#endif
