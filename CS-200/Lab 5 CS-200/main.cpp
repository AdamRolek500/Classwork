#include <iostream>
#include "person.h"
#include "student.h"
#include "faculty.h"

/* run this program using the console pauser or add your own getch, system("pause") or input loop */

int main(int argc, char** argv) {
	Student* s[2];
	s[0] = new Student("Jon Rolek", 28, "Comp Sci");
	s[1] = new Student("josh myers", 24, "Cyber Sec");
	
	Faculty* f[2];
	f[0] = new Faculty("Nikera Rolek", 21, 52);
	f[1] = new Faculty("Adam Rolek", 35, 18);
	
	for(int i = 0; i < 2; i++) {
		cout << s[i]->getDetails() << endl
			 << f[i]->getDetails() << endl;
	}

	cout << "========================================" << endl;
	
	Person* p[4];
	p[0] = new Student("Jon Rolek", 28, "Comp Sci");
	p[1] = new Student("josh myers", 24, "Cyber Sec");
	p[2] = new Faculty("Nikera Rolek", 21, 52);
	p[3] = new Faculty("Adam Rolek", 35, 18);
	
	for(int i = 0; i < 4; i++) {
		cout << p[i]->getDetails() << endl;
	}
	
	return 0;
}
