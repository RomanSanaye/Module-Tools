import cowsay
import argparse

parser = argparse.ArgumentParser()

parser.add_argument("--animal", default="cow")
parser.add_argument("message", nargs="+")

args = parser.parse_args()
message = " ".join(args.message)

if args.animal == "turtle":
    cowsay.turtle(message)
elif args.animal == "dragon":
    cowsay.dragon(message)
else:
    cowsay.cow(message)
