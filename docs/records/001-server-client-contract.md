# Server Client Contract

## Purpose
To provide examples of the contract JSON object to be communicated between the server and client for the `Pure
 Paradise 2.0` game. 

## FULL Template Server Response
Template JSON response to client from server, containing all available fields.

In a live environment, not all fields will be sent to the client each request, only the fields necessary to update the
 clients display. The `flags` fields, are used to determine which of the fields will be available on the response
  object.

```JSON
{
  "flags": {
    "mapUpdate": true,
    "playerUpdate": true,
    "battleUpdate": true,
    "eventUpdate": true,
    "contextUpdate": true,
    "generalUpdate": true,
    "error": false
  },
  "general": {
    "text": "SomeText"
  },
  "map": {
    "name": "SomeName",
    "raw": [1, 2, 3]
  },
  "player": {
    "flags": {
      "inventoryUpdate": true,
      "equippedUpdate": true,
      "statsUpdate": true,
      "coordsUpdate": true
    },
    "name": "SomeName",
    "context": "SomeContext",
    "inventory": {
      "itemCount": 1,
      "empty": false,
      "items": [
        {
          "SomeItem": {
            "id": 1,
            "quantity": 10.0,
            "usage": 10.0,
            "type": "consumable / armour / weapon",
            "description": "SomeDescription"
          }
        }
      ]
    },
    "equipped": {
      "weapon": {
        "id": 1,
        "damage": 10
      },
      "armor": {
        "id": 1,
        "defence": 10
      }
    },
    "stats": {
      "health": 100,
      "hunger": 100,
      "thirst": 100,
      "gold": 100
    },
    "coords": {
      "localIndex": 0,
      "globalIndex": 0
    }
  },
  "battle": {
    "flags": {
      "startUpdate": true,
      "endUpdate": true
    },
    "monsterCount": 1,
    "monsters": [
      {
        "SomeMonster": {
          "equipped": {
            "weapon": {
              "damage": 10
            },
            "armor": {
              "defence": 10
            }
          }
        }
      }
    ],
    "result": {
      "healthDelta": 10,
      "goldDelta": 10
    }
  },
  "event": {
    "flags": {
      "displayUpdate": true
    },
    "name": "SomeName",
    "story": "SomeText",
    "options": [
      "SomeOption"
    ],
    "display": [0, 1, 2, 3]
  }
}
```

## Example Template Server Response

The follow example shows a typical server response that could be expected when a player moves and their stats are
 updated.

```JSON
{
  "flags": {
    "mapUpdate": false,
    "playerUpdate": true,
    "battleUpdate": false,
    "eventUpdate": false,
    "error": false
  },
  "player": {
    "flags": {
      "inventoryUpdate": false,
      "equippedUpdate": false,
      "statsUpdate": true,
      "coordsUpdate": true
    },
    "name": "SomeName",
    "stats": {
      "health": 100,
      "hunger": 90,
      "thirst": 90,
      "gold": 100
    },
    "coords": {
      "local": {
        "x": 10,
        "y": 20
      },
      "global": {
        "x": 1,
        "y": 3
      }
    }
  }
}
```

## Example Template Server Error Response
```JSON
{
  "flags": {
    "mapUpdate": false,
    "playerUpdate": false,
    "battleUpdate": false,
    "eventUpdate": false,
    "contextUpdate": false,
    "generalUpdate": false,
    "error": true
  },
  "error": {
    "message": "SomeMessage"
  }
}
```

## FULL Template Client Request

Template JSON Requet from client to server, containing all available fields.
```JSON
{
  "action": "SomeAction"
}
```

