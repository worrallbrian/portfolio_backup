<?php
if (!isset($_SESSION)) {
	session_start();
}
?><pre><code>
/*
This program implements a binary exponentiation algorithm from user input and displays the result
*/
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main()
{
  long int Product = 0;
  long int i = 0;
  long int A = 0;
  char Temp[100];
  long int N = 0;
  int BinDigitLength = 0;
  char *BinDigits;
  printf("\n\n");
  printf("--------------------------------------------------------------------------------");
  printf("\n");
  printf("Please Enter a Value for a: ");
  fgets(Temp, sizeof(Temp), stdin);
  A = strtol(Temp, NULL, 10);
  printf("\nPlease Enter a value for n: ");
  fgets(Temp, sizeof(Temp), stdin);
  N = strtol(Temp, NULL, 10);
  /*Set N to its binary equivalent*/
  for (i = 0; i < (sizeof(long int)); i++)
  {
    *(BinDigits++)(N>>i)&0x1;
  }
  Product = A;
  for (i = (sizeof(long int)); i>=0; i--)
  {
    Product = Product * Product;
    if (BinDigits[i] == '1')
    {
      Product = Product * A;
    }
  }
  printf("--------------------------------------------------------------------------------");
  printf("\nThe Result of %i to the exponent %i is %i", A, N, Product);
}
</code></pre>
