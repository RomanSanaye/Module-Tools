import sys

args = sys.argv[1:]

flags = []
paths = []

# Separate flags and paths
for arg in args:
    if arg.startswith("-"):
        flags.append(arg)
    else:
        paths.append(arg)


total_lines = 0
total_words = 0
total_chars = 0


for file in paths:

    # Read file as bytes
    with open(file, "rb") as f:
        content = f.read()

    # Count
    lines = content.count(b"\n")
    words = len(content.split())
    chars = len(content)

    # Output for this file
    output = []

    if len(flags) == 0:
        output = [lines, words, chars]

    else:
        if "-l" in flags:
            output.append(lines)

        if "-w" in flags:
            output.append(words)

        if "-c" in flags:
            output.append(chars)

    print(*output, file)

    # Add to totals
    total_lines += lines
    total_words += words
    total_chars += chars


# Print total only when multiple files
if len(paths) > 1:

    total_output = []

    if len(flags) == 0:
        total_output = [total_lines, total_words, total_chars]

    else:
        if "-l" in flags:
            total_output.append(total_lines)

        if "-w" in flags:
            total_output.append(total_words)

        if "-c" in flags:
            total_output.append(total_chars)

    print(*total_output, "total")
