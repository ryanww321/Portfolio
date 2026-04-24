import type { CaseStudy } from "@/lib/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "integration-backlog-recovery",
    title: "Recovering a Production Integration Backlog",
    summary:
      "An editable case-study draft about isolating queue pressure, hidden retry behavior, and downstream system limits.",
    problem:
      "A production integration slowed until business-critical updates were delayed and support teams had little visibility into the failure pattern.",
    context:
      "Representative enterprise platform scenario based on Salesforce architecture and production stabilization work. Replace with client-safe specifics before publishing.",
    approach: [
      "Separated symptoms by timestamp, object type, and downstream endpoint.",
      "Compared successful and failed payloads to identify the smallest reproducible difference.",
      "Mapped retry behavior against platform limits and downstream rate constraints.",
      "Created a rollback-safe mitigation path before changing the automation.",
    ],
    rootCause:
      "A retry path amplified a downstream validation failure, creating queue pressure that looked like a general platform slowdown.",
    solution:
      "Added clearer validation boundaries, adjusted retry handling, and introduced monitoring that exposed backlog growth before users reported it.",
    result:
      "Restored predictable processing and gave operators a simpler way to distinguish data defects from platform capacity issues.",
    lessons: [
      "Instrument the workflow before changing the workflow.",
      "Treat retries as product behavior, not just infrastructure.",
      "Preserve a clear operator view for the next incident.",
    ],
    tags: ["Salesforce", "Integrations", "Reliability"],
    isDraft: true,
  },
  {
    slug: "release-regression-permissions",
    title: "Tracing a Permission Regression After Release",
    summary:
      "A debugging story template for showing how access changes can masquerade as broken business logic.",
    problem:
      "A release appeared to break a core user workflow for a subset of users, but the failure was inconsistent across profiles and records.",
    context:
      "Editable enterprise implementation story. Use it to document a real sanitized release investigation.",
    approach: [
      "Reproduced the issue with affected and unaffected user personas.",
      "Compared record visibility, field access, automation entry criteria, and recent metadata changes.",
      "Reduced the problem to one permission boundary before proposing a fix.",
    ],
    rootCause:
      "A permission set update changed field-level access for one persona, causing automation to skip a branch that appeared unrelated in the UI.",
    solution:
      "Restored the intended access model, added release checklist coverage, and documented the persona-specific test path.",
    result:
      "Reduced support churn and improved confidence in future releases touching access control.",
    lessons: [
      "Permission bugs need persona-based reproduction.",
      "UI symptoms are often downstream of metadata changes.",
      "Release checklists should reflect real operating personas.",
    ],
    tags: ["Access control", "Release quality", "Root cause analysis"],
    isDraft: true,
  },
  {
    slug: "ambiguous-requirements-to-shipped-system",
    title: "Converting Ambiguous Requirements Into a Shipped System",
    summary:
      "A product-engineering case study draft about moving from unclear business language to testable technical behavior.",
    problem:
      "Stakeholders agreed on the business goal but described edge cases differently, making implementation risk hard to estimate.",
    context:
      "Use this draft to tell a real delivery story with measurable scope, constraints, and tradeoffs.",
    approach: [
      "Translated stakeholder language into explicit states, events, and failure modes.",
      "Built a thin version of the workflow to validate assumptions early.",
      "Used decision logs to keep tradeoffs visible as requirements changed.",
    ],
    rootCause:
      "The system lacked a shared model for the lifecycle it was supposed to automate.",
    solution:
      "Defined the domain states, aligned acceptance criteria to those states, and shipped the smallest workflow that covered the highest-risk path.",
    result:
      "Created a maintainable implementation path while reducing rework caused by late requirement discovery.",
    lessons: [
      "Ambiguity is a systems problem before it is a coding problem.",
      "State models make hidden edge cases negotiable.",
      "Small shipped slices create better feedback than long specification cycles.",
    ],
    tags: ["Product engineering", "Systems design", "Delivery"],
    isDraft: true,
  },
];
