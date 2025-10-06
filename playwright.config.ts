import path from "node:path";
import { defineConfig, devices } from "@playwright/test";

const PORT = process.env.PORT || 3000;
const baseURL = `http://localhost:${PORT}`;

export default defineConfig({
    timeout: 30 * 1000,
    testDir: path.join(__dirname, "tests"),
    retries: 1,
    outputDir: "test-results/",
    webServer: {
        command: "npm run dev",
        url: baseURL,
        timeout: 120 * 1000,
        reuseExistingServer: !process.env.CI,
    },
    use: {
        baseURL,
        trace: "retry-with-trace",
    },
    projects: [
        {
            name: "Desktop Chrome",
            use: {
                ...devices["Desktop Chrome"],
            },
        },
        {
            name: "Desktop Firefox",
            use: {
                ...devices["Desktop Firefox"],
            },
        },
        {
            name: "Mobile Chrome",
            use: {
                ...devices["Galaxy S24"],
            },
        },
    ],
});
