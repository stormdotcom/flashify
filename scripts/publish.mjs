#!/usr/bin/env node

import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Polyfill for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const isDryRun = process.argv.includes("--dry-run");

console.log("🚀 Starting Flashify publishing process...");

try {
  // 1. Install dependencies and build all packages
  console.log("\n📦 Installing dependencies and building packages...");
  execSync("pnpm install", { stdio: "inherit", cwd: rootDir });
  execSync("pnpm run build", { stdio: "inherit", cwd: rootDir });

  // 2. Determine publishing mechanism
  // If the user uses semantic-release, we can trigger that,
  // or we can just use standard pnpm recursive publish.

  if (isDryRun) {
    console.log("\n🧪 DRY RUN: Simulating publish...");
    execSync("pnpm publish -r --dry-run --no-git-checks", {
      stdio: "inherit",
      cwd: rootDir,
    });
    console.log("\n✅ Dry run completed successfully!");
  } else {
    console.log("\n🚀 Publishing packages to npm...");
    // The -r flag tells pnpm to recursively publish all packages in the workspace
    // --access public ensures scoped packages are published publicly
    execSync("pnpm publish -r --access public --no-git-checks", {
      stdio: "inherit",
      cwd: rootDir,
    });
    console.log("\n✅ All packages published successfully!");
  }
} catch (error) {
  console.error("\n❌ Publish process failed:");
  console.error(error.message);
  process.exit(1);
}
