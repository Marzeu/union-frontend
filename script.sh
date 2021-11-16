#!/bin/bash
gnome-terminal --tab -- bash -c "./check.sh; sleep 1; exec bash"
gnome-terminal --tab -- bash -c "npm run back; exec bash"
gnome-terminal --tab -- bash -c "npm run front; exec bash"

