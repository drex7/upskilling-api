#!/bin/bash

# Arrays of environment and data files
ENV_FILES=("env1.json" "env2.json")
DATA_FILES=("data1.csv" "data2.csv")

# Loop through each environment file
for env in "${ENV_FILES[@]}"; do
  # Loop through each data file
  for data in "${DATA_FILES[@]}"; do
    # Run Newman for the current environment and data file
    newman run your_collection.json \
      -e "$env" \
      -d "$data" \
      --reporters htmlextra \
      --reporter-htmlextra-export "./report-${env%.*}-${data%.*}.html"
  done
done
