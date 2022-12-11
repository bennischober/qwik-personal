import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export const head: DocumentHead = {
  title: 'Portfolio - Benjamin Schober',
  meta: [
    {
      name: 'description',
      content: 'A personal portfolio app',
    },
  ],
};

export default component$(() => {
  return (
    <div>
      <h1>
        Welcome to Qwik <span class="lightning">⚡️</span>
      </h1>

      <ul>
        <li>
          Check out the <code>src/routes</code> directory to get started.
        </li>
        <li>
          Add integrations with <code>npm run qwik add</code>.
        </li>
        <li>
          More info about development in <code>README.md</code>
        </li>
      </ul>
      <div style={{height: "1500px"}} />

      <section id="about">
        Some Text in Section 1
      </section>
    </div>
  );
});
