#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>

void troca(int* a,int* b){
	int aux=0;
	
	aux=*a;
	*a=*b;
	*b=aux;
	
}

void bubblesort(int array[],int n){
    int i,aux,continua,fim=n;
    do{
        continua=0;
        for(i=0;i<fim-1;i++){
            if(array[i]>array[i+1]){
                troca(&array[i],&array[i+1]);
                continua=i;
            }
        }
        fim--;
    }while(continua!=0);
    
}
