import { $, component$ } from "@builder.io/qwik";
import { SectionData } from "~/routes/api/v2/sections";

export default component$(({ id, name, label }: SectionData) => {
    const handleOnClick = $(() => {
        const el = document.getElementById(label);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth" });
    });

    return (
        <a
            class="font-mono"
            href={`#${label}`}
            onClick$={(e) => handleOnClick()}
            preventdefault:click
        >
            <span class="text-orange-500">0{id}. </span><span>{name}</span>
        </a>
    );
});
