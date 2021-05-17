/**
 * Death in Space module.
 */

import { DISActor } from "./actor/actor.js";
import { DISCharacterSheet } from "./actor/sheet/character-sheet.js";
import { DISHubSheet } from "./actor/sheet/hub-sheet.js";
import { DIS } from "./config.js";
import { DISItem } from "./item/item.js";
import { DISItemSheet } from "./item/sheet/item-sheet.js";

/**
 * Init hook.
 */
Hooks.once("init", async function() {
  console.log(`Initializing Death in Space System`);
  game.deathinspace = {
    config: DIS,
    DISActor,
    DISItem,
  };
  CONFIG.Actor.documentClass = DISActor;
  CONFIG.Item.documentClass = DISItem;
  CONFIG.DIS = DIS;
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("deathinspace", DISCharacterSheet, {
    types: ["character"],
    makeDefault: true,
    label: "DIS.SheetClassCharacter"
  });
  Actors.registerSheet("deathinspace", DISHubSheet, {
    types: ["hub"],
    makeDefault: true,
    label: "DIS.SheetClassHub"
  });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("deathinspace", DISItemSheet, { makeDefault: true });
});

Handlebars.registerHelper('ifEq', function(arg1, arg2, options) {
  // TODO: verify whether we want == or === for this equality check
  return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper("add", function (num1, num2){
  return num1 + num2;
});
