
//Strings are for storing text
//Strings created with single or double quotes works the same.

let name1="janardhan bhaskar khandagle"
let age=22
let village="pishor"
console.log(name1)
console.log(age)
console.log(village)
console.log(name1+ "  "+age +"  "+village)


console.log("string methods ")
//  1) length method
 let jk="janardhan "
 console.log(jk.length)
 console.log(name1.length)

 // 2) toUpperCase and toLowerCase method
 let add="simple and hard"
 let minus="HARD TO EXPLAIN"

 console.log(add.toUpperCase())
 console.log(minus.toLowerCase())

 // 3)  concat method 
 const you="janardhan "
 const middle="bhaskar "
 const surname="khandagle"
 const full= you.concat( " ",middle,surname )
 console.log(full)

 // 4) slice method

 let sli="apple , banana ,orange " 
 let app=sli.slice(1,10) 
 console.log(app)

 // replaceall method
 let text = "janardhan bhaskar khandagle  from bajajnagar and age is 23"
 text=text.replaceAll("bajajnagar","amdabad")
 text=text.replaceAll("23","22")
 
 console.log(text)
 
 // trim start and end  method
 let new1="                                 hello world ";
 console.log(new1)
 let new4="hello world                          ";
 console.log(new4)
 
  let new2=new1.trimStart( )
  let new3 =new4.trimEnd()
  console.log(new2)
  console.log(new3) 

  // split method 
  let spilt1="j,a,n,a,r,d,h,n"
  let spla=spilt1.split(",")

  console.log(spla)

  //  string search method
  // indexof method
  let par="where are you going"
  let index=par.indexOf("are")
  console.log(index)