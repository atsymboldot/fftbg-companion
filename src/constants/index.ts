import { TeamName } from "../models";

export const BASE_API_URL = 'https://fftbg.com/api/';
export const BASE_IMAGE_URL = 'https://fftbg-companion.s3.amazonaws.com/';
export const BASE_MUSTADIO_URL = 'https://mustadio-images.s3.amazonaws.com/';
export const BASE_ITEMS_URL = BASE_MUSTADIO_URL + 'items/';
export const BASE_ZODIAC_URL = BASE_MUSTADIO_URL + 'zodiac/';

export const LOCAL_ICON_URL = './src/assets/images/icons/';
export const EQUIPMENT_SLOTS: string[] = ['hand', 'hand', 'head', 'body', 'accessory'];
export const EQUIPMENT_ICONS: string[] = ['Mainhand', 'Offhand', 'Head', 'Armor', 'Accessory'];
export const ABILITY_ICONS: string[] = ['active', 'active', 'react', 'support', 'move'];

export const TEAMS: TeamName[] = ['red', 'blue', 'green', 'yellow', 'white', 'black', 'purple', 'brown', 'champion'];
// Based on Mustad.io: https://github.com/SirBraneDamuj/mustadio/blob/master/src/data/matchups.js
export const MATCHUPS: TeamName[][][] = [
  // ROUND 1
  [
    [TEAMS[0], TEAMS[1]] // Matchup 1
  ],
  [
    [TEAMS[2], TEAMS[3]] // Matchup 2
  ],
  [
    [TEAMS[4], TEAMS[5]] // Matchup 3
  ],
  [
    [TEAMS[6], TEAMS[7]] // Matchup 4
  ],
  // ROUND 2 // Matchup 5
  [
    [TEAMS[0], TEAMS[2]],
    [TEAMS[0], TEAMS[3]],
    [TEAMS[1], TEAMS[2]],
    [TEAMS[1], TEAMS[3]],
  ], // Matchup 6
  [
    [TEAMS[4], TEAMS[6]],
    [TEAMS[4], TEAMS[7]],
    [TEAMS[5], TEAMS[6]],
    [TEAMS[5], TEAMS[7]],
  ],
  // ROUND 3 // Matchup 7
  [
    [TEAMS[0], TEAMS[4]],
    [TEAMS[0], TEAMS[5]],
    [TEAMS[0], TEAMS[6]],
    [TEAMS[0], TEAMS[7]],
    [TEAMS[1], TEAMS[4]],
    [TEAMS[1], TEAMS[5]],
    [TEAMS[1], TEAMS[6]],
    [TEAMS[1], TEAMS[7]],
    [TEAMS[2], TEAMS[4]],
    [TEAMS[2], TEAMS[5]],
    [TEAMS[2], TEAMS[6]],
    [TEAMS[2], TEAMS[7]],
    [TEAMS[3], TEAMS[4]],
    [TEAMS[3], TEAMS[5]],
    [TEAMS[3], TEAMS[6]],
    [TEAMS[3], TEAMS[7]],
  ],
  // ROUND 4 // Matchup 8
  [
    [TEAMS[0], TEAMS[8]],
    [TEAMS[1], TEAMS[8]],
    [TEAMS[2], TEAMS[8]],
    [TEAMS[3], TEAMS[8]],
    [TEAMS[4], TEAMS[8]],
    [TEAMS[5], TEAMS[8]],
    [TEAMS[6], TEAMS[8]],
    [TEAMS[7], TEAMS[8]],
  ],
];

export const ABILITY_MAP = new Map([
  ['Squire', 'Basic Skill'],
  ['Chemist', 'Item'],
  ['Knight', 'Battle Skill'],
  ['Archer', 'Charge'],
  ['Monk', 'Punch Art'],
  ['Priest', 'White Magic'],
  ['Wizard', 'Black Magic'],
  ['TimeMage', 'Time Magic'],
  ['Time Mage', 'Time Magic'],
  ['Summoner', 'Summon Magic'],
  ['Thief', 'Steal'],
  ['Mediator', 'Talk Skill'],
  ['Oracle', 'Yin Yang Magic'],
  ['Geomancer', 'Elemental'],
  ['Lancer', 'Jump'],
  ['Samurai', 'Draw Out'],
  ['Ninja', 'Throw'],
  ['Calculator', 'Math Skill'],
  ['Bard', 'Sing'],
  ['Mime', 'Mimic'],
  ['Dancer', 'Dance'],
]);

// TODO: Could separate this out into items/abilities
export const NOTABLES = [
  'Air Knife',
  'Zorlin Shape',
  'Iga Knife',
  'Koga Knife',
  'Nagrarock',
  'Materia Blade',
  'Blood Sword',
  'Rune Blade',
  'Save the Queen',
  'Excalibur',
  'Ragnarok',
  'Chaos Blade',
  'Masamune',
  'Chirijiraden',
  'Slasher',
  'Faith Rod',
  'Dragon Rod',
  'Healing Staff',
  'Mace of Zeus',
  'Scorpion Tail',
  'Stone Gun',
  'Blaze Gun',
  'Glacier Gun',
  'Blast Gun',
  'Gastrafitis',
  'Yoichi Bow',
  'Perseus Bow',
  'Bloody Strings',
  'Fairy Harp',
  'Madlemgen',
  'Holy Lance',
  'Gungnir',
  'Dragon Whisker',
  'Whale Whisker',
  'Star Bag',
  'Ryozan Silk',
  'Venetian Shield',
  'Hero Shield',
  'Genji Shield',
  'Kaiser Plate',
  'Genji Helmet',
  'Grand Helmet',
  'Cachusha',
  'Barette',
  'Ribbon',
  'Black Hood',
  'Twist Headband',
  'Flash Hat',
  'Genji Armor',
  'Reflect Mail',
  'Maximillian',
  'Wizard Outfit',
  'Power Sleeve',
  'Secret Clothes',
  'Rubber Costume',
  'Wizard Robe',
  'Robe of Lords',
  'Genji Gauntlet',
  'Magic Gauntlet',
  'Bracer',
  'Cursed Ring',
  'Angel Ring',
  'Setiemson',
  'Chantage',
  'Serpentarius',
  'Vanish Mantle',
  'Salty Rage',
  'Cure 4',
  'Raise',
  'Raise 2',
  'Holy',
  'Dark Holy',
  'Fire 4',
  'Bolt 4',
  'Ice 4',
  'Death',
  'Flare',
  'Demi 2',
  'Meteor',
  'Petrify',
  'Moogle',
  'Carbunkle',
  'Bahamut',
  'Zodiac',
  'Cyclops',
  'Kiyomori',
  'Kikuichimoji',
  'Chirijiraden',
  'Masamune',
  'Last Song',
  'Wiznaibus',
  'Nameless Dance',
  'Earth Slash',
  'Revive',
  'Purification',
  'Steal Heart',
  'Invitation',
  'Death Sentence',
  'Mimic Daravon',
  'Water Ball',
  'Hallowed Ground',
  'Ultima',
  'Stasis Sword',
  'Justice Sword',
  'Surging Sword',
  'Explosion Sword',
  'Night Sword',
  'Phoenix Down',
  'X-Potion',
  'Remedy',
  'Dragon Spirit',
  'Auto Potion',
  'Blade Grasp',
  'Hamedo',
  'Dual Wield',
  'Short Charge',
  'Move+3',
  'Jump+3',
  'Teleport 2',
  'Equip Shield',
  'Equip Sword',
  'Equip Knife',
  'Equip Bow',
  'Equip Polearm',
  'Equip Axe',
  'Equip Gun',
  'Doublehand',
  'Galaxy Stop',
  'Elixir',
  'Attack UP',
  'Magic Attack UP',
  'Martial Arts',
  'Lucavi Skill',
  'Limit',
  'Arm Aim',
  'Gil Taking',
  'Magic Barrier',
]