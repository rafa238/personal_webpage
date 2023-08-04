import { createContext, useState } from 'react'
import projects_en from '../db/projects_en.json';
import projects_es from '../db/projects_es.json';
import strings_en from '../db/strings_en.json';
import strings_es from '../db/strings_es.json';

const DataContext = createContext();

const DataProvider = (props) => {
    //true for spanish
    //false for english
    const [language, setLanguage] = useState(true);   
    const projects = (language) ? projects_es : projects_en;
    const data = (language) ? strings_es : strings_en;

    return (
        <DataContext.Provider value = {{...data, ...projects, language, setLanguage}}>
            {props.children}
        </DataContext.Provider>
    )
}

export{
    DataProvider,
    DataContext
}
