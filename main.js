/*Taller JavaScript Funciones


• Realizar un algoritmo que calcule el salario de un empleado,
donde se debe ingresar por teclado el valor de la hora y la
cantidad de las horas. Este ejercicio se debe realizar por
medio de una función que reciba como parámetros el valor de
hora y la cantidad de las horas

function salariototal(valorhoras,cantidadhora){
	var valorhoras = parseInt(prompt("Escribe el valor de la hora"))
	var cantidadhora = parseInt(prompt("Escribe la cantidad de horas trabajadas"))

	return valorhoras*cantidadhora

    
}
alert("Salario: "+salariototal())



/*• Realizar un algoritmo que muestre por consola los números pares
desde n hasta m. Realizarlo usando funciones y ambos valores
son ingresados por teclado

function numerospares(){
	var n = parseInt(prompt("Desde"))
	var m = parseInt(prompt("Hasta"))

	if(n % 2==0){
		
		for(var i=n;i<m;i+=2){
		console.log(i)
		}
	}else{
	
	for(var i=n;i<m;i+=2){
		console.log(i+1)
		}
		
    }
}
numerospares()

	



/*• Realizar una calculadora con las 4 operaciones básicas (suma,
resta, multiplicación y división). Presentar el ejercicio como
un menú de opciones que se repita de forma indefinida, y cada
operación debe ser una función separada

function calculadora(opcion){

	var opcion = parseInt(prompt("1 2 3 o 4"))

	function suma(x,y){
		var x = parseInt(prompt("Numero 1"))
		var y = parseInt(prompt("Numero 2"))
		return x+y
	}
	function resta(x,y){
		var x = parseInt(prompt("Numero 1"))
		var y = parseInt(prompt("Numero 2"))
		return x-y
	}
	function multiplicacion(x,y){
		var x = parseInt(prompt("Numero 1"))
		var y = parseInt(prompt("Numero 2"))
		return x*y
	}
	function divicion(x,y){
		var x = parseInt(prompt("Numero 1"))
		var y = parseInt(prompt("Numero 2"))
		return x/y
	}

	if(opcion==1){
		
	alert(suma())
	calculadora()
	}
	if(opcion==2){

      alert(resta())
	calculadora()
	}
	if(opcion==3){
	alert(multiplicacion())
	calculadora()
	}
	if(opcion==4){
	alert(divicion())
	calculadora()}

	if(opcion==0){
	alert("Saliendo")	
	}}
calculadora()


/*• Realizar un algoritmo que pida el nombre de una persona, el
apellido, la edad y el cargo, para luego mostrar en un mensaje
completo dichos campos. Tenga en cuenta que cada valor se debe
pedir de forma independiente con una función, y debe existir
una función adicional que muestre el mensaje con los datos
ingresados

function pedirdatos(){

	

	function nombre(nombre){
		var nombre = prompt("Nombre")
		return nombre
		
	}
	function apellido(apellido){
		var apellido = prompt("Apellido")
		return apellido
	}
	function edad(edad){
		var edad = parseInt(prompt("Edad"))
		return edad
	}
	function cargo(cargo){
		var cargo = prompt("Cargo")
		return cargo
	}
	alert(nombre()+"\n"+apellido()+"\n"+edad()+"\n"+cargo())
}
pedirdatos()

/*• Realizar una función que muestre la tabla de multiplicar de un
numero ingresado. La tabla de multiplicar se debe mostrar en
el formado tradicional:
o 2 x 2 = 4
o 2 x 3 = 6
o 2 x 4 = 8
o 2 x 5 = 10

function tablas(){

	
	var numero = parseInt(prompt("numero"))
	
	for(var i=0;i<=10;i++){
    	console.log("o "+numero+" x "+i+" = "+ (i* numero))
	}

}
tablas()


/*• Realizar un algoritmo que permita ingresar una base y una
altura, y seleccionar de un menú de opciones si se desea
calcular el área, perímetro o área y perímetro de un cuadrado,
triangulo o rectángulo. Realizar este ejercicio haciendo uso
de funciones*/

function calculadora(){
	
	


	function figura(figura){
	var figura = parseInt(prompt("Digita:"+"\n"+"1)Triangulo"+"\n"+"2)Cuadrado"+"\n"+"3)Rectangulo "+"\n"+ "4) Salir"))
	return figura
	}

	function opcion(opcion){
	
	var opcion = parseInt(prompt("Digita:"+"\n"+"1) Calcular area"+"\n"+"2) Calcular perimetro"+"\n"+"3) Calcular area y perimetro "+"\n"+ "4) Salir"))
	
	return opcion
	
	}

	alert(figura())
	alert(opcion())
	
	var x = parseInt(prompt("Digita la base"))
	var y = parseInt(prompt("Digita la altura"))

	if(opcion()==1&&figura()==1){
		
		alert(x*y/2)
		calculadora()
		}
		if(opcion()==2&&figura()==1){
	
		alert(x*2+y)
		calculadora()
		
		}
		if(opcion()==3&&figura()==1){
			alert(x*y/2)
			   alert(x*2+y)
		calculadora()	   
		
		}
		if(opcion()==1&&figura()==2){
			
		alert(x*y)
		calculadora()
		
		}
		if(opcion()==2&&figura()==2){
	
		alert(x*4)
		calculadora()
		
		}
		if(opcion()==3&&figura()==2){
			alert(x*y)
			alert(x*4)
			calculadora()
		
		}if(opcion()==1&&figura()==3){
			
		alert(x*y)
		calculadora()
		
		}
		if(opcion()==2&&figura()==3){
	
		alert(x*2+y*2)
		calculadora()
		
		}
		if(opcion()==3&&figura()==3){
			alert("a"+(x*y)+"b"+(x*2+y*2))
			
			calculadora()
		
		}
		
	
		if(opcion()==4){
		alert("Saliendo")	
		}
}

calculadora()
