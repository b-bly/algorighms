import java.io.*;
import java.net.*;
import java.nio.file.*;
import java.util.zip.*;
import javax.json.*; // Requires javax.json API, included in Java EE or add dependency

public class ChromeDriverDownloader {

    public static void main(String[] args) throws Exception {
        // 1. Detect Chrome version
        String chromeVersion = detectChromeVersion();
        if (chromeVersion == null) {
            System.err.println("❌ Chrome not found.");
            System.exit(1);
        }
        System.out.println("✅ Detected Chrome version: " + chromeVersion);

        String chromePrefix = chromeVersion.split("\\.")[0] + "." +
                              chromeVersion.split("\\.")[1] + "." +
                              chromeVersion.split("\\.")[2];

        // 2. Fetch Chrome for Testing JSON
        String jsonUrl = "https://googlechromelabs.github.io/chrome-for-testing/known-good-versions-with-downloads.json";
        JsonObject json = fetchJson(jsonUrl);

        // 3. Find matching ChromeDriver URL
        String platform = detectPlatform();
        String driverUrl = null;

        JsonArray versions = json.getJsonArray("versions");
        for (JsonValue v : versions) {
            JsonObject versionObj = v.asJsonObject();
