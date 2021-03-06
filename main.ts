namespace SpriteKind {
    export const npc = SpriteKind.create()
    export const key = SpriteKind.create()
    export const Text = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    if (chest) {
    	
    } else {
        chest = sprites.create(img`
            . b b b b b b b b b b b b b b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b b b b b b b d d b b b b b b b 
            . b b b b b b c c b b b b b b . 
            b c c 5 5 c b c c b c c c c c b 
            b 5 c 5 5 c 4 b b 5 c 5 4 5 c b 
            b 4 5 4 4 5 4 4 5 4 4 f 5 4 5 b 
            b 4 f 4 4 f 4 4 f 4 5 5 5 4 f b 
            b b b b b b b b b b b b b b b b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `, SpriteKind.Player)
        tiles.placeOnRandomTile(chest, assets.tile`myTile15`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    if (diamond_chest) {
    	
    } else {
        diamond_chest = sprites.create(img`
            . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
            8 6 9 9 9 9 9 9 9 9 9 9 9 9 9 8 
            8 6 9 9 9 9 9 9 9 9 9 9 9 9 6 8 
            8 6 6 9 9 9 9 9 9 9 9 9 9 6 6 8 
            8 8 8 8 8 8 8 7 5 8 8 8 8 8 8 8 
            . 8 8 8 8 8 8 7 5 8 8 8 8 8 8 . 
            8 c c c c c 8 7 7 8 c c c c c 8 
            8 c c 9 c c c 8 8 c c 9 c 1 9 8 
            8 9 9 1 9 1 9 c c c 9 1 9 9 9 8 
            8 1 9 9 1 9 9 1 9 1 9 9 1 9 1 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 
            8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 
            8 c 6 6 6 6 6 6 6 6 6 6 6 6 c 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            . 8 8 . . . . . . . . . . 8 8 . 
            `, SpriteKind.Player)
        tiles.placeOnRandomTile(diamond_chest, assets.tile`myTile16`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile54`, function (sprite, location) {
    for (let location of tiles.getTilesByType(assets.tile`myTile52`)) {
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile49`, function (sprite, location) {
    for (let location of tiles.getTilesByType(assets.tile`myTile50`)) {
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile50`, function (sprite, location) {
    game.over(false)
})
function startgame () {
    for (let location of tiles.getTilesByType(assets.tile`myTile25`)) {
        temporary = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f 8 8 8 f . . . . . . 
            . . . . . f 6 8 6 f . . . . . . 
            . . . . . f 8 8 8 f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . . f . . . f . . . . . . 
            `, SpriteKind.npc)
        tiles.placeOnTile(temporary, location)
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile7`)
    for (let location of tiles.getTilesByType(assets.tile`myTile45`)) {
        temporary = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . c 5 5 5 . . . . . . . . . 
            . . . c 5 c 5 5 5 5 5 5 . . . . 
            . . . c 5 5 5 . c 5 c 5 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.key)
        tiles.placeOnTile(temporary, location)
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.key, function (sprite, otherSprite) {
    for (let location of tiles.getTilesByType(assets.tile`myTile10`)) {
        tiles.setTileAt(location, assets.tile`transparency16`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    game.over(true)
})
let temporary: Sprite = null
let diamond_chest: Sprite = null
let chest: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(6)
tiles.loadMap(tiles.createMap(tilemap`level1`))
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f 7 7 7 f . . . . . . 
    . . . . . f 7 7 7 f . . . . . . 
    . . . . . f 7 7 7 f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . . f . . . f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 80, 80)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile7`)
scene.cameraFollowSprite(mySprite)
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile9`)) {
        tiles.loadMap(tiles.createMap(tilemap`level4`))
        startgame()
    } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile26`)) {
        tiles.loadMap(tiles.createMap(tilemap`level7`))
        startgame()
    } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile34`)) {
        tiles.loadMap(tiles.createMap(tilemap`level8`))
        startgame()
    } else {
    	
    }
})
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile`)) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f 8 8 8 f . . . . . . 
            . . . . . f 6 8 6 f . . . . . . 
            . . . . . f 8 8 8 f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . . f . . . f . . . . . . 
            `)
    } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile0`)) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f c c c f . . . . . . 
            . . . . . f 7 c 7 f . . . . . . 
            . . . . . f c c c f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . . f . . . f . . . . . . 
            `)
    } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile1`)) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . d f d f d . . . . . . 
            . . . . . f 8 8 8 f . . . . . . 
            . . . . . f 6 8 6 f . . . . . . 
            . . . . . f 8 8 8 f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . d . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . d f f f f f d . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . . d . . . d . . . . . . 
            . . . . . f . . . f . . . . . . 
            `)
    } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile2`)) {
        mySprite.setImage(img`
            . . . . . . 8 8 8 . . . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . 8 f 6 6 6 f 8 . . . . . 
            . . . . 8 f 8 6 8 f 8 . . . . . 
            . . . 8 8 f 6 6 6 f 8 8 . . . . 
            . . . 8 8 f f f f f 8 8 . . . . 
            . . . 8 8 . . f . . 8 8 . . . . 
            . . . 8 . . . f . . . 8 . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . . f . . . f . . . . . . 
            `)
    } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile3`)) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f 6 6 6 f . . . . . . 
            . . . . . f 9 6 9 f . . . . . . 
            . . . . . f 6 6 6 f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . f 3 f f f f f . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . . f . . . f . . . . . . 
            . . . . . f . . . f . . . . . . 
            `)
    } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile5`)) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f 8 8 8 f . . . . . . 
            . . . . . f 9 8 9 f . . . . . . 
            . . . . . f 8 8 8 f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . d . . . . . . . . 
            . . . . . . . d . . . . . . . . 
            . . . . . . . d . . . . . . . . 
            . . . . f d d d d d f . . . . . 
            . . . . . . . d . . . . . . . . 
            . . . . . . . d . . . . . . . . 
            . . . . . . d d d . . . . . . . 
            . . . . . d . . . d . . . . . . 
            . . . . . d . . . d . . . . . . 
            . . . . . f . . . f . . . . . . 
            `)
    } else if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile6`)) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . c 4 4 4 c . . . . . . 
            . . . . . 4 8 8 8 4 . . . . . . 
            . . . . . 4 9 8 9 4 . . . . . . 
            . . . . . 4 8 8 8 4 . . . . . . 
            . . . . . c 4 4 4 c . . . . . . 
            . . . . . . . 4 . . . . . . . . 
            . . . . . . . 4 . . . . . . . . 
            . . . . . . . 4 . . . . . . . . 
            . . . . 4 4 4 4 c c c . . . . . 
            . . . . . . . 4 . . . . . . . . 
            . . . . . . . 4 . . . . . . . . 
            . . . . . . c c 4 . . . . . . . 
            . . . . . c . . . 4 . . . . . . 
            . . . . . c . . . 4 . . . . . . 
            . . . . . c . . . 4 . . . . . . 
            `)
    } else {
    	
    }
})
