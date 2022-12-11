import { $, component$, useStore, useClientEffect$ } from "@builder.io/qwik";

export default component$(() => {
    const theme = useStore({ theme: "dark" });

    const saveToLocal = $((theme: string) => {
        localStorage.setItem("theme", theme);
        localStorage.theme = theme;
    });

    const changeTheme = $((theme: string) => {
        theme === "dark"
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark");

        saveToLocal(theme);
    });

    const toggleTheme = $(() => {
        theme.theme = theme.theme === "dark" ? "light" : "dark";
        changeTheme(theme.theme);
    });

    useClientEffect$(() => {
        // if theme was already set in local storage, use this
        if (localStorage.theme) {
            changeTheme(localStorage.theme);
            return;
        }

        // if theme wasnt set by user, check for prefered color schema
        if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            theme.theme = "dark";
        } else {
            theme.theme = "light";
        }
        changeTheme(theme.theme);
    });

    return (
        <>
            <button onClick$={() => toggleTheme()}>Dark Mode Toggle</button>
        </>
    );
});
