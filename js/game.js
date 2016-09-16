var monsterData = [
  {
    name: 'Aerocephal',
    image: 'aerocephal',
    src: 'assets/allacrost_enemy_sprites/aerocephal.png',
    frames: 4,
    frameW: 768 / 4,
    frameH: 192,
    maxHealth: 20 + 768 / 1000
  }, {
    name: 'Arcana Drake',
    image: 'arcana_drake',
    src: 'assets/allacrost_enemy_sprites/arcana_drake.png',
    frames: 4,
    frameW: 768 / 4,
    frameH: 256,
    maxHealth: 20 + 768 / 1000
  }, {
    name: 'Aurum Drakueli',
    image: 'aurum-drakueli',
    src: 'assets/allacrost_enemy_sprites/aurum-drakueli.png',
    frames: 4,
    frameW: 1280 / 4,
    frameH: 256,
    maxHealth: 20 + 1280 / 1000
  }, {
    name: 'Bat',
    image: 'bat',
    src: 'assets/allacrost_enemy_sprites/bat.png',
    frames: 4,
    frameW: 512 / 4,
    frameH: 128,
    maxHealth: 20 + 512 / 1000
  }, {
    name: 'Daemarbora',
    image: 'daemarbora',
    src: 'assets/allacrost_enemy_sprites/daemarbora.png',
    frames: 4,
    frameW: 512 / 4,
    frameH: 128,
    maxHealth: 20 + 512 / 1000
  }, {
    name: 'Deceleon',
    image: 'deceleon',
    src: 'assets/allacrost_enemy_sprites/deceleon.png',
    frames: 4,
    frameW: 1024 / 4,
    frameH: 256,
    maxHealth: 20 + 1024 / 1000
  }, {
    name: 'Demonic Essence',
    image: 'demonic_essence',
    src: 'assets/allacrost_enemy_sprites/demonic_essence.png',
    frames: 4,
    frameW: 512 / 4,
    frameH: 192,
    maxHealth: 20 + 512 / 1000
  }, {
    name: 'Dune Crawler',
    image: 'dune_crawler',
    src: 'assets/allacrost_enemy_sprites/dune_crawler.png',
    frames: 4,
    frameW: 256 / 4,
    frameH: 64,
    maxHealth: 20 + 256 / 1000
  }, {
    name: 'Green Slime',
    image: 'green_slime',
    src: 'assets/allacrost_enemy_sprites/green_slime.png',
    frames: 4,
    frameW: 256 / 4,
    frameH: 64,
    maxHealth: 20 + 256 / 1000
  }, {
    name: 'Nagaruda',
    image: 'nagaruda',
    src: 'assets/allacrost_enemy_sprites/nagaruda.png',
    frames: 4,
    frameW: 768 / 4,
    frameH: 256,
    maxHealth: 20 + 768 / 1000
  }, {
    name: 'Rat',
    image: 'rat',
    src: 'assets/allacrost_enemy_sprites/rat.png',
    frames: 4,
    frameW: 256 / 4,
    frameH: 64,
    maxHealth: 20 + 256 / 1000
  }, {
    name: 'Scorpion',
    image: 'scorpion',
    src: 'assets/allacrost_enemy_sprites/scorpion.png',
    frames: 4,
    frameW: 256 / 4,
    frameH: 64,
    maxHealth: 20 + 256 / 1000
  }, {
    name: 'Skeleton',
    image: 'skeleton',
    src: 'assets/allacrost_enemy_sprites/skeleton.png',
    frames: 4,
    frameW: 256 / 4,
    frameH: 128,
    maxHealth: 20 + 256 / 1000
  }, {
    name: 'Snake',
    image: 'snake',
    src: 'assets/allacrost_enemy_sprites/snake.png',
    frames: 4,
    frameW: 512 / 4,
    frameH: 64,
    maxHealth: 20 + 512 / 1000
  }, {
    name: 'Spider',
    image: 'spider',
    src: 'assets/allacrost_enemy_sprites/spider.png',
    frames: 4,
    frameW: 256 / 4,
    frameH: 64,
    maxHealth: 20 + 256 / 1000
  }, {
    name: 'Stygian Lizard',
    image: 'stygian_lizard',
    src: 'assets/allacrost_enemy_sprites/stygian_lizard.png',
    frames: 4,
    frameW: 768 / 4,
    frameH: 192,
    maxHealth: 20 + 768 / 1000
  }
];
var upgradesData = [
  {
    name: 'Attack',
    image: 'dagger',
    src: 'assets/496_RPG_icons/W_Dagger001.png',
    level: 1,
    cost: 5,
    dmg: 1,
    purchaseHandler: function(button, player) {
      player.clickDmg += button.details.dmg;
    }
  },
  {
    name: 'Auto-Attack',
    image: 'throw',
    src: 'assets/496_RPG_icons/W_Throw003.png',
    level: 1,
    cost: 25,
    dmg: 5,
    purchaseHandler: function(button, player) {
      player.dps += button.details.dmg;
    }
  }
];
var bgData = [
  {
    image: 'forest-back',
    src: 'assets/parallax_forest_pack/layers/parallax-forest-back-trees.png'
  }, {
    image: 'forest-lights',
    src: 'assets/parallax_forest_pack/layers/parallax-forest-lights.png'
  }, {
    image: 'forest-middle',
    src: 'assets/parallax_forest_pack/layers/parallax-forest-middle-trees.png'
  }, {
    image: 'forest-front',
    src: 'assets/parallax_forest_pack/layers/parallax-forest-front-trees.png'
  }
];
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-container');

game.state.add('play', {
  preload: function() {
    var self = this;
    // world progress
    self.level = 1;
    self.levelKills = 0;
    self.levelKillsRequired = 10;
    // build panel for upgrades
    var bmd = self.game.add.bitmapData(250, 500);
    bmd.ctx.fillStyle = '#9a783d';
    bmd.ctx.strokeStyle = '#35371c';
    bmd.ctx.lineWidth = 12;
    bmd.ctx.fillRect(0, 0, 250, 500);
    bmd.ctx.strokeRect(0, 0, 250, 500);
    self.game.cache.addBitmapData('upgradePanel', bmd);

    var buttonImage = self.game.add.bitmapData(476, 48);
    buttonImage.ctx.fillStyle = '#e6dec7';
    buttonImage.ctx.strokeStyle = '#35371c';
    buttonImage.ctx.lineWidth = 4;
    buttonImage.ctx.fillRect(0, 0, 225, 48);
    buttonImage.ctx.strokeRect(0, 0, 225, 48);
    self.game.cache.addBitmapData('button', buttonImage);
    // background images
    bgData.forEach(function(bg) {
      self.game.load.image(bg.image, bg.src);
    });
    // monster images
    monsterData.forEach(function(m) {
      if (m.frames) {
        self.game.load.spritesheet(m.image, m.src, m.frameW, m.frameH, m.frames);
      } else {
        self.game.load.image(m.image, m.src);
      }
    });
    // upgrades
    upgradesData.forEach(function(upgrade) {
      self.game.load.image(upgrade.image, upgrade.src);
    });
    // gold and loot
    self.game.load.image('gold_coin', 'assets/496_RPG_icons/I_GoldCoin.png');
  },
  create: function() {
    var self = this;
    // player
    self.player = {
      clickDmg: 1,
      dps: 0,
      gold: 0,
      crit: {
        multiplier: 1.25,
        chance: 0.05
      }
    };
    // background group
    self.background = self.game.add.group();
    bgData.forEach(function(bg) {
      var _bg = self.game.add.tileSprite(
        0, 0,
        self.game.world.width, self.game.world.height,
        bg.image, '', self.background
      );
      _bg.tileScale.setTo(4, 4);
    });
    // upgrade panel
    self.upgradePanel = self.game.add.image(
      10, 70, self.game.cache.getBitmapData('upgradePanel')
    );
    // upgrade buttons
    var upgradeButtons = self.upgradePanel.addChild(self.game.add.group());
    upgradeButtons.position.setTo(8, 8);
    upgradesData.forEach(function(upgrade, i) {
      var button = self.game.add.button(
        0, 50 * i, self.game.cache.getBitmapData('button')
      );
      button.icon = button.addChild(self.game.add.image(6, 6, upgrade.image));
      button.text = button.addChild(
        self.game.add.text(42, 6, upgrade.name + ': ' + upgrade.level, {
          font: '16px Arial Black'
        })
      );
      button.costText = button.addChild(
        self.game.add.text(42, 24, 'Cost: ' + upgrade.cost, {
          font: '16px Arial Black'
        })
      );
      button.details = upgrade;
      button.events.onInputDown.add(self.onUpgradeButtonClick, self);
      upgradeButtons.addChild(button);
    });
    // monster group
    self.monsters = self.game.add.group();
    monsterData.forEach(function(m) {
      var monster = self.monsters.create(1000, self.game.world.centerY, m.image);
      monster.anchor.setTo(0.5);
      monster.details = m;
      monster.inputEnabled = true;
      monster.health = monster.maxHealth = m.maxHealth;
      // monster events
      monster.events.onInputDown.add(self.onClickMonster, self);
      monster.events.onKilled.add(self.onKilledMonster, self);
      monster.events.onRevived.add(self.onRevivedMonster, self);
    });
    // select initial monster
    self.currentMonster = self.monsters.getRandom();
    self.currentMonster.position.set(
      self.game.world.centerX + 100,
      self.game.world.centerY
    );
    // monster info group
    self.monsterInfoUI = self.game.add.group();
    self.monsterInfoUI.position.setTo(
      self.game.world.centerX,
      self.game.world.centerY + 205
    );
    self.monsterNameText = self.monsterInfoUI.addChild(
      self.game.add.text(0, 0, self.currentMonster.details.name, {
        font: '28px Arial Black',
        fill: '#fff',
        strokeThickness: 4
      })
    );
    self.monsterHealthText = self.monsterInfoUI.addChild(
      self.game.add.text(0, 30, Math.ceil(self.currentMonster.health) + '/' + Math.ceil(self.currentMonster.maxHealth), {
        font: '24px Arial Black',
        fill: '#ff0000',
        strokeThickness: 4
      })
    );
    // damange text group
    self.dmgTextPool = self.add.group();
    for (var i = 0; i < 50; i++) {
      var dmgText = self.add.text(0, 0, '1', {
        font: '64px Arial Black',
        fill: '#fff',
        strokeThickness: 4
      });
      dmgText.exists = false;
      dmgText.tween = self.game.add.tween(dmgText).to({
        alpha: 0,
        x: self.game.rnd.integerInRange(100, 700),
        y: 100
      }, 1000, Phaser.Easing.Cubic.Out);
      dmgText.tween.onComplete.add(function(text, tween) {
        text.kill();
      });
      self.dmgTextPool.add(dmgText);
    }
    // coin group
    self.coins = self.add.group();
    self.coins.createMultiple(50, 'gold_coin', '', false);
    self.coins.setAll('inputEnabled', true);
    self.coins.setAll('goldValue', 1);
    self.coins.callAll('events.onInputOver.add', 'events.onInputOver', self.onCollectCoin, self);
    // player gold text
    self.playerGoldText = self.add.text(30, 30, 'Gold: ' + self.player.gold, {
      font: '24px Arial Black',
      fill: '#fff',
      strokeThickness: 4
    });
    // level text
    self.levelUI = self.game.add.group();
    self.levelUI.position.setTo(self.game.world.centerX, 30);
    self.levelText = self.levelUI.addChild(
      self.game.add.text(0, 0, 'Level: ' + self.level, {
        font: '24px Arial Black',
        fill: '#fff',
        strokeThickness: 4
      })
    );
    self.levelKillsText = self.levelUI.addChild(
      self.game.add.text(
        0, 30, 'Kills: ' + self.levelKills + '/' + self.levelKillsRequired, {
          font: '24px Arial Black',
          fill: '#fff',
          strokeThickness: 4
        }
      )
    );
    // dps loop
    self.dpsTimer = self.game.time.events.loop(100, self.onDPS, self);
  },
  render: function() {
    var self = this;
  },
  onClickMonster: function(monster, pointer) {
    var self = this;
    var _dmg = self.player.clickDmg;
    // naive critical damage
    if (Math.random() <= self.player.crit.chance) {
      _dmg *= self.player.crit.multiplier;
    }
    self.currentMonster.damage(_dmg);
    // update the health text
    self.monsterHealthText.text = self.currentMonster.alive ? Math.ceil(self.currentMonster.health) + '/' + Math.ceil(self.currentMonster.maxHealth) : 'DEAD';
    // grab a damage text from the pool to display what happened
    var dmgText = self.dmgTextPool.getFirstExists(false);
    if (dmgText) {
      dmgText.text = _dmg;
      dmgText.reset(pointer.positionDown.x, pointer.positionDown.y);
      dmgText.alpha = 1;
      dmgText.tween.start();
    }
  },
  onKilledMonster: function(monster) {
    var self = this;
    // move the monster off screen again
    monster.position.set(1000, this.game.world.centerY);
    // spawn a coin on the ground
    var coin = self.coins.getFirstExists(false);
    coin.reset(
      self.game.world.centerX + 100 + self.game.rnd.integerInRange(-100, 100),
      self.game.world.centerY + 150 + self.game.rnd.integerInRange(-23, 23)
    );
    coin.goldValue = Math.round( // gold = level * random(1.1, 1.5)
      self.level * (Math.random() * (1.5 - 1.1) + 1.1)
    );
    self.game.time.events.add(
      Phaser.Timer.SECOND * 1, self.onCollectCoin, self, coin
    );
    // progress
    self.levelKills++;
    if (self.levelKills >= self.levelKillsRequired) {
      self.level++;
      self.levelKills = 0;
      // update monsters maxHealth
      self.monsters.forEach(function(monster) {
        monster.maxHealth *= 1 + self.level / 7.3;
      });
    }
    self.levelText.text = 'Level: ' + self.level;
    self.levelKillsText.text = 'Kills: ' + self.levelKills + '/' + self.levelKillsRequired;
    // pick a new monster
    self.currentMonster = self.monsters.getRandom();
    // make sure they are fully healed
    self.currentMonster.revive(self.currentMonster.maxHealth);
  },
  onRevivedMonster: function(monster) {
    var self = this;
    //
    monster.position.set(
      self.game.world.centerX + 100,
      self.game.world.centerY
    );
    // update the text display
    self.monsterNameText.text = monster.details.name;
    self.monsterHealthText.text = Math.ceil(monster.health) + '/' + Math.ceil(monster.maxHealth);
  },
  onCollectCoin: function(coin) {
    if (!coin.alive) return;
    var self = this;
    // give the player gold
    self.player.gold += coin.goldValue;
    // update UI
    self.playerGoldText.text = 'Gold: ' + self.player.gold;
    // remove the coin
    coin.kill();
  },
  onUpgradeButtonClick: function(button, pointer) {
    var self = this;
    if (self.player.gold - button.details.cost >= 0) {
      self.player.gold -= button.details.cost;
      self.playerGoldText.text = 'Gold: ' + self.player.gold;
      button.details.level++;
      // adjustget cost based on level
      button.details.cost = Math.ceil(
        button.details.cost + button.details.level * 1.46
      );
      button.text.text = button.details.name + ': ' + button.details.level;
      button.costText.text = 'Cost: ' + button.details.cost;
      button.details.purchaseHandler.call(self, button, self.player);
    }
  },
  onDPS: function() {
    var self = this;

    if (self.player.dps > 0) {
      if (self.currentMonster && self.currentMonster.alive) {
        var _dmg = self.player.dps / 10;
        // auto-attack has 50% of a chance than click to trigger crit
        if (Math.random() <= (self.player.crit.chance / 2)) {
          _dmg *= self.player.crit.multiplier;
        }
        self.currentMonster.damage(_dmg);
        self.monsterHealthText.text = self.currentMonster.alive ? Math.ceil(self.currentMonster.health) + '/' + Math.ceil(self.currentMonster.maxHealth) : 'DEAD';
      }
    }
  }
});

game.state.start('play');
