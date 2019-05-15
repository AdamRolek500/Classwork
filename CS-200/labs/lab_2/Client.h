#ifndef CLIENT_H
#define CLIENT_H
#include <string>

using namespace std;

class Client
{
    public:
        // Constructors
        Client();
        Client(string firstName, string lastName, int id, double balance);
        // Getters
        string getName();
        double getBalance();
        int getID();
        // Setters
        void setName(string firstName, string lastName);
        void setBalnce(double balance);
        void setID(int id);
    private:
        string firstName, lastName;
        int id;
        double balance;
};

#endif // CLIENT_H
