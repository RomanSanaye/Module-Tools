# Access command-line arguments from the terminal
import sys

# Work with the operating system (files and directories)
import os

# Get command-line arguments
args = sys.argv[1:]

flags = []
paths = []


# Separate flags and paths
for arg in args:
    if arg.startswith("-"):
        flags.append(arg)
    else:
        paths.append(arg)


# Use the current directory if no path is provided
if not paths:
    paths = ["."]


# Process each path
for path in paths:

    # If the path is a file, print its name
    if os.path.isfile(path):
        print(path)

    # If the path is a directory, get its contents
    elif os.path.isdir(path):
        contents = os.listdir(path)
        if "-a" not in flags:
            contents=[
                file for file in contents
                if not file.startswith(".")     
            ]
        if "-1" in flags:
            print("\n".join(contents))
        else:
            print(" ".join(contents))
    # Handle invalid paths
    else:
        print(f"No such file or directory: {path}")
