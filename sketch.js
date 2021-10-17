/*

The Game Project 5 - Bring it all together

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var moon;
var sun;
var darkness;
var clouds;
var mountains;
var trees_x;


function setup()
{
  createCanvas(1024, 576);
  floorPos_y = (height * 3) / 4;
  gameChar_x = width / 3;
  gameChar_y = floorPos_y;

  //initalise the sun
  sun = {
    x: 150,
    y: 200,
    diameter: 80
  };

  //TASK: intialise a moon object with an extra property for brightness
  //initalise the sun
  moon = {
    x: 750,
    y: 70,
    diameter: 80
  };

  //set the initial darkness
  darkness = 0;

  // Variable to control the background scrolling.
  scrollPos = 0;

  // Variable to store the real position of the gameChar in the game
  // world. Needed for collision detection.
  gameChar_world_x = gameChar_x - scrollPos;

  // Boolean variables to control the movement of the game character.
  isLeft = false;
  isRight = false;
  isFalling = false;
  isPlummeting = false;

  // Initialise arrays of scenery objects.

  trees_x = [
    -1950,
    -1850,
    -1750,
    -1400,
    -1300,
    -800,
    50,
    600,
    900,
    1300,
    1700,
    2100,
    3800,
    3850,
    3950,
    4100,
    4190,
    4290,
    4290,
    4390,
    4390
  ];
  treePos_x = width / 2;
  treePos_y = height / 2;

  //COLLECTABLE
  collectables = [
    //Spawn point
    { x_pos_burningRing1: 580, y_pos_burningRing1: 295, isFound: false },
    { x_pos_burningRing2: 550, y_pos_burningRing2: 310, isFound: false },
    { x_pos_burningRing3: 610, y_pos_burningRing3: 310, isFound: false },

    {
      x_pos_crownOfEternalPyre1: 580,
      y_pos_crownOfEternalPyre1: 295,
      isFound: false
    },
    {
      x_pos_crownOfEternalPyre2: 550,
      y_pos_crownOfEternalPyre2: 310,
      isFound: false
    },
    {
      x_pos_crownOfEternalPyre3: 610,
      y_pos_crownOfEternalPyre3: 310,
      isFound: false
    },

    {
      x_pos_auraOfLatentFlame: 580,
      y_pos_auraOfLatentFlame: 375,
      isFound: false
    },

    { x_pos_JulTerra: 580, y_pos_JulTerra: 375, isFound: false },
    { x_pos_eyesOfSong1: 565, y_pos_eyesOfSong1: 370, isFound: false },
    { x_pos_eyesOfSong2: 595, y_pos_eyesOfSong2: 370, isFound: false },
    { x_pos_eyesOfSong3: 580, y_pos_eyesOfSong3: 354, isFound: false },

    { x_pos_embodyTheVoid1: 565, y_pos_embodyTheVoid1: 370, isFound: false },
    { x_pos_embodyTheVoid2: 595, y_pos_embodyTheVoid2: 370, isFound: false },
    { x_pos_embodyTheVoid3: 580, y_pos_embodyTheVoid3: 354, isFound: false },

    {
      x_pos_aFoolAndTheirSoul1: 565,
      y_pos_aFoolAndTheirSoul1: 383,
      isFound: false
    },
    {
      x_pos_aFoolAndTheirSoul2: 595,
      y_pos_aFoolAndTheirSoul2: 383,
      isFound: false
    },
    {
      x_pos_aFoolAndTheirSoul3: 580,
      y_pos_aFoolAndTheirSoul3: 367,
      isFound: false
    },

    { x_pos_veilOfDivinity: 540, y_pos_veilOfDivinity: 341, isFound: false },

    { x_pos_crownsGaze1: 580, y_pos_crownsGaze1: 295, isFound: false },
    { x_pos_crownsGaze2: 550, y_pos_crownsGaze2: 310, isFound: false },
    { x_pos_crownsGaze3: 610, y_pos_crownsGaze3: 310, isFound: false },

    {
      x_pos_theWatchersReturn1: 580,
      y_pos_theWatchersReturn1: 295,
      isFound: false
    },
    {
      x_pos_theWatchersReturn2: 550,
      y_pos_theWatchersReturn2: 310,
      isFound: false
    },
    {
      x_pos_theWatchersReturn3: 610,
      y_pos_theWatchersReturn3: 310,
      isFound: false
    },

    //Jagged peaks of Mount Vel'tor
    { x_pos_burningRing1: -480, y_pos_burningRing1: 295, isFound: false },
    { x_pos_burningRing2: -450, y_pos_burningRing2: 310, isFound: false },
    { x_pos_burningRing3: -510, y_pos_burningRing3: 310, isFound: false },

    {
      x_pos_crownOfEternalPyre1: -480,
      y_pos_crownOfEternalPyre1: 295,
      isFound: false
    },
    {
      x_pos_crownOfEternalPyre2: -450,
      y_pos_crownOfEternalPyre2: 310,
      isFound: false
    },
    {
      x_pos_crownOfEternalPyre3: -510,
      y_pos_crownOfEternalPyre3: 310,
      isFound: false
    },

    {
      x_pos_auraOfLatentFlame: -480,
      y_pos_auraOfLatentFlame: 375,
      isFound: false
    },

    { x_pos_JulTerra: -480, y_pos_JulTerra: 375, isFound: false },
    { x_pos_eyesOfSong1: -465, y_pos_eyesOfSong1: 370, isFound: false },
    { x_pos_eyesOfSong2: -495, y_pos_eyesOfSong2: 370, isFound: false },
    { x_pos_eyesOfSong3: -480, y_pos_eyesOfSong3: 354, isFound: false },

    { x_pos_embodyTheVoid1: -465, y_pos_embodyTheVoid1: 370, isFound: false },
    { x_pos_embodyTheVoid2: -495, y_pos_embodyTheVoid2: 370, isFound: false },
    { x_pos_embodyTheVoid3: -480, y_pos_embodyTheVoid3: 354, isFound: false },

    {
      x_pos_aFoolAndTheirSoul1: -465,
      y_pos_aFoolAndTheirSoul1: 383,
      isFound: false
    },
    {
      x_pos_aFoolAndTheirSoul2: -495,
      y_pos_aFoolAndTheirSoul2: 383,
      isFound: false
    },
    {
      x_pos_aFoolAndTheirSoul3: -480,
      y_pos_aFoolAndTheirSoul3: 367,
      isFound: false
    },

    { x_pos_veilOfDivinity: -520, y_pos_veilOfDivinity: 341, isFound: false },

    { x_pos_crownsGaze1: -480, y_pos_crownsGaze1: 295, isFound: false },
    { x_pos_crownsGaze2: -450, y_pos_crownsGaze2: 310, isFound: false },
    { x_pos_crownsGaze3: -510, y_pos_crownsGaze3: 310, isFound: false },

    {
      x_pos_theWatchersReturn1: -480,
      y_pos_theWatchersReturn1: 295,
      isFound: false
    },
    {
      x_pos_theWatchersReturn2: -450,
      y_pos_theWatchersReturn2: 310,
      isFound: false
    },
    {
      x_pos_theWatchersReturn3: -510,
      y_pos_theWatchersReturn3: 310,
      isFound: false
    },

    //Shroud of the Black Mist
    { x_pos_burningRing1: -1280, y_pos_burningRing1: 295, isFound: false },
    { x_pos_burningRing2: -1250, y_pos_burningRing2: 310, isFound: false },
    { x_pos_burningRing3: -1310, y_pos_burningRing3: 310, isFound: false },

    {
      x_pos_crownOfEternalPyre1: -1280,
      y_pos_crownOfEternalPyre1: 295,
      isFound: false
    },
    {
      x_pos_crownOfEternalPyre2: -1250,
      y_pos_crownOfEternalPyre2: 310,
      isFound: false
    },
    {
      x_pos_crownOfEternalPyre3: -1310,
      y_pos_crownOfEternalPyre3: 310,
      isFound: false
    },

    {
      x_pos_auraOfLatentFlame: -1280,
      y_pos_auraOfLatentFlame: 375,
      isFound: false
    },

    { x_pos_JulTerra: -1280, y_pos_JulTerra: 375, isFound: false },
    { x_pos_eyesOfSong1: -1265, y_pos_eyesOfSong1: 370, isFound: false },
    { x_pos_eyesOfSong2: -1295, y_pos_eyesOfSong2: 370, isFound: false },
    { x_pos_eyesOfSong3: -1280, y_pos_eyesOfSong3: 354, isFound: false },

    { x_pos_embodyTheVoid1: -1265, y_pos_embodyTheVoid1: 370, isFound: false },
    { x_pos_embodyTheVoid2: -1295, y_pos_embodyTheVoid2: 370, isFound: false },
    { x_pos_embodyTheVoid3: -1280, y_pos_embodyTheVoid3: 354, isFound: false },

    {
      x_pos_aFoolAndTheirSoul1: -1265,
      y_pos_aFoolAndTheirSoul1: 383,
      isFound: false
    },
    {
      x_pos_aFoolAndTheirSoul2: -1295,
      y_pos_aFoolAndTheirSoul2: 383,
      isFound: false
    },
    {
      x_pos_aFoolAndTheirSoul3: -1280,
      y_pos_aFoolAndTheirSoul3: 367,
      isFound: false
    },

    { x_pos_veilOfDivinity: -1320, y_pos_veilOfDivinity: 341, isFound: false },

    { x_pos_crownsGaze1: -1280, y_pos_crownsGaze1: 295, isFound: false },
    { x_pos_crownsGaze2: -1250, y_pos_crownsGaze2: 310, isFound: false },
    { x_pos_crownsGaze3: -1310, y_pos_crownsGaze3: 310, isFound: false },

    {
      x_pos_theWatchersReturn1: -1280,
      y_pos_theWatchersReturn1: 295,
      isFound: false
    },
    {
      x_pos_theWatchersReturn2: -1250,
      y_pos_theWatchersReturn2: 310,
      isFound: false
    },
    {
      x_pos_theWatchersReturn3: -1310,
      y_pos_theWatchersReturn3: 310,
      isFound: false
    },

    //Grove of Horrors
    { x_pos_burningRing1: -1780, y_pos_burningRing1: 295, isFound: false },
    { x_pos_burningRing2: -1750, y_pos_burningRing2: 310, isFound: false },
    { x_pos_burningRing3: -1810, y_pos_burningRing3: 310, isFound: false },

    {
      x_pos_crownOfEternalPyre1: -1780,
      y_pos_crownOfEternalPyre1: 295,
      isFound: false
    },
    {
      x_pos_crownOfEternalPyre2: -1750,
      y_pos_crownOfEternalPyre2: 310,
      isFound: false
    },
    {
      x_pos_crownOfEternalPyre3: -1810,
      y_pos_crownOfEternalPyre3: 310,
      isFound: false
    },

    {
      x_pos_auraOfLatentFlame: -1780,
      y_pos_auraOfLatentFlame: 375,
      isFound: false
    },

    { x_pos_JulTerra: -1780, y_pos_JulTerra: 375, isFound: false },
    { x_pos_eyesOfSong1: -1765, y_pos_eyesOfSong1: 370, isFound: false },
    { x_pos_eyesOfSong2: -1795, y_pos_eyesOfSong2: 370, isFound: false },
    { x_pos_eyesOfSong3: -1780, y_pos_eyesOfSong3: 354, isFound: false },

    { x_pos_embodyTheVoid1: -1765, y_pos_embodyTheVoid1: 370, isFound: false },
    { x_pos_embodyTheVoid2: -1795, y_pos_embodyTheVoid2: 370, isFound: false },
    { x_pos_embodyTheVoid3: -1780, y_pos_embodyTheVoid3: 354, isFound: false },

    {
      x_pos_aFoolAndTheirSoul1: -1765,
      y_pos_aFoolAndTheirSoul1: 383,
      isFound: false
    },
    {
      x_pos_aFoolAndTheirSoul2: -1795,
      y_pos_aFoolAndTheirSoul2: 383,
      isFound: false
    },
    {
      x_pos_aFoolAndTheirSoul3: -1780,
      y_pos_aFoolAndTheirSoul3: 367,
      isFound: false
    },

    { x_pos_veilOfDivinity: -1820, y_pos_veilOfDivinity: 341, isFound: false },

    { x_pos_crownsGaze1: -1780, y_pos_crownsGaze1: 295, isFound: false },
    { x_pos_crownsGaze2: -1750, y_pos_crownsGaze2: 310, isFound: false },
    { x_pos_crownsGaze3: -1810, y_pos_crownsGaze3: 310, isFound: false },

    {
      x_pos_theWatchersReturn1: -1780,
      y_pos_theWatchersReturn1: 295,
      isFound: false
    },
    {
      x_pos_theWatchersReturn2: -1750,
      y_pos_theWatchersReturn2: 310,
      isFound: false
    },
    {
      x_pos_theWatchersReturn3: -1810,
      y_pos_theWatchersReturn3: 310,
      isFound: false
    },

    //The Steps of Fate - Begginning

    { x_pos_burningRing1: 1380, y_pos_burningRing1: 295, isFound: false },
    { x_pos_burningRing2: 1350, y_pos_burningRing2: 310, isFound: false },
    { x_pos_burningRing3: 1410, y_pos_burningRing3: 310, isFound: false },

    {
      x_pos_crownOfEternalPyre1: 1380,
      y_pos_crownOfEternalPyre1: 295,
      isFound: false
    },
    {
      x_pos_crownOfEternalPyre2: 1350,
      y_pos_crownOfEternalPyre2: 310,
      isFound: false
    },
    {
      x_pos_crownOfEternalPyre3: 1410,
      y_pos_crownOfEternalPyre3: 310,
      isFound: false
    },

    {
      x_pos_auraOfLatentFlame: 1380,
      y_pos_auraOfLatentFlame: 375,
      isFound: false
    },

    { x_pos_JulTerra: 1380, y_pos_JulTerra: 375, isFound: false },
    { x_pos_eyesOfSong1: 1365, y_pos_eyesOfSong1: 370, isFound: false },
    { x_pos_eyesOfSong2: 1395, y_pos_eyesOfSong2: 370, isFound: false },
    { x_pos_eyesOfSong3: 1380, y_pos_eyesOfSong3: 354, isFound: false },

    { x_pos_embodyTheVoid1: 1365, y_pos_embodyTheVoid1: 370, isFound: false },
    { x_pos_embodyTheVoid2: 1395, y_pos_embodyTheVoid2: 370, isFound: false },
    { x_pos_embodyTheVoid3: 1380, y_pos_embodyTheVoid3: 354, isFound: false },

    {
      x_pos_aFoolAndTheirSoul1: 1365,
      y_pos_aFoolAndTheirSoul1: 383,
      isFound: false
    },
    {
      x_pos_aFoolAndTheirSoul2: 1395,
      y_pos_aFoolAndTheirSoul2: 383,
      isFound: false
    },
    {
      x_pos_aFoolAndTheirSoul3: 1380,
      y_pos_aFoolAndTheirSoul3: 367,
      isFound: false
    },

    { x_pos_veilOfDivinity: 1340, y_pos_veilOfDivinity: 341, isFound: false },

    { x_pos_crownsGaze1: 1380, y_pos_crownsGaze1: 295, isFound: false },
    { x_pos_crownsGaze2: 1350, y_pos_crownsGaze2: 310, isFound: false },
    { x_pos_crownsGaze3: 1410, y_pos_crownsGaze3: 310, isFound: false },

    {
      x_pos_theWatchersReturn1: 1380,
      y_pos_theWatchersReturn1: 295,
      isFound: false
    },
    {
      x_pos_theWatchersReturn2: 1350,
      y_pos_theWatchersReturn2: 310,
      isFound: false
    },
    {
      x_pos_theWatchersReturn3: 1410,
      y_pos_theWatchersReturn3: 310,
      isFound: false
    },

    //The Steps of Fate - First Step

    { x_pos_burningRing1: 1680, y_pos_burningRing1: 295, isFound: false },
    { x_pos_burningRing2: 1650, y_pos_burningRing2: 310, isFound: false },
    { x_pos_burningRing3: 1710, y_pos_burningRing3: 310, isFound: false },

    {
      x_pos_crownOfEternalPyre1: 1680,
      y_pos_crownOfEternalPyre1: 295,
      isFound: false
    },
    {
      x_pos_crownOfEternalPyre2: 1650,
      y_pos_crownOfEternalPyre2: 310,
      isFound: false
    },
    {
      x_pos_crownOfEternalPyre3: 1710,
      y_pos_crownOfEternalPyre3: 310,
      isFound: false
    },

    {
      x_pos_auraOfLatentFlame: 1680,
      y_pos_auraOfLatentFlame: 375,
      isFound: false
    },

    { x_pos_JulTerra: 1680, y_pos_JulTerra: 375, isFound: false },
    { x_pos_eyesOfSong1: 1665, y_pos_eyesOfSong1: 370, isFound: false },
    { x_pos_eyesOfSong2: 1695, y_pos_eyesOfSong2: 370, isFound: false },
    { x_pos_eyesOfSong3: 1680, y_pos_eyesOfSong3: 354, isFound: false },

    { x_pos_embodyTheVoid1: 1665, y_pos_embodyTheVoid1: 370, isFound: false },
    { x_pos_embodyTheVoid2: 1695, y_pos_embodyTheVoid2: 370, isFound: false },
    { x_pos_embodyTheVoid3: 1680, y_pos_embodyTheVoid3: 354, isFound: false },

    {
      x_pos_aFoolAndTheirSoul1: 1665,
      y_pos_aFoolAndTheirSoul1: 383,
      isFound: false
    },
    {
      x_pos_aFoolAndTheirSoul2: 1695,
      y_pos_aFoolAndTheirSoul2: 383,
      isFound: false
    },
    {
      x_pos_aFoolAndTheirSoul3: 1680,
      y_pos_aFoolAndTheirSoul3: 367,
      isFound: false
    },

    { x_pos_veilOfDivinity: 1640, y_pos_veilOfDivinity: 341, isFound: false },

    { x_pos_crownsGaze1: 1680, y_pos_crownsGaze1: 295, isFound: false },
    { x_pos_crownsGaze2: 1650, y_pos_crownsGaze2: 310, isFound: false },
    { x_pos_crownsGaze3: 1710, y_pos_crownsGaze3: 310, isFound: false },

    {
      x_pos_theWatchersReturn1: 1680,
      y_pos_theWatchersReturn1: 295,
      isFound: false
    },
    {
      x_pos_theWatchersReturn2: 1650,
      y_pos_theWatchersReturn2: 310,
      isFound: false
    },
    {
      x_pos_theWatchersReturn3: 1710,
      y_pos_theWatchersReturn3: 310,
      isFound: false
    },

    //The Steps of Fate - Divinitys Reach
    { x_pos_burningRing1: 2480, y_pos_burningRing1: 295, isFound: false },
    { x_pos_burningRing2: 2450, y_pos_burningRing2: 310, isFound: false },
    { x_pos_burningRing3: 2510, y_pos_burningRing3: 310, isFound: false },

    {
      x_pos_crownOfEternalPyre1: 2480,
      y_pos_crownOfEternalPyre1: 295,
      isFound: false
    },
    {
      x_pos_crownOfEternalPyre2: 2450,
      y_pos_crownOfEternalPyre2: 310,
      isFound: false
    },
    {
      x_pos_crownOfEternalPyre3: 2510,
      y_pos_crownOfEternalPyre3: 310,
      isFound: false
    },

    {
      x_pos_auraOfLatentFlame: 2480,
      y_pos_auraOfLatentFlame: 375,
      isFound: false
    },

    { x_pos_JulTerra: 2480, y_pos_JulTerra: 375, isFound: false },
    { x_pos_eyesOfSong1: 2465, y_pos_eyesOfSong1: 370, isFound: false },
    { x_pos_eyesOfSong2: 2495, y_pos_eyesOfSong2: 370, isFound: false },
    { x_pos_eyesOfSong3: 2480, y_pos_eyesOfSong3: 354, isFound: false },

    { x_pos_embodyTheVoid1: 2465, y_pos_embodyTheVoid1: 370, isFound: false },
    { x_pos_embodyTheVoid2: 2495, y_pos_embodyTheVoid2: 370, isFound: false },
    { x_pos_embodyTheVoid3: 2480, y_pos_embodyTheVoid3: 354, isFound: false },

    {
      x_pos_aFoolAndTheirSoul1: 2465,
      y_pos_aFoolAndTheirSoul1: 383,
      isFound: false
    },
    {
      x_pos_aFoolAndTheirSoul2: 2495,
      y_pos_aFoolAndTheirSoul2: 383,
      isFound: false
    },
    {
      x_pos_aFoolAndTheirSoul3: 2480,
      y_pos_aFoolAndTheirSoul3: 367,
      isFound: false
    },

    { x_pos_veilOfDivinity: 2440, y_pos_veilOfDivinity: 341, isFound: false },

    { x_pos_crownsGaze1: 2480, y_pos_crownsGaze1: 295, isFound: false },
    { x_pos_crownsGaze2: 2450, y_pos_crownsGaze2: 310, isFound: false },
    { x_pos_crownsGaze3: 2510, y_pos_crownsGaze3: 310, isFound: false },

    {
      x_pos_theWatchersReturn1: 2480,
      y_pos_theWatchersReturn1: 295,
      isFound: false
    },
    {
      x_pos_theWatchersReturn2: 2450,
      y_pos_theWatchersReturn2: 310,
      isFound: false
    },
    {
      x_pos_theWatchersReturn3: 2510,
      y_pos_theWatchersReturn3: 310,
      isFound: false
    },

    //Never one, without the other..., isFound: false },
    { x_pos_burningRing2: 2550, y_pos_burningRing2: 310, isFound: false },
    { x_pos_burningRing3: 2610, y_pos_burningRing3: 310, isFound: false },

    {
      x_pos_crownOfEternalPyre1: 2580,
      y_pos_crownOfEternalPyre1: 295,
      isFound: false
    },
    {
      x_pos_crownOfEternalPyre2: 2550,
      y_pos_crownOfEternalPyre2: 310,
      isFound: false
    },
    {
      x_pos_crownOfEternalPyre3: 2610,
      y_pos_crownOfEternalPyre3: 310,
      isFound: false
    },

    {
      x_pos_auraOfLatentFlame: 2580,
      y_pos_auraOfLatentFlame: 375,
      isFound: false
    },

    { x_pos_JulTerra: 2580, y_pos_JulTerra: 375, isFound: false },
    { x_pos_eyesOfSong1: 2565, y_pos_eyesOfSong1: 370, isFound: false },
    { x_pos_eyesOfSong2: 2595, y_pos_eyesOfSong2: 370, isFound: false },
    { x_pos_eyesOfSong3: 2580, y_pos_eyesOfSong3: 354, isFound: false },

    { x_pos_embodyTheVoid1: 2565, y_pos_embodyTheVoid1: 370, isFound: false },
    { x_pos_embodyTheVoid2: 2595, y_pos_embodyTheVoid2: 370, isFound: false },
    { x_pos_embodyTheVoid3: 2580, y_pos_embodyTheVoid3: 354, isFound: false },

    {
      x_pos_aFoolAndTheirSoul1: 2565,
      y_pos_aFoolAndTheirSoul1: 383,
      isFound: false
    },
    {
      x_pos_aFoolAndTheirSoul2: 2595,
      y_pos_aFoolAndTheirSoul2: 383,
      isFound: false
    },
    {
      x_pos_aFoolAndTheirSoul3: 2580,
      y_pos_aFoolAndTheirSoul3: 367,
      isFound: false
    },

    { x_pos_veilOfDivinity: 2540, y_pos_veilOfDivinity: 341, isFound: false },

    { x_pos_crownsGaze1: 2580, y_pos_crownsGaze1: 295, isFound: false },
    { x_pos_crownsGaze2: 2550, y_pos_crownsGaze2: 310, isFound: false },
    { x_pos_crownsGaze3: 2610, y_pos_crownsGaze3: 310, isFound: false },

    {
      x_pos_theWatchersReturn1: 2580,
      y_pos_theWatchersReturn1: 295,
      isFound: false
    },
    {
      x_pos_theWatchersReturn2: 2550,
      y_pos_theWatchersReturn2: 310,
      isFound: false
    },
    {
      x_pos_theWatchersReturn3: 2610,
      y_pos_theWatchersReturn3: 310,
      isFound: false
    },

    //Fissure of the Black Moon - Ascension
    { x_pos_burningRing1: 3180, y_pos_burningRing1: 295, isFound: false },
    { x_pos_burningRing2: 3150, y_pos_burningRing2: 310, isFound: false },
    { x_pos_burningRing3: 3210, y_pos_burningRing3: 310, isFound: false },

    {
      x_pos_crownOfEternalPyre1: 3180,
      y_pos_crownOfEternalPyre1: 295,
      isFound: false
    },
    {
      x_pos_crownOfEternalPyre2: 3150,
      y_pos_crownOfEternalPyre2: 310,
      isFound: false
    },
    {
      x_pos_crownOfEternalPyre3: 3210,
      y_pos_crownOfEternalPyre3: 310,
      isFound: false
    },

    {
      x_pos_auraOfLatentFlame: 3180,
      y_pos_auraOfLatentFlame: 375,
      isFound: false
    },

    { x_pos_JulTerra: 3180, y_pos_JulTerra: 375, isFound: false },
    { x_pos_eyesOfSong1: 3165, y_pos_eyesOfSong1: 370, isFound: false },
    { x_pos_eyesOfSong2: 3195, y_pos_eyesOfSong2: 370, isFound: false },
    { x_pos_eyesOfSong3: 3180, y_pos_eyesOfSong3: 354, isFound: false },

    { x_pos_embodyTheVoid1: 3165, y_pos_embodyTheVoid1: 370, isFound: false },
    { x_pos_embodyTheVoid2: 3195, y_pos_embodyTheVoid2: 370, isFound: false },
    { x_pos_embodyTheVoid3: 3180, y_pos_embodyTheVoid3: 354, isFound: false },

    {
      x_pos_aFoolAndTheirSoul1: 3165,
      y_pos_aFoolAndTheirSoul1: 383,
      isFound: false
    },
    {
      x_pos_aFoolAndTheirSoul2: 3195,
      y_pos_aFoolAndTheirSoul2: 383,
      isFound: false
    },
    {
      x_pos_aFoolAndTheirSoul3: 3180,
      y_pos_aFoolAndTheirSoul3: 367,
      isFound: false
    },

    { x_pos_veilOfDivinity: 3140, y_pos_veilOfDivinity: 341, isFound: false },

    { x_pos_crownsGaze1: 3180, y_pos_crownsGaze1: 295, isFound: false },
    { x_pos_crownsGaze2: 3150, y_pos_crownsGaze2: 310, isFound: false },
    { x_pos_crownsGaze3: 3210, y_pos_crownsGaze3: 310, isFound: false },

    {
      x_pos_theWatchersReturn1: 3180,
      y_pos_theWatchersReturn1: 295,
      isFound: false
    },
    {
      x_pos_theWatchersReturn2: 3150,
      y_pos_theWatchersReturn2: 310,
      isFound: false
    },
    {
      x_pos_theWatchersReturn3: 3210,
      y_pos_theWatchersReturn3: 310,
      isFound: false
    },

    //He took an axe and split himself, right down the middle...
    { x_pos_burningRing1: 3480, y_pos_burningRing1: 295, isFound: false },
    { x_pos_burningRing2: 3450, y_pos_burningRing2: 310, isFound: false },
    { x_pos_burningRing3: 3510, y_pos_burningRing3: 310, isFound: false },

    {
      x_pos_crownOfEternalPyre1: 3480,
      y_pos_crownOfEternalPyre1: 295,
      isFound: false
    },
    {
      x_pos_crownOfEternalPyre2: 3450,
      y_pos_crownOfEternalPyre2: 310,
      isFound: false
    },
    {
      x_pos_crownOfEternalPyre3: 3510,
      y_pos_crownOfEternalPyre3: 310,
      isFound: false
    },

    {
      x_pos_auraOfLatentFlame: 3480,
      y_pos_auraOfLatentFlame: 375,
      isFound: false
    },

    { x_pos_JulTerra: 3480, y_pos_JulTerra: 375, isFound: false },
    { x_pos_eyesOfSong1: 3465, y_pos_eyesOfSong1: 370, isFound: false },
    { x_pos_eyesOfSong2: 3495, y_pos_eyesOfSong2: 370, isFound: false },
    { x_pos_eyesOfSong3: 3480, y_pos_eyesOfSong3: 354, isFound: false },

    { x_pos_embodyTheVoid1: 3465, y_pos_embodyTheVoid1: 370, isFound: false },
    { x_pos_embodyTheVoid2: 3495, y_pos_embodyTheVoid2: 370, isFound: false },
    { x_pos_embodyTheVoid3: 3480, y_pos_embodyTheVoid3: 354, isFound: false },

    {
      x_pos_aFoolAndTheirSoul1: 3465,
      y_pos_aFoolAndTheirSoul1: 383,
      isFound: false
    },
    {
      x_pos_aFoolAndTheirSoul2: 3495,
      y_pos_aFoolAndTheirSoul2: 383,
      isFound: false
    },
    {
      x_pos_aFoolAndTheirSoul3: 3480,
      y_pos_aFoolAndTheirSoul3: 367,
      isFound: false
    },

    { x_pos_veilOfDivinity: 3440, y_pos_veilOfDivinity: 341, isFound: false },

    { x_pos_crownsGaze1: 3480, y_pos_crownsGaze1: 295, isFound: false },
    { x_pos_crownsGaze2: 3450, y_pos_crownsGaze2: 310, isFound: false },
    { x_pos_crownsGaze3: 3510, y_pos_crownsGaze3: 310, isFound: false },

    {
      x_pos_theWatchersReturn1: 3480,
      y_pos_theWatchersReturn1: 295,
      isFound: false
    },
    {
      x_pos_theWatchersReturn2: 3450,
      y_pos_theWatchersReturn2: 310,
      isFound: false
    },
    {
      x_pos_theWatchersReturn3: 3510,
      y_pos_theWatchersReturn3: 310,
      isFound: false
    }
  ];

  //CLOUDS
  revenantCloud = [
    { revPos_x: 450, revPos_y: 150 },
    { revPos_x: 500, revPos_y: 130 },
    { revPos_x: 550, revPos_y: 150 },
    { revPos_x: 1450, revPos_y: 135 },
    { revPos_x: 1350, revPos_y: 135 },
    { revPos_x: 1950, revPos_y: 135 },
    { revPos_x: 3050, revPos_y: 150 },
    { revPos_x: 3500, revPos_y: 130 },
    { revPos_x: 3550, revPos_y: 150 },
    { revPos_x: -450, revPos_y: 150 },
    { revPos_x: -500, revPos_y: 130 },
    { revPos_x: -550, revPos_y: 140 },
    { revPos_x: -1450, revPos_y: 135 },
    { revPos_x: -1350, revPos_y: 115 },
    { revPos_x: -1950, revPos_y: 125 },
    { revPos_x: -3050, revPos_y: 150 },
    { revPos_x: -3500, revPos_y: 130 },
    { revPos_x: -3550, revPos_y: 100 }
  ];

  revenantCloudBelow = [
    { revPos_x: 400, revPos_y: 180 },
    { revPos_x: 420, revPos_y: 190 },
    { revPos_x: 400, revPos_y: 200 },
    { revPos_x: 1900, revPos_y: 180 },
    { revPos_x: 3400, revPos_y: 180 },
    { revPos_x: 3420, revPos_y: 190 },
    { revPos_x: 3400, revPos_y: 200 },
    { revPos_x: -400, revPos_y: 180 },
    { revPos_x: -420, revPos_y: 190 },
    { revPos_x: -400, revPos_y: 200 }
  ];

  revenantFurthestReaches = [
    { revPos_x: 800, revPos_y: 80 },
    { revPos_x: 820, revPos_y: 80 },
    { revPos_x: 800, revPos_y: 100 },
    { revPos_x: 1400, revPos_y: 80 },
    { revPos_x: 1420, revPos_y: 90 },
    { revPos_x: 1400, revPos_y: 100 },
    { revPos_x: 3700, revPos_y: 80 },
    { revPos_x: 3720, revPos_y: 90 },
    { revPos_x: 3700, revPos_y: 100 },
    { revPos_x: -800, revPos_y: 80 },
    { revPos_x: -820, revPos_y: 80 },
    { revPos_x: -800, revPos_y: 100 }
  ];

  revenantCloudFragment1 = [{ revPos_x: 450, revPos_y: 150 }];
  revenantCloudFragment2 = [{ revPos_x: 500, revPos_y: 130 }];
  revenantCloudFragment3 = [{ revPos_x: 550, revPos_y: 150 }];

  //MOUNTAINS
  mountain1 = {
    x: 345,
    y: floorPos_y,
    height: 320,
    width: 230
  };
  mountain2 = {
    x: 285,
    y: floorPos_y,
    height: 200,
    width: 130
  };

  mountains = [
    { pos_x: 345, pos_y: floorPos_y },
    { pos_x: 285, pos_y: floorPos_y },
    { pos_x: -185, pos_y: floorPos_y },
    { pos_x: -245, pos_y: floorPos_y },
    { pos_x: -285, pos_y: floorPos_y },
    { pos_x: -345, pos_y: floorPos_y },
    { pos_x: -385, pos_y: floorPos_y },
    { pos_x: -345, pos_y: floorPos_y },
    { pos_x: -385, pos_y: floorPos_y },
    { pos_x: -445, pos_y: floorPos_y },
    { pos_x: -485, pos_y: floorPos_y },
    { pos_x: -545, pos_y: floorPos_y },
    { pos_x: 2800, pos_y: floorPos_y },
    { pos_x: 2845, pos_y: floorPos_y },
    { pos_x: 2900, pos_y: floorPos_y },
    { pos_x: 2945, pos_y: floorPos_y },
    { pos_x: 3450, pos_y: floorPos_y },
    { pos_x: 3510, pos_y: floorPos_y },
    { pos_x: 3570, pos_y: floorPos_y },
    { pos_x: -1140, pos_y: floorPos_y },
    { pos_x: -1200, pos_y: floorPos_y },
    { pos_x: -1610, pos_y: floorPos_y },
    { pos_x: -1670, pos_y: floorPos_y }
  ];

  //CANYON
  canyon = [
    { x_pos: 125, lightTouchedMouth: 130 },
    { x_pos: 725, lightTouchedMouth: 130 },
    { x_pos: -700, lightTouchedMouth: 130 },
    { x_pos: 1080, lightTouchedMouth: 130 },
    { x_pos: 1480, lightTouchedMouth: 130 },
    { x_pos: 1880, lightTouchedMouth: 130 },
    { x_pos: 2280, lightTouchedMouth: 130 },
    { x_pos: 3800, lightTouchedMouth: 130 },
    { x_pos: 3900, lightTouchedMouth: 130 },
    { x_pos: 4000, lightTouchedMouth: 130 },
    { x_pos: -910, lightTouchedMouth: 130 }
  ];

  //SNOW
  snowfall = [
    { x_pos: -220, y_pos: floorPos_y, coverage: 700 },
    { x_pos: -740, y_pos: floorPos_y, coverage: 88 },
    { x_pos: -2905, y_pos: floorPos_y, coverage: 4000 },

    { x_pos: 490, y_pos: floorPos_y, coverage: 480 },
    { x_pos: 967, y_pos: floorPos_y, coverage: 230 },
    { x_pos: 1343, y_pos: floorPos_y, coverage: 282 },
    { x_pos: 1745, y_pos: floorPos_y, coverage: 278 },
    { x_pos: 2145, y_pos: floorPos_y, coverage: 278 },
    { x_pos: 3101, y_pos: floorPos_y, coverage: 1398 },
    { x_pos: 5630, y_pos: floorPos_y, coverage: 3000 }
  ];

  //Stones of Earth and Moon
  stoneOfAbyss = [
    //Stone of tainted Earth - spawn

    { x_pos: 505, y_pos: 387 },
    { x_pos: 514, y_pos: 432 },
    { x_pos: 550, y_pos: 455 },
    { x_pos: 590, y_pos: 455 },
    { x_pos: 625, y_pos: 430 },
    { x_pos: 637, y_pos: 390 },
    { x_pos: 625, y_pos: 350 },
    { x_pos: 515, y_pos: 350 },

    //Stone of tainted Earth - Steps beginning

    { x_pos: 1305, y_pos: 387 },
    { x_pos: 1314, y_pos: 432 },
    { x_pos: 1350, y_pos: 455 },
    { x_pos: 1390, y_pos: 455 },
    { x_pos: 1425, y_pos: 430 },
    { x_pos: 1437, y_pos: 390 },
    { x_pos: 1425, y_pos: 350 },
    { x_pos: 1315, y_pos: 350 },

    //Stone of tainted Earth - First Steps

    { x_pos: 1605, y_pos: 387 },
    { x_pos: 1614, y_pos: 432 },
    { x_pos: 1650, y_pos: 455 },
    { x_pos: 1690, y_pos: 455 },
    { x_pos: 1725, y_pos: 430 },
    { x_pos: 1737, y_pos: 390 },
    { x_pos: 1725, y_pos: 350 },
    { x_pos: 1615, y_pos: 350 },

    //Stone of tainted Earth - Steps to Divinity

    { x_pos: 2405, y_pos: 387 },
    { x_pos: 2414, y_pos: 432 },
    { x_pos: 2450, y_pos: 455 },
    { x_pos: 2490, y_pos: 455 },
    { x_pos: 2525, y_pos: 430 },
    { x_pos: 2537, y_pos: 390 },
    { x_pos: 2525, y_pos: 350 },
    { x_pos: 2415, y_pos: 350 },

    //Stone of tainted Earth - Never one, without the other

    { x_pos: 2505, y_pos: 387 },
    { x_pos: 2514, y_pos: 432 },
    { x_pos: 2550, y_pos: 455 },
    { x_pos: 2590, y_pos: 455 },
    { x_pos: 2625, y_pos: 430 },
    { x_pos: 2637, y_pos: 390 },
    { x_pos: 2625, y_pos: 350 },
    { x_pos: 2515, y_pos: 350 },

    //Stone of tainted Earth - Ascension

    { x_pos: 3105, y_pos: 387 },
    { x_pos: 3114, y_pos: 432 },
    { x_pos: 3150, y_pos: 455 },
    { x_pos: 3190, y_pos: 455 },
    { x_pos: 3225, y_pos: 430 },
    { x_pos: 3237, y_pos: 390 },
    { x_pos: 3225, y_pos: 350 },
    { x_pos: 3115, y_pos: 350 },

    //Stone of tainted Earth - He took an axe and split himself, right down the middle...

    { x_pos: 3405, y_pos: 387 },
    { x_pos: 3414, y_pos: 432 },
    { x_pos: 3450, y_pos: 455 },
    { x_pos: 3490, y_pos: 455 },
    { x_pos: 3525, y_pos: 430 },
    { x_pos: 3537, y_pos: 390 },
    { x_pos: 3525, y_pos: 350 },
    { x_pos: 3415, y_pos: 350 },

    //Jagged peaks of Mount Vel'tor
    { x_pos: -425, y_pos: 387 },
    { x_pos: -434, y_pos: 432 },
    { x_pos: -470, y_pos: 455 },
    { x_pos: -510, y_pos: 455 },
    { x_pos: -545, y_pos: 430 },
    { x_pos: -557, y_pos: 390 },
    { x_pos: -545, y_pos: 350 },
    { x_pos: -435, y_pos: 350 },

    //Shroud of the Black Mist
    { x_pos: -1225, y_pos: 387 },
    { x_pos: -1234, y_pos: 432 },
    { x_pos: -1270, y_pos: 455 },
    { x_pos: -1310, y_pos: 455 },
    { x_pos: -1345, y_pos: 430 },
    { x_pos: -1357, y_pos: 390 },
    { x_pos: -1345, y_pos: 350 },
    { x_pos: -1235, y_pos: 350 },

    //Grove of Horrors
    { x_pos: -1725, y_pos: 387 },
    { x_pos: -1734, y_pos: 432 },
    { x_pos: -1770, y_pos: 455 },
    { x_pos: -1810, y_pos: 455 },
    { x_pos: -1845, y_pos: 430 },
    { x_pos: -1857, y_pos: 390 },
    { x_pos: -1845, y_pos: 350 },
    { x_pos: -1735, y_pos: 350 }
  ];

  stoneOfMoon = [
    //Stone of boundless Moons - Spawn

    { x_pos: 515, y_pos: 385 },
    { x_pos: 524, y_pos: 430 },
    { x_pos: 560, y_pos: 453 },
    { x_pos: 600, y_pos: 455 },
    { x_pos: 635, y_pos: 430 },
    { x_pos: 647, y_pos: 390 },
    { x_pos: 635, y_pos: 350 },
    { x_pos: 525, y_pos: 350 },

    //Stone of boundless Moons - Steps beginning

    { x_pos: 1315, y_pos: 385 },
    { x_pos: 1324, y_pos: 430 },
    { x_pos: 1360, y_pos: 453 },
    { x_pos: 1400, y_pos: 455 },
    { x_pos: 1435, y_pos: 430 },
    { x_pos: 1447, y_pos: 390 },
    { x_pos: 1435, y_pos: 350 },
    { x_pos: 1325, y_pos: 350 },

    //Stone of boundless Moons - First Steps

    { x_pos: 1615, y_pos: 385 },
    { x_pos: 1624, y_pos: 430 },
    { x_pos: 1660, y_pos: 453 },
    { x_pos: 1700, y_pos: 455 },
    { x_pos: 1735, y_pos: 430 },
    { x_pos: 1747, y_pos: 390 },
    { x_pos: 1735, y_pos: 350 },
    { x_pos: 1625, y_pos: 350 },

    //Stone of boundless Moons - Steps to Divinity

    { x_pos: 2415, y_pos: 385 },
    { x_pos: 2424, y_pos: 430 },
    { x_pos: 2460, y_pos: 453 },
    { x_pos: 2500, y_pos: 455 },
    { x_pos: 2535, y_pos: 430 },
    { x_pos: 2547, y_pos: 390 },
    { x_pos: 2535, y_pos: 350 },
    { x_pos: 2425, y_pos: 350 },

    //Stone of boundless Moons - Never one,without the other

    { x_pos: 2515, y_pos: 385 },
    { x_pos: 2524, y_pos: 430 },
    { x_pos: 2560, y_pos: 453 },
    { x_pos: 2600, y_pos: 455 },
    { x_pos: 2635, y_pos: 430 },
    { x_pos: 2647, y_pos: 390 },
    { x_pos: 2635, y_pos: 350 },
    { x_pos: 2525, y_pos: 350 },

    //Stone of boundless Moons - Ascension

    { x_pos: 3115, y_pos: 385 },
    { x_pos: 3124, y_pos: 430 },
    { x_pos: 3160, y_pos: 453 },
    { x_pos: 3200, y_pos: 455 },
    { x_pos: 3235, y_pos: 430 },
    { x_pos: 3247, y_pos: 390 },
    { x_pos: 3235, y_pos: 350 },
    { x_pos: 3125, y_pos: 350 },

    //Stone of boundless Moons - He took and axe and split himself right down the middle...

    { x_pos: 3415, y_pos: 385 },
    { x_pos: 3424, y_pos: 430 },
    { x_pos: 3460, y_pos: 453 },
    { x_pos: 3500, y_pos: 455 },
    { x_pos: 3535, y_pos: 430 },
    { x_pos: 3547, y_pos: 390 },
    { x_pos: 3535, y_pos: 350 },
    { x_pos: 3425, y_pos: 350 },

    //Jagged peaks of Mount Vel'Tor
    { x_pos: -415, y_pos: 385 },
    { x_pos: -424, y_pos: 430 },
    { x_pos: -460, y_pos: 453 },
    { x_pos: -500, y_pos: 455 },
    { x_pos: -535, y_pos: 430 },
    { x_pos: -547, y_pos: 390 },
    { x_pos: -535, y_pos: 350 },
    { x_pos: -425, y_pos: 350 },

    //Shroud of the Black Mist
    { x_pos: -1215, y_pos: 385 },
    { x_pos: -1224, y_pos: 430 },
    { x_pos: -1260, y_pos: 453 },
    { x_pos: -1300, y_pos: 455 },
    { x_pos: -1335, y_pos: 430 },
    { x_pos: -1347, y_pos: 390 },
    { x_pos: -1335, y_pos: 350 },
    { x_pos: -1225, y_pos: 350 },

    //Grove of Horrors
    { x_pos: -1715, y_pos: 385 },
    { x_pos: -1724, y_pos: 430 },
    { x_pos: -1760, y_pos: 453 },
    { x_pos: -1800, y_pos: 455 },
    { x_pos: -1835, y_pos: 430 },
    { x_pos: -1847, y_pos: 390 },
    { x_pos: -1835, y_pos: 350 },
    { x_pos: -1725, y_pos: 350 }
  ];
}

function draw()
{
  background(50, 100, 155);
  fill(200, 215, 205, map(gameChar_x, 0, width, 0, 200));
  rect(0, 0, width, height);
  noStroke();

  //draw the sun
  fill(255);
  ellipse(sun.x, sun.y, sun.diameter + 5);
  fill(55, 55, 0);
  ellipse(sun.x, sun.y, sun.diameter);

  sun.y = map(gameChar_x, 150, width, 70, floorPos_y + 200);

  //TASK: you'll need to draw the moon too. Make sure you use brightness to adjust the colour
  fill(255, 255, 255, map(gameChar_x, 500, width, 0, 255));
  ellipse(moon.x, moon.y, moon.diameter + 7);
  fill(255, 255, 255, map(gameChar_x, 500, width, 0, 255));
  ellipse(moon.x, moon.y, moon.diameter);
  //draw the ground and make it green
  fill(110, map(gameChar_x, 0, width, 90, 160), 140);
  rect(0, floorPos_y, width, height - floorPos_y);

  push();
  translate(scrollPos, 0);

  // Draw clouds.
  drawClouds();

  // Draw mountains.
  drawMountains();

  // Draw trees.
  drawTrees();
  // Draw canyons.
  for (var i = 0; i < canyon.length; i++) {
    drawCanyon(canyon[i]);
    checkCanyon(canyon[i]);
  }

  // Draw snow
  drawSnow();

  //Decorative - Draw Bonfire Of Ashen One
  drawBonfireOfAshenOne();

  //Decorative - Draw Stones of the Abyss (Stone of the tainted earth)
  drawStonesOfTheAbyss();

  //Decorative - Draw Stones of the Boundless Moon
  drawStonesOfTheBoundlessMoon();

  // Draw collectable items.
  for (var i = 0; i < collectables.length; i++) {
    if (collectables[i].isFound == false) {
      drawCollectable(collectables[i]);
      checkCollectable(collectables[i]);
    } else if (collectables[i].isFound == true)
      drawCollectable((collectables[i] = true));
  }

  pop();

  // Draw game character.

  drawGameChar();

  // Logic to make the game character move or the background scroll.
  if (isLeft) {
    if (gameChar_x > width * 0.2) {
      gameChar_x -= 5;
    } else {
      scrollPos += 5;
    }
  }

  if (isRight) {
    if (gameChar_x < width * 0.8) {
      gameChar_x += 5;
    } else {
      scrollPos -= 5; // negative for moving against the background
    }
  }

  // Logic to make the game character rise and fall.
  if (gameChar_y < floorPos_y) {
    gameChar_y += 2;
    isFalling = true;
  } else {
    isFalling = false;
  }

  // Update real position of gameChar for collision detection.
  gameChar_world_x = gameChar_x - scrollPos;
}


// ---------------------
// Key control functions
// ---------------------

function keyPressed(){

if (keyCode == 37) {
  isLeft = true;
} else if (keyCode == 39) {
  isRight = true;
} else if (keyCode == 32 && gameChar_y == floorPos_y) {
  gameChar_y -= 100;
}

}

function keyReleased()
{

	if (keyCode == 37) {
    isLeft = false;
  } else if (keyCode == 39) {
    isRight = false;
  }

}

// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar()
{
  // draw game character
  //the game character
  if (isLeft && isFalling) {
    // add your jumping-left code

    //Candle body floor shadow
    fill(38, 30, 11);
    ellipse(gameChar_x + 3, gameChar_y, 18, 10);
    //Candle wick
    fill(63, 31, 28);
    rect(gameChar_x - 2, gameChar_y - 44, 2, 2);
    //Candle base
    fill(255, 251, 235);
    rect(gameChar_x - 10, gameChar_y - 42, 18, 33, 5);
    //Flame
    fill(249, 232, 152);
    ellipse(gameChar_x, gameChar_y - 60, 25, 25);
    //Flame entrail
    fill(249, 232, 152);
    ellipse(gameChar_x, gameChar_y - 70, 15, 10);
    ellipse(gameChar_x, gameChar_y - 71, 12, 10);
    ellipse(gameChar_x + 2, gameChar_y - 73, 10, 10);
    ellipse(gameChar_x + 4, gameChar_y - 75, 8, 10);

    //Spirit wisp
    fill(239, 189, 76);
    ellipse(gameChar_x + 3, gameChar_y - 64, 5.5, 5.5);
    ellipse(gameChar_x - 4.5, gameChar_y - 64, 5.5, 5.5);

    //spark pupils
    fill(254, 250, 221);
    ellipse(gameChar_x + 3, gameChar_y - 64.5, 1.5, 1.5);
    ellipse(gameChar_x - 4.5, gameChar_y - 64.5, 1.5, 1.5);

    //eye rifts
    fill(220, 189, 76);
    ellipse(gameChar_x + 3, gameChar_y - 59.5, 3, 3);
    ellipse(gameChar_x - 4.5, gameChar_y - 59.5, 3, 3);

    //candle body shading
    fill(247, 251, 235);
    ellipse(gameChar_x + 6, gameChar_y - 25, 8, 30);

    //Mist
    fill(26, 31, 60);
    ellipse(gameChar_x - 15, gameChar_y, 15, 15);
    ellipse(gameChar_x - 5, gameChar_y, 20, 20);
    ellipse(gameChar_x + 5, gameChar_y, 20, 20);
    ellipse(gameChar_x + 15, gameChar_y, 15, 15);

    //Embers
    fill(181, 84, 65);
    ellipse(gameChar_x + 13, gameChar_y - 80, 3, 3);
    ellipse(gameChar_x + 8, gameChar_y - 83, 3, 3);
    ellipse(gameChar_x + 16, gameChar_y - 87, 3, 3);

    //Star
    fill(181, 84, 65);
    ellipse(gameChar_x, gameChar_y - 70, 3, 3);
  } else if (isRight && isFalling) {
    // add your jumping-right code
    //Candle body floor shadow
    fill(38, 30, 11);
    ellipse(gameChar_x - 3, gameChar_y - 8, 8, 10);
    //Candle wick
    fill(63, 31, 28);
    rect(gameChar_x - 2, gameChar_y - 44, 2, 2);
    //Candle base
    fill(255, 251, 235);
    rect(gameChar_x - 10, gameChar_y - 42, 18, 33, 5);
    //Flame
    fill(249, 232, 152);
    ellipse(gameChar_x, gameChar_y - 60, 25, 25);
    //Flame entrail
    fill(249, 232, 152);
    ellipse(gameChar_x, gameChar_y - 70, 15, 10);
    ellipse(gameChar_x, gameChar_y - 71, 12, 10);
    ellipse(gameChar_x - 2, gameChar_y - 73, 10, 10);
    ellipse(gameChar_x - 4, gameChar_y - 75, 8, 10);

    //Spirit wisp
    fill(239, 189, 76);
    ellipse(gameChar_x - 3, gameChar_y - 64, 5.5, 5.5);
    ellipse(gameChar_x + 4.5, gameChar_y - 64, 5.5, 5.5);

    //spark pupils
    fill(254, 250, 221);
    ellipse(gameChar_x - 3, gameChar_y - 64.5, 1.5, 1.5);
    ellipse(gameChar_x + 4.5, gameChar_y - 64.5, 1.5, 1.5);

    //eye rifts
    fill(220, 189, 76);
    ellipse(gameChar_x - 3, gameChar_y - 59.5, 3, 3);
    ellipse(gameChar_x + 4.5, gameChar_y - 59.5, 3, 3);

    //candle body shading
    fill(247, 251, 235);
    ellipse(gameChar_x - 6, gameChar_y - 25, 8, 30);

    //Mist
    fill(26, 31, 60);
    ellipse(gameChar_x - 15, gameChar_y, 15, 15);
    ellipse(gameChar_x - 5, gameChar_y, 20, 20);
    ellipse(gameChar_x + 5, gameChar_y, 20, 20);
    ellipse(gameChar_x + 15, gameChar_y, 15, 15);

    //Embers
    fill(181, 84, 65);
    ellipse(gameChar_x - 13, gameChar_y - 80, 3, 3);
    ellipse(gameChar_x - 8, gameChar_y - 83, 3, 3);
    ellipse(gameChar_x - 16, gameChar_y - 87, 3, 3);

    //Star
    fill(181, 84, 65);
    ellipse(gameChar_x, gameChar_y - 70, 3, 3);
  } else if (isLeft) {
    // add your walking left code
    //Candle body floor shadow
    fill(38, 30, 11);
    ellipse(gameChar_x + 3, gameChar_y, 18, 10);
    //Candle wick
    fill(63, 31, 28);
    rect(gameChar_x - 2, gameChar_y - 34, 2, 2);
    //Candle base
    fill(255, 251, 235);
    rect(gameChar_x - 10, gameChar_y - 32, 18, 33, 5);
    //Flame
    fill(249, 232, 152);
    ellipse(gameChar_x, gameChar_y - 50, 25, 25);
    //Flame entrail
    fill(249, 232, 152);
    ellipse(gameChar_x, gameChar_y - 60, 15, 10);
    ellipse(gameChar_x, gameChar_y - 61, 12, 10);
    ellipse(gameChar_x + 2, gameChar_y - 63, 10, 10);
    ellipse(gameChar_x + 4, gameChar_y - 65, 8, 10);

    //Spirit wisp
    fill(239, 189, 76);
    ellipse(gameChar_x + 3, gameChar_y - 54, 5.5, 5.5);
    ellipse(gameChar_x - 4.5, gameChar_y - 54, 5.5, 5.5);

    //spark pupils
    fill(254, 250, 221);
    ellipse(gameChar_x + 3, gameChar_y - 54.5, 1.5, 1.5);
    ellipse(gameChar_x - 4.5, gameChar_y - 54.5, 1.5, 1.5);

    //eye rifts
    fill(220, 189, 76);
    ellipse(gameChar_x + 3, gameChar_y - 49.5, 3, 3);
    ellipse(gameChar_x - 4.5, gameChar_y - 49.5, 3, 3);

    //candle body shading
    fill(247, 251, 235);
    ellipse(gameChar_x + 6, gameChar_y - 15, 8, 30);

    //Embers
    fill(181, 84, 65);
    ellipse(gameChar_x + 13, gameChar_y - 70, 3, 3);
    ellipse(gameChar_x + 8, gameChar_y - 73, 3, 3);
    ellipse(gameChar_x + 16, gameChar_y - 77, 3, 3);
  } else if (isRight) {
    // add your walking right code
    //Candle body floor shadow
    fill(38, 30, 11);
    ellipse(gameChar_x - 5, gameChar_y, 18, 10);
    //Candle wick
    fill(63, 31, 28);
    rect(gameChar_x - 2, gameChar_y - 34, 2, 2);
    //Candle base
    fill(255, 251, 235);
    rect(gameChar_x - 10, gameChar_y - 32, 18, 33, 5);
    //Flame
    fill(249, 232, 152);
    ellipse(gameChar_x, gameChar_y - 50, 25, 25);
    //Flame entrail
    fill(249, 232, 152);
    ellipse(gameChar_x, gameChar_y - 60, 15, 10);
    ellipse(gameChar_x, gameChar_y - 61, 12, 10);
    ellipse(gameChar_x - 2, gameChar_y - 63, 10, 10);
    ellipse(gameChar_x - 4, gameChar_y - 65, 8, 10);

    //Spirit wisp
    fill(239, 189, 76);
    ellipse(gameChar_x - 3, gameChar_y - 54, 5.5, 5.5);
    ellipse(gameChar_x + 4.5, gameChar_y - 54, 5.5, 5.5);

    //spark pupils
    fill(254, 250, 221);
    ellipse(gameChar_x - 3, gameChar_y - 54.5, 1.5, 1.5);
    ellipse(gameChar_x + 4.5, gameChar_y - 54.5, 1.5, 1.5);

    //eye rifts
    fill(220, 189, 76);
    ellipse(gameChar_x - 3, gameChar_y - 49.5, 3, 3);
    ellipse(gameChar_x + 4.5, gameChar_y - 49.5, 3, 3);

    //candle body shading
    fill(247, 251, 235);
    ellipse(gameChar_x - 6, gameChar_y - 15, 8, 30);

    //Embers
    fill(181, 84, 65);
    ellipse(gameChar_x - 13, gameChar_y - 70, 3, 3);
    ellipse(gameChar_x - 8, gameChar_y - 73, 3, 3);
    ellipse(gameChar_x - 16, gameChar_y - 77, 3, 3);
  } else if (isFalling || isPlummeting) {
    // add your jumping facing forwards code
    //Add your code here ...
    //Candle body floor shadow
    fill(38, 30, 11);
    ellipse(gameChar_x - 3, gameChar_y - 8, 8, 10);
    //Candle wick
    fill(63, 31, 28);
    rect(gameChar_x - 2, gameChar_y - 44, 2, 2);
    //Candle base
    fill(255, 251, 235);
    rect(gameChar_x - 10, gameChar_y - 42, 18, 33, 5);
    //Flame
    fill(249, 232, 152);
    ellipse(gameChar_x, gameChar_y - 60, 25, 25);
    //Flame entrail
    fill(249, 232, 152);
    ellipse(gameChar_x, gameChar_y - 70, 15, 10);
    ellipse(gameChar_x, gameChar_y - 71, 12, 10);
    ellipse(gameChar_x - 2, gameChar_y - 73, 10, 10);
    ellipse(gameChar_x - 4, gameChar_y - 75, 8, 10);

    //Spirit wisp
    fill(239, 189, 76);
    ellipse(gameChar_x - 3, gameChar_y - 64, 5.5, 5.5);
    ellipse(gameChar_x + 4.5, gameChar_y - 64, 5.5, 5.5);

    //spark pupils
    fill(254, 250, 221);
    ellipse(gameChar_x - 3, gameChar_y - 64.5, 1.5, 1.5);
    ellipse(gameChar_x + 4.5, gameChar_y - 64.5, 1.5, 1.5);

    //eye rifts
    fill(220, 189, 76);
    ellipse(gameChar_x - 3, gameChar_y - 59.5, 3, 3);
    ellipse(gameChar_x + 4.5, gameChar_y - 59.5, 3, 3);

    //candle body shading
    fill(247, 251, 235);
    ellipse(gameChar_x - 6, gameChar_y - 25, 8, 30);

    //Mist
    fill(26, 31, 60);
    ellipse(gameChar_x - 15, gameChar_y, 15, 15);
    ellipse(gameChar_x - 5, gameChar_y, 20, 20);
    ellipse(gameChar_x + 5, gameChar_y, 20, 20);
    ellipse(gameChar_x + 15, gameChar_y, 15, 15);

    //Embers
    fill(181, 84, 65);
    ellipse(gameChar_x - 9, gameChar_y - 85, 4.5, 4.5);

    //Star
    fill(181, 84, 65);
    ellipse(gameChar_x, gameChar_y - 70, 3, 3);
  } else {
    // add your standing front facing code
    //Candle body floor shadow
    fill(38, 30, 11);
    ellipse(gameChar_x - 2, gameChar_y, 18, 10);
    //Candle wick
    fill(63, 31, 28);
    rect(gameChar_x - 2, gameChar_y - 34, 2, 2);
    //Candle base
    fill(255, 251, 235);
    rect(gameChar_x - 10, gameChar_y - 32, 18, 33, 5);
    //Flame
    fill(249, 232, 152);
    ellipse(gameChar_x, gameChar_y - 50, 25, 25);
    //Flame entrail
    fill(249, 232, 152);
    ellipse(gameChar_x, gameChar_y - 60, 15, 10);
    ellipse(gameChar_x, gameChar_y - 61, 12, 10);
    ellipse(gameChar_x - 2, gameChar_y - 63, 10, 10);
    ellipse(gameChar_x - 4, gameChar_y - 65, 8, 10);

    //Spirit wisp
    fill(239, 189, 76);
    ellipse(gameChar_x - 3, gameChar_y - 54, 5.5, 5.5);
    ellipse(gameChar_x + 4.5, gameChar_y - 54, 5.5, 5.5);

    //spark pupils
    fill(254, 250, 221);
    ellipse(gameChar_x - 3, gameChar_y - 54.5, 1.5, 1.5);
    ellipse(gameChar_x + 4.5, gameChar_y - 54.5, 1.5, 1.5);

    //eye rifts
    fill(220, 189, 76);
    ellipse(gameChar_x - 3, gameChar_y - 49.5, 3, 3);
    ellipse(gameChar_x + 4.5, gameChar_y - 49.5, 3, 3);

    //candle body shading
    fill(247, 251, 235);
    ellipse(gameChar_x - 6, gameChar_y - 15, 8, 30);

    //Embers
    fill(181, 84, 65);
    ellipse(gameChar_x - 9, gameChar_y - 75, 4.5, 4.5);
  }
}

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.
function drawClouds() {
  for (var i = 0; i < revenantCloud.length; i++) {
    //draw cloud - revenant
    fill(230, 210, 210);
    ellipse(
      revenantCloud[i].revPos_x,
      revenantCloud[i].revPos_y,
      190,
      70
    );
    ellipse(
      revenantCloud[i].revPos_x,
      revenantCloud[i].revPos_y,
      180,
      30
    );
    ellipse(
      revenantCloud[i].revPos_x,
      revenantCloud[i].revPos_y,
      280,
      10
    );
  }

  for (var i = 0; i < revenantCloudBelow.length; i++) {
    //draw cloud - revenant below
    fill(230, 210, 210);
    ellipse(
      revenantCloudBelow[i].revPos_x,
      revenantCloudBelow[i].revPos_y,
      180,
      50
    );
    ellipse(
      revenantCloudBelow[i].revPos_x,
      revenantCloudBelow[i].revPos_y,
      180,
      50
    );
    ellipse(
      revenantCloudBelow[i].revPos_x,
      revenantCloudBelow[i].revPos_y,
      250,
      50
    );
  }

  for (var i = 0; i < revenantFurthestReaches.length; i++) {
    // //draw cloud - revenant furthest reaches
    fill(210, 190, 190);
    ellipse(
      revenantFurthestReaches[i].revPos_x,
      revenantFurthestReaches[i].revPos_y,
      140,
      50
    );
    ellipse(
      revenantFurthestReaches[i].revPos_x,
      revenantFurthestReaches[i].revPos_y,
      150,
      50
    );
    ellipse(
      revenantFurthestReaches[i].revPos_x,
      revenantFurthestReaches[i].revPos_y,
      250,
      50
    );
  }
}


// Function to draw mountains objects.
function drawMountains() {
  for (var i = 0; i < mountains.length; i++) {
    fill(120, 12, 120, map(gameChar_x, 0, width, 0, 200));
    triangle(
      mountains[i].pos_x,
      mountains[i].pos_y,
      mountains[i].pos_x + mountain1.width,
      mountains[i].pos_y,
      mountains[i].pos_x + mountain1.width / 2,
      mountains[i].pos_y - mountain1.height
    );

    triangle(
      mountains[i].pos_x,
      mountains[i].pos_y,
      mountains[i].pos_x + mountain2.width,
      mountains[i].pos_y,
      mountains[i].pos_x + mountain2.width / 2,
      mountains[i].pos_y - mountain2.height
    );
  }

}


// Function to draw trees objects.
	function drawTrees() {
    for (var i = 0; i < trees_x.length; i++) {
      //3. a tree
      //... add your code here
      //treeeeees
      tree = {
        x: treePos_x - 20,
        y: treePos_y - 56,
        flowering: 110,
        trunk_width: 50,
        trunk_height: 100,
        leaves: 50
      };

      fill(49, 18, 11, map(gameChar_x, 200, width, 150, 300));
      rect(trees_x[i] + 30, tree.y + 100, tree.trunk_width, tree.trunk_height);

      //Shackles of Woe
      fill(51, 31, 50, map(gameChar_x, 200, width, 150, 300));
      ellipse(trees_x[i] + 13, tree.y + 135, 20, 20);
      ellipse(trees_x[i] + 26, tree.y + 120, 20, 20);
      ellipse(trees_x[i], tree.y + 150, 20, 20);
      ellipse(trees_x[i], tree.y + 170, 20, 20);
      ellipse(trees_x[i], tree.y + 190, 20, 20);
      push();
      translate(110, 310);
      ellipse(trees_x[i] - 13, tree.y - 135, 20, 20);
      ellipse(trees_x[i] - 26, tree.y - 120, 20, 20);
      ellipse(trees_x[i], tree.y - 150, 20, 20);
      ellipse(trees_x[i], tree.y - 170, 20, 20);
      ellipse(trees_x[i], tree.y - 190, 20, 20);
      pop();

      fill(200, map(gameChar_x, 100, width, 240, 150), 170);
      rect(trees_x[i] - 7, tree.y - 7, 125, 125, 10);
      fill(140, 80, 100, map(gameChar_x, 200, width, 150, 300));
      rect(trees_x[i], tree.y, tree.flowering, tree.flowering);

      //Gaze which burns the heavens...
      fill(122, 16, 122, map(gameChar_x, 0, width, 0, 200));
      ellipse(trees_x[i] + 55, tree.y + 40, 60, 60);
      //Seep through depths of darkness...
      fill(214, 245, 244);
      ellipse(trees_x[i] + 55, tree.y + 40, 25, 35);
      fill(199, 232, 232);
      ellipse(trees_x[i] + 55, tree.y + 40, 10, 20);

      //Watchers, ever knowing...
      fill(214, 245, 244);
      ellipse(trees_x[i] + 10, tree.y + 40, 15, 15);
      ellipse(trees_x[i] + 20, tree.y + 20, 15, 15);
      ellipse(trees_x[i] + 20, tree.y + 60, 15, 15);

      push();
      translate(112, 80);
      ellipse(trees_x[i] - 10, tree.y - 40, 15, 15);
      ellipse(trees_x[i] - 20, tree.y - 20, 15, 15);
      ellipse(trees_x[i] - 20, tree.y - 60, 15, 15);
      pop();
      //ever silent...
      fill(199, 232, 232);
      ellipse(trees_x[i] + 10, tree.y + 40, 5, 10);
      ellipse(trees_x[i] + 20, tree.y + 20, 5, 10);
      ellipse(trees_x[i] + 20, tree.y + 60, 5, 10);

      ellipse(trees_x[i] + 102, tree.y + 40, 5, 10);
      ellipse(trees_x[i] + 92, tree.y + 20, 5, 10);
      ellipse(trees_x[i] + 92, tree.y + 60, 5, 10);

      //Sight through oblivion
      fill(51, 71);
      rect(trees_x[i] - 7, tree.y + 10, 125, 60, 10);
    }
  }

 //Function to draw the Bonfire of the Ashen One
 function drawBonfireOfAshenOne() {
                                    //DECORATION - Bonfire of the ashen one
                                    push();
                                    //Decorative - Bonfire of the ashen one
                                    fill(77, 57, 46);
                                    translate(580, 400);
                                    noStroke();
                                    for (let i = 0; i < 10; i++) {
                                      ellipse(0, 30, 110, 10);
                                      rotate(PI / 5);
                                    }
                                    pop();

                                    //DECORATION - Bonfire of the ashen one - First steps
                                    push();
                                    //Decorative - Bonfire of the ashen one
                                    fill(77, 57, 46);
                                    translate(1380, 400);
                                    noStroke();
                                    for (let i = 0; i < 10; i++) {
                                      ellipse(0, 30, 110, 10);
                                      rotate(PI / 5);
                                    }
                                    pop();

                                    //DECORATION - Bonfire of the ashen one - Steps to divinity
                                    push();
                                    //Decorative - Bonfire of the ashen one
                                    fill(77, 57, 46);
                                    translate(1680, 400);
                                    noStroke();
                                    for (let i = 0; i < 10; i++) {
                                      ellipse(0, 30, 110, 10);
                                      rotate(PI / 5);
                                    }
                                    pop();

                                    //DECORATION - Bonfire of the ashen one - Never one...
                                    push();
                                    //Decorative - Bonfire of the ashen one
                                    fill(77, 57, 46);
                                    translate(2480, 400);
                                    noStroke();
                                    for (let i = 0; i < 10; i++) {
                                      ellipse(0, 30, 110, 10);
                                      rotate(PI / 5);
                                    }
                                    pop();

                                    //DECORATION - Bonfire of the ashen one - Without the other...
                                    push();
                                    //Decorative - Bonfire of the ashen one
                                    fill(77, 57, 46);
                                    translate(2580, 400);
                                    noStroke();
                                    for (let i = 0; i < 10; i++) {
                                      ellipse(0, 30, 110, 10);
                                      rotate(PI / 5);
                                    }
                                    pop();

                                    //DECORATION - Bonfire of the ashen one - Ascension
                                    push();
                                    //Decorative - Bonfire of the ashen one
                                    fill(77, 57, 46);
                                    translate(3180, 400);
                                    noStroke();
                                    for (let i = 0; i < 10; i++) {
                                      ellipse(0, 30, 110, 10);
                                      rotate(PI / 5);
                                    }
                                    pop();

                                    //DECORATION - Bonfire of the ashen one - He took and axe and split himself in two...
                                    push();
                                    //Decorative - Bonfire of the ashen one
                                    fill(77, 57, 46);
                                    translate(3480, 400);
                                    noStroke();
                                    for (let i = 0; i < 10; i++) {
                                      ellipse(0, 30, 110, 10);
                                      rotate(PI / 5);
                                    }
                                    pop();

                                    //DECORATION - Bonfire of the ashen one - Jagged Peaks of Mount Vel'Tor
                                    push();
                                    //Decorative - Bonfire of the ashen one
                                    fill(77, 57, 46);
                                    translate(-480, 400);
                                    noStroke();
                                    for (let i = 0; i < 10; i++) {
                                      ellipse(0, 30, 110, 10);
                                      rotate(PI / 5);
                                    }
                                    pop();

                                    //DECORATION - Bonfire of the ashen one - Shroud of the Black Mist
                                    push();
                                    //Decorative - Bonfire of the ashen one
                                    fill(77, 57, 46);
                                    translate(-1280, 400);
                                    noStroke();
                                    for (let i = 0; i < 10; i++) {
                                      ellipse(0, 30, 110, 10);
                                      rotate(PI / 5);
                                    }
                                    pop();

                                    //DECORATION - Bonfire of the ashen one - Grove of Horrors
                                    push();
                                    //Decorative - Bonfire of the ashen one
                                    fill(77, 57, 46);
                                    translate(-1780, 400);
                                    noStroke();
                                    for (let i = 0; i < 10; i++) {
                                      ellipse(0, 30, 110, 10);
                                      rotate(PI / 5);
                                    }
                                    pop();
                                  }


//Function to draw Stones of the Abyss
function drawStonesOfTheAbyss() {
                                  //Decorative - Stones of the Abyss
                                  //Stone of tainted Earth...
                                  fill(
                                    122,
                                    16,
                                    122,
                                    map(gameChar_x, 200, width, 150, 300)
                                  );
                                  for (
                                    var i = 0;
                                    i < stoneOfAbyss.length;
                                    i++
                                  ) {
                                    rect(
                                      stoneOfAbyss[i].x_pos,
                                      stoneOfAbyss[i].y_pos,
                                      20,
                                      20,
                                      8
                                    );
                                    rect(
                                      stoneOfAbyss[i].x_pos,
                                      stoneOfAbyss[i].y_pos,
                                      20,
                                      20,
                                      8
                                    );
                                    rect(
                                      stoneOfAbyss[i].x_pos,
                                      stoneOfAbyss[i].y_pos,
                                      20,
                                      20,
                                      8
                                    );
                                    rect(
                                      stoneOfAbyss[i].x_pos,
                                      stoneOfAbyss[i].y_pos,
                                      20,
                                      20,
                                      8
                                    );
                                    rect(
                                      stoneOfAbyss[i].x_pos,
                                      stoneOfAbyss[i].y_pos,
                                      20,
                                      20,
                                      8
                                    );
                                    rect(
                                      stoneOfAbyss[i].x_pos,
                                      stoneOfAbyss[i].y_pos,
                                      20,
                                      20,
                                      8
                                    );
                                    rect(
                                      stoneOfAbyss[i].x_pos,
                                      stoneOfAbyss[i].y_pos,
                                      20,
                                      20,
                                      8
                                    );
                                    rect(
                                      stoneOfAbyss[i].x_pos,
                                      stoneOfAbyss[i].y_pos,
                                      20,
                                      20,
                                      8
                                    );
                                  }
                                }

					
//Function to draw Stones of the Boundless Moons
function drawStonesOfTheBoundlessMoon() {
                                          //Stone of boundless Moons...
                                          fill(
                                            148,
                                            94,
                                            169,
                                            map(
                                              gameChar_x,
                                              200,
                                              width,
                                              150,
                                              300
                                            )
                                          );
                                          for (
                                            var i = 0;
                                            i < stoneOfMoon.length;
                                            i++
                                          ) {
                                            ellipse(
                                              stoneOfMoon[i].x_pos,
                                              stoneOfMoon[i].y_pos,
                                              15,
                                              15
                                            );
                                            ellipse(
                                              stoneOfMoon[i].x_pos,
                                              stoneOfMoon[i].y_pos,
                                              15,
                                              15
                                            );
                                            ellipse(
                                              stoneOfMoon[i].x_pos,
                                              stoneOfMoon[i].y_pos,
                                              15,
                                              15
                                            );
                                            ellipse(
                                              stoneOfMoon[i].x_pos,
                                              stoneOfMoon[i].y_pos,
                                              15,
                                              15
                                            );
                                            ellipse(
                                              stoneOfMoon[i].x_pos,
                                              stoneOfMoon[i].y_pos,
                                              15,
                                              15
                                            );
                                            ellipse(
                                              stoneOfMoon[i].x_pos,
                                              stoneOfMoon[i].y_pos,
                                              15,
                                              15
                                            );
                                            ellipse(
                                              stoneOfMoon[i].x_pos,
                                              stoneOfMoon[i].y_pos,
                                              15,
                                              15
                                            );
                                            ellipse(
                                              stoneOfMoon[i].x_pos,
                                              stoneOfMoon[i].y_pos,
                                              15,
                                              15
                                            );
                                          }
                                        }

// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon)
{
fill(41, 41, 41);
rect(t_canyon.x_pos, 432, t_canyon.lightTouchedMouth, 150);
fill(26, 28, 28);
rect(t_canyon.x_pos, 445, t_canyon.lightTouchedMouth, 165, 10);
}

// Function to check character is over a canyon.

function checkCanyon(t_canyon)
{
if (
  gameChar_world_x > t_canyon.x_pos &&
  gameChar_world_x < t_canyon.x_pos + t_canyon.lightTouchedMouth &&
  gameChar_y >= floorPos_y
) {
  isPlummeting = true;
}
if (isPlummeting == true) {
  gameChar_y += 10;
}
}

//Function to draw Snow
//Snowfall
  function drawSnow() {
	  //snow pre canyon
                  for (var i = 0; i < snowfall.length; i++) {
                    fill(250, 247, 245);
                    ellipse(snowfall[i].x_pos,snowfall[i].y_pos,snowfall[i].coverage,45);
                  }
  }


// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable)
{
	    fill(181, 84, 65);
      ellipse(
        t_collectable.x_pos_burningRing1,
        t_collectable.y_pos_burningRing1,
        33,
        43
      );
      ellipse(
        t_collectable.x_pos_burningRing2,
        t_collectable.y_pos_burningRing2,
        18,
        23
      );
      ellipse(
        t_collectable.x_pos_burningRing3,
        t_collectable.y_pos_burningRing3,
        18,
        23
      );

      //Crown of Eternal Pyre
      fill(249, 243, 170);
      ellipse(
        t_collectable.x_pos_crownOfEternalPyre1,
        t_collectable.y_pos_crownOfEternalPyre1,
        30,
        40
      );
      ellipse(
        t_collectable.x_pos_crownOfEternalPyre2,
        t_collectable.y_pos_crownOfEternalPyre2,
        15,
        20
      );
      ellipse(
        t_collectable.x_pos_crownOfEternalPyre3,
        t_collectable.y_pos_crownOfEternalPyre3,
        15,
        20
      );

      //Jul'terra
      //Aura of Latent Flame
      fill(181, 84, 65);
      ellipse(
        t_collectable.x_pos_auraOfLatentFlame,
        t_collectable.y_pos_auraOfLatentFlame,
        78,
        114
      );
      //Jul'terra - Eternal One
      fill(249, 243, 170);
      ellipse(
        t_collectable.x_pos_JulTerra,
        t_collectable.y_pos_JulTerra,
        75,
        110
      );
      //Eyes of Song
      fill(243, 209, 111);
      ellipse(
        t_collectable.x_pos_eyesOfSong1,
        t_collectable.y_pos_eyesOfSong1,
        20,
        20
      );
      ellipse(
        t_collectable.x_pos_eyesOfSong2,
        t_collectable.y_pos_eyesOfSong2,
        20,
        20
      );
      ellipse(
        t_collectable.x_pos_eyesOfSong3,
        t_collectable.y_pos_eyesOfSong3,
        20,
        20
      );
      //She who embodies the Void...
      fill(181, 84, 65);
      ellipse(
        t_collectable.x_pos_embodyTheVoid1,
        t_collectable.y_pos_embodyTheVoid1,
        5,
        5
      );
      ellipse(
        t_collectable.x_pos_embodyTheVoid2,
        t_collectable.y_pos_embodyTheVoid2,
        5,
        5
      );
      ellipse(
        t_collectable.x_pos_embodyTheVoid3,
        t_collectable.y_pos_embodyTheVoid3,
        5,
        5
      );
      //A fool and their soul are easily parted...
      fill(229, 202, 99);
      ellipse(
        t_collectable.x_pos_aFoolAndTheirSoul1,
        t_collectable.y_pos_aFoolAndTheirSoul1,
        5,
        5
      );
      ellipse(
        t_collectable.x_pos_aFoolAndTheirSoul2,
        t_collectable.y_pos_aFoolAndTheirSoul2,
        5,
        5
      );
      ellipse(
        t_collectable.x_pos_aFoolAndTheirSoul3,
        t_collectable.y_pos_aFoolAndTheirSoul3,
        5
      );

      //Veil of Divinity
      fill(51, 71);
      rect(
        t_collectable.x_pos_veilOfDivinity,
        t_collectable.y_pos_veilOfDivinity,
        80,
        50,
        30
      );

      //Crowns Gaze
      fill(214, 245, 244);
      ellipse(
        t_collectable.x_pos_crownsGaze1,
        t_collectable.y_pos_crownsGaze1,
        10,
        20
      );
      ellipse(
        t_collectable.x_pos_crownsGaze2,
        t_collectable.y_pos_crownsGaze2,
        5,
        10
      );
      ellipse(
        t_collectable.x_pos_crownsGaze3,
        t_collectable.y_pos_crownsGaze3,
        5,
        10
      );

      //The Watchers, will return...
      fill(194, 227, 227);
      ellipse(
        t_collectable.x_pos_theWatchersReturn1,
        t_collectable.y_pos_theWatchersReturn1,
        5,
        5
      );
      ellipse(
        t_collectable.x_pos_theWatchersReturn2,
        t_collectable.y_pos_theWatchersReturn2,
        3,
        3
      );
      ellipse(
        t_collectable.x_pos_theWatchersReturn3,
        t_collectable.y_pos_theWatchersReturn3,
        3,
        3
      );

}

// Function to check character has collected an item.

function checkCollectable(t_collectable)
{
  //5. a collectable token - eg. a jewel, fruit, coins
  //... add your code here
  if (
    dist(
      gameChar_world_x,
      gameChar_y,
      t_collectable.x_pos_JulTerra,
      t_collectable.y_pos_JulTerra
    ) < 70
  ) {
    t_collectable.isFound = true;
  } else if (
    dist(
      gameChar_world_x,
      gameChar_y,
      t_collectable.x_pos_auraOfLatentFlame,
      t_collectable.y_pos_auraOfLatentFlame
    ) < 120
  ) {
    t_collectable.isFound = true;
  } else if (
    dist(
      gameChar_world_x,
      gameChar_y,
      t_collectable.x_pos_burningRing1,
      t_collectable.y_pos_burningRing1
    ) < 140
  ) {
    t_collectable.isFound = true;
  } else if (
    dist(
      gameChar_world_x,
      gameChar_y,
      t_collectable.x_pos_burningRing2,
      t_collectable.y_pos_burningRing2
    ) < 160
  ) {
    t_collectable.isFound = true;
  } else if (
    dist(
      gameChar_world_x,
      gameChar_y,
      t_collectable.x_pos_burningRing3,
      t_collectable.y_pos_burningRing3
    ) < 160
  ) {
    t_collectable.isFound = true;
  } else if (
    dist(
      gameChar_world_x,
      gameChar_y,
      t_collectable.x_pos_crownOfEternalPyre1,
      t_collectable.y_pos_crownOfEternalPyre1
    ) < 130
  ) {
    t_collectable.isFound = true;
  } else if (
    dist(
      gameChar_world_x,
      gameChar_y,
      t_collectable.x_pos_crownOfEternalPyre2,
      t_collectable.y_pos_crownOfEternalPyre2
    ) < 150
  ) {
    t_collectable.isFound = true;
  } else if (
    dist(
      gameChar_world_x,
      gameChar_y,
      t_collectable.x_pos_crownOfEternalPyre3,
      t_collectable.y_pos_crownOfEternalPyre3
    ) < 150
  ) {
    t_collectable.isFound = true;
  } 

  

}
