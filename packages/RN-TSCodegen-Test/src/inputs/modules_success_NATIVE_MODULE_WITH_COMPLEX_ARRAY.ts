

import {
  BubblingEventHandler,
  DirectEventHandler,
  Float,
  Int32,
  NotString,
  Stringish,
  WithDefault,
} from '../lib/CodegenTypes';
import * as React from '../lib/React';
import codegenNativeComponent = require('../lib/codegenNativeComponent');
import codegenNativeCommands = require('../lib/codegenNativeCommands');


/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';

import {TurboModule} from '../lib/RCTExport';
import * as TurboModuleRegistry from '../lib/TurboModuleRegistry';

export interface Spec extends TurboModule {
  getArray (arg: Array<Array<Array<Array<Array<any>>>>>) : Array<Array<Array<string>>>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');

