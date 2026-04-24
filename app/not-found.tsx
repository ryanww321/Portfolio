import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="max-w-2xl">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-accent-soft">404</p>
        <h1 className="font-display text-4xl font-semibold tracking-normal text-foreground">Page not found</h1>
        <p className="mt-4 text-base leading-7 text-muted">The page you are looking for is not part of this portfolio.</p>
        <div className="mt-8">
          <LinkButton href="/" variant="primary">
            Return home
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
