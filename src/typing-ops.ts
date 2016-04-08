"use strict";

import { window, commands, workspace } from "vscode";
import * as vscode from "vscode";
import { getEmberVersion } from "./ember-ops";
import { hasFile } from "./file-ops";

const semver = require('semver');

export function appendTypings(): boolean {
    if (!shouldAppendTypings()) {
        return false;
    }
    
    // TODO: When/if @ewhite613 gets his repo up, this should be
    // replaced with logic that is a lot smarter
}

function shouldAppendTypings(): boolean {
     // Check that the workspace exists
    if (!workspace || !workspace.rootPath) {
        return false;
    } else if (hasEmberTypings()) {
        return true;
    }
    
    let version = getEmberVersion();
    
    // TODO: When/if @ewhite613 gets his repo up, this should be
    // replaced with logic that is a lot smarter
    if (semver.gte(version, '2.0.0') && semver.lte(version, '3.0.0')) {
        return true;
    } else {
        return false;
    }
}

export function hasEmberTypings(): boolean {
    return hasFile("/typings/ember/ember.d.ts");
}