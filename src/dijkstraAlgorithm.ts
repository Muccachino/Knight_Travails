//generic Dijkstra Algorithm

type Edge<T, U> = {node: T, edge: U}

class WeightedGraph<T, U> {
    adjacencyList = new Map<T, Edge<T, U>[]>();
    addVertex(vertex: T) {
        this.adjacencyList.set(vertex, []);
    }

    addEdge(vertex1: T, vertex2: T, weight: U) {
        if (this.adjacencyList.get(vertex1) && this.adjacencyList.get(vertex2)) {
            this.adjacencyList.get(vertex1)?.push({node: vertex2, edge: weight});
            this.adjacencyList.get(vertex2)?.push({node: vertex1, edge: weight});
        }
    }

    dijkstraSearch(start: T, end: T) {
        const nodes = new PriorityQueue();
        const distances: {[key: string]: number} = {}
        const previous: {[key: string]: number | null} = {};
        const path: T[] = [];
        let smallest: T;
        let sumOfDist: number
        let nextNode: Edge<T, U>;

        //initialise variables
        this.adjacencyList.forEach((_, key) => {
            if (key === start) {
                distances[key as string] = 0;
                nodes.enqueue(key,0);
            }
            else {
                distances[key as string] = Infinity
                nodes.enqueue(key, Infinity);
            }
            previous[key as string] = null;
        });


        //loop through graph
        while (nodes.values.length) {
            smallest = nodes.dequeue()?.val as T;

            // if end
            if (smallest === end) {
                while (previous[smallest as string]) {
                    path.push(smallest);
                    smallest = previous[smallest as string] as T;
                }
                break;
            }

            if (smallest || distances[smallest as string] !== Infinity) {
                for (let neighbor in this.adjacencyList.get(smallest)) {
                    //search for neighbor nodes
                    nextNode = this.adjacencyList.get(smallest)?.at(neighbor as any) as Edge<T, U>

                    //calculate distances
                    sumOfDist = (distances[smallest as string] as any) + nextNode.edge;

                    //update list
                    if (sumOfDist < distances[nextNode?.node as string]) {
                        distances[nextNode?.node as string] = sumOfDist;
                        previous[nextNode?.node as string] = smallest as number;
                        nodes.enqueue(nextNode!.node, sumOfDist);
                    }
                }
            }
        }

        return path.concat(smallest!).reverse();
    }
}

class PriorityQueue<T> {
    values: { val: T; priority: number}[] = [];

    enqueue(val: T, priority: number) {
        this.values.push({val, priority});
        this.sort();
    }
    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority)
    }
}

export {WeightedGraph}