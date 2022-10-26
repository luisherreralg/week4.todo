import { Link } from 'react-router-dom';

export function Menu() {
    const menuOptions = [
        { path: 'home', label: 'Inicio' },
        { path: 'todo', label: 'Tareas' },
    ];

    return (
        <nav>
            <ul>
                {menuOptions.map((item) => (
                    <li>
                        {/* Usar <a></a> dan problemas, hay que usar herramientas que nos da el router dom
                        <a href={item.path}>{item.label}</a> */}

                        {/* Esta es la herramienta que nos da el router dom */}
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
