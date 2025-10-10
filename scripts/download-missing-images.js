#!/usr/bin/env node
/**
 * Download missing image assets into the local ./images directory.
 *
 * Usage:
 *   node scripts/download-missing-images.js https://example.com/images/
 *
 * The base URL should point to the directory that serves the image files.
 * All files listed in `missingFiles` will be fetched and stored with their
 * plain (prefix-free) names inside ./images.
 */

const { mkdir, writeFile, access } = require("fs/promises");
const { constants: fsConstants } = require("fs");
const path = require("path");

const missingFiles = [
  "0706eec8-83ba-4285-9aeb-429b51a93a55.jpg",
  "22.png",
  "233.png",
  "312.png",
  "318.png",
  "42.png",
  "526b7508-1e78-4368-b69a-38105c922395.jpg",
  "61.png",
  "banner-main.jpg",
  "bg.png",
  "da1cde54-b3ab-4cc2-b021-84f152884d92.png",
  "df8ae30e-5845-4735-875d-451f6d2e24b5.png",
  "event_vip.png",
  "home-egame-center-img.png",
  "home-egame-game1.png",
  "home-egame-title-icon.png",
  "home-feature2.png",
  "home-feature3.png",
  "icon-bell.png",
  "icon_144x144.7e9f84babc41212dac759de26b5e5c66.png",
  "loading-ani.svg",
  "logo.png",
  "mission.png",
  "promo-gift-open.png",
  "qata88.ico",
  "sub-animal-ga28.png",
  "sub-animal-od_cock.png",
  "sub-animal-rcb.png",
  "sub-animal-wcc.png",
  "sub-chess-bbin2.png",
  "sub-chess-btgaming.png",
  "sub-chess-card365.png",
  "sub-chess-cq9.png",
  "sub-chess-eazy_gaming.png",
  "sub-chess-jdb.png",
  "sub-chess-jili.png",
  "sub-chess-kingmaker.png",
  "sub-chess-lc.png",
  "sub-chess-mg.png",
  "sub-chess-pt.png",
  "sub-chess-rg.png",
  "sub-chess-rich88.png",
  "sub-egame-acewin.png",
  "sub-egame-advantplay.png",
  "sub-egame-ameba.png",
  "sub-egame-aux.png",
  "sub-egame-bbin2.png",
  "sub-egame-btg.png",
  "sub-egame-btgaming.png",
  "sub-egame-cq9.png",
  "sub-egame-eazy_gaming.png",
  "sub-egame-evoplay.png",
  "sub-egame-fc.png",
  "sub-egame-funta.png",
  "sub-egame-hacksaw.png",
  "sub-egame-jdb.png",
  "sub-egame-jili.png",
  "sub-egame-ka.png",
  "sub-egame-mg.png",
  "sub-egame-ne.png",
  "sub-egame-nlc.png",
  "sub-egame-od_gaming.png",
  "sub-egame-pg.png",
  "sub-egame-png.png",
  "sub-egame-pp.png",
  "sub-egame-ps.png",
  "sub-egame-pt.png",
  "sub-egame-relax.png",
  "sub-egame-rg.png",
  "sub-egame-rich88.png",
  "sub-egame-rsg.png",
  "sub-egame-slotopia.png",
  "sub-egame-smartsoft.png",
  "sub-egame-spadegaming.png",
  "sub-egame-splus.png",
  "sub-egame-spribe.png",
  "sub-egame-tp.png",
  "sub-egame-turbo.png",
  "sub-egame-va.png",
  "sub-egame-voltent.png",
  "sub-egame-yellowbat.png",
  "sub-egame-ygg.png",
  "sub-egame-yl.png",
  "sub-esports-db_esports.png",
  "sub-esports-motivation.png",
  "sub-esports-saba.png",
  "sub-esports-tf.png",
  "sub-live-ag.png",
  "sub-live-allbet.png",
  "sub-live-bbin.png",
  "sub-live-db_live.png",
  "sub-live-dg.png",
  "sub-live-evo.png",
  "sub-live-ezugi.png",
  "sub-live-mg.png",
  "sub-live-motivation.png",
  "sub-live-onlive.png",
  "sub-live-pp.png",
  "sub-live-pt.png",
  "sub-live-sexybcrt.png",
  "sub-live-via_casino.png",
  "sub-live-wg_live.png",
  "sub-live-wm.png",
  "sub-lottery-bbin.png",
  "sub-lottery-db_lottery.png",
  "sub-lottery-gpi.png",
  "sub-lottery-saba.png",
  "sub-lottery-tp_lottery.png",
  "sub-lottery-wg_lottery.png",
  "sub-lottery-yellowbat.png",
  "sub-mpg-acewin.png",
  "sub-mpg-bbin2.png",
  "sub-mpg-btgaming.png",
  "sub-mpg-cq9.png",
  "sub-mpg-fastspin.png",
  "sub-mpg-fc.png",
  "sub-mpg-funta.png",
  "sub-mpg-jdb.png",
  "sub-mpg-jili.png",
  "sub-mpg-ka.png",
  "sub-mpg-mg.png",
  "sub-mpg-rsg.png",
  "sub-mpg-spadegaming.png",
  "sub-mpg-splus.png",
  "sub-mpg-tp.png",
  "sub-mpg-va.png",
  "sub-mpg-yellowbat.png",
  "sub-mpg-yl.png",
  "sub-sports-bti.png",
  "sub-sports-cmdbet.png",
  "sub-sports-im_sports.png",
  "sub-sports-lucky_sports.png",
  "sub-sports-pinnacle.png",
  "sub-sports-saba.png",
  "sub-sports-sbobet.png",
  "sub-sports-three_sing.png",
  "sub-sports-ugaming.png",
  "sub-sports-wg_sports.png",
  "type-animal.png",
  "type-egame.png",
  "type-live.png",
  "type-sports.png",
  "us.svg",
  "vn.svg"
];

const baseUrl = process.argv[2];

if (!baseUrl) {
  console.error("Missing base URL. Example:");
  console.error("  node scripts/download-missing-images.js https://example.com/images/");
  process.exitCode = 1;
  process.exit();
}

const normalizedBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
const targetDir = path.resolve("images");

async function ensureDir(dir) {
  try {
    await access(dir, fsConstants.F_OK);
  } catch {
    await mkdir(dir, { recursive: true });
  }
}

async function download(name) {
  const url = new URL(name, normalizedBase).toString();
  const dest = path.join(targetDir, name);

  // Skip download if the file already exists.
  try {
    await access(dest, fsConstants.F_OK);
    return { name, status: "skipped", reason: "already exists" };
  } catch {
    // continue with download
  }

  const response = await fetch(url);
  if (!response.ok) {
    return { name, status: "failed", reason: `${response.status} ${response.statusText}` };
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(dest, buffer);
  return { name, status: "downloaded" };
}

async function main() {
  await ensureDir(targetDir);

  const results = await Promise.all(
    missingFiles.map(async (name) => {
      try {
        return await download(name);
      } catch (error) {
        return { name, status: "failed", reason: error.message };
      }
    })
  );

  const summary = results.reduce(
    (acc, item) => {
      acc[item.status] = (acc[item.status] || 0) + 1;
      if (item.status === "failed") {
        acc.failures.push(item);
      }
      return acc;
    },
    { failures: [] }
  );

  console.table(results);

  if (summary.failures.length) {
    console.error("\nSome downloads failed:");
    summary.failures.forEach(({ name, reason }) => {
      console.error(` - ${name}: ${reason}`);
    });
  }

  console.log(`\nDownloaded: ${summary.downloaded || 0}`);
  console.log(`Skipped (already existed): ${summary.skipped || 0}`);
  console.log(`Failed: ${summary.failed || 0}`);
}

main().catch((error) => {
  console.error("Unexpected error:", error);
  process.exitCode = 1;
});
