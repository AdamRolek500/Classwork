#include "Client.h"
#include <iostream>

Client::Client()
{
    //ctor
}

Client::Client(string firstName, string lastName, int id, double balance){
    this->firstName = firstName;
    this->lastName = lastName;
    this->id = id;
    if (balance >= 0){
        this->balance = balance;
    } else {
        this->balance = 0;
    }
}

// Getters

double Client::getBalance(){
    return this->balance;
}

int Client::getID(){
    return this->id;
}

string Client::getName(){
    return this->firstName + " " + this->lastName;
}

// Setters

void Client::setBalnce(double balance){
    if (this->balance + balance >= 0){ // The resulting balance is positive
        this->balance += balance;
    } else {
        cerr << "Not enough money!" << endl;
    }
}

void Client::setID(int id){
    if(id >= 1){
        this->id = id;
    }
}

void Client::setName(string firstName, string lastName){
    this->firstName = firstName;
    this->lastName = lastName;
}
