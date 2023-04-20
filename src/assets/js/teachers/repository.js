// SE VA ENCARGAR DE GUARDAR,ACTUALIZAR, LEER Y ELIMINAR LOS DATOS EN EL STORAGE
import { getDatabase, setDatabase } from './../utils/storage';

const dbName = 'db_teachers';

export function createTeacher(teacher) {
    const arrayTeachers = getDatabase(dbName);
    arrayTeachers.push(teacher);
    setDatabase(dbName,arrayTeachers);

}

export function readTeachers() {
    return getDatabase(dbName);


}