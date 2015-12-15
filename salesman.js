import { mapOne } from './maps'

entry('zerind', 'pitesti', mapOne)

function entry (from, to, map) {
  let results = []
  traverse(from, to)
  let shortestRoute = results.reduce((prev, next) => {
    return next.distance < prev.distance ? next : prev
  })

  console.log(shortestRoute)

  function traverse (current, destination, status = {traveled: [], distance: 0, destinationReached: false}) {
    status.traveled.push(current)
    if(current === destination){
      status.destinationReached = true
      results.push({
        traveled: status.traveled,
        distance: status.distance
      })
      return
    }
    let neighbors = map[current].neighbors
    neighbors.forEach((city) => {
      if(status.traveled.indexOf(city.name) !== -1) return
      else {
        let newResults = copy(status)
        newResults.distance += findDistance(current, city.name)
        traverse(city.name, destination, newResults)
      }
    })
    return status
  }
}

function findDistance (from, to) {
  try {
    let destination = mapOne[from].neighbors.filter((city) => city.name === to)[0]
    return destination.distance
  } catch (e) {
    console.log('That city is not a neighbor!')
    return false
  }
}

function copy (map) {
  return JSON.parse(JSON.stringify(map))
}
