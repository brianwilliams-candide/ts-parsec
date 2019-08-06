

import {
  BubblingEvent,
  BubblingEventHandler,
  DirectEvent,
  DirectEventHandler,
  Float,
  Int32,
  NotString,
  Options,
  Stringish,
  WithDefault,
} from '../lib/CodegenTypes';
import * as React from '../lib/React';


/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

'use strict';

import codegenNativeComponent = require('../lib/codegenNativeComponent');
import codegenNativeCommands = require('../lib/codegenNativeCommands');



import {ViewProps} from '../lib/ViewPropTypes';

export type ModuleProps = Readonly<ViewProps & {
  // No props
}>;

export const Commands = codegenNativeCommands<{
  hotspotUpdate (ref: React.Ref<'RCTView'>, x: Int32, y: Int32) : void;
}>({
  supportedCommands: ['hotspotUpdate']
});

export default codegenNativeComponent<ModuleProps>('Module');
