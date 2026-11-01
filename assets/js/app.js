const cl = console.log

var companies17 = [
    { name: "Company One", id:1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id:2, category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id:3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id:4, category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", id:5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id:6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id:7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id:8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id:9, category: "Retail", start: 1981, end: 1989 }
];

//findIndex

let givensId = 5;
let result55 = companies17.findIndex((param)=>{
	return param.id === givensId;
});
cl(result55);

let result56 =[]; 
for (let i=0; i<companies17.length; i++){
	if(companies17[i].id === givensId){
		//cl(i);
		break;
	}
};
cl(result56);

let blogComment = [
	{
		id : 211,
		comment: 'okay okay'
	},
	{
		id : 212,
		comment: 'good'
	},
	{
		id : 213,
		comment: 'very good'
	},
	{
		id : 214,
		comment: 'excellent'
		
	},
	{
		id : 215,
		comment: 'greate'
		
	},
	{
		id : 216,
		comment: 'bad'	
	},
]

let givenId1 = 214;

let result57 = blogComment.findIndex((param)=>{
	return param.id === givenId1;
});
cl(result57);

blogComment.splice(result57,1)
cl(blogComment);


var companies18 = [
    { name: "Company One", id:1, category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id:2, category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id:3, category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id:4, category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", id:5, category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id:6, category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id:7, category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id:8, category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id:9, category: "Retail", start: 1981, end: 1989 }
];

//reduce

//['Company one, Company Two']

let result58 = companies18.reduce((acc,cv)=>{
	acc.push(cv.name);
	return acc;
},[]);

cl(result58);



//total age of company

let result59 = companies18.reduce((acc,cv)=>{
	acc = acc + (cv.end- cv.start);
	return acc;
},0);
cl(result59)



//['Company one, 22 years']

let result60 = companies18.reduce((acc,cv)=>{
	acc.push(`${cv.name}, ${cv.end-cv.start} years`);
	return acc;
},[]);
cl(result60);



//company one - (1981-2003)
let result61 = companies18.reduce((acc,cv)=>{
	acc.push(`${cv.name} - (${cv.start}-${cv.end})`)
	return acc;
},[]);
cl(result61);



//[company one - finance(1981-2003)]
let result62 = companies18.reduce((acc,cv)=>{
	acc.push(`${cv.name} - ${cv.category} (${cv.start}-${cv.end})`)
	return acc;
},[]);
cl(result62);



//[{compName:"company one", lifespan:"1981-2003"}]
let result63 =companies18.reduce((acc,cv)=>{
	let obj={
			comName : cv.name,
			lifespan : `${cv.start} - ${cv.end}`
	};
	acc.push(obj);
	return acc;
},[]);
cl(result63);



//[{compName:"company one", duration:"22 years"}]

let result64 = companies18.reduce((acc,cv)=>{
	let obj={
			comName : cv.name,
			duration : `${cv.end-cv.start} years`
	};
	acc.push(obj);
	return acc	
},[]);
cl(result64);


//"the company name is company one and category is finance and it run for 22 yrars"

let result65 = companies18.reduce((acc,cv)=>{
	acc.push(`the company name is ${cv.name} and category is ${cv.category} and it run for ${cv.end - cv.start} years`)
	return acc;
},[]);
cl(result65);


//caregory of company must be Retail

let result66 = companies18.reduce((acc,cv)=>{
	if(cv.category.toLowerCase().includes('retail')){
		acc.push(cv);
	};
	return acc;
},[]);
cl(result66);



//create a array of Company who run for at least 10 years.

let result67 = companies18.reduce((acc,cv)=>{
	if(cv.end - cv.start >= 10){
		acc.push(cv);
	};
	return acc;
},[]);
cl(result67);


//company start in 80s

let result68 = companies18.reduce((acc,cv)=>{
	if(cv.start>=1980 && cv.start<1989){
		acc.push(cv);
	}
	return acc;
},[]);
cl(result68);


//80s
//the company name is Company one and category is finance.

let result69 = companies18.reduce((acc,cv)=>{
	if(cv.start>=1980 && cv.start<1989){
		acc.push(`the company name is ${cv.name} and category is ${cv.category}`);
	};
	return acc;	
},[]);
cl(result69);

