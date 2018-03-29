import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
import { DatePickerState, OptionsState, RangePickerState, Inputs } from './models/datepicker.interface';
export declare class StDatepicker {
    DpElement: HTMLElement;
    IsLoaded$: EventEmitter;
    config: Inputs;
    mode: string;
    singleValue: string;
    calendarIcon: string;
    angleRightIcon: string;
    angleLeftIcon: string;
    closeIcon: string;
    activePreviousDate: boolean;
    rangeStartValue: string;
    rangeEndValue: string;
    startWeek: number;
    title: string;
    title2: string;
    datepickerBtnValue: string;
    rangeNextBtnValue: string;
    months: Array<string>;
    days: Array<string>;
    placeholder: string;
    placeholder2: string;
    datepickerModel: DatePickerState;
    rangepickerModel: RangePickerState;
    optionsModel: OptionsState;
    reloadState(): void;
    readonly props: HTMLElement;
    initAppState(config?: Inputs): void;
    componentDidLoad(): void;
    componentWillLoad(): void;
    buildPropsValue(): void;
    render(): JSX.Element;
}