#include <iostream>
#include "Client.h"

using namespace std;

int main()
{
    Client cl("Adam", "Rolek", 1, 50);
    cout << cl.getName() << endl
         << cl.getBalance() << endl;
    cl.setBalnce(-60);
    cout << cl.getBalance() << endl;
    return 0;
}
