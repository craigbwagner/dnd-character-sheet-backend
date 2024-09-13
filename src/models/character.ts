import { Schema, Types, model } from "mongoose";

const skillSchema = new Schema({
  name: String,
  attributeName: String,
  ability: String,
  isProficient: Boolean,
  hasExpertise: Boolean
})

const characterSchema = new Schema({
  creator: String,
  name: String,
  race: String,
  classes: [{name: String, subclass: String, level: Number}],
  level: {
    type: Number,
    max: 20,
  },
  sex: String,
  size: String,
  age: Number,
  height: String,
  weight: Number,
  alignment: String,
  languages: [String],
  initiative: Number,
  initiativeMods: Number,
  speed: Number,
  maxHP: Number,
  currentHP: Number,
  tempHP: Number,
  hitDiceRemaining: Number,
  hitDiceType: String,
  hitDiceTotal: Number,
  strength: Number,
  dexterity: Number,
  constitution: Number,
  intelligence: Number,
  wisdom: Number,
  charisma: Number,
  savingThrowProficiencies: [String],
  skills: [skillSchema],
  abilities: [{type: Schema.Types.ObjectId, ref: 'Ability'}],
  items: [{type: Schema.Types.ObjectId, ref: 'Item'}],
}, {timestamps: true});

const Character = model('Character', characterSchema);

export { Character };
