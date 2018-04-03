import './stencil.core';
/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */
declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }

  interface HTMLAttributes {}
}

import {
  DatePickerItem,
  DatePickerState,
  OptionsState,
  RangePickerState,
} from '@Datepicker/models/datepicker.interface';
import {
  DatePickerState as DatePickerState2,
  Inputs,
  OptionsState as OptionsState2,
  RangePickerState as RangePickerState2,
} from './modules/datepicker/models/datepicker.interface';
import {
  TimepickerState,
} from './modules/timepicker/models/timepicker.interface';

import {
  Autocomplete as HadoAutocomplete
} from './modules/autocomplete/autocomplete';

declare global {
  interface HTMLHadoAutocompleteElement extends HadoAutocomplete, HTMLStencilElement {
  }
  var HTMLHadoAutocompleteElement: {
    prototype: HTMLHadoAutocompleteElement;
    new (): HTMLHadoAutocompleteElement;
  };
  interface HTMLElementTagNameMap {
    "hado-autocomplete": HTMLHadoAutocompleteElement;
  }
  interface ElementTagNameMap {
    "hado-autocomplete": HTMLHadoAutocompleteElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "hado-autocomplete": JSXElements.HadoAutocompleteAttributes;
    }
  }
  namespace JSXElements {
    export interface HadoAutocompleteAttributes extends HTMLAttributes {
      placeholder?: string;
      property?: string;
      values?: any[];
    }
  }
}


import {
  DateItemList as DateItemList
} from './modules/datepicker/components/calendar-date-item/calendar-date-item';

declare global {
  interface HTMLDateItemListElement extends DateItemList, HTMLStencilElement {
  }
  var HTMLDateItemListElement: {
    prototype: HTMLDateItemListElement;
    new (): HTMLDateItemListElement;
  };
  interface HTMLElementTagNameMap {
    "date-item-list": HTMLDateItemListElement;
  }
  interface ElementTagNameMap {
    "date-item-list": HTMLDateItemListElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "date-item-list": JSXElements.DateItemListAttributes;
    }
  }
  namespace JSXElements {
    export interface DateItemListAttributes extends HTMLAttributes {
      dataItemConfig?: {
    animation: string,
    itemList: DatePickerItem[]
  };
      dateItemList?: DatePickerItem[];
    }
  }
}


import {
  DatepickerInput as DatepickerInput
} from './modules/datepicker/components/datepicker-input/datepicker-input';

declare global {
  interface HTMLDatepickerInputElement extends DatepickerInput, HTMLStencilElement {
  }
  var HTMLDatepickerInputElement: {
    prototype: HTMLDatepickerInputElement;
    new (): HTMLDatepickerInputElement;
  };
  interface HTMLElementTagNameMap {
    "datepicker-input": HTMLDatepickerInputElement;
  }
  interface ElementTagNameMap {
    "datepicker-input": HTMLDatepickerInputElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "datepicker-input": JSXElements.DatepickerInputAttributes;
    }
  }
  namespace JSXElements {
    export interface DatepickerInputAttributes extends HTMLAttributes {
      datepickerModel?: DatePickerState;
      optionsModel?: OptionsState;
    }
  }
}


import {
  DatepickerModal as DatepickerModal
} from './modules/datepicker/components/datepicker-modal/datepicker-modal';

declare global {
  interface HTMLDatepickerModalElement extends DatepickerModal, HTMLStencilElement {
  }
  var HTMLDatepickerModalElement: {
    prototype: HTMLDatepickerModalElement;
    new (): HTMLDatepickerModalElement;
  };
  interface HTMLElementTagNameMap {
    "datepicker-modal": HTMLDatepickerModalElement;
  }
  interface ElementTagNameMap {
    "datepicker-modal": HTMLDatepickerModalElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "datepicker-modal": JSXElements.DatepickerModalAttributes;
    }
  }
  namespace JSXElements {
    export interface DatepickerModalAttributes extends HTMLAttributes {
      datepickerModel?: DatePickerState;
      optionsModel?: OptionsState;
    }
  }
}


import {
  RangepickerInput as RangepickerInput
} from './modules/datepicker/components/rangepicker-input/rangepicker-input';

declare global {
  interface HTMLRangepickerInputElement extends RangepickerInput, HTMLStencilElement {
  }
  var HTMLRangepickerInputElement: {
    prototype: HTMLRangepickerInputElement;
    new (): HTMLRangepickerInputElement;
  };
  interface HTMLElementTagNameMap {
    "rangepicker-input": HTMLRangepickerInputElement;
  }
  interface ElementTagNameMap {
    "rangepicker-input": HTMLRangepickerInputElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "rangepicker-input": JSXElements.RangepickerInputAttributes;
    }
  }
  namespace JSXElements {
    export interface RangepickerInputAttributes extends HTMLAttributes {
      optionsModel?: OptionsState;
      rangepickerModel?: RangePickerState;
    }
  }
}


import {
  RangepickerModal as RangepickerModal
} from './modules/datepicker/components/rangepicker-modal/rangepicker-modal';

declare global {
  interface HTMLRangepickerModalElement extends RangepickerModal, HTMLStencilElement {
  }
  var HTMLRangepickerModalElement: {
    prototype: HTMLRangepickerModalElement;
    new (): HTMLRangepickerModalElement;
  };
  interface HTMLElementTagNameMap {
    "rangepicker-modal": HTMLRangepickerModalElement;
  }
  interface ElementTagNameMap {
    "rangepicker-modal": HTMLRangepickerModalElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "rangepicker-modal": JSXElements.RangepickerModalAttributes;
    }
  }
  namespace JSXElements {
    export interface RangepickerModalAttributes extends HTMLAttributes {
      optionsModel?: OptionsState;
      rangepickerModel?: RangePickerState;
    }
  }
}


import {
  StDatepicker as HadoDatepicker
} from './modules/datepicker/datepicker';

declare global {
  interface HTMLHadoDatepickerElement extends HadoDatepicker, HTMLStencilElement {
  }
  var HTMLHadoDatepickerElement: {
    prototype: HTMLHadoDatepickerElement;
    new (): HTMLHadoDatepickerElement;
  };
  interface HTMLElementTagNameMap {
    "hado-datepicker": HTMLHadoDatepickerElement;
  }
  interface ElementTagNameMap {
    "hado-datepicker": HTMLHadoDatepickerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "hado-datepicker": JSXElements.HadoDatepickerAttributes;
    }
  }
  namespace JSXElements {
    export interface HadoDatepickerAttributes extends HTMLAttributes {
      activePreviousDate?: boolean;
      angleLeftIcon?: string;
      angleRightIcon?: string;
      calendarIcon?: string;
      closeIcon?: string;
      config?: Inputs;
      datepickerBtnValue?: string;
      days?: Array<string>;
      mode?: string;
      months?: Array<string>;
      placeholder?: string;
      placeholder2?: string;
      rangeEndValue?: string;
      rangeNextBtnValue?: string;
      rangeStartValue?: string;
      singleValue?: string;
      startWeek?: number;
      title?: string;
      title2?: string;
    }
  }
}


import {
  InputFormComponent as HadoInputForm
} from './modules/shared/input-form/input-form';

declare global {
  interface HTMLHadoInputFormElement extends HadoInputForm, HTMLStencilElement {
  }
  var HTMLHadoInputFormElement: {
    prototype: HTMLHadoInputFormElement;
    new (): HTMLHadoInputFormElement;
  };
  interface HTMLElementTagNameMap {
    "hado-input-form": HTMLHadoInputFormElement;
  }
  interface ElementTagNameMap {
    "hado-input-form": HTMLHadoInputFormElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "hado-input-form": JSXElements.HadoInputFormAttributes;
    }
  }
  namespace JSXElements {
    export interface HadoInputFormAttributes extends HTMLAttributes {
      iconClass?: string;
      placeholder?: string;
      readonly?: boolean;
      value?: any;
    }
  }
}


import {
  ModalDialogComponent as HadoModalDialog
} from './modules/shared/modal-dialog/modal-dialog';

declare global {
  interface HTMLHadoModalDialogElement extends HadoModalDialog, HTMLStencilElement {
  }
  var HTMLHadoModalDialogElement: {
    prototype: HTMLHadoModalDialogElement;
    new (): HTMLHadoModalDialogElement;
  };
  interface HTMLElementTagNameMap {
    "hado-modal-dialog": HTMLHadoModalDialogElement;
  }
  interface ElementTagNameMap {
    "hado-modal-dialog": HTMLHadoModalDialogElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "hado-modal-dialog": JSXElements.HadoModalDialogAttributes;
    }
  }
  namespace JSXElements {
    export interface HadoModalDialogAttributes extends HTMLAttributes {
      iconClass?: string;
      title?: string;
    }
  }
}


import {
  StTimepicker as HadoTimepicker
} from './modules/timepicker/timepicker';

declare global {
  interface HTMLHadoTimepickerElement extends HadoTimepicker, HTMLStencilElement {
  }
  var HTMLHadoTimepickerElement: {
    prototype: HTMLHadoTimepickerElement;
    new (): HTMLHadoTimepickerElement;
  };
  interface HTMLElementTagNameMap {
    "hado-timepicker": HTMLHadoTimepickerElement;
  }
  interface ElementTagNameMap {
    "hado-timepicker": HTMLHadoTimepickerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "hado-timepicker": JSXElements.HadoTimepickerAttributes;
    }
  }
  namespace JSXElements {
    export interface HadoTimepickerAttributes extends HTMLAttributes {
      config?: TimepickerState;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
