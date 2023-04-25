// encargado de la interacción y configuración del formulario

/**
 * Este objeto contiene las referencias a los elementos clave del formulario
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

/** array de objetos que contiene la información de las validaciones 
 * cada objeto contiene una referencia a cada campo, un array de objetos
 * de validación que tendrá, el ID del error, el mensaje y función de validación
*/
export const fieldConfigurations = [
    {
        input: formElements.fields.name,
        validations: [
            {
                errorId: `${formElements.fields.name.id}required`,
                errorMessage: 'El nombre es obligatorio.',
                // las validaciones retornara un false cuando el debe mostrar el mensaje de error y un true cuando no debe mostrar el mensaje de error
                validationFunction: (value) => {
                    return value.trim() !== '';
                }
            }
        ]
    },
    {
        input: formElements.fields.description,
        validations: [
            {
                errorId: `${formElements.fields.description.id}required`,
                errorMessage: 'El nombre es obligatorio.',
                // las validaciones retornara un false cuando el debe mostrar el mensaje de error y un true cuando no debe mostrar el mensaje de error
                validationFunction: (value) => {
                    return value.trim() !== '';
                }
            }
        ]
    },


];





export function getFormData() {
    /**
     * const formData = new FormData(formElements.form);
     * return Object.fromEntries(formData.entries());
     */
    const teacher = {
        id: new Date().getTime(),
        name: formElements.fields.name.value,
        description: formElements.fields.description.value,
        email: formElements.fields.email.value,
        birthDate: formElements.fields.birthDate.value,
    };
    return teacher;
}

export function resetForm() {
    formElements.form.reset();
}