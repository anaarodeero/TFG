// you can use includes, for example:
#include <iostream>
#include <vector>
#include <bits/stdc++.h>
#include <fstream>
#include <algorithm>

using namespace std;

int main()
{
    string x;
    ofstream myfile;
    myfile.open ("recetasBuenas.json");
    string fichero;
    // getline(cin, x);
    // string aux = x.erase(0,1);
    // fichero += "{\n\t\"id\": ,\n\t\"categoria\": \"Carne y aves\",\n\t\"nombre\": \"" + aux + "\",\n\t\"ingredientes\": [" ;
    while (getline (s,x)) {
        if (x.find("ingredientes") != string::npos) {
            break;
        }
    }
    getline (cin,x);
    while (getline (cin,x))
    {
        //getline(cin, x);
        if(x == "") continue;
        if(x == "Preparación de la receta") break;
        regex space_re(R"(\s+)");
        fichero += "{\n\t\t\t\"alimento\": ,\n\t\t\t\"ingrediente\": \"";
        string aux = regex_replace(x, space_re, " ");
        aux.erase(0,1);
        fichero += aux + "\"\n";
        fichero += "\t\t},";
        //fichero += "--> " + x + "\n";
    }
    fichero.pop_back();
    fichero += "],\n\t\"dieta\": \"regular\",\n\t\"preparacion\":[\n";
    getline (cin,x);
    while (getline (cin,x))
    {
        if(x == "") continue;
        if (x.find("En el capítulo") != string::npos) {
            continue;
        }
        if (x.find("Encuentra todo lo que necesitas") != string::npos) {
            break;
        }
        
        fichero += "\t\t\"" + x + "\"," + "\n";
    }
    fichero.pop_back();
    fichero.pop_back();
    fichero += "\n";
    fichero += "\t]\n}\n";

    myfile << fichero;
}
