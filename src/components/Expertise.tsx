import React from "react";
import "./scssFiles/Expertise.scss";

// Side-Channel Analysis: Specializing in both single and multi-trace non-invasive vulnerability assessment
// Countermeasure Implementation: Proficient in designing hiding and blinding techniques both for hardware and software
// Post-Quantum Cryptography (PQC): Experienced in comprehensive cryptography system design
// Hardware-Oriented Algorithm Development: Expertise in modeling and profiling algorithms specifically for efficient hardware implementation.
// Architectural modeling:  Experience in creating architectural models for intricate computing or processing elements and simulating their security performance
// Optimization Techniques: Proficiency in algorithm and logic level optimization targeting area, power, and performance
// Accelerator Implementation: Skilled in ASIC/FPGA and hardware/software co-design implementation
// Universal Verification Methodology (UVM): Skilled in applying UVM for comprehensive testing of hardware design functionality and ensuring extensive test coverage
function Expertise() {
  return (
    <p className="expertise-custom-style">
      The areas below reflect where I have built real depth through production work, research, and personal projects.
      <br />
      <br />
      <b
        style={{
          fontWeight: "900",
          textShadow: "1px 0 0 black, 1px 0 0 black",
        }}
      >
        AI Tooling{" "}
      </b>
      I actively use AI tools as part of my engineering workflow, including MCP servers, agents, and agent skills. I have built a
      personal AI tooling layer with reusable configurations for C#, TypeScript, React, and Node.js projects. I apply prompt
      engineering and context window management to keep AI grounded in the actual codebase and task at hand, and use it in real
      industry work for code reviews, documentation, and working through architecture decisions.
      <br />
      <br />
      <b
        style={{
          fontWeight: "900",
          textShadow: "1px 0 0 black, 1px 0 0 black",
        }}
      >
        Backend Development{" "}
      </b>
      Most of my work is in C# and .NET. I build REST APIs with ASP.NET Core, use Entity Framework Core and SQL Server for data
      access, and have worked with CosmosDB and event-driven patterns like the outbox pattern and CQRS. Day-to-day I work with
      dependency injection, LINQ, AutoMapper, and FluentValidation.
      <br />
      <br />
      <b
        style={{
          fontWeight: "900",
          textShadow: "1px 0 0 black, 1px 0 0 black",
        }}
      >
        Frontend Development{" "}
      </b>
      I build Angular features in TypeScript. I use RxJS for async data flow and state management, working with observables,
      subscriptions, and BehaviorSubject. I have also worked with feature flags and shared components in a micro-frontend architecture.
      <br />
      <br />
      <b
        style={{
          fontWeight: "900",
          textShadow: "1px 0 0 black, 1px 0 0 black",
        }}
      >
        Cloud and Infrastructure{" "}
      </b>
      I write Azure DevOps YAML pipelines and work with Bicep for Azure resource provisioning. I have contributed to multi-region
      production deployments using GitOps tooling with Flux and Kustomize on AKS, and worked with Docker and Azure Container Registry.
      <br />
      <br />
      <b
        style={{
          fontWeight: "900",
          textShadow: "1px 0 0 black, 1px 0 0 black",
        }}
      >
        Databases{" "}
      </b>
      I work with SQL Server regularly, including EF Core migrations, index design, and query optimization. I have also integrated
      CosmosDB from scratch into a backend service and worked on a technical spike to evaluate storage strategy before implementation.
      <br />
      <br />
      <b
        style={{
          fontWeight: "900",
          textShadow: "1px 0 0 black, 1px 0 0 black",
        }}
      >
        Post-Quantum Cryptography{" "}
      </b>
      I hold two sole-inventor patents in memory-efficient hash-based digital signature schemes for XMSS and LMS. One reduces memory
      usage for L-tree computation from 67 locations to 11. I also implemented parts of these algorithms in SystemVerilog.
      <br />
      <br />
      <b
        style={{
          fontWeight: "900",
          textShadow: "1px 0 0 black, 1px 0 0 black",
        }}
      >
        Engineering Practices{" "}
      </b>
      I work in Agile sprints, review code, own releases, and write internal documentation for other engineers.
    </p>
  );
}

export default Expertise;
