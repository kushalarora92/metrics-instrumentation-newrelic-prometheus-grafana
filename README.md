# Prerequisites
  * Docker

# Setup / Run Instruction

cd server & execute below commands

1. Mount Prometheus server

  `` docker run -d -p 9090:9090 -v "$PWD/config/prometheus.yml":/etc/prometheus/prometheus.yml prom/prometheus --config.file=/etc/prometheus/prometheus.yml --storage.tsdb.path=/prometheus ``

2. Mount Node-exporter (works without this service, no need to set this up)

`` docker run -p 9100:9100 -v "/proc:/host/proc" -v "/sys:/host/sys" -v "/:/rootfs" --net="host" prom/node-exporter --path.procfs /host/proc --path.sysfs /host/proc --collector.filesystem.ignored-mount-points "^/(sys|proc|dev|host|etc)($|/)" ``

3. Grafana 

`` docker run -d -p 3000:3000 -e "GF_SECURITY_ADMIN_PASSWORD=admin_password" -v ~/grafana_db:/var/lib/grafana grafana/grafana ``

admin / admin_password

# Important Docker commands
- `` docker ps ``
- `` docker stop $(docker ps -a -q) ``
- `` docker rm $(docker ps -a -q) ``

# Important Links
- https://gist.github.com/ejhsu/ed743393e76ebcd0761f7d614eda2cfc
- https://www.digitalocean.com/community/tutorials/how-to-add-a-prometheus-dashboard-to-grafana (works with workarounds)
- https://www.digitalocean.com/community/tutorials/how-to-install-prometheus-using-docker-on-ubuntu-14-04


