const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// Write a for loop to show all the companies.

for(var i=0;i<companies.length;i++) {
  console.log(companies[i]);
}


// use forEach to show all the companies

companies.forEach(company => console.log(company));


// use forEach to show all the companies nname

companies.forEach(company => console.log(company.name));


// Use ages array and filter and display array of 21 and older

const filterAge = ages.filter( age => age > 21);
console.log(filterAge);

// Filter retail companies




// Get 80s companies


// Get companies that lasted 10 years or more


//Use map and Create array of company names




// Use sort and Sort companies by start year



// Sort ages



// use reduce and calculate ageSum



// Get total years for all companies




// Combine Methods


