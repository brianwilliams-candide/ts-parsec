

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

type ModuleProps = Readonly<ViewProps & {
  // No Props

  // Events
  onDirectEventDefinedInline:
    DirectEventHandler<
      Readonly<{
        
  boolean_required: boolean;
  boolean_optional_key?: boolean;
  boolean_optional_value: null | undefined | boolean;
  boolean_optional_both?: null | undefined | boolean;

  string_required: string;
  string_optional_key?: string;
  string_optional_value: null | undefined | string;
  string_optional_both?: null | undefined | string;

  float_required: Float;
  float_optional_key?: Float;
  float_optional_value: null | undefined | Float;
  float_optional_both?: null | undefined | Float;

  int32_required: Int32;
  int32_optional_key?: Int32;
  int32_optional_value: null | undefined | Int32;
  int32_optional_both?: null | undefined | Int32;

  enum_required: ('small' | 'large');
  enum_optional_key?: ('small' | 'large');
  enum_optional_value: null | undefined | ('small' | 'large');
  enum_optional_both?: null | undefined | ('small' | 'large');

  object_required: {
    boolean_required: boolean;
  }

  object_optional_key?: {
    string_optional_key?: string;
  }

  object_optional_value: null | undefined | {
    float_optional_value: null | undefined | Float;
  }

  object_optional_both?: null | undefined | {
    int32_optional_both?: null | undefined | Int32;
  }

  object_required_nested_2_layers: {
    object_optional_nested_1_layer?: null | undefined | {
      boolean_required: Int32;
      string_optional_key?: string;
      float_optional_value: null | undefined | Float;
      int32_optional_both?: null | undefined | Int32;
    }
  }

      }>;
    >;

  onDirectEventDefinedInlineOptionalKey?:
    DirectEventHandler<
      Readonly<{
        
  boolean_required: boolean;
  boolean_optional_key?: boolean;
  boolean_optional_value: null | undefined | boolean;
  boolean_optional_both?: null | undefined | boolean;

  string_required: string;
  string_optional_key?: string;
  string_optional_value: null | undefined | string;
  string_optional_both?: null | undefined | string;

  float_required: Float;
  float_optional_key?: Float;
  float_optional_value: null | undefined | Float;
  float_optional_both?: null | undefined | Float;

  int32_required: Int32;
  int32_optional_key?: Int32;
  int32_optional_value: null | undefined | Int32;
  int32_optional_both?: null | undefined | Int32;

  enum_required: ('small' | 'large');
  enum_optional_key?: ('small' | 'large');
  enum_optional_value: null | undefined | ('small' | 'large');
  enum_optional_both?: null | undefined | ('small' | 'large');

  object_required: {
    boolean_required: boolean;
  }

  object_optional_key?: {
    string_optional_key?: string;
  }

  object_optional_value: null | undefined | {
    float_optional_value: null | undefined | Float;
  }

  object_optional_both?: null | undefined | {
    int32_optional_both?: null | undefined | Int32;
  }

  object_required_nested_2_layers: {
    object_optional_nested_1_layer?: null | undefined | {
      boolean_required: Int32;
      string_optional_key?: string;
      float_optional_value: null | undefined | Float;
      int32_optional_both?: null | undefined | Int32;
    }
  }

      }>;
    >;

  onDirectEventDefinedInlineOptionalValue: null | undefined | 
    DirectEventHandler<
      Readonly<{
        
  boolean_required: boolean;
  boolean_optional_key?: boolean;
  boolean_optional_value: null | undefined | boolean;
  boolean_optional_both?: null | undefined | boolean;

  string_required: string;
  string_optional_key?: string;
  string_optional_value: null | undefined | string;
  string_optional_both?: null | undefined | string;

  float_required: Float;
  float_optional_key?: Float;
  float_optional_value: null | undefined | Float;
  float_optional_both?: null | undefined | Float;

  int32_required: Int32;
  int32_optional_key?: Int32;
  int32_optional_value: null | undefined | Int32;
  int32_optional_both?: null | undefined | Int32;

  enum_required: ('small' | 'large');
  enum_optional_key?: ('small' | 'large');
  enum_optional_value: null | undefined | ('small' | 'large');
  enum_optional_both?: null | undefined | ('small' | 'large');

  object_required: {
    boolean_required: boolean;
  }

  object_optional_key?: {
    string_optional_key?: string;
  }

  object_optional_value: null | undefined | {
    float_optional_value: null | undefined | Float;
  }

  object_optional_both?: null | undefined | {
    int32_optional_both?: null | undefined | Int32;
  }

  object_required_nested_2_layers: {
    object_optional_nested_1_layer?: null | undefined | {
      boolean_required: Int32;
      string_optional_key?: string;
      float_optional_value: null | undefined | Float;
      int32_optional_both?: null | undefined | Int32;
    }
  }

      }>;
    >;

  onDirectEventDefinedInlineOptionalBoth?: null | undefined | 
    DirectEventHandler<
      Readonly<{
        
  boolean_required: boolean;
  boolean_optional_key?: boolean;
  boolean_optional_value: null | undefined | boolean;
  boolean_optional_both?: null | undefined | boolean;

  string_required: string;
  string_optional_key?: string;
  string_optional_value: null | undefined | string;
  string_optional_both?: null | undefined | string;

  float_required: Float;
  float_optional_key?: Float;
  float_optional_value: null | undefined | Float;
  float_optional_both?: null | undefined | Float;

  int32_required: Int32;
  int32_optional_key?: Int32;
  int32_optional_value: null | undefined | Int32;
  int32_optional_both?: null | undefined | Int32;

  enum_required: ('small' | 'large');
  enum_optional_key?: ('small' | 'large');
  enum_optional_value: null | undefined | ('small' | 'large');
  enum_optional_both?: null | undefined | ('small' | 'large');

  object_required: {
    boolean_required: boolean;
  }

  object_optional_key?: {
    string_optional_key?: string;
  }

  object_optional_value: null | undefined | {
    float_optional_value: null | undefined | Float;
  }

  object_optional_both?: null | undefined | {
    int32_optional_both?: null | undefined | Int32;
  }

  object_required_nested_2_layers: {
    object_optional_nested_1_layer?: null | undefined | {
      boolean_required: Int32;
      string_optional_key?: string;
      float_optional_value: null | undefined | Float;
      int32_optional_both?: null | undefined | Int32;
    }
  }

      }>;
    >;

  onDirectEventDefinedInlineWithPaperName?: null | undefined | 
    DirectEventHandler<
      Readonly<{
        
  boolean_required: boolean;
  boolean_optional_key?: boolean;
  boolean_optional_value: null | undefined | boolean;
  boolean_optional_both?: null | undefined | boolean;

  string_required: string;
  string_optional_key?: string;
  string_optional_value: null | undefined | string;
  string_optional_both?: null | undefined | string;

  float_required: Float;
  float_optional_key?: Float;
  float_optional_value: null | undefined | Float;
  float_optional_both?: null | undefined | Float;

  int32_required: Int32;
  int32_optional_key?: Int32;
  int32_optional_value: null | undefined | Int32;
  int32_optional_both?: null | undefined | Int32;

  enum_required: ('small' | 'large');
  enum_optional_key?: ('small' | 'large');
  enum_optional_value: null | undefined | ('small' | 'large');
  enum_optional_both?: null | undefined | ('small' | 'large');

  object_required: {
    boolean_required: boolean;
  }

  object_optional_key?: {
    string_optional_key?: string;
  }

  object_optional_value: null | undefined | {
    float_optional_value: null | undefined | Float;
  }

  object_optional_both?: null | undefined | {
    int32_optional_both?: null | undefined | Int32;
  }

  object_required_nested_2_layers: {
    object_optional_nested_1_layer?: null | undefined | {
      boolean_required: Int32;
      string_optional_key?: string;
      float_optional_value: null | undefined | Float;
      int32_optional_both?: null | undefined | Int32;
    }
  }

      }>;
      'paperDirectEventDefinedInlineWithPaperName',
    >;

  onBubblingEventDefinedInline:
    BubblingEventHandler<
      Readonly<{
        
  boolean_required: boolean;
  boolean_optional_key?: boolean;
  boolean_optional_value: null | undefined | boolean;
  boolean_optional_both?: null | undefined | boolean;

  string_required: string;
  string_optional_key?: string;
  string_optional_value: null | undefined | string;
  string_optional_both?: null | undefined | string;

  float_required: Float;
  float_optional_key?: Float;
  float_optional_value: null | undefined | Float;
  float_optional_both?: null | undefined | Float;

  int32_required: Int32;
  int32_optional_key?: Int32;
  int32_optional_value: null | undefined | Int32;
  int32_optional_both?: null | undefined | Int32;

  enum_required: ('small' | 'large');
  enum_optional_key?: ('small' | 'large');
  enum_optional_value: null | undefined | ('small' | 'large');
  enum_optional_both?: null | undefined | ('small' | 'large');

  object_required: {
    boolean_required: boolean;
  }

  object_optional_key?: {
    string_optional_key?: string;
  }

  object_optional_value: null | undefined | {
    float_optional_value: null | undefined | Float;
  }

  object_optional_both?: null | undefined | {
    int32_optional_both?: null | undefined | Int32;
  }

  object_required_nested_2_layers: {
    object_optional_nested_1_layer?: null | undefined | {
      boolean_required: Int32;
      string_optional_key?: string;
      float_optional_value: null | undefined | Float;
      int32_optional_both?: null | undefined | Int32;
    }
  }

      }>;
    >;

  onBubblingEventDefinedInlineOptionalKey?:
    BubblingEventHandler<
      Readonly<{
        
  boolean_required: boolean;
  boolean_optional_key?: boolean;
  boolean_optional_value: null | undefined | boolean;
  boolean_optional_both?: null | undefined | boolean;

  string_required: string;
  string_optional_key?: string;
  string_optional_value: null | undefined | string;
  string_optional_both?: null | undefined | string;

  float_required: Float;
  float_optional_key?: Float;
  float_optional_value: null | undefined | Float;
  float_optional_both?: null | undefined | Float;

  int32_required: Int32;
  int32_optional_key?: Int32;
  int32_optional_value: null | undefined | Int32;
  int32_optional_both?: null | undefined | Int32;

  enum_required: ('small' | 'large');
  enum_optional_key?: ('small' | 'large');
  enum_optional_value: null | undefined | ('small' | 'large');
  enum_optional_both?: null | undefined | ('small' | 'large');

  object_required: {
    boolean_required: boolean;
  }

  object_optional_key?: {
    string_optional_key?: string;
  }

  object_optional_value: null | undefined | {
    float_optional_value: null | undefined | Float;
  }

  object_optional_both?: null | undefined | {
    int32_optional_both?: null | undefined | Int32;
  }

  object_required_nested_2_layers: {
    object_optional_nested_1_layer?: null | undefined | {
      boolean_required: Int32;
      string_optional_key?: string;
      float_optional_value: null | undefined | Float;
      int32_optional_both?: null | undefined | Int32;
    }
  }

      }>;
    >;

  onBubblingEventDefinedInlineOptionalValue: null | undefined | 
    BubblingEventHandler<
      Readonly<{
        
  boolean_required: boolean;
  boolean_optional_key?: boolean;
  boolean_optional_value: null | undefined | boolean;
  boolean_optional_both?: null | undefined | boolean;

  string_required: string;
  string_optional_key?: string;
  string_optional_value: null | undefined | string;
  string_optional_both?: null | undefined | string;

  float_required: Float;
  float_optional_key?: Float;
  float_optional_value: null | undefined | Float;
  float_optional_both?: null | undefined | Float;

  int32_required: Int32;
  int32_optional_key?: Int32;
  int32_optional_value: null | undefined | Int32;
  int32_optional_both?: null | undefined | Int32;

  enum_required: ('small' | 'large');
  enum_optional_key?: ('small' | 'large');
  enum_optional_value: null | undefined | ('small' | 'large');
  enum_optional_both?: null | undefined | ('small' | 'large');

  object_required: {
    boolean_required: boolean;
  }

  object_optional_key?: {
    string_optional_key?: string;
  }

  object_optional_value: null | undefined | {
    float_optional_value: null | undefined | Float;
  }

  object_optional_both?: null | undefined | {
    int32_optional_both?: null | undefined | Int32;
  }

  object_required_nested_2_layers: {
    object_optional_nested_1_layer?: null | undefined | {
      boolean_required: Int32;
      string_optional_key?: string;
      float_optional_value: null | undefined | Float;
      int32_optional_both?: null | undefined | Int32;
    }
  }

      }>;
    >;

  onBubblingEventDefinedInlineOptionalBoth?: null | undefined | 
    BubblingEventHandler<
      Readonly<{
        
  boolean_required: boolean;
  boolean_optional_key?: boolean;
  boolean_optional_value: null | undefined | boolean;
  boolean_optional_both?: null | undefined | boolean;

  string_required: string;
  string_optional_key?: string;
  string_optional_value: null | undefined | string;
  string_optional_both?: null | undefined | string;

  float_required: Float;
  float_optional_key?: Float;
  float_optional_value: null | undefined | Float;
  float_optional_both?: null | undefined | Float;

  int32_required: Int32;
  int32_optional_key?: Int32;
  int32_optional_value: null | undefined | Int32;
  int32_optional_both?: null | undefined | Int32;

  enum_required: ('small' | 'large');
  enum_optional_key?: ('small' | 'large');
  enum_optional_value: null | undefined | ('small' | 'large');
  enum_optional_both?: null | undefined | ('small' | 'large');

  object_required: {
    boolean_required: boolean;
  }

  object_optional_key?: {
    string_optional_key?: string;
  }

  object_optional_value: null | undefined | {
    float_optional_value: null | undefined | Float;
  }

  object_optional_both?: null | undefined | {
    int32_optional_both?: null | undefined | Int32;
  }

  object_required_nested_2_layers: {
    object_optional_nested_1_layer?: null | undefined | {
      boolean_required: Int32;
      string_optional_key?: string;
      float_optional_value: null | undefined | Float;
      int32_optional_both?: null | undefined | Int32;
    }
  }

      }>;
    >;

  onBubblingEventDefinedInlineWithPaperName?: null | undefined | 
    BubblingEventHandler<
      Readonly<{
        
  boolean_required: boolean;
  boolean_optional_key?: boolean;
  boolean_optional_value: null | undefined | boolean;
  boolean_optional_both?: null | undefined | boolean;

  string_required: string;
  string_optional_key?: string;
  string_optional_value: null | undefined | string;
  string_optional_both?: null | undefined | string;

  float_required: Float;
  float_optional_key?: Float;
  float_optional_value: null | undefined | Float;
  float_optional_both?: null | undefined | Float;

  int32_required: Int32;
  int32_optional_key?: Int32;
  int32_optional_value: null | undefined | Int32;
  int32_optional_both?: null | undefined | Int32;

  enum_required: ('small' | 'large');
  enum_optional_key?: ('small' | 'large');
  enum_optional_value: null | undefined | ('small' | 'large');
  enum_optional_both?: null | undefined | ('small' | 'large');

  object_required: {
    boolean_required: boolean;
  }

  object_optional_key?: {
    string_optional_key?: string;
  }

  object_optional_value: null | undefined | {
    float_optional_value: null | undefined | Float;
  }

  object_optional_both?: null | undefined | {
    int32_optional_both?: null | undefined | Int32;
  }

  object_required_nested_2_layers: {
    object_optional_nested_1_layer?: null | undefined | {
      boolean_required: Int32;
      string_optional_key?: string;
      float_optional_value: null | undefined | Float;
      int32_optional_both?: null | undefined | Int32;
    }
  }

      }>;
      'paperBubblingEventDefinedInlineWithPaperName'
    >;
}>;

export default codegenNativeComponent<ModuleProps>('Module');

