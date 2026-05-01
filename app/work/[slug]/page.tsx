import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndexRow, InlineMeta } from "@/components/ui/IndexRow";
import { IndexSection } from "@/components/ui/IndexSection";
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
      <IndexSection title="Overview">
        <IndexRow name="Context" detail={work.description} />
      </IndexSection>

      <IndexSection title="Highlights">
        {work.highlights.map((highlight, index) => (
          <IndexRow key={highlight} name={`0${index + 1}`} detail={highlight} />
        ))}
      </IndexSection>

      <IndexSection title="Tools">
        <IndexRow name="Stack" detail="Primary tools and systems from this experience.">
          <InlineMeta items={work.tools} />
        </IndexRow>
      </IndexSection>
    </WorkPageShell>
  );
}
