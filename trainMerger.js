module.exports = class TrainMerger {
    
    constructor(input_data) {
      this.input_data = input_data;
     this.station_after_HYB = {"HYB": 0, "NGP": 400, "ITJ": 700, "BPL": 800,
                         "AGA": 2500, "NDL": 2700, "PTA": 3800, "NJP": 4200, "GHY": 4700}
     this.DeptTrain =[];
    }
    
    printTrainA(input){
        let arr_TrainA = ['ARRIVAL' ,'TRAIN_A' ,'ENGINE']
        let arr=[];
        let arr_Boggie=[];
        for(let i=2;i<input.length;i++){
            if(this.station_after_HYB.hasOwnProperty(input[i].trim())){
                arr.push(input[i]);
                let trainObj = new Object();
                trainObj ={name:input[i].trim(),
                 id:this.station_after_HYB[input[i].trim()]
                }
                
                arr_Boggie.push(trainObj);
            }
        }
        let boggieList = arr_TrainA.concat(arr); 
        let boggie = boggieList.toString() 
        const search = ',';
        const replaceWith = ' ';
        const result = boggie.split(search).join(replaceWith);
        console.log(result.trim())
        return arr_Boggie;
    }
    printTrainB(input){
        let arr_TrainA = ['ARRIVAL','TRAIN_B' ,'ENGINE']
        let arr=[];
        let arr_Boggie=[];
        for(let i=2;i<input.length;i++){
            if(this.station_after_HYB.hasOwnProperty(input[i].trim())){
                arr.push(input[i]);
                let trainObj = new Object();
                trainObj ={name:input[i].trim(),
                    id:this.station_after_HYB[input[i].trim()]
                   }
                   arr_Boggie.push(trainObj);
            }
        }
        let boggieList = arr_TrainA.concat(arr); 
        let boggie = boggieList.toString() 
        const search = ',';
        const replaceWith = ' ';
        const result = boggie.split(search).join(replaceWith);
        console.log(result.trim())
        return arr_Boggie;
    }
  }