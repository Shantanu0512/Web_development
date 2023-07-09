#include<iostream>
using namespace std;
class info{
   public:
   string name ;
   double pi ;
   char fav_char ;
   info(string Name,double Pi, char Fav_char){
      name = Name;
      pi = Pi;
      fav_char = Fav_char;
      
   }
};
int main(){
   info first("Shantanu",3.14,'S');
   cout<<first.name;
   cout<<endl;
   return 0;
} 