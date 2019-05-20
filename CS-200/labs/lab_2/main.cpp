#include <iostream>
#include "Client.h"
#include <fstream>
#include <stdlib.h>

using namespace std;

int menu();
int add_client(Client *clients, int index);
int read_from_file(Client *clients, int index);
int choose_client(Client *clients, int index);
void write_to_file(Client *clients, int index);

int main()
{
    int option, index = 0, client_id;
    Client clients[25];
    index = read_from_file(clients, index);
    do
    {
        system("clear");
        option = menu();
        switch(option)
        {
        case 1:
            // Adding a client
            index = add_client(clients, index);
            break;
        case 2:
            // Adding transactions
            client_id = choose_client(clients, index);
            double amount;
            cout << "Enter a positive/negative amount for a deposit/withdraw respectively > ";
            cin >> amount;
            clients[client_id - 1].setBalnce(amount);
            break;
        case 3:
            // Viewing clients balance
            for (int i = 0; i < index; i++)
            {
                clients[i].showStats();
            }
            system("echo Press enter to continue; read dummy;");
            break;
        case 4:
            // Exiting the program
            write_to_file(clients, index);
            cout << "Goodbye" << endl;
            return 0;
        default:
            // The user entered in another choice that was not valid
            cout << "Invalid Choice!" << endl;
            break;
        }
    }
    while(option != 4);

    return 0;
}

int menu()
{
    /**
    Displays the main menu and gets user input.

    @return option: The users choice
    **/
    int option;
    cout << "----Main Menu----" << endl
         << "\t(1) Add a Client" << endl
         << "\t(2) Transfer Funds" << endl
         << "\t(3) View Balance" << endl
         << "\t(4) Exit" << endl
         << "Option > ";
    cin >> option;
    return option;
}

int add_client(Client *clients, int index)
{
    string firstName, lastName;
    double balance;
    cout << "First Name > ";
    cin >> firstName;
    cout << "Last Name > ";
    cin >> lastName;
    cout << "Balance > ";
    cin >> balance;
    Client cli(firstName, lastName, index + 1, balance);
    clients[index] = cli;
    return ++index;
}

int choose_client(Client *clients, int index){
    int client_id;
    system("clear");
    cout << "Choose Client Menu\n" << endl;
    for(int i = 0; i < index; i++)
    {
        cout << "\t" << clients[i].getID() << ") " << clients[i].getName() << endl;
    }
    cout << "\nEnter the client ID you want to view > ";
    cin >> client_id;
    return client_id;
}

void write_to_file(Client *clients, int index)
{
    ofstream myfile;
    myfile.open ("data.txt");
    for(int i = 0; i < index; i++)
    {
        myfile << clients[i].getFirstName() << endl
               << clients[i].getLastName() << endl
               << clients[i].getID() << endl
               << clients[i].getBalance() << endl;
    }
    myfile.close();
}

int read_from_file(Client *clients, int index)
{
    // open a file in read mode.
    ifstream infile;
    infile.open("data.txt");
    string fname, lname;
    int id;
    double balance;
    while(infile >> fname >> lname >> id >> balance)
    {
        Client cli(fname, lname, id, balance);
        clients[index] = cli;
        ++index;
    }
    infile.close();
    return index;
}
