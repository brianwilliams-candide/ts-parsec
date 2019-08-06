

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



import {ViewProps} from '../lib/ViewPropTypes';

import codegenNativeComponent = require('../lib/codegenNativeComponent');

type ModuleProps = Readonly<ViewProps & {

  // No props

  // Events defined inline
  onDirectEventDefinedInlineNull:DirectEventHandler<null>;
  onDirectEventDefinedInlineNullOptionalKey?: DirectEventHandler<null>;
  onDirectEventDefinedInlineNullOptionalValue: null | undefined | DirectEventHandler<null>;
  onDirectEventDefinedInlineNullOptionalBoth?: DirectEventHandler<null>;
  onDirectEventDefinedInlineNullWithPaperName?: null | undefined | 
    DirectEventHandler<
      null;
      'paperDirectEventDefinedInlineNullWithPaperName',
    >;

  onBubblingEventDefinedInlineNull: BubblingEventHandler<null>;
  onBubblingEventDefinedInlineNullOptionalKey?: BubblingEventHandler<null>;
  onBubblingEventDefinedInlineNullOptionalValue: null | undefined | BubblingEventHandler<null>;
  onBubblingEventDefinedInlineNullOptionalBoth?: null | undefined | BubblingEventHandler<null>;
  onBubblingEventDefinedInlineNullWithPaperName?: null | undefined | 
    BubblingEventHandler<
      null;
      'paperBubblingEventDefinedInlineNullWithPaperName',
    >;
}>;

export default codegenNativeComponent<ModuleProps>('Module');
