/**
Lab 1 for CS-200, Client banking app.

@author Adam Rolek

**/

#include <iostream>
#include <stdlib.h>

using namespace std;

// Client Struct used to link all the data together.
struct Client
{
    int client_id;
    string first_name, last_name;
    double balance[2];
};

int menu();
void display_client_balance(Client *clients, int client_id, int index);
void edit_client_balance(Client *clients, int client_id, int index);
int add_client(Client *clients, int index);
int choose_client(Client *clients, int index);

int main()
{
    int option, index = 0, client_id;
    Client clients[25];

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
            edit_client_balance(clients, client_id, index);
            break;
        case 3:
            // Viewing clients balance
            client_id = choose_client(clients, index);
            display_client_balance(clients, client_id, index);
            break;
        case 4:
            // Exiting the program
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
    /**
    **/
    Client cli;
    // Add 1 because the array is 0 indexed
    cli.client_id = index + 1;
    cout << "First Name > ";
    cin >> cli.first_name;
    cout << "Last Name > ";
    cin >> cli.last_name;
    for (int i = 0; i < 2; i++){
        cli.balance[i] = 0;
    }
    clients[index] = cli;
    return ++index;
}

int choose_client(Client *clients, int index){
    int client_id;
    system("clear");
    cout << "Choose Client Menu\n" << endl;
    for(int i = 0; i < index; i++)
    {
        cout << "\t" << clients[i].client_id << ") " << clients[i].first_name << " " << clients[i].last_name << endl;
    }
    cout << "\nEnter the client ID you want to view > ";
    cin >> client_id;
    return client_id;
}

void display_client_balance(Client *clients, int client_id, int index){
    system("clear");
    for(int i = 0; i < index; i++)
    {
        if(clients[i].client_id == client_id){
            cout << "Client Name : " << clients[i].first_name << " " << clients[i].last_name << endl
                 << "Client ID : " << clients[i].client_id << endl
                 << "Balance 1: " << clients[i].balance[0] << endl
                 << "balance 2: " << clients[i].balance[1] << endl << endl;
            system("echo Press enter to continue; read dummy;");
            return;
        }
    }
}

void edit_client_balance(Client *clients, int client_id, int index){
    system("clear");
    int choice, amount, account;
    for(int i = 0; i < index; i++)
    {
        if(clients[i].client_id == client_id){
            cout << "Enter '1' for Deposit or '2' for Withdraw > ";
            cin >> choice;
            system("clear");
            cout << "\t(1) " << clients[i].balance[0] << endl
                 << "\t(2) " << clients[i].balance[1] << endl
                 << "Which  account > ";
            cin >> account;
            system("clear");
            cout << "Enter the dollar amount > ";
            cin >> amount;
            if (choice == 1){
                clients[i].balance[account - 1] += amount;
            } else {
                clients[i].balance[account - 1] -= amount;
            }
        }
    }
}
