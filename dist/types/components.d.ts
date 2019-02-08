/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import './stencil.core';


import {
  IState,
} from './components/autocomplete/autocomplete.interface';
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
} from './components/datepicker/models/datepicker.interface';
import {
  TimepickerState,
} from './components/timepicker/models/timepicker.interface';


export namespace Components {

  interface HadoAutocomplete {
    'initialize': (props?: IState) => void;
    'placeholder': string;
    'property': string;
    'values': any[];
  }
  interface HadoAutocompleteAttributes extends StencilHTMLAttributes {
    'onIsLoaded$'?: (event: CustomEvent) => void;
    'onNewValueList$'?: (event: CustomEvent) => void;
    'onSelectedItem$'?: (event: CustomEvent) => void;
    'placeholder'?: string;
    'property'?: string;
    'values'?: any[];
  }

  interface DateItemList {
    'dataItemConfig': {
      animation: string,
      itemList: DatePickerItem[]
    };
    'dateItemList': DatePickerItem[];
  }
  interface DateItemListAttributes extends StencilHTMLAttributes {
    'dataItemConfig'?: {
      animation: string,
      itemList: DatePickerItem[]
    };
    'dateItemList'?: DatePickerItem[];
    'onDateItemListEvent'?: (event: CustomEvent) => void;
    'onEndDateSelectedEvent'?: (event: CustomEvent) => void;
    'onStartDateSelectedEvent'?: (event: CustomEvent) => void;
  }

  interface DatepickerInput {
    'datepickerModel': DatePickerState;
    'optionsModel': OptionsState;
  }
  interface DatepickerInputAttributes extends StencilHTMLAttributes {
    'datepickerModel'?: DatePickerState;
    'optionsModel'?: OptionsState;
  }

  interface DatepickerModal {
    'datepickerModel': DatePickerState;
    'optionsModel': OptionsState;
  }
  interface DatepickerModalAttributes extends StencilHTMLAttributes {
    'datepickerModel'?: DatePickerState;
    'onClosedModalEvent'?: (event: CustomEvent) => void;
    'onSelectSingleDate'?: (event: CustomEvent) => void;
    'optionsModel'?: OptionsState;
  }

  interface RangepickerInput {
    'optionsModel': OptionsState;
    'rangepickerModel': RangePickerState;
  }
  interface RangepickerInputAttributes extends StencilHTMLAttributes {
    'optionsModel'?: OptionsState;
    'rangepickerModel'?: RangePickerState;
  }

  interface RangepickerModal {
    'optionsModel': OptionsState;
    'rangepickerModel': RangePickerState;
  }
  interface RangepickerModalAttributes extends StencilHTMLAttributes {
    'onCloseModalEvent'?: (event: CustomEvent) => void;
    'onEndDateSelectedEvent'?: (event: CustomEvent) => void;
    'onNavigationChange'?: (event: CustomEvent) => void;
    'onStartDateSelectedEvent'?: (event: CustomEvent) => void;
    'optionsModel'?: OptionsState;
    'rangepickerModel'?: RangePickerState;
  }

  interface HadoDatepicker {
    'activePreviousDate': boolean;
    'angleLeftIcon': string;
    'angleRightIcon': string;
    'calendarIcon': string;
    'closeIcon': string;
    'config': Inputs;
    'datepickerBtnValue': string;
    'days': Array<string>;
    'initAppState': (config?: Inputs) => void;
    'mode': string;
    'months': Array<string>;
    'placeholder': string;
    'placeholder2': string;
    'rangeEndValue': string;
    'rangeNextBtnValue': string;
    'rangeStartValue': string;
    'singleValue': string;
    'startWeek': number;
    'title': string;
    'title2': string;
  }
  interface HadoDatepickerAttributes extends StencilHTMLAttributes {
    'activePreviousDate'?: boolean;
    'angleLeftIcon'?: string;
    'angleRightIcon'?: string;
    'calendarIcon'?: string;
    'closeIcon'?: string;
    'config'?: Inputs;
    'datepickerBtnValue'?: string;
    'days'?: Array<string>;
    'mode'?: string;
    'months'?: Array<string>;
    'onIsLoaded$'?: (event: CustomEvent) => void;
    'placeholder'?: string;
    'placeholder2'?: string;
    'rangeEndValue'?: string;
    'rangeNextBtnValue'?: string;
    'rangeStartValue'?: string;
    'singleValue'?: string;
    'startWeek'?: number;
    'title'?: string;
    'title2'?: string;
  }

  interface HadoInputForm {
    'changeValue': (props?: any) => void;
    'iconClass': string;
    'placeholder': string;
    'readonly': boolean;
    'value': any;
  }
  interface HadoInputFormAttributes extends StencilHTMLAttributes {
    'iconClass'?: string;
    'onInputReady$'?: (event: CustomEvent) => void;
    'onKeyUp$'?: (event: CustomEvent) => void;
    'placeholder'?: string;
    'readonly'?: boolean;
    'value'?: any;
  }

  interface HadoModalDialog {
    'iconClass': string;
    'title': string;
  }
  interface HadoModalDialogAttributes extends StencilHTMLAttributes {
    'iconClass'?: string;
    'onModalEvent$'?: (event: CustomEvent) => void;
    'title'?: string;
  }

  interface HadoTimepicker {
    'config': TimepickerState;
    'initialize': (props?: TimepickerState) => void;
  }
  interface HadoTimepickerAttributes extends StencilHTMLAttributes {
    'config'?: TimepickerState;
    'onDateSelected$'?: (event: CustomEvent) => void;
    'onIsLoaded$'?: (event: CustomEvent) => void;
  }
}

declare global {
  interface StencilElementInterfaces {
    'HadoAutocomplete': Components.HadoAutocomplete;
    'DateItemList': Components.DateItemList;
    'DatepickerInput': Components.DatepickerInput;
    'DatepickerModal': Components.DatepickerModal;
    'RangepickerInput': Components.RangepickerInput;
    'RangepickerModal': Components.RangepickerModal;
    'HadoDatepicker': Components.HadoDatepicker;
    'HadoInputForm': Components.HadoInputForm;
    'HadoModalDialog': Components.HadoModalDialog;
    'HadoTimepicker': Components.HadoTimepicker;
  }

  interface StencilIntrinsicElements {
    'hado-autocomplete': Components.HadoAutocompleteAttributes;
    'date-item-list': Components.DateItemListAttributes;
    'datepicker-input': Components.DatepickerInputAttributes;
    'datepicker-modal': Components.DatepickerModalAttributes;
    'rangepicker-input': Components.RangepickerInputAttributes;
    'rangepicker-modal': Components.RangepickerModalAttributes;
    'hado-datepicker': Components.HadoDatepickerAttributes;
    'hado-input-form': Components.HadoInputFormAttributes;
    'hado-modal-dialog': Components.HadoModalDialogAttributes;
    'hado-timepicker': Components.HadoTimepickerAttributes;
  }


  interface HTMLHadoAutocompleteElement extends Components.HadoAutocomplete, HTMLStencilElement {}
  var HTMLHadoAutocompleteElement: {
    prototype: HTMLHadoAutocompleteElement;
    new (): HTMLHadoAutocompleteElement;
  };

  interface HTMLDateItemListElement extends Components.DateItemList, HTMLStencilElement {}
  var HTMLDateItemListElement: {
    prototype: HTMLDateItemListElement;
    new (): HTMLDateItemListElement;
  };

  interface HTMLDatepickerInputElement extends Components.DatepickerInput, HTMLStencilElement {}
  var HTMLDatepickerInputElement: {
    prototype: HTMLDatepickerInputElement;
    new (): HTMLDatepickerInputElement;
  };

  interface HTMLDatepickerModalElement extends Components.DatepickerModal, HTMLStencilElement {}
  var HTMLDatepickerModalElement: {
    prototype: HTMLDatepickerModalElement;
    new (): HTMLDatepickerModalElement;
  };

  interface HTMLRangepickerInputElement extends Components.RangepickerInput, HTMLStencilElement {}
  var HTMLRangepickerInputElement: {
    prototype: HTMLRangepickerInputElement;
    new (): HTMLRangepickerInputElement;
  };

  interface HTMLRangepickerModalElement extends Components.RangepickerModal, HTMLStencilElement {}
  var HTMLRangepickerModalElement: {
    prototype: HTMLRangepickerModalElement;
    new (): HTMLRangepickerModalElement;
  };

  interface HTMLHadoDatepickerElement extends Components.HadoDatepicker, HTMLStencilElement {}
  var HTMLHadoDatepickerElement: {
    prototype: HTMLHadoDatepickerElement;
    new (): HTMLHadoDatepickerElement;
  };

  interface HTMLHadoInputFormElement extends Components.HadoInputForm, HTMLStencilElement {}
  var HTMLHadoInputFormElement: {
    prototype: HTMLHadoInputFormElement;
    new (): HTMLHadoInputFormElement;
  };

  interface HTMLHadoModalDialogElement extends Components.HadoModalDialog, HTMLStencilElement {}
  var HTMLHadoModalDialogElement: {
    prototype: HTMLHadoModalDialogElement;
    new (): HTMLHadoModalDialogElement;
  };

  interface HTMLHadoTimepickerElement extends Components.HadoTimepicker, HTMLStencilElement {}
  var HTMLHadoTimepickerElement: {
    prototype: HTMLHadoTimepickerElement;
    new (): HTMLHadoTimepickerElement;
  };

  interface HTMLElementTagNameMap {
    'hado-autocomplete': HTMLHadoAutocompleteElement
    'date-item-list': HTMLDateItemListElement
    'datepicker-input': HTMLDatepickerInputElement
    'datepicker-modal': HTMLDatepickerModalElement
    'rangepicker-input': HTMLRangepickerInputElement
    'rangepicker-modal': HTMLRangepickerModalElement
    'hado-datepicker': HTMLHadoDatepickerElement
    'hado-input-form': HTMLHadoInputFormElement
    'hado-modal-dialog': HTMLHadoModalDialogElement
    'hado-timepicker': HTMLHadoTimepickerElement
  }

  interface ElementTagNameMap {
    'hado-autocomplete': HTMLHadoAutocompleteElement;
    'date-item-list': HTMLDateItemListElement;
    'datepicker-input': HTMLDatepickerInputElement;
    'datepicker-modal': HTMLDatepickerModalElement;
    'rangepicker-input': HTMLRangepickerInputElement;
    'rangepicker-modal': HTMLRangepickerModalElement;
    'hado-datepicker': HTMLHadoDatepickerElement;
    'hado-input-form': HTMLHadoInputFormElement;
    'hado-modal-dialog': HTMLHadoModalDialogElement;
    'hado-timepicker': HTMLHadoTimepickerElement;
  }


}
