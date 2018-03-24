/*! Built with http://stenciljs.com */
const{h:e}=window.StDatepicker;import t from"./chunk1.js";import{filterDayLabel as a,validNewDateParam as i,buildCalendar as n}from"./chunk2.js";class o{componentWillLoad(){console.log("[RangepickerInput] - componentWillLoad"),this.openDatePicker=this.rangepickerModel.openDatePicker,this.activeFormType=this.rangepickerModel.InputType,this.StartDateSelected=this.rangepickerModel.rangeStartValue,this.EndDateSelected=this.rangepickerModel.rangeEndValue}getLabel(e){return e?t(e).format("DD/MM/YYYY"):null}updateNavigation(e){this.activeFormType=e.detail,this.rangepickerModel.InputType=e.detail}updateStartDate(e){this.StartDateSelected=e.detail}updateEndDate(e){this.EndDateSelected=e.detail}toggleRangePickerModal(e){e&&(this.activeFormType=e,this.rangepickerModel.InputType=e),this.openDatePicker=!this.openDatePicker}render(){const{rangeEndValue:t,rangeStartValue:a}=this.rangepickerModel,{calendarIconClass:i}=this.optionsModel;return e("div",{class:"oui-datepicker"},e("h1",null,"Range datepicker"),e("p",null,"Choisir une date : "),e("div",{class:"datepicker-range-input"},e("div",{class:"datepicker-input-group",onClick:()=>this.toggleRangePickerModal("start")},e("input",{readOnly:!0,type:"text",placeholder:"séléctionnez votre date de départ",value:this.getLabel(a),class:`datepicker-input ${"start"===this.activeFormType?"active":""}`}),e("i",{class:i})),e("div",{class:"datepicker-input-group",onClick:()=>this.toggleRangePickerModal("end")},e("input",{readOnly:!0,type:"text",placeholder:"séléctionnez votre date d'arrivé",value:this.getLabel(t),class:`datepicker-input ${"end"===this.activeFormType?"active":""}`}),e("i",{class:i})),this.openDatePicker?e("rangepicker-modal",{rangepickerModel:this.rangepickerModel,optionsModel:this.optionsModel}):null))}static get is(){return"rangepicker-input"}static get properties(){return{activeFormType:{state:!0},EndDateSelected:{state:!0},openDatePicker:{state:!0},optionsModel:{type:"Any",attr:"options-model"},rangepickerModel:{type:"Any",attr:"rangepicker-model"},StartDateSelected:{state:!0}}}static get style(){return".datepicker-range-input{display:flex;justify-content:space-around;position:relative;flex-direction:row}\@media only screen and (max-width:780px){.datepicker-range-input{flex-direction:column}}.datepicker-range-input .datepicker-input-group{width:40%}\@media only screen and (max-width:780px){.datepicker-range-input .datepicker-input-group{width:100%;margin:5px 0}}.datepicker-range-input .datepicker-input.active{border-bottom:solid 2px}"}}class r{constructor(){this.datePickerConfig={year:void 0,month:void 0},this.days=[]}componentWillLoad(){this.current_date=t(),this.formType=this.rangepickerModel.InputType}componentDidLoad(){this.initCalendarDateValue()}initCalendarDateValue(){let e;e="start"===this.rangepickerModel.InputType?this.rangepickerModel.rangeStartValue||t():this.rangepickerModel.rangeEndValue||t(),this.datePickerConfig.year=Number(e.format("YYYY")),this.datePickerConfig.month=Number(e.format("MM"))-1,this.changeDateParmaValue()}updateDatepickerLabel(){this.yearLeft=this.datePickerConfig.year,this.monthLeft=this.optionsModel.labels.months[this.datePickerConfig.month];const e=i(this.datePickerConfig.year,this.datePickerConfig.month,"INCREMENT");this.yearRight=e.year.toString(),this.monthRight=this.optionsModel.labels.months[e.month]}changeDateParmaValue(){this.dataItemLeftConfig={animation:void 0,itemList:n({year:this.datePickerConfig.year,month:this.datePickerConfig.month},this.optionsModel,this.rangepickerModel.rangeStartValue,{rangeStartValue:this.rangepickerModel.rangeStartValue,rangeEndValue:this.rangepickerModel.rangeEndValue})},this.dataItemRightConfig={animation:void 0,itemList:n(i(this.datePickerConfig.year,this.datePickerConfig.month,"INCREMENT"),this.optionsModel,this.rangepickerModel.rangeStartValue,{rangeStartValue:this.rangepickerModel.rangeStartValue,rangeEndValue:this.rangepickerModel.rangeEndValue})},this.updateDatepickerLabel()}nextMonth(){this.datePickerConfig=i(this.datePickerConfig.year,this.datePickerConfig.month,"INCREMENT"),this.changeDateParmaValue()}prevMonth(){this.datePickerConfig=i(this.datePickerConfig.year,this.datePickerConfig.month,"DECREMENT"),this.changeDateParmaValue()}nextInputForm(e){this.navigationChange.emit(e),this.formType=e}chooseDate(e){const t=window.matchMedia("(max-width: 780px");"start"===this.formType?(this.rangepickerModel.rangeStartValue=e.detail,t.matches||this.nextInputForm("end"),this.startDateSelectedEvent.emit(e.detail)):(this.rangepickerModel.rangeEndValue=e.detail,this.endDateSelectedEvent.emit(e.detail)),this.changeDateParmaValue()}closeModal(){document.getElementById("range-container").className="range-container on-modal-leave",setTimeout(()=>{this.closeModalEvent.emit()},300)}render(){const{angleLeftIconClass:t,angleRightIconClass:i,closeIconClass:n,labels:o}=this.optionsModel,r=o.days.map(t=>e("li",null,a(t)));return e("div",{class:"rangepicker-container"},e("div",{class:"rangepicker-overlay",onClick:()=>this.closeModal()}),e("div",{id:"range-container",class:"range-container on-modal-enter"},e("div",{class:`rangepicker-modal previous-date ${"start"===this.formType?"active":""}`},e("header",{class:"modal-header"},e("h2",{class:"title"},o.title),e("i",{class:n,onClick:()=>this.closeModal()})),e("article",{class:"modal-content"},e("header",{class:"content-header"},e("i",{class:`icon-prev ${t}`,onClick:()=>this.prevMonth()}),e("label",null,this.monthLeft," ",this.yearLeft),e("i",{class:`icon-next ${i}`,onClick:()=>this.nextMonth()})),e("article",null,e("ul",{class:"day-list"},r),e("date-item-list",{dataItemConfig:this.dataItemLeftConfig}))),e("footer",{class:"modal-footer"},e("button",{onClick:()=>this.nextInputForm("end")},o.rangeNextBtnValue))),e("div",{class:`rangepicker-modal next-date ${"end"===this.formType?"active":""}`},e("header",{class:"modal-header"},e("h2",{class:"title"},o.title_2),e("i",{class:n,onClick:()=>this.closeModal()})),e("article",{class:"modal-content"},e("header",{class:"content-header"},e("i",{class:`icon-prev ${t}`,onClick:()=>this.prevMonth()}),e("label",null,this.monthRight," ",this.yearRight),e("i",{class:`icon-next ${i}`,onClick:()=>this.nextMonth()})),e("article",null,e("ul",{class:"day-list"},r),e("date-item-list",{dataItemConfig:this.dataItemRightConfig}))),e("footer",{class:"modal-footer"},e("button",{onClick:()=>this.closeModal()},o.datepickerBtnValue)))))}static get is(){return"rangepicker-modal"}static get properties(){return{animationMode:{state:!0},dataItemLeftConfig:{state:!0},dataItemRightConfig:{state:!0},datePickerConfig:{state:!0},formType:{state:!0},localDateSelected:{state:!0},monthLeft:{state:!0},monthRight:{state:!0},optionsModel:{type:"Any",attr:"options-model"},rangepickerModel:{type:"Any",attr:"rangepicker-model"},yearLeft:{state:!0},yearRight:{state:!0}}}static get events(){return[{name:"closeModalEvent",method:"closeModalEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"startDateSelectedEvent",method:"startDateSelectedEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"endDateSelectedEvent",method:"endDateSelectedEvent",bubbles:!0,cancelable:!0,composed:!0},{name:"navigationChange",method:"navigationChange",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"\@keyframes Scale{0%{transform:scale(.6);opacity:0}100%{transform:scale(1);opacity:1}}\@keyframes UnScale{0%{transform:scale(1);opacity:1}100%{transform:scale(0);opacity:0}}.on-modal-enter{animation-name:Scale;animation-duration:.3s;animation-fill-mode:forwards}.on-modal-leave{animation-name:UnScale;animation-duration:.3s;animation-fill-mode:forwards}.range-container{display:flex;flex-direction:column;justify-content:space-between;position:fixed;top:0;right:0;bottom:0;left:0;background:#fff;box-shadow:0 19px 38px rgba(41,41,41,.3),0 15px 12px rgba(41,41,41,.2);z-index:99}\@media only screen and (min-width:780px){.range-container{position:absolute;top:calc(100% + 25px);left:initial;bottom:initial;right:0;left:0;border-radius:6px;overflow-x:hidden}}.range-container .rangepicker-modal{display:flex;flex-direction:column}.range-container .rangepicker-modal.previous-date:before{display:none;content:'';width:20px;height:20px;background:#fff;position:absolute;top:0;left:25px;transform:rotate(45deg) translateY(-50%)}.range-container .rangepicker-modal.previous-date.active:before{display:block}\@media only screen and (min-width:780px){.range-container .rangepicker-modal.previous-date .icon-next{display:none}}.range-container .rangepicker-modal.next-date:after{display:none;content:'';width:20px;height:20px;background:#fff;position:absolute;top:0;right:25px;transform:rotate(45deg) translateY(-50%)}.range-container .rangepicker-modal.next-date.active:after{display:block}\@media only screen and (min-width:780px){.range-container .rangepicker-modal.next-date .icon-prev{display:none}}.range-container .rangepicker-modal .modal-header{position:relative;border-bottom:solid 1px #777;display:none}\@media only screen and (max-width:780px){.range-container .rangepicker-modal .modal-header{display:block}}.range-container .rangepicker-modal .modal-header h2{text-align:center}.range-container .rangepicker-modal .modal-header i{position:absolute;top:50%;right:15px;transform:translateY(-50%);color:#0088ce;font-size:32px}.range-container .rangepicker-modal .modal-content{padding:0 5%}.range-container .rangepicker-modal .modal-content .content-header{display:flex;justify-content:space-between;padding:15px 0}.range-container .rangepicker-modal .modal-content .content-header>*{color:#0088ce}.range-container .rangepicker-modal .modal-content .content-header i{font-size:26px}.range-container .rangepicker-modal .modal-content .content-header label{line-height:26px;text-transform:capitalize;font-size:22px}.range-container .rangepicker-modal .modal-footer{padding:40px 30px;display:none}\@media only screen and (max-width:780px){.range-container .rangepicker-modal .modal-footer{display:block}}.range-container .rangepicker-modal .modal-footer button{margin:0 auto;display:block;background:#0088ce;width:100%;font-size:18px}.range-container{display:flex;flex-direction:row;width:100%}.range-container .rangepicker-modal{width:40%;justify-content:space-around}\@media only screen and (max-width:780px){.range-container .rangepicker-modal{position:absolute;width:100%;flex-direction:column;justify-content:flex-start}.range-container .rangepicker-modal.previous-date{transform:translateX(-100%)}.range-container .rangepicker-modal.next-date{transform:translateX(100%)}.range-container .rangepicker-modal.active{animation-name:SlideRight;animation-duration:.3s;animation-fill-mode:forwards}}\@keyframes SlideRight{0%{transform:translateX(100%);opacity:0;display:none}100%{transform:translateX(0);opacity:1;display:initial}}"}}export{o as RangepickerInput,r as RangepickerModal};