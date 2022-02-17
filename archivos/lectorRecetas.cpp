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
    myfile.open ("example.json");
    string fichero;
    getline(cin, x);
    string aux = x.erase(0,1);
    fichero += "{\n\t\"id\": ,\n\t\"categoria\": \"Pasta\",\n\t\"nombre\": \"" + aux + "\",\n\t\"ingredientes\": [" ;
    while (getline (cin,x)) {
        if(x == "INGREDIENTES PRINCIPALES") break;
    }
    getline (cin,x);
    while (getline (cin,x))
    {
        //getline(cin, x);
        if(x == "") continue;
        if(x == "Preparación de la receta") break;
        regex space_re(R"(\s+)");


        
        string aux = regex_replace(x, space_re, " ");
        aux.erase(0,1);
        string num = "";

        if (aux.find("Aceite de oliva virgen extra") != string::npos ){
            num = "556";
        }
        if (aux.find("Perejil") != string::npos ){
            num = "127";
        }
        if (aux.find("Vinagre") != string::npos ){
            num = "553";
        }
        if (aux.find("Aceite de girasol") != string::npos ){
            num = "272";
        }
        if (aux.find("Sal") != string::npos ){
            num = "547";
        }
        if (aux.find("Pimienta") != string::npos ){
            num = "128";
        }
        if (aux.find("ajo") != string::npos ){
            num = "72";
        }
        if (aux.find("huevo") != string::npos ){
            num = "246";
        }
        if (aux.find("cebolla") != string::npos ){
            num = "92";
        }
        if (aux.find("cebollino") != string::npos ){
            num = "620";
        }
        if (aux.find("parmesano") != string::npos ){
            num = "568";
        }
        if (aux.find("pimiento rojo") != string::npos ){
            num = "129";
        }
        if (aux.find("pimiento verde") != string::npos ){
            num = "546";
        }
        if (aux.find("orégano") != string::npos ){
            num = "599";
        }
        fichero += "{\n\t\t\t\"alimento\": " + num;
        fichero += ",\n\t\t\t\"ingrediente\": \"";
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
        if (x.find("En este episodio") != string::npos) {
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
