const originalObject= {
    name: "John",
    address: {
      city: "New York",
      zip: 10001
    }
  };
  
  const deepCopy=JSON.parse(JSON.stringify(originalObject));
  console.log(deepCopy)
  
  
  