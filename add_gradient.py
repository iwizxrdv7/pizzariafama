import os
import re

target_dir = "produtos"

# Match the closing tags of the header container
# Looking for the last </div> before </header>
# We want to insert <div class="gradient-bar"></div> BEFORE that closing div?
# No, we decided inside .container. 
# structure: <header> ... <container> ... </container> </header>
# So insert before </div></header>

pattern = re.compile(r'(\s*</div>\s*</header>)', re.IGNORECASE)

new_html = '\n            <div class="gradient-bar"></div>'

count_updated = 0

if not os.path.exists(target_dir):
    print("Directory not found")
    exit(1)

for filename in os.listdir(target_dir):
    if filename.endswith(".html"):
        filepath = os.path.join(target_dir, filename)
        try:
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()

            if 'class="gradient-bar"' in content:
                print(f"Skipped {filename} (already has gradient bar)")
                continue

            # Check if match exists
            if pattern.search(content):
                # Replace
                # We want: 
                # <div class="gradient-bar"></div>
                # </div>
                # </header>
                new_content = pattern.sub(new_html + r'\1', content)
                
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                count_updated += 1
                print(f"Updated {filename}")
            else:
                print(f"Skipped {filename} (pattern not found)")

        except Exception as e:
            print(f"Error processing {filename}: {e}")

print(f"Total updated: {count_updated}")
