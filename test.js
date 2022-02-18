//Impares del 1 al 20
for(i=1; i<=20 ; i++)
{
    if(i%2 !=0)
    {
        console.log(i);
    }
}

//Divisibles en 3 del 100 al 0
for(i=100; i>=0 ; i--)
{
    if(i%3 ==0)
    {
        console.log(i);
    }
}

//Secuencia 4, 2.5, 1, -0.5,-2, -3.5
for(i=4; i>=-3.5 ; i=i-1.5)
{
    console.log(i);
}

//Sigma
sumatoria=0;
for(i=0;i<=100;i++)
{
    sumatoria += i;
}
console.log(sumatoria);

//Factorial
product=1;
for(i=1;i<=12;i++)
{
    product *=i;
}
console.log(product);