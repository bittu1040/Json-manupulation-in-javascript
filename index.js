function convertJSON(inputData){
    const actualData=[]
    let convertedJSON_length = inputData.dimensions[0].values.length;
    for(let i=0; i<convertedJSON_length; i++){
        actualData.push({});
    }
    

    for(let each_metadata of inputData.metadata){
        for(eachData of inputData.dimensions){
            if(each_metadata.id===eachData.id){
                for(let i=0; i<convertedJSON_length; i++){
                    actualData[i][each_metadata.label]= eachData.values[i];
                }
            }
        }
    }
    for(let each_metadata of inputData.metadata){
        for(eachData of inputData.meaures){
            if(each_metadata.id===eachData.id){
                for(let i=0; i<convertedJSON_length;i++){
                    actualData[i][each_metadata.label]= eachData.values[i];
                }
            }
        }
    }

  
    console.log(actualData);
}

let data= {
	"dimensions": [
		{
			"id": "dimension_re",
			"values": ["East", "East", "West", "SouthWest", "South", "NorthEast"]
		}, {
			"id": "dimension_cnt",
			"values": ["London", "Italy", "Germany", "US", "Russia", "India"]
		}
	],
	"meaures": [
		{
			"id": "measure_sales",
			"values": [100, 156, 432, 462, 25, 100]
		}, {
			"id": "measure_qty",
			"values": [85, 34, 153, 434, 52, 43]
		}, {
			"id": "measure_profit",
			"values": [123, 45, 421, 465, 451, 56]
		}
	],
	"metadata": [
		{
			"id": "measure_sales",
			"label": "Sales",
			"type": "number"
		}, {
			"id": "measure_qty",
			"label": "Quantity",
			"type": "number"
		}, {
			"id": "measure_profit",
			"label": "Profit",
			"type": "number"
		}, {
			"id": "dimension_re",
			"label": "Region",
			"type": "string"
		}, {
			"id": "dimension_cnt",
			"label": "County",
			"type": "string"
		}
	]
}

convertJSON(data);

