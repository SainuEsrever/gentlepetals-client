import { AbstractControl } from "@angular/forms";

export function customValidator(control: AbstractControl):{
    [key: string]: any} | null{
        const matchName = /\@|\#|\$|\%|\^|\&/g.test(control.value);
        return matchName ? { 'nameNoMatch': {value: control.value}}:null;
    }

export function passwordValidator(control: AbstractControl):{
    [key:string]:any} | null {
        const password = control.get('password');
        const confirmPassword = control.get('confirmPass');
        if ((password && password.pristine) || (confirmPassword && confirmPassword.pristine)){
            return null;
        }
        return password && confirmPassword && password.value !== confirmPassword.value ? {'misMatch': true}:null;
    }