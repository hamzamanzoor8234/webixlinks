import type { Article } from "./types";

export const ARTICLES: Article[] = [
  {
    slug: "architecting-autonomous-agent-networks",
    title:
      "Architecting Autonomous Agent Networks for Complex Enterprise Workflows",
    description:
      "How multi-agent collaboration, shared state management, and self-correcting logic loops enable reliable autonomous systems at enterprise scale.",
    publishedAt: "2026-03-12",
    readTime: "8 min read",
    category: "AI Engineering",
    content: `
<p>Enterprise teams are moving beyond single-shot LLM prompts toward <strong>autonomous agent networks</strong>—systems where specialized agents collaborate, delegate, and recover from failure without human intervention on every step.</p>

<h2>Why single agents fail at scale</h2>
<p>A monolithic agent handling planning, retrieval, tool execution, and validation in one context window degrades quickly. Token limits compress reasoning quality, tool outputs pollute memory, and error recovery becomes non-deterministic.</p>

<h2>Multi-agent collaboration patterns</h2>
<p>We decompose workflows into role-bound agents:</p>
<ul>
<li><strong>Planner agents</strong> translate goals into directed acyclic task graphs.</li>
<li><strong>Researcher agents</strong> retrieve and rank context from vector stores and APIs.</li>
<li><strong>Executor agents</strong> invoke tools with strict JSON-schema contracts.</li>
<li><strong>Critic agents</strong> validate outputs against business rules before commit.</li>
</ul>

<h2>State management across agents</h2>
<p>Shared state lives outside the LLM—in PostgreSQL or Redis—with explicit versioning per workflow run. Each agent reads immutable snapshots and writes append-only events, enabling replay, audit trails, and rollback without re-inference costs.</p>

<pre><code>// Workflow state snapshot (simplified)
{
  "runId": "wf_8f2a",
  "phase": "execution",
  "artifacts": { "crmLeadId": "ld_4491" },
  "agentHistory": ["planner:v2", "researcher:v1"]
}</code></pre>

<h2>Self-correcting logic loops</h2>
<p>When a critic agent rejects an output, the orchestrator routes back to the responsible agent with structured failure context—not a generic retry. This bounded loop prevents infinite hallucination cycles while preserving autonomy for recoverable errors.</p>

<p>The result: agent networks that behave like disciplined engineering teams rather than improvisational chatbots.</p>
`,
  },
  {
    slug: "securing-nestjs-direct-s3-uploads",
    title:
      "Securing Cloud Infrastructure: Implementing Direct-to-S3 Presigned URL Components in NestJS",
    description:
      "Bypass server upload bottlenecks with signed storage policies, Helmet.js hardening, and defense-in-depth API security.",
    publishedAt: "2026-02-28",
    readTime: "6 min read",
    category: "Cloud Architecture",
    content: `
<p>Routing file uploads through application servers is an architectural anti-pattern at scale. <strong>Direct-to-S3 presigned URLs</strong> shift bandwidth to object storage while your API retains full authorization control.</p>

<h2>The presigned URL flow</h2>
<ol>
<li>Client requests an upload slot from your NestJS API with file metadata.</li>
<li>API validates auth, tenant scope, and MIME allowlists.</li>
<li>Server returns a short-TTL presigned <code>PUT</code> URL scoped to a single object key.</li>
<li>Client uploads directly to S3; API receives an event via SQS for post-processing.</li>
</ol>

<pre><code>@Post('uploads/presign')
@UseGuards(JwtAuthGuard)
async presign(@Body() dto: PresignDto, @User() user: AuthUser) {
  const key = \`tenants/\${user.tenantId}/\${uuid()}\`;
  const url = await this.s3.getSignedUrl('putObject', {
    Bucket: process.env.ASSETS_BUCKET,
    Key: key,
    Expires: 300,
    ContentType: dto.mimeType,
  });
  return { url, key };
}</code></pre>

<h2>Helmet.js and API hardening</h2>
<p>Every NestJS deployment ships with Helmet for security headers, strict CORS origins, and request size limits on metadata endpoints. Upload authorization never trusts client-supplied paths—keys are server-generated exclusively.</p>

<h2>CloudFront and IAM least privilege</h2>
<p>Delivery uses CloudFront with origin access controls. IAM policies grant the application role <code>s3:PutObject</code> only on tenant prefixes, never bucket-wide wildcards. Access logs feed SIEM pipelines for compliance review.</p>
`,
  },
  {
    slug: "modular-nestjs-vs-monolithic-express",
    title:
      "Why We Choose NestJS Over Standard Express for Enterprise Backend Architectures",
    description:
      "Dependency injection, strong typing, and modular boundaries that scale with team size and system complexity.",
    publishedAt: "2026-02-14",
    readTime: "7 min read",
    category: "Backend Engineering",
    content: `
<p>Express remains a capable HTTP layer, but enterprise backends demand structure that emerges from convention—not convention scattered across hundreds of middleware files.</p>

<h2>Dependency injection as an architectural primitive</h2>
<p>NestJS treats DI as a first-class concern. Services declare dependencies explicitly; testing swaps implementations without module rewiring. This eliminates the hidden global singletons that plague large Express codebases.</p>

<h2>Strong typing end to end</h2>
<p>DTOs with <code>class-validator</code> decorators enforce request contracts at the boundary. TypeScript interfaces propagate from controllers through services to repositories—catching integration mismatches at compile time, not in production logs.</p>

<pre><code>@Module({
  imports: [BookingModule, NotificationsModule],
  controllers: [AppointmentsController],
  providers: [AppointmentsService, SlotReservationService],
})
export class AppointmentsModule {}</code></pre>

<h2>Maintainability at team scale</h2>
<p>Feature modules map to bounded contexts. Teams ship independently behind stable module interfaces. Express projects often accrete shared utility folders that become undeletable dependency graphs—NestJS module boundaries prevent this by design.</p>

<h2>Enterprise scaling patterns</h2>
<p>Microservice extraction, GraphQL federation, and queue-based workers integrate through official NestJS packages with consistent lifecycle hooks. The framework grows with the system instead of being replaced by it.</p>

<p>When architecture is the product, NestJS is the engineering substrate we trust.</p>
`,
  },
];

export function getAllArticles(): Article[] {
  return [...ARTICLES].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getArticleSlugs(): string[] {
  return ARTICLES.map((a) => a.slug);
}
