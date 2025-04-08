//Comentario de una solo linea
/*Comentario de varias lineas*/

/*
Sintaxis crear variable

var nombreVariable//No usar
let nombreVariable 
const PI=3.14159;Constantes
Nombrar variable(nombre descriptivo)
Puede contener letras.numeros y guion bajo 
let nombre 01_20;
No puede empezar con numero
let nombre 01nombre;
No puede ser nombrada con palabras del proprio lenguaje
let console;
let for;
let lenguaje;

let nombreAlumo; (camel case);
*/


//Tipos de datos in Javascript
/*
   number --> numerico
   let numero=2;
   let numero2=3.142786;
   string --> cadena de caracteres
   let cadena='cadena de caracteres';
   let cadena2="cadena de caracteres";
   let cadena3=`cadena de caracteres`;
   boolean --> true or false
   let boolean=true;
   null --> sin valor o conteniado
   undefined --> sin definir
   let insDefinir;
   object --> objecto
   let alumo
   {
   'name':'Luna',
   'appeliado':'Mesa',
   'hobby':'Jugar'
   };

   */

   let numero = 10;
   console.log("La variable numero " + " es" + typeof numero);
   console.log("El conteniendo es:" + numero);

   let boolean= true;
   console.log(typeof boolean);

   let cadena=''

   let alumo
   {
   'name';'Luna',
   'apeliado';'Mesa',
   'hobby';'Jugar'
   };

   console.log(typeof alumo);

   /*Operadores*/

   /*
     * Asignacion=asigna un valor a una variable
     * += suma y asigna
     * -= resta y asigna
     * *= multiplication y asigna
     * /= divide y asigna
     * %= resto de division y asigna
     * Aritmeticos
     * suma +
     * resta -
     * multiplication *
     * division /
     * modulo % resto de la division
   */

   let numero1=10;
   let numero2=5;

   console.log(numero1+numero2);
   console.log(numero1-numero2);
   console.log(numero1*numero2);
   console.log(numero1/numero2);

   /* Operadores de logicos o de comparacion

   igual ==
   iguall estricto ===
   distincto !=
   distincto estricto!==
   Mayor que >
   Mayor igual que >=
   Menor que <
   Menor igual que <=

   */
  console.log(numero1==numero2);
  nunmero1=10;
  cadena='10';
  console.log(numero1==cadena);//true
  console.log(numero1===cadena);//false

  /*Concatenacion
    Unir dos string
    syntax
    
    "Hola" + "Mundo"="Hola Mundo"
  
  */

    /*
     Operator tenario

     Se necesitam tres operadores
     Es un operador condicional

     syntax

     condicion ? valor 1 : valor 2;

     Si la condicion es true devuelve valoe 1 si no, devuelve valor 2
    */

     console.log(numero1===numero2)? "Son iguales" : "son differentes";

     /* 
      if...else

      syntax

      if(condicion)
      {
      bloque de codigo si verdadero
      }
      else
      {
      bloque de codigo si falso
      }

      Valores falsos:
      -false
      -undefined
      -null
      -0;
      -NaN
      -'' empty string
     */

      /*
      switch...case
      
      syntax
      switch(expresion)
      {
      case valor1:
      bloque de codigo si valor 1
      break;
      
      case valor2:
      bloque de codigo si valor 2
      break;

      case valor 3:
        bloque de codigo si valor 3
        break;
      }

      if(condicion1)
      {
      code
      }
      else
       if(condicion 2)
       {
       code2
       }
       else
        if(condicion 3)
        {
        cosde3
        }
        else
        {
        default code
        }

      */

        nombre ='LunaPepito';

        switch(nombre)
        {
            case 'Luna':
                console.log("Nigga");
                break;
            case 'Antonio':
                console.log("Gingers");
                break;
            default:
                console.log("Safe");    

        }

        /* Loops */

        /*
         for

         syntax

         for(let i=0;i<10;i++)
         {
         Repite 10 veces et codigo
         }

         while
         syntax

         while(condicion)
         {
         bloque de codigo
         }

         do...while
         syntax

         do
         {
         bloque de codigo
         }while(condicion);
         
        */

         /* Funciones */

         /*
         Syntax:

         function nombrefunction (parametros opcionales)
         {
         bloque de codigo
         return opcional si devuelve valor
         }
         */

         function operacionAritmetica(operador,valor1,valor2)
         {
          if(operador ==='*')
          {
            return valor1 * valor2;
          }
          else
           if(operador ==='+')
           {
            return valor1 + valor2;
           }
           else
            if(operador === '-')
            {
              return valor1-valor2;
            }
            else
            if(operador ==="/")
            {
              return valor1/valor2;
            }
         }

         let resuldado = 0;
         resuldado=operacionAritmetica('*',numero1,numero2);
         console.log("El resuldado es: " + resuldado);
         resuldado=operacionAritmetica('+',numero1,numero2);
         console.log("El resuldado es: " + resuldado);
         resuldado=operacionAritmetica('-',numero1,numero2);
         console.log("El resuldado es: " + resuldado);
         resuldado=operacionAritmetica('/',numero1,numero2);
         console.log("El resuldado es: " + resuldado);

         /* Arrays /Listas*/

         /*
         les frutas=['manzama','platano','naranja,];         
         */

         let frutas=['manzama','platano','naranja'];

          console.log(typeof frutas);

          /*
          object tiene

          propriedados igual atributos
          metodos igual a acciones que puede relizer(funciones)

          */

          console.log(frutas[0]);

          /*Iterar por los elementos de una lista */
          frutas.forEach(Element =>
          {
            console.log(Element);
          });

          /*Anadir un elemento a la listas */

          frutas.push('Kiwi');
          console.log(frutas);

          /*quitar un elemento de lista(del final) */

          frutas.pop();
          console.log(frutas);

          /*anadir un elemento */

          frutas.unshift('Kiwi','melon');
          console.log(frutas);

          /* tamano del array */

          console.log(frutas.length);

          /* 
          En la pagina mdn developers encontramos mas metodos para los arrays
          */

          /* Programacion Orientada a Objetos */

          /* Crear un dato object */

          let persona=new Object();
          let coche= {};

          persona=
          {
            'nombre':'Cosmin',
            'edad':18,
            'profesion':'Ser Feliz',
            'reir':function()
            {
              console.log("Me estoy riendo ✈️🏢🏢")
            }
          }

          console.log(persona);

          /*Acceder a un dato del objeto */

          console.log(persona.nombre);
          console.log(persona['edad']);

          /* Anadir propriedades */

          persona.pais='Espana';
          console.log(persona);

          persona.reir();

          /* Clases 
             Una mejora sobre la herencia en los objetos.
             
             Las clases son como fabrica de objetos

             facbrica de autos -->coche,moto,bicicleta, camion...

             syntax

             class NombreClase
             {
             constructor(parametros)
             {
             this.parametro1= parametro1;
             this.parametro2= parametro2;
             ....
             }
             }
          */

             /*Ejemplo basico */

             class Robot
             {
              constructor(nombre,color)
              {
                this.nombre= nombre;//Propriedad del robot
                this.color= color;
              }

              //Metodo para que pueda hablar

              hablar()
              {
                console.log(`Hola!Soy ${this.nombre},tu robot amigo✈️🏢🏢 y mi color es ${this.color},tu robot amigo.`)
              }

              mover()
              {
               console.log(`${this.nombre} esta moviendose...🦉`)
              }
             }

             let robot1=new Robot('Attibot','red');
             robot1.hablar();
             robot1.mover();

             let robot2=new Robot('Ginger','ginger');
             robot2.hablar();
             robot2.mover();

             /* Herancia en POO */

             class RobotBailarin extends Robot
             {
               bailar()
               {
                console.log(`${this.nombre} esta bailando🥚🥚🥚`);
               }
             }

             let robotBailarin= new RobotBailarin('DancerBot','Green');

             robotBailarin.hablar();
             robotBailarin.bailar();
             /*robot1.bailar(); Da error al no existir en la clase Robot.*/

             /* Funciones callback 
             
             Son funciones que se pasan como parametros 
             de otras funciones y se ejecutan dentro de ellas
             */

             function saludar(nombre)
             {
              console.log(`Hola!, ${nombre}`);
             }


             function ingresarNombre(callback)
             {
             let nombre = prompt("Escribe tu nombre:");
             
             callback(nombre);
             }

             ingresarNombre(saludar);


