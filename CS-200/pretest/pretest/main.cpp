#include <iostream>
#include <stdlib.h>

using namespace std;

// student Struct used to link all the data together.
struct Student
{
    int student_id;
    string first_name, last_name;
    int grades[4];
};

int menu();
void display_student_balance(Student *students, int index);
void edit_student_balance(Student *students, int student_id, int index);
int add_student(Student *students, int index);
int choose_student(Student *students, int index);

int main()
{
    int option, index = 0, student_id;
    Student students[25];

    do
    {
        system("clear");
        option = menu();
        switch(option)
        {
        case 1:
            // Adding a student
            index = add_student(students, index);
            break;
        case 2:
            // Adding transactions
            student_id = choose_student(students, index);
            edit_student_balance(students, student_id, index);
            break;
        case 3:
            // Viewing students balance
            display_student_balance(students, index);
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
         << "\t(1) Add a Student" << endl
         << "\t(2) Grade a Student" << endl
         << "\t(3) View Grades" << endl
         << "\t(4) Exit" << endl
         << "Option > ";
    cin >> option;
    return option;
}

int add_student(Student *students, int index)
{
    /**
    **/
    if (index > 99)
        return index;
    system("clear");
    Student cli;
    // Add 1 because the array is 0 indexed
    cli.student_id = index + 1;
    cout << "First Name > ";
    cin >> cli.first_name;
    cout << "Last Name > ";
    cin >> cli.last_name;
    for(int j = 0; j < 4; j++)
    {
        cli.grades[j] = 0;
    }
    students[index] = cli;
    return ++index;
}

int choose_student(Student *students, int index)
{
    if (index <= 0)
        return -1;
    int student_id;
    system("clear");
    cout << "Choose student Menu\n" << endl;
    for(int i = 0; i < index; i++)
    {
        cout << "\t" << students[i].student_id << ") " << students[i].first_name << " " << students[i].last_name << endl;
    }
    cout << "\nEnter the student ID you want to view > ";
    cin >> student_id;
    return student_id;
}

void display_student_balance(Student *students, int index)
{
    if (index <= 0)
        return;
    // displaying all students and the grades
    system("clear");
    for(int i = 0; i < index; i++)
    {
        cout << "Student Name : " << students[i].first_name << " " << students[i].last_name << endl
             << "Student ID : " << students[i].student_id << endl;
        for(int j = 0; j < 4; j++)
        {
            cout << "Test " << j + 1 << ": " << students[i].grades[j] << endl;
        }
        cout << endl;
    }
    system("echo Press enter to continue; read dummy;");

    // displaying the avg of all tests
    system("clear");
    cout << "Overall class average: ";
    double total = 0, num_of_tests = 0, highest, lowest;
    for(int i = 0; i < index; i++)
    {
        for(int j = 0; j < 4; j++)
        {
            total += students[i].grades[j];
            num_of_tests++;
        }
    }
    cout << (total / num_of_tests) << endl;
    system("echo Press enter to continue; read dummy;");

    // displaying avg for each test
    system("clear");
    cout << "Average for each test: " << endl;
    total = num_of_tests = 0;
    for(int i = 0; i < 4; i++)
    {
        for(int j = 0; j < index; j++)
        {
            total += students[j].grades[i];
            num_of_tests++;
        }
        cout << "Test " << i + 1 << ": " << (total / num_of_tests) << endl;
        num_of_tests = total = 0;
    }
    system("echo Press enter to continue; read dummy;");

    // displaying highest and lowest graded students
    system("clear");
    total = num_of_tests = 0, highest = 0, lowest = 9999;
    Student high_stu, low_stu;
    for(int i = 0; i < index; i++)
    {
        for(int j = 0; j < 4; j++)
        {
            total += students[i].grades[j];
            num_of_tests++;
        }
        if ((total / num_of_tests) > highest)
        {
            highest = (total / num_of_tests);
            high_stu = students[i];
        }
        else if ((total / num_of_tests) < lowest)
        {
            lowest = (total / num_of_tests);
            low_stu = students[i];
        }
        num_of_tests = total = 0;
    }
    cout << "Highest Grade: " << high_stu.first_name << "\n\tGrade: " << highest << endl
         << "Lowest Grade: " << low_stu.first_name << "\n\tGrade: " << lowest << endl;
    system("echo Press enter to continue; read dummy;");
}

void edit_student_balance(Student *students, int student_id, int index)
{
    if (index <= 0)
        return;
    system("clear");
    int choice, amount;
    for(int i = 0; i < index; i++)
    {
        if(students[i].student_id == student_id)
        {
            // EDIT GRADES
            cout << "student Name : " << students[i].first_name << " " << students[i].last_name << endl;
            for(int j = 0; j < 4; j++)
            {
                int grade;
                do {
                    cout << "Enter grade for test " << j + 1 << ": ";
                    cin >> grade;
                } while (grade < 0 || grade > 100);
                students[i].grades[j] = grade;
            }
        }
    }
}
