#!/usr/bin/env bash

check_docker_is_running() {
  pgrep -x "dockerd" > /dev/null && echo "Docker" || echo "Docker is not running."
}

rebuild_project_container() {
  docker-compose down --remove-orphans
  docker-compose build
  docker-compose up -d
}

check_docker_is_running
rebuild_project_container