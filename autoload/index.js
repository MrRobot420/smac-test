"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Any files in this directory are automatically run when this plugin is loaded.
 * Remember to transpile to JavaScript!
 */
var log_1 = require("mc-plugin-test/lib/log");
var core_1 = require("@magikcraft/core");
var events = require("events");
var log = log_1.Logger(__filename);
log('mc-plugin-test loaded!');
log('Registering Player Join event handler');
events.playerJoin(function (_a) {
    var player = _a.player;
    setTimeout(function () {
        // Initial join is a bit chaotic
        echo(player, "Hi " + player.name + ". The best minecraft plugin ever is loaded on this server");
    }, 1000);
});
log('Registering test command');
core_1.commando('test', function (args, player) {
    console.log("Test command called by " + player.name);
    echo(player, 'Test command called');
});
