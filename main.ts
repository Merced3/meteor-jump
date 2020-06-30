namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
    `
}

let player1: Sprite = null
let bounce = -100
let gravity = 200
tiles.setTilemap(tiles.createTilemap(
            hex`1000100003040404040404040404040704040405010707070707070707070707070707060107070707070707070808080808080601070707070707070707070707070706010808080808070707070707070707060107070707070707070707070707070601070707070707080808080808070706010707070707070707070707070707060107070707070707070707070707070601070808080808080707070708080806010707070707070707070707070707060102020202020702020202020202020608080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808080808`,
            img`
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . 2 2 2 2 2 2 .
                . . . . . . . . . . . . . . . .
                . 2 2 2 2 2 . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . 2 2 2 2 2 2 . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . 2 2 2 2 2 2 . . . . 2 2 2 .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2
            `,
            [myTiles.tile0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundCenter,sprites.dungeon.floorLightMoss],
            TileScale.Sixteen
        ))

info.setScore(0)
info.startCountdown(20)
player1 = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . f f f f . . . . . . . . . .
    . . . . . . . . f f 1 1 1 1 f f . . . . . . . .
    . . . . . . . f b 1 1 1 1 1 1 b f . . . . . . .
    . . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . .
    . . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . .
    . . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . .
    . . . . . . f d d d 1 1 1 1 d d d f . . . . . .
    . . . . . . f b d b f d d f b d b f . . . . . .
    . . . . . . f c d c f 1 1 f c d c f . . . . . .
    . . . . . . . f b 1 1 1 1 1 1 b f . . . . . . .
    . . . . . . f f f c d b 1 b d f f f f . . . . .
    . . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . .
    . . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . .
    . . . . f b f b f f f f f f b f b f b f . . . .
    . . . . . . . . . f f f f f f . . . . . . . . .
    . . . . . . . . . . . f f f . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
player1.setPosition(30, 30)
let gem = sprites.create(img`
    . . b b b b . .
    . b 5 5 5 5 b .
    b 5 d 3 3 d 5 b
    b 5 3 5 5 1 5 b
    c 5 3 5 5 1 d c
    c d d 1 1 d d c
    . f d d d d f .
    . . f f f f . .
`, SpriteKind.Food)
controller.moveSprite(player1, 80, 0)
player1.ay = gravity
scene.cameraFollowSprite(player1)

scene.onHitWall(SpriteKind.Player, function (sprite) {
    player1.vy = bounce
})
