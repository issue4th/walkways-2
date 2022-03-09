scene.onOverlapTile(SpriteKind.Player, null, function (sprite, undefined) {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    chest = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
})
let chest: Sprite = null
scene.setBackgroundColor(6)
tiles.loadMap(tiles.createMap(tilemap`level1`))
let mySprite = sprites.create(img`
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
controller.moveSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile7`)
scene.cameraFollowSprite(mySprite)
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
            . . . . . . 4 4 4 . . . . . . . 
            . . . . 4 4 4 4 4 4 4 . . . . . 
            . . . . 4 f 5 5 5 f 4 . . . . . 
            . . . . 4 f 6 5 6 f 4 . . . . . 
            . . . 4 4 f 5 5 5 f 4 4 . . . . 
            . . . 4 4 f f f f f 4 4 . . . . 
            . . . 4 4 . . f . . 4 4 . . . . 
            . . . 4 . . . f . . . 4 . . . . 
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
game.onUpdate(function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile9`)) {
        tiles.loadMap(tiles.createMap(tilemap`level4`))
    }
})
