import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header";

export default component$(() => {
    return (
        <>
            <Header />
            <main class="container md:mx-auto px-4">
                <section>
                    <Slot />
                </section>
            </main>
            <footer>
                <a href="https://www.builder.io/" target="_blank">
                    Made with ♡ by Builder.io
                </a>
            </footer>
        </>
    );
});

