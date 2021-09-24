#!/bin/bash
counter=0
for file in *.webp; do 
    [[ -f $file ]] &&  mv -i "$file" $((counter+1)).webp && ((counter++))
done