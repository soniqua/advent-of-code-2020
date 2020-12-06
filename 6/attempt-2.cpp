#include <fstream>
#include <iostream>
#include <string>
#include <stdio.h>
#include <set>

using namespace std;

int removeDuplicates(string s, string &dupes, int counter )
{
  set <char> S, Sd;
  std::string reduced;
  std::string returnString;
  dupes="";
  for (char c : s)
  {
    if ( S.insert(c).second ) reduced += c;
    else if ( Sd.insert(c).second ) dupes += c;
  }
  //iterate the string for each char in the non-dupe list
  int matchCount=0;
  //find each str in reduced
  for (int j=0; j < reduced.length(); j++)
  {
    matchCount=0;
    for (int i=0; i < s.length(); i++)
    {
      if (s[i] == reduced[j]){
        matchCount++;
      }
    }
    if (matchCount == counter){
      //can return this safely as every one answered this
      returnString+=reduced[j];
    }
    cout<<matchCount<<reduced[j]<<endl;
  }
  return returnString.length();
}

int main()
{
  std::ifstream in("input");

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
  int joinCount=0;
  while( getline( in, line ) )
  {
    //Check for a new line - if empty end of group.
    if(line.empty()){
      string dupes;
      int answers=removeDuplicates(joined, dupes, joinCount);
      totalCount+=answers;
      cout << "Running total: " << totalCount << endl;
      joined="";
      joinCount=0;
    } else {
        joined+=line;
        joinCount++;
    }
  }
  cout<<"Answer: " << totalCount<<endl;
  return 0;
}
