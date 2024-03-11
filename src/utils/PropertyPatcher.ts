/**
 * Monkey patch
 * 
 * Probably better option:
 * Monkey patch only all form related elements instead of all. (*)
 */

const properties = [
    "ZodSchema",
    "HandleError",
    "Required",
    "IsValid"
];

export function patchProperties() {
    for (let i=0; i<properties.length; i++) {
        addPropertyToAllHtmlElements(properties[i]);
    }
}
  
function addPropertyToAllHtmlElements(propName: string) {
    Object.defineProperty(HTMLElement.prototype, propName, {
        get() {
            return this.getAttribute(propName);
        },
        set(newValue) {
            this.setAttribute(propName, newValue);
        }
    });
}



// (*) MAYBE:
/*
function addPropertyToFormRelatedElements(propName: string) {
    const formRelatedElements = ['HTMLButtonElement', 'HTMLDataListElement', 'HTMLFieldSetElement', 'HTMLFormElement', 'HTMLInputElement', 'HTMLLabelElement', 'HTMLLegendElement', 'HTMLMeterElement', 'HTMLOptGroupElement', 'HTMLOptionElement', 'HTMLOutputElement', 'HTMLProgressElement', 'HTMLSelectElement', 'HTMLTextAreaElement'];
    formRelatedElements.forEach((element) => {
        Object.defineProperty(window[element].prototype, propName, {
            get() {
                return this.getAttribute(propName);
            },
            set(newValue) {
                this.setAttribute(propName, newValue);
            }
        });
    });
}
*/