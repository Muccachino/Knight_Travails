

const addVertices = (dijkstraGraph: any) => {
    dijkstraGraph.addVertex("0|0");
    dijkstraGraph.addVertex("0|1");
    dijkstraGraph.addVertex("0|2");
    dijkstraGraph.addVertex("0|3");
    dijkstraGraph.addVertex("0|4");
    dijkstraGraph.addVertex("0|5");
    dijkstraGraph.addVertex("0|6");
    dijkstraGraph.addVertex("0|7");

    dijkstraGraph.addVertex("1|0");
    dijkstraGraph.addVertex("1|1");
    dijkstraGraph.addVertex("1|2");
    dijkstraGraph.addVertex("1|3");
    dijkstraGraph.addVertex("1|4");
    dijkstraGraph.addVertex("1|5");
    dijkstraGraph.addVertex("1|6");
    dijkstraGraph.addVertex("1|7");

    dijkstraGraph.addVertex("2|0");
    dijkstraGraph.addVertex("2|1");
    dijkstraGraph.addVertex("2|2");
    dijkstraGraph.addVertex("2|3");
    dijkstraGraph.addVertex("2|4");
    dijkstraGraph.addVertex("2|5");
    dijkstraGraph.addVertex("2|6");
    dijkstraGraph.addVertex("2|7");

    dijkstraGraph.addVertex("3|0");
    dijkstraGraph.addVertex("3|1");
    dijkstraGraph.addVertex("3|2");
    dijkstraGraph.addVertex("3|3");
    dijkstraGraph.addVertex("3|4");
    dijkstraGraph.addVertex("3|5");
    dijkstraGraph.addVertex("3|6");
    dijkstraGraph.addVertex("3|7");

    dijkstraGraph.addVertex("4|0");
    dijkstraGraph.addVertex("4|1");
    dijkstraGraph.addVertex("4|2");
    dijkstraGraph.addVertex("4|3");
    dijkstraGraph.addVertex("4|4");
    dijkstraGraph.addVertex("4|5");
    dijkstraGraph.addVertex("4|6");
    dijkstraGraph.addVertex("4|7");

    dijkstraGraph.addVertex("5|0");
    dijkstraGraph.addVertex("5|1");
    dijkstraGraph.addVertex("5|2");
    dijkstraGraph.addVertex("5|3");
    dijkstraGraph.addVertex("5|4");
    dijkstraGraph.addVertex("5|5");
    dijkstraGraph.addVertex("5|6");
    dijkstraGraph.addVertex("5|7");

    dijkstraGraph.addVertex("6|0");
    dijkstraGraph.addVertex("6|1");
    dijkstraGraph.addVertex("6|2");
    dijkstraGraph.addVertex("6|3");
    dijkstraGraph.addVertex("6|4");
    dijkstraGraph.addVertex("6|5");
    dijkstraGraph.addVertex("6|6");
    dijkstraGraph.addVertex("6|7");

    dijkstraGraph.addVertex("7|0");
    dijkstraGraph.addVertex("7|1");
    dijkstraGraph.addVertex("7|2");
    dijkstraGraph.addVertex("7|3");
    dijkstraGraph.addVertex("7|4");
    dijkstraGraph.addVertex("7|5");
    dijkstraGraph.addVertex("7|6");
    dijkstraGraph.addVertex("7|7");
}

// All possibilities a knight can move
// Edges are always added both ways
const addEdges = (dijkstraGraph: any) => {
    dijkstraGraph.addEdge("0|0", "1|2", 1)
    dijkstraGraph.addEdge("0|0", "2|1", 1)
    dijkstraGraph.addEdge("0|1", "1|3", 1)
    dijkstraGraph.addEdge("0|1", "2|0", 1)
    dijkstraGraph.addEdge("0|1", "2|2", 1)
    dijkstraGraph.addEdge("0|2", "1|0", 1)
    dijkstraGraph.addEdge("0|2", "1|4", 1)
    dijkstraGraph.addEdge("0|2", "2|1", 1)
    dijkstraGraph.addEdge("0|2", "2|3", 1)
    dijkstraGraph.addEdge("0|3", "1|1", 1)
    dijkstraGraph.addEdge("0|3", "1|5", 1)
    dijkstraGraph.addEdge("0|3", "2|2", 1)
    dijkstraGraph.addEdge("0|3", "2|4", 1)
    dijkstraGraph.addEdge("0|4", "1|2", 1)
    dijkstraGraph.addEdge("0|4", "1|6", 1)
    dijkstraGraph.addEdge("0|4", "2|3", 1)
    dijkstraGraph.addEdge("0|4", "2|5", 1)
    dijkstraGraph.addEdge("0|5", "1|3", 1)
    dijkstraGraph.addEdge("0|5", "1|7", 1)
    dijkstraGraph.addEdge("0|5", "2|4", 1)
    dijkstraGraph.addEdge("0|5", "2|6", 1)
    dijkstraGraph.addEdge("0|6", "1|4", 1)
    dijkstraGraph.addEdge("0|6", "2|5", 1)
    dijkstraGraph.addEdge("0|6", "2|7", 1)
    dijkstraGraph.addEdge("0|7", "1|5", 1)
    dijkstraGraph.addEdge("0|7", "2|6", 1)
    dijkstraGraph.addEdge("1|0", "2|2", 1)
    dijkstraGraph.addEdge("1|0", "3|1", 1)
    dijkstraGraph.addEdge("1|1", "2|3", 1)
    dijkstraGraph.addEdge("1|1", "3|0", 1)
    dijkstraGraph.addEdge("1|1", "3|2", 1)
    dijkstraGraph.addEdge("1|2", "2|0", 1)
    dijkstraGraph.addEdge("1|2", "2|4", 1)
    dijkstraGraph.addEdge("1|2", "3|1", 1)
    dijkstraGraph.addEdge("1|2", "3|3", 1)
    dijkstraGraph.addEdge("1|3", "2|1", 1)
    dijkstraGraph.addEdge("1|3", "2|5", 1)
    dijkstraGraph.addEdge("1|3", "3|2", 1)
    dijkstraGraph.addEdge("1|3", "3|4", 1)
    dijkstraGraph.addEdge("1|4", "2|2", 1)
    dijkstraGraph.addEdge("1|4", "2|6", 1)
    dijkstraGraph.addEdge("1|4", "3|3", 1)
    dijkstraGraph.addEdge("1|4", "3|5", 1)
    dijkstraGraph.addEdge("1|5", "2|3", 1)
    dijkstraGraph.addEdge("1|5", "2|7", 1)
    dijkstraGraph.addEdge("1|5", "3|4", 1)
    dijkstraGraph.addEdge("1|5", "3|6", 1)
    dijkstraGraph.addEdge("1|6", "2|4", 1)
    dijkstraGraph.addEdge("1|6", "3|5", 1)
    dijkstraGraph.addEdge("1|6", "3|7", 1)
    dijkstraGraph.addEdge("1|7", "2|5", 1)
    dijkstraGraph.addEdge("1|7", "3|6", 1)
    dijkstraGraph.addEdge("2|0", "3|2", 1)
    dijkstraGraph.addEdge("2|0", "4|1", 1)
    dijkstraGraph.addEdge("2|1", "3|3", 1)
    dijkstraGraph.addEdge("2|1", "4|0", 1)
    dijkstraGraph.addEdge("2|1", "4|2", 1)
    dijkstraGraph.addEdge("2|2", "3|0", 1)
    dijkstraGraph.addEdge("2|2", "3|4", 1)
    dijkstraGraph.addEdge("2|2", "4|1", 1)
    dijkstraGraph.addEdge("2|2", "4|3", 1)
    dijkstraGraph.addEdge("2|3", "3|1", 1)
    dijkstraGraph.addEdge("2|3", "3|5", 1)
    dijkstraGraph.addEdge("2|3", "4|2", 1)
    dijkstraGraph.addEdge("2|3", "4|4", 1)
    dijkstraGraph.addEdge("2|4", "3|2", 1)
    dijkstraGraph.addEdge("2|4", "3|6", 1)
    dijkstraGraph.addEdge("2|4", "4|3", 1)
    dijkstraGraph.addEdge("2|4", "4|5", 1)
    dijkstraGraph.addEdge("2|5", "3|3", 1)
    dijkstraGraph.addEdge("2|5", "3|7", 1)
    dijkstraGraph.addEdge("2|5", "4|4", 1)
    dijkstraGraph.addEdge("2|5", "4|6", 1)
    dijkstraGraph.addEdge("2|6", "3|4", 1)
    dijkstraGraph.addEdge("2|6", "4|5", 1)
    dijkstraGraph.addEdge("2|6", "4|7", 1)
    dijkstraGraph.addEdge("2|7", "3|5", 1)
    dijkstraGraph.addEdge("2|7", "4|6", 1)
    dijkstraGraph.addEdge("3|0", "4|2", 1)
    dijkstraGraph.addEdge("3|0", "5|1", 1)
    dijkstraGraph.addEdge("3|1", "4|3", 1)
    dijkstraGraph.addEdge("3|1", "5|0", 1)
    dijkstraGraph.addEdge("3|1", "5|2", 1)
    dijkstraGraph.addEdge("3|2", "4|0", 1)
    dijkstraGraph.addEdge("3|2", "4|4", 1)
    dijkstraGraph.addEdge("3|2", "5|1", 1)
    dijkstraGraph.addEdge("3|2", "5|3", 1)
    dijkstraGraph.addEdge("3|3", "4|1", 1)
    dijkstraGraph.addEdge("3|3", "4|5", 1)
    dijkstraGraph.addEdge("3|3", "5|2", 1)
    dijkstraGraph.addEdge("3|3", "5|4", 1)
    dijkstraGraph.addEdge("3|4", "4|2", 1)
    dijkstraGraph.addEdge("3|4", "4|6", 1)
    dijkstraGraph.addEdge("3|4", "5|3", 1)
    dijkstraGraph.addEdge("3|4", "5|5", 1)
    dijkstraGraph.addEdge("3|5", "4|3", 1)
    dijkstraGraph.addEdge("3|5", "4|7", 1)
    dijkstraGraph.addEdge("3|5", "5|4", 1)
    dijkstraGraph.addEdge("3|5", "5|6", 1)
    dijkstraGraph.addEdge("3|6", "4|4", 1)
    dijkstraGraph.addEdge("3|6", "5|5", 1)
    dijkstraGraph.addEdge("3|6", "5|7", 1)
    dijkstraGraph.addEdge("3|7", "4|5", 1)
    dijkstraGraph.addEdge("3|7", "5|6", 1)
    dijkstraGraph.addEdge("4|0", "5|2", 1)
    dijkstraGraph.addEdge("4|0", "6|1", 1)
    dijkstraGraph.addEdge("4|1", "5|3", 1)
    dijkstraGraph.addEdge("4|1", "6|0", 1)
    dijkstraGraph.addEdge("4|1", "6|2", 1)
    dijkstraGraph.addEdge("4|2", "5|0", 1)
    dijkstraGraph.addEdge("4|2", "5|4", 1)
    dijkstraGraph.addEdge("4|2", "6|1", 1)
    dijkstraGraph.addEdge("4|2", "6|3", 1)
    dijkstraGraph.addEdge("4|3", "5|1", 1)
    dijkstraGraph.addEdge("4|3", "5|5", 1)
    dijkstraGraph.addEdge("4|3", "6|2", 1)
    dijkstraGraph.addEdge("4|3", "6|4", 1)
    dijkstraGraph.addEdge("4|4", "5|2", 1)
    dijkstraGraph.addEdge("4|4", "5|6", 1)
    dijkstraGraph.addEdge("4|4", "6|3", 1)
    dijkstraGraph.addEdge("4|4", "6|5", 1)
    dijkstraGraph.addEdge("4|5", "5|3", 1)
    dijkstraGraph.addEdge("4|5", "5|7", 1)
    dijkstraGraph.addEdge("4|5", "6|4", 1)
    dijkstraGraph.addEdge("4|5", "6|6", 1)
    dijkstraGraph.addEdge("4|6", "5|4", 1)
    dijkstraGraph.addEdge("4|6", "6|5", 1)
    dijkstraGraph.addEdge("4|6", "6|7", 1)
    dijkstraGraph.addEdge("4|7", "5|5", 1)
    dijkstraGraph.addEdge("4|7", "6|6", 1)
    dijkstraGraph.addEdge("5|0", "6|2", 1)
    dijkstraGraph.addEdge("5|0", "7|1", 1)
    dijkstraGraph.addEdge("5|1", "6|3", 1)
    dijkstraGraph.addEdge("5|1", "7|0", 1)
    dijkstraGraph.addEdge("5|1", "7|2", 1)
    dijkstraGraph.addEdge("5|2", "6|0", 1)
    dijkstraGraph.addEdge("5|2", "6|4", 1)
    dijkstraGraph.addEdge("5|2", "7|1", 1)
    dijkstraGraph.addEdge("5|2", "7|3", 1)
    dijkstraGraph.addEdge("5|3", "6|1", 1)
    dijkstraGraph.addEdge("5|3", "6|5", 1)
    dijkstraGraph.addEdge("5|3", "7|2", 1)
    dijkstraGraph.addEdge("5|3", "7|4", 1)
    dijkstraGraph.addEdge("5|4", "6|2", 1)
    dijkstraGraph.addEdge("5|4", "6|6", 1)
    dijkstraGraph.addEdge("5|4", "7|3", 1)
    dijkstraGraph.addEdge("5|4", "7|5", 1)
    dijkstraGraph.addEdge("5|5", "6|3", 1)
    dijkstraGraph.addEdge("5|5", "6|7", 1)
    dijkstraGraph.addEdge("5|5", "7|4", 1)
    dijkstraGraph.addEdge("5|5", "7|6", 1)
    dijkstraGraph.addEdge("5|6", "6|4", 1)
    dijkstraGraph.addEdge("5|6", "7|5", 1)
    dijkstraGraph.addEdge("5|6", "7|7", 1)
    dijkstraGraph.addEdge("5|7", "6|5", 1)
    dijkstraGraph.addEdge("5|7", "7|6", 1)
    dijkstraGraph.addEdge("6|0", "7|2", 1)
    dijkstraGraph.addEdge("6|1", "7|3", 1)
    dijkstraGraph.addEdge("6|2", "7|0", 1)
    dijkstraGraph.addEdge("6|2", "7|4", 1)
    dijkstraGraph.addEdge("6|3", "7|1", 1)
    dijkstraGraph.addEdge("6|3", "7|5", 1)
    dijkstraGraph.addEdge("6|4", "7|2", 1)
    dijkstraGraph.addEdge("6|4", "7|6", 1)
    dijkstraGraph.addEdge("6|5", "7|3", 1)
    dijkstraGraph.addEdge("6|5", "7|7", 1)
    dijkstraGraph.addEdge("6|6", "7|4", 1)
    dijkstraGraph.addEdge("6|7", "7|5", 1)
    dijkstraGraph.addEdge("7|0", "7|2", 1)
    dijkstraGraph.addEdge("7|1", "7|3", 1)
    dijkstraGraph.addEdge("7|2", "7|4", 1)
    dijkstraGraph.addEdge("7|3", "7|5", 1)
    dijkstraGraph.addEdge("7|4", "7|6", 1)
    dijkstraGraph.addEdge("7|5", "7|7", 1)
}

export {addVertices, addEdges}