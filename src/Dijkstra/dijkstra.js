// Adding Dijkstra's Algorithm to project.
// This algorithm is used to calculate and find the shortest path between
// nodes using the weights given in a graph. 

// It starts with the source node and finds the rest of the distances from the source node.
// Dijkstra’s algorithm keeps track of the currently known distance from the source node to 
// the rest of the nodes and dynamically updates these values if a shorter path is found.

// A node is then marked as visited and added to the path if the distance between it and 
// the source node is the shortest. This continues until all the nodes have been added 
// to the path, and finally, we get the shortest path from the source node to all other nodes, 
// which packets in a network can follow to their destination.

export function dijkstra(grid, startNode, endNode) {
    const visitedNodesInOrder = []; // Sets animation for visited nodes during search process
    startNode.distance = 0;
    const unvisitedNodes = getAllNodes(grid);
  

    while (unvisitedNodes.length) {
      sortNodesByDistance(unvisitedNodes);
      const closestNode = unvisitedNodes.shift();
  
      // When a wall is reached, program will skip it

      if (closestNode.isWall) continue; // node property set to isWall
  
      // Stop when the closest node's distance is set to infinity
      if (closestNode.distance === Infinity) return visitedNodesInOrder;
      closestNode.isVisited = true;
  
      visitedNodesInOrder.push(closestNode);
  
      // Checking for success
      if (closestNode === endNode) return visitedNodesInOrder;
  
      updateUnvisitedNeighbors(closestNode, grid);
    }
  }
  
  // Sort unvisited nodes by distance when called
  function sortNodesByDistance(unvisitedNodes) {
    unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
  }
  
  // Sets neighbour nodes distance and property of previous node
  function updateUnvisitedNeighbors(node, grid) {
    const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
    for (const neighbor of unvisitedNeighbors) {
      
      neighbor.distance = node.distance + neighbor.weight + 1; 
      // Now the neighbor distance is not infinity and because of it it will show among the top in unvisited nodes.
      neighbor.previousNode = node; // With this property we can backtrack and find the shortest path between the start and end node.
    }
  }
  
  function getUnvisitedNeighbors(node, grid) {
    const neighbors = [];
    const { col, row } = node; //col and row are properties of the node.
  
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  
    return neighbors.filter((neighbor) => !neighbor.isVisited); // flipping unvisted node to visited node
  }
  
  function getAllNodes(grid) {
    const nodes = [];
    for (const row of grid) {
      for (const node of row) {
        nodes.push(node);
      }
    }
    return nodes;
  }
  
  // Backtracks from the finishNode to find the shortest path.
  // Can only be used after Dijkstra method ^^^
  export function getNodesInShortestPathOrder(finishNode) {
    const nodesInShortestPathOrder = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
      nodesInShortestPathOrder.unshift(currentNode);
      currentNode = currentNode.previousNode;
    }
    return nodesInShortestPathOrder;
  }