# Green Basket Platform

## Architecture Decision Records (ADR)

---

### ADR-001

**Decision:** Platform Name

**Value:** Green Basket Platform

**Status:** Approved

**Date:** 2026-07-16

**Reason:**
The platform is designed to support multiple industries. Education (GB-SOS) is only the first package.

---

### ADR-002

**Decision:** Backend Framework

**Value:** NestJS (TypeScript)

**Status:** Approved

**Date:** 2026-07-16

**Reason:**
Chosen for enterprise architecture, modularity, dependency injection, scalability, and long-term maintainability.

---

### ADR-003

**Decision:** Database

**Value:** PostgreSQL

**Status:** Approved

**Date:** 2026-07-16

**Reason:**
Supports enterprise workloads, strong relational integrity, Row-Level Security (RLS), and multi-tenant SaaS architecture.

---

### ADR-004

**Decision:** ORM

**Value:** Prisma

**Status:** Approved

**Date:** 2026-07-16

**Reason:**
Provides type safety, reliable migrations, and excellent developer experience for PostgreSQL.

---

### ADR-005

**Decision:** Architecture Style

**Value:** Modular Monolith

**Status:** Approved

**Date:** 2026-07-16

**Reason:**
Allows rapid development while preserving the option to extract services in the future if needed.

---

### ADR-006

**Decision:** Package Structure

**Value:** Platform → Package → Product

**Status:** Approved

**Date:** 2026-07-16

**Reason:**
Green Basket Platform is the foundation. Education is the first package, and GB-SOS is the first product.