filepath = "index.html"

try:
    with open(filepath, "r", encoding="utf-8") as f:
        lines = f.readlines()
        print(f"Read {len(lines)} lines with utf-8.")
except Exception as e:
    print(f"UTF-8 failed: {e}")
    with open(filepath, "r", encoding="latin-1") as f:
        lines = f.readlines()
        print(f"Read {len(lines)} lines with latin-1.")

for i, line in enumerate(lines):
    if "Alice" in line or "Julia" in line:
        print(f"Line {i+1}: {line.strip()}")
