
css_content = """
/* Gradient Bar Animation */
.gradient-bar {
    height: 8px;
    width: 100%;
    margin-top: 15px;
    background: linear-gradient(270deg, #ffd400, #820000, #ffd400, #820000);
    background-size: 600% 600%;
    animation: gradientAnimation 4s ease infinite;
    position: relative;
    z-index: 10;
    border-radius: 4px;
}

@keyframes gradientAnimation {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
"""

filepath = "css/delivry.css"

try:
    with open(filepath, "a", encoding="utf-8") as f:
        f.write(css_content)
    print("CSS appended successfully.")
except Exception as e:
    print(f"Error appending CSS: {e}")
