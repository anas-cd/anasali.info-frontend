#!/bin/bash
#
# this script for installing all packages
# for the root directory and nested 'src-'
# files when cloning or forking.

# this script assumes starting at root level

# ------------------------------------------------

# installing packages for root Quasar directory
npm install

# Find all subdirectories starting with "src-"
for dir in src-*; do
  # Check if it's a directory (avoid hidden files or other entries)
  if [ -d "$dir" ]; then
    # Run npm install in the subdirectory using a subshell
    (cd "$dir" && npm install)
  fi
done

echo "npm install completed in root directory and all src- subdirectories."
