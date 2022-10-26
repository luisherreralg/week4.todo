import { Footer } from '../footer/footer';
import { Header } from '../header/header';

export function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            <Header></Header>
            {/* Con esto podemos insertar los componentes que queramos */}
            <main>{children}</main>
            <Footer></Footer>
        </>
    );
}
