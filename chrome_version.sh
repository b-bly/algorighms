#!/bin/bash
version=$(/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --version | sed 's/[a-zA-Z ]*//' | sed 's/\..*//')
driver_version=$(chromedriver -v | sed 's/[a-zA-Z ]*//' | sed 's/(.*)//' | sed 's/\..*//') 
if [ $((version)) -eq $((driver_version)) ]; then
    echo 'looks like the driver major versions match'
elif [ $((version)) -gt $((chrome_version)) ]
    echo 'need to upgrade chromedriver'
    brew upgrade chromedriver
fi
