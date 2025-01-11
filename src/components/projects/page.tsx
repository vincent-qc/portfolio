import ProjectCard from "./card";
import { projects } from "./projects";

export default function ProjectPage() {
  return (
    <div
      style={{
        scrollbarWidth: "none",
      }}
      className="flex h-full w-full flex-col items-start gap-4 overflow-auto px-2 py-4"
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} index={index} />
      ))}
    </div>
  );
}