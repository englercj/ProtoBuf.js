/*
 Copyright 2013 Daniel Wirtz <dcode@dcode.io>

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
var description = "Plain JSON descriptor";

var ProtoBuf = require(__dirname+"/../../../index.js"),
    util = require(__dirname+"/../util.js"),
    fs = require("fs");

/**
 * pbjs source: Plain JSON descriptor
 * @exports pbjs/sources/json
 * @function
 * @param {string[]} filenames Source files
 * @param {!Object.<string,*>=} options Options
 * @returns {!ProtoBuf.Builder}
 */
var json = module.exports = function(filenames, options) {
    options = options || {};
    var builderOptions = util.getBuilderOptions(options, "using");
    var builder = ProtoBuf.newBuilder(builderOptions);
    if (builderOptions.importRoot) {
        builder.importRoot = builderOptions.importRoot;
    }
    filenames.forEach(function (filename) {
        ProtoBuf.loadJsonFile(filename, builder);
    });
    return builder;
};

/**
 * Module description.
 * @type {string}
 */
json.description = description;
