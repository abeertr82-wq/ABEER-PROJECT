#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

[[ -f index.html ]] || { echo "Missing index.html" >&2; exit 1; }

# لا تسمح بوجود ملف دخول آخر يختلف فقط في حالة الأحرف.
if find . -maxdepth 1 -type f -iname 'index.html' ! -name 'index.html' | grep -q .; then
  echo "Duplicate case-variant index file found" >&2
  exit 1
fi

for required in '<canvas id="game">' 'id="startBtn"' 'id="btnBag"' 'id="btnHelp"' 'requestAnimationFrame(loop)'; do
  grep -Fq "$required" index.html || { echo "Missing required marker: $required" >&2; exit 1; }
done

js_file="$(mktemp --suffix=.js)"
trap 'rm -f "$js_file"' EXIT
awk '/<script>/{inside=1; next} /<\/script>/{inside=0} inside' index.html > "$js_file"
node --check "$js_file"

echo "Game checks passed."
