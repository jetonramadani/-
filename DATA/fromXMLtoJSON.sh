#!/bin/bash

echo "Filtering data from the main .osm file and converting them to .json data"

printf "[\n" > result.json
grep -vE -- '<node.*/>' macedonia-latest.osm |
sed -e '/<node.*>/,/.*<\/node>/!d' | 
grep -oE -- '<node.*|<tag k="(shop|name|phone|email|website|addr:street|addr:city|opening_hours)".*|</node>' |
grep -zoP '<node.*>\n<tag k="name".*/>\n<tag k="shop".*/>\n(<tag.*\n)*</node>\n' |
sed --expression='s/.<node/<node/g' |
head -n -1 | 
sed --expression 's/<//g;s=/>==g;s/>//g;s/tag.*k=//g;s/" v=/=/g' |
awk '{
if ($1 == "node")
	printf ",\n\t{\n\t\t\"%s,\n\t\t\"%s", $(NF-1), $NF
else if ($1 == "/node")
    printf "\n\t}"
else
	printf ",\n\t\t%s", $0
}' |
sed --expression='s/="/" : "/g;s/\&amp;/\&/g;s/\&quot;//g;s/\&apos;/’/g;s/"shop" : /"category" : /g' |
tail -n+2 >> result.json 

printf "\n]" >> result.json

echo "Converting finished, press any key to continue"

read -n 1 -s
