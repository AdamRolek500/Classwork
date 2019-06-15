#include <iostream>
#include <stdlib.h>
#include <random>
#include <time.h>
#include <vector>
#include <stack>
#include <queue>

const int COUNT = 5;

int main() {
    std::random_device rd;
    std::mt19937 mt(rd());
    std::uniform_int_distribution<int> dist(1, 100);

    // Array
    std::cout << "-------- Array --------" << std::endl;
    int arr[COUNT];
    for (int &i : arr) {
        i = dist(mt);
    }
    for (int i = 0; i < COUNT; i++) {
        std::cout << "Index " << i << " > " << arr[i] << std::endl;
    }

    // Vector
    std::cout << "-------- Vector --------" << std::endl;
    std::vector<int> vec;
    vec.reserve(COUNT);
    for (int i = 0; i < COUNT; i++) {
        vec.push_back(dist(mt));
    }
    std::vector<int>::iterator it;
    int count = 0;
    for(it = vec.begin(); it != vec.end(); it++) {
        std::cout << "Index " << count++ << " > " << *it << std::endl;
    }

    // Stack
    std::cout << "-------- Stack --------" << std::endl;
    std::stack<int> stk;
    for (int i = 0; i < COUNT; i++) {
        stk.push(dist(mt));
    }
    int num;
    for (int i = 0; i < COUNT; i++) {
        num = stk.top();
        stk.pop();
        std::cout << "Index " << i << " > " << num << std::endl;
    }

    // Queue
    std::cout << "-------- Queue --------" << std::endl;
    std::queue<int> que;
    for (int i = 0; i < COUNT; i++) {
        que.push(dist(mt));
    }
    for (int i = 0; i < COUNT; i++) {
        num = que.front();
        que.pop();
        std::cout << "Index " << i << " > " << num << std::endl;
    }

    return 0;
}