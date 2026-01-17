import re

filepath = "index.html"

with open(filepath, "r", encoding="utf-8") as f:
    lines = f.readlines()

def find_removal_indices(lines, target_name):
    # 1. Find the target line index
    target_idx = -1
    for i, line in enumerate(lines):
        if target_name in line and "<h3" in line:
            target_idx = i
            break
            
    if target_idx == -1:
        print(f"Target {target_name} not found.")
        return None

    # 2. Find start index (backwards)
    start_idx = -1
    for i in range(target_idx, -1, -1):
        if '<div class="item"' in lines[i]:
            # Check for comment above
            if i > 0 and "<!-- Avaliação" in lines[i-1]:
                start_idx = i - 1
            else:
                start_idx = i
            break
            
    if start_idx == -1:
        print(f"Start div for {target_name} not found.")
        return None

    # 3. Find end index (forwards from item div)
    # The item div starts at lines[start_idx] (or start_idx + 1 if comment)
    scan_idx = start_idx
    if "<!--" in lines[scan_idx]:
        scan_idx += 1
        
    balance = 0
    end_idx = -1
    
    for i in range(scan_idx, len(lines)):
        line = lines[i]
        # Count occurrences of opening and closing divs
        # Be careful with self-closing or single line issues, checking counts is usually safe for structured html
        opens = line.count("<div")
        closes = line.count("</div>")
        
        balance += opens
        balance -= closes
        
        if balance == 0:
            end_idx = i
            break
            
    if end_idx == -1:
        print(f"End div for {target_name} not found.")
        return None
        
    return (start_idx, end_idx)

# Collect ranges
ranges = []
for name in ["Alice", "Julia"]:
    r = find_removal_indices(lines, name)
    if r:
        print(f"Marked {name} for removal: lines {r[0]+1} to {r[1]+1}")
        ranges.append(r)

# Create a set of lines to skip
msg_lines = set()
for start, end in ranges:
    for i in range(start, end + 1):
        msg_lines.add(i)

# Write output
new_lines = [line for i, line in enumerate(lines) if i not in msg_lines]

with open(filepath, "w", encoding="utf-8") as f:
    f.writelines(new_lines)

print(f"Removed {len(ranges)} blocks.")
