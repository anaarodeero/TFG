// you can use includes, for example:
#include <iostream>
#include <vector>
#include <bits/stdc++.h>
#include <fstream>
#include <algorithm>
#include <string>

using namespace std;

int main()
{
    string x, cal, gr, pr, hc;
    ofstream myfile;
    myfile.open ("example2.json");
    string fichero;
    getline(cin, x);
    fichero += "{\n\t\"id\": ";
    fichero += "\n\t\"alimento\": \"\"";
    fichero += "\n\t\"estado\": \"\"";
    while (getline (cin,x)) {
        if(x == "Cals") break;
    }
    getline (cin,cal);

    while (getline (cin,x)) {
        if(x == "Grasa") break;
    }
    getline (cin,x);
    replace(x.begin(), x.end(), ",", ".");
    x.pop_back();
    gr = x;

    while (getline (cin,x)) {
        if(x == "Carbh") break;
    }
    getline (cin,x);
    replace(x.begin(), x.end(), ",", ".");
    x.pop_back();
    hc = x;

    while (getline (cin,x)) {
        if(x == "Prot") break;
    }
    getline (cin,x);
    replace(x.begin(), x.end(), ",", ".");
    x.pop_back();
    pr = x;

    fichero += "\n\t\"cal\": " + cal;
    fichero += "\n\t\"pr\": " + pr;
    fichero += "\n\t\"gr\": " + gr;
    fichero += "\n\t\"hc\": " + hc;

    fichero += "\n}";

    myfile << fichero;
}
