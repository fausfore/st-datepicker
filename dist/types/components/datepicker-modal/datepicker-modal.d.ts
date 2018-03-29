import '../../stencil.core';
import '../../stencil.core';
/// <reference types="moment" />
import { EventEmitter } from '../../stencil.core';
import { Moment } from 'moment';
import { DatePickerItem, DatePickerState, OptionsState } from '../../models/datepicker.interface';
export declare class DatepickerModal {
    closedModalEvent: EventEmitter;
    selectSingleDate: EventEmitter;
    datepickerModel: DatePickerState;
    optionsModel: OptionsState;
    DOMElement: HTMLElement;
    month: string;
    year: string;
    datePickerConfig: {
        year: any;
        month: any;
    };
    localDateSelected: Moment;
    dataItemConfig: {
        animation: string;
        itemList: DatePickerItem[];
    };
    days: Array<string>;
    componentDidLoad(): void;
    initCalendarDateValue(): void;
    updateDatepickerLabel(config: {
        year: number;
        month: string;
    }): void;
    activeTouchArea(): void;
    nextMonth(): void;
    prevMonth(): void;
    chooseDate(event: CustomEvent): void;
    selectDate(): void;
    closeModal(): void;
    render(): JSX.Element;
}