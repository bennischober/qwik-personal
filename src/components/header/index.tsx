import {
    $,
    component$,
    Resource,
    useResource$,
    useStore,
} from "@builder.io/qwik";
import { SectionData } from "~/routes/api/v2/sections";
import { fetchData } from "~/utils";
import { HeaderLink, Logo } from "..";

export default component$(() => {
    const sectionResource = useResource$<SectionData[]>(async () => {
        return await fetchData("/api/v2/sections");
    });

    // get scroll direction and position
    const scroll = useStore({ direction: "down", position: 0 });

    const handleScroll = $(() => {
        // udpate scroll direction and position
        scroll.direction = scroll.position > window.scrollY ? "up" : "down";
        scroll.position = window.scrollY;

        // update header
        if (scroll.position > 50) {
            document.querySelector("header")?.classList.add("hovered-header");
        } else {
            document
                .querySelector("header")
                ?.classList.remove("hovered-header");
        }
    });

    return (
        <header
            class="bg-white dark:bg-gray-900 p-4 lg:px-10 grid grid-cols-2 gap-4 sticky top-0 z-50 transition-all duration-300 ease-in-out"
            window:onScroll$={(e) => handleScroll()}
        >
            <Logo />
            <Resource
                value={sectionResource}
                onPending={() => <div>Loading...</div>}
                onResolved={(sections) => (
                    <nav class="flex justify-end gap-8 items-center">
                        {sections.map((section, index) => {
                            if (!section?.opts?.skipHeader)
                                return (
                                    <HeaderLink
                                        key={section.id}
                                        name={section.name}
                                        label={section.label}
                                        id={index}
                                        description={section.description}
                                    />
                                );
                        })}
                    </nav>
                )}
                onRejected={(error) => <div>{error.message}</div>}
            />
        </header>
    );
});

