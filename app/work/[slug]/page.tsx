import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkPageShell } from "@/components/work/WorkPageShell";
import { getWorkExperience, workExperience } from "@/data/workExperience";

type WorkPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return workExperience.map((work) => ({ slug: work.slug }));
}

function WorkBulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-5">
      {items.map((item) => (
        <li key={item} className="grid grid-cols-[0.75rem_minmax(0,1fr)] gap-3 leading-relaxed text-foreground/90">
          <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 rounded-full bg-brand" />
          <p className="break-words text-pretty">{item}</p>
        </li>
      ))}
    </ul>
  );
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkExperience(slug);

  if (!work) {
    return {};
  }

  const role = work.roles[0];

  return {
    title: work.company,
    description: role ? `${role.title} at ${work.company}. ${work.description}` : work.description,
    alternates: { canonical: `/work/${work.slug}` },
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const work = getWorkExperience(slug);

  if (!work) {
    notFound();
  }

  return (
    <WorkPageShell work={work}>
      <WorkBulletList items={work.highlights} />
    </WorkPageShell>
  );
}
