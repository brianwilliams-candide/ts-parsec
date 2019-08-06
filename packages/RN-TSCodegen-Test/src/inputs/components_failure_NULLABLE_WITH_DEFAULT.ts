

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
 * @format
 * @flow
 */

'use strict';





import {ViewProps} from '../lib/ViewPropTypes';


export type ModuleProps = Readonly<ViewProps & {
  nullable_with_default: null | undefined | WithDefault<Float, 1.0>;
}>;

export default codegenNativeComponent<ModuleProps>('Module');
