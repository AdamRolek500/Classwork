#include "faculty.h"

Faculty::Faculty()
{
}

Faculty::Faculty(string name, int age, double pay) : Person(name, age){
	this->pay = pay;
}

string Faculty::getDetails(){
	ostringstream strs;
	strs << this->pay;
	return ("Faculty\n" + Person::getDetails() + "\nPay: " + strs.str() + "\n");
}
