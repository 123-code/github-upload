package main

import ("fmt" 
      "strings"
	  "unicode"
	)

func main() {
	//var x int;
	//var y int;

	//y=2;
	//x = 1;

	var num1 float64;
	var num2 float64;

	num1 = 9
	num2 = 8

if num1 > 15{
	fmt.Println("big")
}else{
	fmt.Println("small")
}

	fmt.Println("Hola")
	mean := (num1+num2)/2.0;
	fmt.Printf("result: %v,type of %T\n",mean,mean);

name := "jose ignacio"
poem :=`There is someone here!!!`
fmt.Println(name[0:2]);
fmt.Println(poem);

list :=[] string{"Jose","Naranjo"}
fmt.Println(list);

map1:=map[string] int {
	"Jose":23,
	"Maria":43,
}
fmt.Println(len(map1))
fmt.Println(map1["Jose"])
map1["Juan"] = 34;
fmt.Println(map1);

for value := range map1{
	fmt.Println(value);
}


f := func(c rune) bool {
	return !unicode.IsLetter(c) && !unicode.IsNumber(c)
}


text := "Hola Hola me llamo jose ignacio";
array := strings.FieldsFunc(text,f);
fmt.Println(array);

numbers := map[string] int{

}

for _,word :=range array{
	numbers[strings.ToLower(word)]++
}

}

func add(a int32,b int32) int32={
return a+b;
}

