// SE VA ENCARGAR DE TODAS LAS OPERACIONES QUE HAGAMOS CON EL FORMULARIO, INTERACCIÓN Y CONFIGURACIÓN 
/**
 * ESTE OBJETO CONTIENE LAS REFERENCIAS A LOS ELEMENTOS CLAVE DEL FORMULARIOS
 */

export const formElements = {
    form: document.getElementById('teacherForm'),
    fields: {
        name: document.getElementById('txtName'),
        description: document.getElementById('txtDescription'),
        email: document.getElementById('txtEmail'),
        birthDate: document.getElementById('txtBirthDate'),
    }
};

export function getFormData() {
/**
 * const formData = new FormData( formElements.form);
    return Object.fromEntries(formData.entries()); 
 */
    
    const teacher = {
        name: formElements.fields.name.value,
        description: formElements.fields.description.value,
        email: formElements.fields.email.value,
        birthDate: formElements.fields.birthDate.value,
    };
    return teacher;
};