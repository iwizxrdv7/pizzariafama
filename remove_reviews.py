import re

filepath = "index.html"

with open(filepath, "r", encoding="utf-8") as f:
    lines = f.readlines()

def find_block_range(lines, target_name):
    target_pattern = f"<h3>{target_name}</h3>"
    
    # excessive but safe indices
    start_idx = -1
    end_idx = -1
    
    # 1. Find the target line
    target_line_idx = -1
    for i, line in enumerate(lines):
        if target_name in line and "<h3>" in line:
            target_line_idx = i
            break
            
    if target_line_idx == -1:
        print(f"Could not find review for {target_name}")
        return None

    # 2. Walk backwards to find the start of the item div
    # Looking for <div class="item" or <!-- Avaliação
    # In this file, it seems to be <!-- Avaliação N --> followed by <div class="item"
    
    curr = target_line_idx
    while curr >= 0:
        if '<div class="item"' in lines[curr]:
            # Check if previous line is a comment relating to this item
            if curr > 0 and "<!-- Avaliação" in lines[curr-1]:
                start_idx = curr - 1
            else:
                start_idx = curr
            break
        curr -= 1
        
    # 3. Walk forwards to find the matching closing div
    # We started at 'item' div (curr). 
    # We need to count braces/divs to find the correct closing one.
    # Simple heuristic: indentation or just counting <div> and </div>
    
    # Let's count divs from the start_idx (ignoring the comment line if included)
    scan_start = start_idx
    if "<!--" in lines[scan_start]:
        scan_start += 1
        
    div_balance = 0
    found_start = False
    
    for i in range(scan_start, len(lines)):
        line = lines[i]
        div_balance += line.count("<div")
        div_balance -= line.count("</div>")
        
        if div_balance == 0:
            end_idx = i
            break
            
    if start_idx != -1 and end_idx != -1:
        return (start_idx, end_idx)
    return None

# Order matters: Delete from bottom to top to preserve indices? 
# Or just collect ranges and delete later.
# Julia is around 770, Alice around 613. 
# So deleting Julia first is safer if we did it sequentially by index, 
# but if we just collect ranges on the original list, we can just exclude those lines.

ranges_to_remove = []

r_julia = find_block_range(lines, "Julia")
if r_julia:
    ranges_to_remove.append(r_julia)
    print(f"Found Julia block: lines {r_julia[0]+1} to {r_julia[1]+1}")

r_alice = find_block_range(lines, "Alice")
if r_alice:
    ranges_to_remove.append(r_alice)
    print(f"Found Alice block: lines {r_alice[0]+1} to {r_alice[1]+1}")

# Sort ranges by start index descending just in case, but for exclusion set it doesn't matter
lines_to_keep = []
indices_to_skip = set()
for start, end in ranges_to_remove:
    for i in range(start, end + 1):
        indices_to_skip.add(i)

new_lines = []
for i, line in enumerate(lines):
    if i not in indices_to_skip:
        new_lines.append(line)

with open(filepath, "w", encoding="utf-8") as f:
    f.writelines(new_lines)

print(f"Removed {len(ranges_to_remove)} reviews.")
