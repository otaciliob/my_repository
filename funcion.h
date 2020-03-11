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

void int_vet_start(int* vet,int tam){
	int i;
	for(i=0;i<tam;i++){
		vet[i]= rand() %100;
	}
}

void float_vet_start(float* vet,int tam){
	int i;
	for(i=0;i<tam;i++){
		vet[i]= rand() %tam;
	}
}

void double_vet_start(double* vet,int tam){
	int i;
	for(i=0;i<tam;i++){
		vet[i]= rand() %tam;
	}
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
