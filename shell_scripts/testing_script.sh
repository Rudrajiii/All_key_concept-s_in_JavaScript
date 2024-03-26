#!/bin/bash

# Prompt the user to enter a number
echo "Enter a number: "
read num

# Check if the number is even or odd
if [ $((num % 2)) -eq 0 ]; then
    echo "$num is even."
else
    echo "$num is odd."
fi
