<?php
if (!isset($_SESSION)) {
	session_start();
}
?><pre><code>
/*
This program gets a sample of size 100 from the exponential distribution lambda = 1,6,7 ; the uniform distribution a=20, b=100 ; the normal distribution with mean=0, variance=1.

It also calculates the sample mean/variance and compares them to the exact mean/variance, as well as the relative frequency distribution from the theoretical probability density functions.
*/

/* Included header files */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>

/* Main program */
int main()
{
  /* Variable declarations */
  int i = 0;
  int j = 0;
  int Lambda = 0;
  double Mean = 0;
  double Meanie = 0;
  double Variance = 0;
  double Variariance = 0;
  double ExDist[100];
  double UniDist[100];
  double ZDist[100];
  printf("\n--------------------------------------------------------------\n\n");
  /* Exponential Distribution */
  printf("Exponential Distribution\n------------------------\n\n");
  for (j = 0; j < 3; j++)
  {
    if (j == 0)
    {
      Lamba = 1;
    }
    else if (j == 1)
    {
      Lamba = 6;
    }
    else
    {
      Lamba = 7;
    }
    Meanie = 0;
    Variariance = 0;
    printf("Sample #%i\n----------\n\n", (j+1));
    Mean = ((double)(1/Lamba));
    printf("The Sample Mean = %lf\n", Mean);
    Variance = (double)(1/(Lamba*Lamba));
    printf("The Sample Variance = %lf\n", Variance);
    for (i = 0; i < 100; i++)
    {
      ExDist[i] = (Lamba)*(exp(-(Lamba*i)));
      Meanie = Meanie + ExDist[i];
    }
    Meanie = Meanie / 100;
    printf("The Exact mean = %lf\n", Meanie);
    for (i = 0; i < 100; i++)
    {
      Variariance = Variariance + ((ExDist[i] - Meanie) * (ExDist[i] - Meanie));
    }
    Varariance = Variariance / 99;
    printf("The Exact Variance = %lf\n", Variariance);
    printf("\nAnalysis\n--------\n\")
    printf("Exact vs. Estimated Mean -> ");
    if (Mean > Meanie)
    {
      printf("The Exact Mean was smaller than the Estimated Mean, at a count of ");
    }
    else if(Mean == Meanie)
    {
      printf("The Two Means, Exact and Estimated, were equal at a count of ");
    }
    else
    {
      printf("The Exact Mean was larger than the Estimated Mean, at a count of ");
    }
    printf("%lf, %lf\n", Meanie, Mean);
    printf("Exact vs. Estimated Variance -> ");
    if (Variance > Variariance)
    {
      printf("The Exact Variance was smaller than the Estimated Variance, at a count of ");
    }
    else if (Variance == Variariance)
    {
      printf("The Two Variances, Exact and Estimated, were equal at a count of ");
    }
    else
    {
      printf("The Exact Variance was larger than the Estimated Variance, at a count of ");
    }
    printf("%lf, %lf\n", Variariance, Variance);
  }
  printf("\n--------------------------------------------------------------\n\n");
  printf("Press Enter to Continue");
  fgets(0, sizeof(o), stdin);
  printf("\n--------------------------------------------------------------\n\n");
  /* Uniform Distribution */
  printf("Uniform Distribution\n--------------------\n\n");
  Mean = ((double)(20 + 100)) / 2;
  printf("The Sample Mean = %lf\n", Mean);
  Variance = (double)((100 - 20) * (100 - 20)) / 12;
  printf("The Sample Variance = %lf\n", Variance);
  Meanie = 0;
  for (i = 0; i < 100; i++)
  {
    if (i >= 20)
    {
      UniDist[i] = 1 / (100 - 20);
    }
    else
    {
      UniDist[i] = 0;
    }
    Meanie = Meanie + UniDist[i];
  }
  Meanie = Meanie / 100;
  printf("The Exact Mean = %lf\n", Meanie);
  Variariance = 0;
  for (i = 0; i < 100; i++)
  {
    Variariance = Varariance + ((UniDist[i] - Meanie) * (UniDist[i] - Meanie));
  }
  Variariance = Variariance / 99;
  printf("The Exact Variance = %lf\n", Variariance);
  printf("\nAnalysis\n--------\n\n");
  printf("Exact vs. Estimated Mean -> ");
  if (Mean > Meanie)
  {
    printf("The Exact Mean was smaller than the Estimated Mean, at a count of ");
  }
  else if (Mean == Meanie)
  {
    printf("The Two Means, Exact and Estimated, were equal at a count of ");
  }
  else
  {
    printf("The Exact Mean was larger than the Estimated Mean, at a count of ");
  }
  printf("%lf, %lf\n", Meanie, Mean);
  printf("Exact vs. Estimated Variance -> ");
  if (Variance > Variariance)
  {
    printf("The Exact Variance was smaller than the Estimated Variance, at a count of ");
  }
  else if (Variance == Variariance)
  {
    printf("The Two Variances, Exact and Estimated, were equal at a count of ");
  }
  else
  {
    printf("The Exact Variance was larger than the Estimated Variance, at a count of ");
  }
  printf("%lf, %lf\n", Variariance, Variance);
  printf("\n--------------------------------------------------------------\n\n");
  printf("Press Enter to Continue");
  fgets(0, sizeof(0), stdin);
  printf("\n--------------------------------------------------------------\n\n");
  /* Normal Distribution */
  printf("Normal Distribution\n-------------------\n\n");
  Mean = 0;
  Variance = 1;
  printf("The Sample Mean = %lf\n", Mean);
  printf("The Sample Variance = %lf\n", Variance);
  Meanie = 0;
  for (i = 0; i < 100; i++)
  {
    ZDist[i] = (1 / (sqrt((2 * 3.14159265358979233)))) * exp((-((i * i) / 2)));
    Meanie = Meanie + ZDist[i];
  }
  Meanie = Meanie / 100;
  printf("The Exact Mean = %lf\n", Meanie);
  Variariance = 0;
  for (i = 0; i < 100; i++)
  {
    Variariance = Varariance + ((ZDist[i] - Meanie) * (ZDist[i] - Meanie));
  }
  Variariance = Variariance / 99;
  printf("The Exact Variance = %lf\n", Variariance);
  printf("\nAnalysis\n--------\n\n");
  printf("Exact vs. Estimated Mean -> ");
  if (Mean > Meanie)
  {
    printf("The Exact Mean was smaller than the Estimated Mean, at a count of ");
  }
  else if (Mean == Meanie)
  {
    printf("The Two Means, Exact and Estimated, were equal at a count of ");
  }
  else
  {
    printf("The Exact Mean was larger than the Estimated Mean, at a count of ");
  }
  printf("%lf, %lf\n", Meanie, Mean);
  printf("Exact vs. Estimated Variance -> ");
  if (Variance > Variariance)
  {
    printf("The Exact Variance was smaller than the Estimated Variance, at a count of ");
  }
  else if (Variance == Variariance)
  {
    printf("The Two Variances, Exact and Estimated, were equal at a count of ");
  }
  else
  {
    printf("The Exact Variance was larger than the Estimated Variance, at a count of ");
  }
  printf("%lf, %lf\n", Variariance, Variance);
  printf("\n--------------------------------------------------------------\n\n");
  printf("Press Enter to Continue");
  fgets(0, sizeof(0), stdin);
  printf("\n--------------------------------------------------------------\n\n");
}
</code></pre>
