export const names = {
  oradea: 'oradea',
  zerind: 'zerind',
  sibiu: 'sibiu',
  arad: 'arad',
  fagaras: 'fagaras',
  rimnicuVilcea: 'rimnicuVilcea',
  bucharest: 'bucharest',
  craiova: 'craiova',
  pitesti: 'pitesti',
}


export const mapOne = {
  [names.oradea]: {
    neighbors: [
      {
        name: names.zerind,
        distance: 71
      },
      {
        name: names.sibiu,
        distance: 151
      }
    ]
  },
  [names.zerind]: {
    neighbors: [
      {
        name: names.oradea,
        distance: 71
      },
      {
        name: names.arad,
        distance: 75
      }
    ]
  },
  [names.arad]: {
    neighbors: [
      {
        name: names.sibiu,
        distance: 140
      }
    ]
  },
  [names.sibiu]: {
    neighbors: [
      {
        name: names.oradea,
        distance: 151
      },
      {
        name: names.arad,
        distance: 140
      },
      {
        name: names.fagaras,
        distance: 99
      },
      {
        name: names.rimnicuVilcea,
        distance: 80
      }
    ]
  },
  [names.fagaras]: {
    neighbors: [
      {
        name: names.sibiu,
        distance: 99
      },
      {
        name: names.bucharest,
        distance: 211
      }
    ]
  },
  [names.rimnicuVilcea]: {
    neighbors: [
      {
        name: names.sibiu,
        distance: 80
      },
      {
        name: names.craiova,
        distance: 146
      },
      {
        name: names.pitesti,
        distance: 97
      }
    ]
  },
  [names.craiova]: {
    neighbors: [
      {
        name: names.rimnicuVilcea,
        distance: 146
      },
      {
        name: names.pitesti,
        distance: 138
      }
    ]
  },
  [names.pitesti]: {
    neighbors: [
      {
        name: names.rimnicuVilcea,
        distance: 97
      },
      {
        name: names.bucharest,
        distance: 101
      }
    ]
  },
  [names.bucharest]: {
    neighbors: [
      {
        name: names.pitesti,
        distance: 101
      },
      {
        name: names.fagaras,
        distance: 211
      }
    ]
  }
}
