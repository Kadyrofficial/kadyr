import { Services, Introduction, Blogs, About, Contact, Projects } from '@/components/shared';


export default function HomePage() {
    return (
        <>
            <Introduction />
            <Services />
            <About />
            {/* <Blogs /> */}
            <Projects />
            <Contact />
        </>
    );
}
