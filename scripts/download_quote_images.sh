#!/bin/bash

# Path to your CSV file
# TODO: Update PATH
csv_file="/data/downloads/quotes.csv"

# Function to download a URL using wget
download_url() {
    local url=$1
    local filename=$(python3 -c "import sys; print(sys.argv[1].strip().split('/')[-1].split('?dl=0')[0])"  "$url")  # Extract filename from URL
    wget -O "$filename" "$url" && echo "Successfully downloaded: $filename" || echo "Failed to download: $url"
}

# Read CSV file and download each URL
while IFS=, read -r url; do
    if [[ -n "$url" ]]; then
        download_url "$url"
    fi
done < "$csv_file"
