import {WeightedGraph} from "./dijkstraAlgorithm.ts";
import {addVertices, addEdges} from "./knightData.ts";

const dijkstraGraph = new WeightedGraph();
addVertices(dijkstraGraph);
addEdges(dijkstraGraph);


const startButton = document.getElementById("startButton");
startButton!.addEventListener("click", () => {
    const validCoords = ["0","1","2","3","4","5","6","7"];
    const result = document.getElementById("result");
    const startX = (<HTMLInputElement>document.getElementById("startX")).value;
    const startY = (<HTMLInputElement>document.getElementById("startY")).value;
    const endX = (<HTMLInputElement>document.getElementById("endX")).value;
    const endY = (<HTMLInputElement>document.getElementById("endY")).value;

    if(validCoords.includes(startX) && validCoords.includes(startY) && validCoords.includes(endX) && validCoords.includes(endY)) {
        const path = dijkstraGraph.dijkstraSearch(`${startX}|${startY}`, `${endX}|${endY}`)
        console.log(path)
        const numOfSteps = path.length;
        const joinedPath = path.join(", ")

        result!.innerHTML = `You need ${numOfSteps} move(s).\nYour path is ${joinedPath}`
    }
    else {
        result!.innerHTML = "Please enter valid numbers for all coordinates (0 - 7)"
    }
})