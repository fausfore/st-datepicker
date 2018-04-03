import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
import '../../stencil.core';
/// <reference types="moment" />
import { Moment } from 'moment';
import { OptionsState, RangePickerState } from '../../models/datepicker.interface';
export declare class DatepickerRangeInput {
    rangepickerModel: RangePickerState;
    optionsModel: OptionsState;
    openDatePicker: boolean;
    activeFormType: string;
    StartDateSelected: Moment;
    EndDateSelected: Moment;
    componentWillLoad(): void;
    getLabel(dateValue: Moment): string;
    updateNavigation(event: CustomEvent): void;
    updateStartDate(event: CustomEvent): void;
    updateEndDate(event: CustomEvent): void;
    toggleRangePickerModal(type?: string): void;
    render(): JSX.Element;
}
