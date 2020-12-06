#include <fstream>
#include <iostream>
#include <string>
#include <stdio.h>
#include <set>

using namespace std;

string removeDuplicates(string s, string &dupes )
{
  set <char> S, Sd;
  string reduced;
  dupes="";
  for (char c : s)
  {
    if ( S.insert(c).second ) reduced += c;
    else if ( Sd.insert(c).second ) dupes += c;
  }
  return reduced;
}

int main()
{
  std::ifstream in("input-test");

  if(!in)
  {
    cout<<"Cannot open input" << endl;
    return 1;
  }

  cout <<"Starting text read \n";
  std::string line;
  string joined;
  int totalCount=0;
  int dupeCount=0;
  while( getline( in, line ) )
  {
    //Check for a new line - if empty end of group.
    if(line.empty()){
      string dupes;
      string answers=removeDuplicates(joined, dupes);
      int answerCount=answers.length();
      totalCount+=answerCount;
      dupeCount+=dupes.length();
      if(dupes.empty()){
        dupes="";
      } else {
        dupes="Removed " + dupes + " | ";
      }
      cout << dupes << answers << " | " << answerCount << " Running total: " << totalCount << endl;
      joined="";
    }
    joined+=line;
  }
  cout<<"Answer: " << totalCount<<endl;
  return 0;
}
