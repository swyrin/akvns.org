import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.mouse.wheel(0, -1_000_000_000);
});

test("back-to-top conditional render", async ({ page }) => {
    expect(!(await page.getByLabel("back-to-top").isVisible()));

    await page.mouse.wheel(0, 25);

    expect(await page.getByLabel("back-to-top").isVisible());
});

test("navbar responsive", async ({ page, isMobile }) => {
    if (isMobile) {
        expect(!(await page.getByLabel("nav-bar").isVisible()));
        expect(await page.getByLabel("burger-menu").isVisible());
    } else {
        expect(await page.getByLabel("nav-bar").isVisible());
        expect(!(await page.getByLabel("burger-menu").isVisible()));
    }
});

test("theme switcher", async ({ page }) => {
    await page.getByRole("button", { name: "theme-switcher" }).click();
    await page.getByRole("menuitemradio", { name: "theme-light" }).click();
    await expect(page.locator("html")).toHaveAttribute("class", "light");

    await page.getByRole("button", { name: "theme-switcher" }).click();
    await page.getByRole("menuitemradio", { name: "theme-dark" }).click();
    await expect(page.locator("html")).toHaveAttribute("class", "dark");
});
