#!/bin/bash
gnome-terminal -- bash -c "./check.sh; sleep 1; exec bash"
gnome-terminal -- bash -c "npm run back; exec bash"
gnome-terminal -- bash -c "yarn start; exec bash"

