#!/bin/bash


CHROME_PREFIX=139
# --- Fetch Chrome for Testing JSON ---
JSON=$(curl -s https://googlechromelabs.github.io/chrome-for-testing/known-good-versions-with-downloads.json)
echo $JSON
# --- Find ChromeDriver download URL using only awk ---
CHROMEDRIVER_URL=$(echo "$JSON" | awk -v prefix="$CHROME_PREFIX" '
    BEGIN { url=""; inside=0; driver_section=0 }
    /"version":/ {
        if ($0 ~ prefix) inside=1
        else inside=0
    }
    inside && /"chromedriver"/ { driver_section=1 }
    driver_section && /linux64/ && /"url":/ {
        match($0, /"(https:[^"]+)"/, arr)
        if (arr[1] != "") { url=arr[1]; exit }
    }
    END { print url }
')
if [ -z "$CHROMEDRIVER_URL" ]; then
    echo "❌ No matching ChromeDriver URL found for Chrome $CHROME_VERSION"
    exit 1
fi

echo "⬇️ Downloading ChromeDriver from: $CHROMEDRIVER_URL"

# --- Download & unzip ---
ZIP_FILE="chromedriver.zip"
curl -s -L -o "$ZIP_FILE" "$CHROMEDRIVER_URL"
unzip -o "$ZIP_FILE"
rm "$ZIP_FILE"

# The binary is inside chromedriver-<platform>/chromedriver
DRIVER_PATH=$(find . -type f -name chromedriver -path "*/linux64/*")
chmod +x "$DRIVER_PATH"

echo "✅ ChromeDriver installed at: $DRIVER_PATH"