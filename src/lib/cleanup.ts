import fs from "fs";
import path from "path";

const DOWNLOAD_DIR = path.join(process.cwd(), "public", "downloads");
const MAX_AGE_MS = 10 * 60 * 1000; // 10 minutes

export function cleanupOldDownloads() {
  if (!fs.existsSync(DOWNLOAD_DIR)) return;
  
  const files = fs.readdirSync(DOWNLOAD_DIR);
  const now = Date.now();
  
  files.forEach((file) => {
    const filePath = path.join(DOWNLOAD_DIR, file);
    const stats = fs.statSync(filePath);
    
    if (now - stats.mtimeMs > MAX_AGE_MS) {
      fs.unlinkSync(filePath);
    }
  });
}
