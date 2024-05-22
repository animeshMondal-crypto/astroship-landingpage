import React from "react";
import {
  FaBriefcase,
  FaRegWindowMaximize,
  FaDatabase,
  FaRobot,
  FaUser,
} from "react-icons/fa";

import { RiFileSearchFill } from "react-icons/ri";

function Features() {
  return (
    <div className="mb-10">
      <h1 className="md:text-5xl text-4xl font-bold mb-2">
        Everything you need to start a website
      </h1>
      <p className="text-muted-foreground text-lg md:tracking-wide mb-10">
        Astro comes batteries included. It takes the best parts of
        state-of-the-art tools and adds its own innovations.
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-3 md:gap-y-16 gap-y-10">
        {/* first */}
        <div className="flex flex-col w-full">
          <div className="rounded-full flex gap-5">
            <div className="p-3 h-fit bg-black rounded-full">
              <FaBriefcase color="white" />
            </div>
            <h1 className="font-semibold text-lg">Bring Your Own Framework</h1>
          </div>
          <p className="ml-[3.6rem] text-muted-foreground">
            Build your site using React, Svelte, Vue, Preact, web components, or
            just plain ol&apos; HTML + JavaScript.
          </p>
        </div>
        {/* second */}
        <div className="flex flex-col">
          <div className="rounded-full flex gap-5">
            <div className="p-3 h-fit bg-black rounded-full">
              <FaRegWindowMaximize color="white" />
            </div>
            <h1 className="font-semibold text-lg">100% Static HTML, No JS</h1>
          </div>
          <p className="ml-[3.6rem] text-muted-foreground">
            Astro renders your entire page to static HTML, removing all
            JavaScript from your final build by default.
          </p>
        </div>
        {/* third */}
        <div className="flex flex-col">
          <div className="rounded-full flex gap-5">
            <div className="p-3 h-fit bg-black rounded-full">
              <FaDatabase color="white" />
            </div>
            <h1 className="font-semibold text-lg">On-Demand Components</h1>
          </div>
          <p className="ml-[3.6rem] text-muted-foreground">
            Need some JS? Astro can automatically hydrate interactive components
            when they become visible on the page.
          </p>
        </div>
        {/* forth */}

        <div className="flex flex-col">
          <div className="rounded-full flex gap-5">
            <div className="p-3 bg-black rounded-full">
              <FaRobot color="white" />
            </div>
            <h1 className="font-semibold text-lg">Broad Integration</h1>
          </div>
          <p className="ml-[3.6rem] text-muted-foreground">
            Astro supports TypeScript, Scoped CSS, CSS Modules, Sass, Tailwind,
            Markdown, MDX, and any other npm packages.
          </p>
        </div>
        {/* fifth */}

        <div className="flex flex-col">
          <div className="rounded-full flex gap-5">
            <div className="p-3 bg-black rounded-full">
              <RiFileSearchFill color="white" />
            </div>
            <h1 className="font-semibold text-lg">SEO Enabled</h1>
          </div>
          <p className="ml-[3.6rem] text-muted-foreground">
            Automatic sitemaps, RSS feeds, pagination and collections take the
            pain out of SEO and syndication. It just works!
          </p>
        </div>
        {/* sixth */}

        <div className="flex flex-col">
          <div className="rounded-full flex gap-5">
            <div className="p-3 bg-black rounded-full">
              <FaUser color="white" />
            </div>
            <h1 className="font-semibold text-lg">Community</h1>
          </div>
          <p className="ml-[3.6rem] text-muted-foreground">
            Astro is an open source project powered by hundreds of contributors
            making thousands of individual contributions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
