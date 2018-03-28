import '../../../../stencil.core';
import { Moment } from 'moment';
import { OptionsState, RangePickerState } from '@Datepicker/models/datepicker.interface';
export declare class RangepickerInput {
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