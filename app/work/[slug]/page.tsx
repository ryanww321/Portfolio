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
    <ul className="my-[var(--padding-pageMargin)] ml-4 max-w-full list-disc space-y-[calc(var(--padding-pageMargin)/2)] sm:ml-[var(--padding-pageMargin)] [&>li]:mt-[calc(var(--padding-pageMargin)/2)]">
      {items.map((item) => (
        <li key={item} className="max-w-full pl-1 leading-normal sm:pl-[calc(var(--padding-pageMargin)/3)]">
          <p className="my-[var(--padding-pageMargin)] max-w-full break-words leading-relaxed">{item}</p>
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

  return {
    title: work.company,
    description: work.description,
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
