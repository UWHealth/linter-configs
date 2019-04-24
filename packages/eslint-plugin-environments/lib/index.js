/**
 * @fileoverview Additional environments that UW Health works in (T4, Rhino, Webpack)
 * @author UW Health
 */
"use strict";

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------
module.exports = {
    environments: {
        t4: {
            globals: {
                cwd: true,
                document: true,
                publishCache: true,
                dbStatement: true,
                section: true,
                content: true,
                contentList: true,
                template: true,
                templateFormat: true,
                language: true,
                isPreview: true,
                isStyleHeader: true,
                ContentHierarchy: true,
                ContentManager: true,
                process: true,
                DateUtils: true,
                ServerSideLinkManager: true,
                TreeTraversalUtils: true,
                CachedContent: true,
                CSHelper: true,
                PathBuilder: true,
                terminalfour: true,
                utils: true,
                FileUtils: true,
                StyleManager: true,
                channel: true,
                BrokerUtils: true,
            },
        },
        rhino: {
            globals: {
                importPackage: true,
                importClass: true,
                print: true,
                java: true,
                org: true,
                com: true,
                lang: true,
                System: true,
                defineClass: true,
                deserialize: true,
                gc: true,
                help: true,
                load: true,
                loadClass: true,
                Packages: true,
                quit: true,
                readFile: true,
                readUrl: true,
                runCommand: true,
                seal: true,
                serialize: true,
                spawn: true,
                sync: true,
                toint32: true,
                version: true,
            },
        },
        webpack: {
            globals: {
                __webpack_modules__: true,
                __webpack_require__: true,
                __webpack_chunk_load__: true,
                __non_webpack_require__: true,
                __webpack_public_path__: true,
                __webpack_hash__: true,
                __resourceQuery: true,
                DEBUG: true,
            },
        },
    },
};
