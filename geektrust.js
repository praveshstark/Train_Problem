const fs = require("fs")
const TrainMerger = require('./trainMerger')
const TrainProblem = new TrainMerger();

class Train {

    constructor(input_data) {

        this.input_data = input_data;
        this.station_after_HYB = {
            "HYB": 0, "NGP": 400, "ITJ": 700, "BPL": 800,
            "AGA": 2500, "NDL": 2700, "PTA": 3800, "NJP": 4200, "GHY": 4700
        }
        this.DeptTrain = [];
        this.deptTrain1 = [];
        this.deptTrain2 = [];
    }
    main(input_data) {

        var inputLines = input_data.toString().split("\n")
        inputLines = inputLines.filter(s => s.replace(/\s+/g, '').length !== 0);
        for (let i = 0; i < inputLines.length; i++) {
            if (inputLines) {
                let input = inputLines[i].split(' ')
                switch (input[0]) {
                    case 'TRAIN_A':
                        this.deptTrain1 = TrainProblem.printTrainA(input)
                        break;
                    case 'TRAIN_B':
                        this.deptTrain2 = TrainProblem.printTrainB(input)
                        break;

                }
            }
        }
        let startBoggie = ['DEPARTURE', 'TRAIN_AB', 'ENGINE', 'ENGINE']
        this.DeptTrain = this.deptTrain1.concat(this.deptTrain2)
        this.DeptTrain = this.DeptTrain.sort((a, b) => b.id - a.id);
        let boggieListToArray = [];
        for (let i = 0; i < this.DeptTrain.length; i++) {
            if (this.DeptTrain[i].id != 0) {
                boggieListToArray.push(this.DeptTrain[i].name)
            }
        }
        let boggieList = startBoggie.concat(boggieListToArray);
        let boggie = boggieList.toString()
        const search = ',';
        const replaceWith = ' ';
        let result = boggie.split(search).join(replaceWith);
        result = result.replace("HYB", "");
        console.log(result.trim())

    }
}

const filename = process.argv[2];
data = fs.readFileSync(process.argv[2]).toString();
let trainData = new Train();
trainData.main(data)
