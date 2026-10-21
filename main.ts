scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.setGameOverEffect(false, effects.melt)
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (pumpkin.vy == 0) {
        pumpkin.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile-teleport`, function (sprite, location) {
    game.setGameOverEffect(true, effects.starField)
    game.gameOver(true)
})
let pumpkin: Sprite = null
scene.setBackgroundColor(10)
pumpkin = sprites.create(assets.image`pumpkin`, SpriteKind.Player)
controller.moveSprite(pumpkin, 100, 0)
tiles.setCurrentTilemap(tilemap`level3`)
pumpkin.ay = 250
scene.cameraFollowSprite(pumpkin)
